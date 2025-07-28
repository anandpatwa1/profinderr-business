import React, { useState, useEffect } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { Modal } from "react-bootstrap";
import "bootstrap-icons/font/bootstrap-icons.css";
import { useLocation, useNavigate } from "react-router-dom";
import { loadStripe } from '@stripe/stripe-js';
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import axios from 'axios';
import { APIURL } from '../utils/URL';

// const stripePromise = loadStripe('pk_test_51RLRETR1rNnrMabOOo7IbCVSsXfU3PRzZK6H1d4MDD2aCsOqTK06gC4tPt9HlgDcjPIdBDDpsu9J8ywUxNOPyESM006pfVnHhE');
const stripePromise = loadStripe('pk_live_51RLREIJNbC4COxFLSDaisG5v6oxoGUayCLWsHXjbke2lQOvp2F8obW1YqlI0eG5JA9Vzgh31uoHoeAgCEjqhoEf700lTfrTPaE');

const PaymentForm = ({ 
    planDetails, 
    businessId, 
    onSuccess, 
    onError,
    loading 
  }) => {
    const stripe = useStripe();
    const elements = useElements();
    const [cardError, setCardError] = useState(null);
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      setCardError(null);
    
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
    
        // 2. Call backend to initiate subscription
        const response = await axios.post(`${APIURL()}/plan/update-subscription`, {
          planId: planDetails._id,
          businessId,
          paymentMethodId: paymentMethod.id
        }, {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`
          }
        });
    
        const data = response.data;
    
        // Handle specific error cases from backend
        if (!data.success) {
          if (data.message === "Business already has an active subscription") {
            throw new Error("Your business already has an active subscription. You can manage it in your account settings.");
          } else if (data.message === "Business not found") {
            throw new Error("Business account not found. Please try again or contact support.");
          } else if (data.message === "Invalid or inactive plan") {
            throw new Error("This plan is no longer available. Please choose another plan.");
          } else {
            throw new Error(data.message || "Payment failed. Please try again.");
          }
        }
    
        // 3. Confirm payment if clientSecret is returned
        if (data.clientSecret) {
          const { error: confirmError } = await stripe.confirmCardPayment(data.clientSecret, {
            payment_method: {
              card: elements.getElement(CardElement),
            },
          });
    
          if (confirmError) {
            throw confirmError;
          }
        }
    
        // 4. Success callback
        onSuccess(data);
    
      } catch (err) {
        let errorMessage = "Something went wrong. Please try again.";
        
        if (err.response && err.response.data) {
          // Handle axios response errors
          const responseData = err.response.data;
          
          if (responseData.message === "Business already has an active subscription") {
            errorMessage = "Your business already has an active subscription.";
          } else if (responseData.message === "Business not found") {
            errorMessage = "Business account not found.";
          } else if (responseData.message === "Invalid or inactive plan") {
            errorMessage = "This plan is no longer available.";
          } else {
            errorMessage = responseData.message || errorMessage;
          }
        } else if (err.message) {
          // Handle other error messages
          errorMessage = err.message;
        }
        
        console.error("Payment error:", err);
        setCardError(errorMessage);
        onError(errorMessage);
      }
    };
    
    return (
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label small text-muted">Card Details</label>
          <div className="p-2 bg-light border-0 rounded-3" style={{ height: "48px" }}>
            <CardElement 
              options={{
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
              }}
            />
          </div>
          {cardError && (
            <div className="alert alert-danger small mt-2">
              {cardError}
            </div>
          )}
        </div>
  
        <div className="mb-3">
          <label className="form-label small text-muted">Card Holder Name</label>
          <input
            type="text"
            className="form-control bg-light border-0 rounded-3"
            placeholder="Enter Holder Name"
            style={{ height: "48px" }}
            required
          />
        </div>
  
        <button
          type="submit"
          className="btn w-100 py-2 text-white fw-semibold rounded-pill"
          style={{
            backgroundColor: "#FF6B00",
            fontSize: "16px",
            height: "50px",
          }}
          disabled={loading || !stripe}
        >
          {loading ? (
            <>
              <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
              Processing...
            </>
          ) : (
            `Pay ${planDetails.price.toLocaleString('en-GB', { 
              style: 'currency', 
              currency: 'GBP',
              minimumFractionDigits: 2,
              maximumFractionDigits: 2
            })}`
          )}
        </button>
      </form>
    );
  };
  

const UpdatePlanPay = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [planDetails, setPlanDetails] = useState(null);
  
  // Get parameters from URL
  const planId = new URLSearchParams(location.search).get('plan');
  const businessId = new URLSearchParams(location.search).get('business');

  useEffect(() => {
    const fetchPlanDetails = async () => {
      try {
        const response = await axios.get(`${APIURL()}/plan/get/${planId}`, {
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`
          }
        });
        setPlanDetails(response.data.plan);
        console.log(response.data.plan);
        
      } catch (err) {
        console.error('Failed to fetch plan details', err);
        setError('Failed to load plan details');
      }
    };

    if (planId) {
      fetchPlanDetails();
    }
  }, [planId]);

  const handlePaymentSuccess = (data) => {
    setShowModal(true);
    setLoading(false);
  };

  const handlePaymentError = (err) => {
    setError(err.message);
    setLoading(false);
  };

  const handleBackToApp = () => {
    setShowModal(false);
    navigate('/dashboard'); // Or wherever you want to redirect after success
  };

  if (!planId || !businessId) {
    return (
      <div className="d-flex justify-content-center align-items-center bg-light" style={{ minHeight: "812px" }}>
        <div className="alert alert-danger">Missing plan or business information</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="d-flex justify-content-center align-items-center bg-light" style={{ minHeight: "812px" }}>
        <div className="alert alert-danger">{error}</div>
      </div>
    );
  }

  if (!planDetails) {
    return (
      <div className="d-flex justify-content-center align-items-center bg-light" style={{ minHeight: "812px" }}>
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  return (
    <div
      className="d-flex justify-content-center align-items-center bg-light"
      style={{ minHeight: "812px", padding: "16px" }}
    >
      <div className="bg-white p-4 w-100" style={{ maxWidth: "375px" }}>
        {/* Header */}
        <div className="d-flex align-items-center mb-4" style={{ position: "relative" }}>
          <button
            onClick={() => navigate(-1)}
            style={{
              position: "absolute",
              left: 0,
              top: "50%",
              transform: "translateY(-50%)",
              marginLeft: "10px",
              backgroundColor: "#F2F2F2",
              width: "36px",
              height: "36px",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              border: "none",
            }}
          >
            <FaArrowLeft size={16} />
          </button>
          <h5 className="mb-0 w-100 text-center fw-semibold">Subscribe to {planDetails.name}</h5>
        </div>

        {/* Plan Details */}
        <div className="mb-4 p-3 bg-light rounded-3">
          <h6 className="fw-bold">{planDetails.name}</h6>
          <p className="mb-1">Price: £{(planDetails.price).toFixed(2)}</p>
          <p className="small text-muted">{planDetails.description}</p>
        </div>

        {/* Payment Form */}
        <Elements stripe={stripePromise}>
          <PaymentForm 
            planDetails={planDetails}
            businessId={businessId}
            onSuccess={handlePaymentSuccess}
            onError={handlePaymentError}
            loading={loading}
          />
        </Elements>
      </div>

      {/* Success Modal */}
      <Modal
        show={showModal}
        onHide={() => setShowModal(false)}
        centered
        contentClassName="border-0"
      >
        <div
          className="w-100 p-4"
          style={{
            maxWidth: "375px",
            borderRadius: "16px",
            backgroundColor: "#fff",
            margin: "auto",
          }}
        >
          <div className="text-center mb-3">
            <div
              style={{
                backgroundColor: "#1EC26B",
                width: "64px",
                height: "64px",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "0 auto",
              }}
            >
              <i className="bi bi-check-lg text-white" style={{ fontSize: "32px" }}></i>
            </div>
          </div>

          <div className="text-center mb-3">
            <p className="mb-1 fw-medium">
              Plan : <span className="fw-semibold">{planDetails.name}</span>
            </p>
            <p className="mb-1 fw-medium">Starting Date : {new Date().toLocaleDateString()}</p>
            <p className="mb-3 fw-medium">
              Next Renewal Date : {new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toLocaleDateString()}
            </p>
            <h6 className="fw-bold mb-0">Your Subscription Done</h6>
            <h6 className="fw-bold">Successfully!</h6>
          </div>

          <button
            onClick={handleBackToApp}
            className="btn text-white fw-semibold w-100"
            style={{
              backgroundColor: "#FF6B00",
              height: "50px",
              borderRadius: "10px",
            }}
          >
            Back To App
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default UpdatePlanPay;