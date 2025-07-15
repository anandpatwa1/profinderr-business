import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { loadStripe } from '@stripe/stripe-js';
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { APIURL } from '../utils/URL';
import axios from 'axios';

// Initialize Stripe with your publishable key
const stripePromise = loadStripe('pk_test_51RLRETR1rNnrMabOOo7IbCVSsXfU3PRzZK6H1d4MDD2aCsOqTK06gC4tPt9HlgDcjPIdBDDpsu9J8ywUxNOPyESM006pfVnHhE');

const CheckoutForm = ({ planId, businessId }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError(null);

    if (!stripe || !elements) {
      return;
    }

    try {
      // 1. Create payment method
      const { error: stripeError, paymentMethod } = await stripe.createPaymentMethod({
        type: 'card',
        card: elements.getElement(CardElement),
      });

      if (stripeError) {
        throw stripeError;
      }

      // 2. Call your backend to process payment
      const response = await axios.post(`${APIURL()}/plan/subscribe`, {
        planId,
        businessId,
        paymentMethodId: paymentMethod.id
      }, {
        headers: {
          'Content-Type': 'application/json',
          // 'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
      });
      

      const data = await response;

      if (data.error) {
        throw new Error(data.error);
      }

      // 3. Confirm payment
      if (data.clientSecret) {
        const { error: confirmError } = await stripe.confirmPayment({
          clientSecret: data.clientSecret,
          paymentMethod: {
            card: elements.getElement(CardElement),
          },
        });

        if (confirmError) {
          throw confirmError;
        }
      }

      setPaymentSuccess(true);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  if (paymentSuccess) {
    return (
      <div className="success-message">
        <h2>Payment Successful!</h2>
        <p>Your plan has been activated successfully.</p>
        <a href="/dashboard" className="button">Go to Dashboard</a>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="payment-form">
      <CardElement options={{
        style: {
          base: {
            fontSize: '16px',
            color: '#424770',
            '::placeholder': {
              color: '#aab7c4',
            },
          },
          invalid: {
            color: '#9e2146',
          },
        },
      }} />
      
      {error && <div className="error-message">{error}</div>}
      
      <button 
        type="submit" 
        disabled={!stripe || loading}
        className="payment-button"
      >
        {loading ? 'Processing...' : `Pay Now`}
      </button>
    </form>
  );
};

const PlanPurchase = () => {
  const location = useLocation();
  const [planDetails, setPlanDetails] = useState(null);
  
  // Get parameters from URL
  const planId = new URLSearchParams(location.search).get('plan');
  const businessId = new URLSearchParams(location.search).get('business');

  useEffect(() => {
    // Fetch plan details if needed
    const fetchPlanDetails = async () => {
      try {
        const response = await fetch(`/api/plans/${planId}`);
        const data = await response.json();
        setPlanDetails(data);
      } catch (err) {
        console.error('Failed to fetch plan details', err);
      }
    };

    if (planId) {
      fetchPlanDetails();
    }
  }, [planId]);

  if (!planId || !businessId) {
    return <div>Missing plan or business information</div>;
  }

  return (
    <div className="plan-purchase-container">
      <h1>Complete Your Purchase</h1>
      
      {planDetails && (
        <div className="plan-details">
          <h2>{planDetails.name}</h2>
          <p>Price: ₹{(planDetails.price / 100).toFixed(2)}</p>
          <p>{planDetails.description}</p>
        </div>
      )}

      <div className="payment-section">
        <Elements stripe={stripePromise}>
          <CheckoutForm planId={planId} businessId={businessId} />
        </Elements>
      </div>
    </div>
  );
};

export default PlanPurchase;
