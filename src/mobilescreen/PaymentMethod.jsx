import React, { useState, useEffect } from "react";
import { FaArrowLeft, FaPlus, FaTrash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";
import { toast } from "react-toastify";

const PaymentMethod = () => {
  const [paymentMethods, setPaymentMethods] = useState([]);
  const [selectedMethod, setSelectedMethod] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const orangeColor = "rgba(255, 98, 0, 1)";

  // Fetch user's saved payment methods
  useEffect(() => {
    const fetchPaymentMethods = async () => {
      try {
        // Replace with your actual API call
        const response = await fetch("/api/user/payment-methods", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        const data = await response.json();
        setPaymentMethods(data);
        setLoading(false);
      } catch (error) {
        toast.error("Failed to load payment methods");
        setLoading(false);
      }
    };

    fetchPaymentMethods();
  }, []);

  const handleSelectMethod = (methodId) => {
    setSelectedMethod(methodId);
  };

  const handleDeleteMethod = async (methodId) => {
    try {
      // Replace with your actual API call
      await fetch(`/api/user/payment-methods/${methodId}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      setPaymentMethods(paymentMethods.filter(method => method.id !== methodId));
      toast.success("Payment method removed");
    } catch (error) {
      toast.error("Failed to remove payment method");
    }
  };

  const handleAddPaymentMethod = async () => {
    const stripe = await loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY);
    
    // Create payment method setup intent
    const response = await fetch("/api/user/setup-intent", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    const { clientSecret } = await response.json();

    // Open Stripe payment element
    const { error } = await stripe.confirmSetup({
      clientSecret,
      elements,
      confirmParams: {
        return_url: `${window.location.origin}/payment-methods`,
      },
    });

    if (error) {
      toast.error(error.message);
    }
  };

  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center" style={{ minHeight: "100vh" }}>
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ minHeight: "100vh", backgroundColor: "#f8f9fa" }}
    >
      <div
        className="bg-white w-100"
        style={{
          maxWidth: "400px",
          borderRadius: "25px",
          height: "95vh",
          padding: "20px",
          boxSizing: "border-box",
          position: "relative",
        }}
      >
        <div className="p-3">
          <div className="d-flex justify-content-between align-items-center mb-2">
            <button
              className="btn p-1"
              style={{
                borderRadius: "50%",
                border: `1px solid ${orangeColor}`,
                width: "40px",
                height: "40px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              onClick={() => navigate(-1)}
            >
              <FaArrowLeft style={{ color: orangeColor }} />
            </button>

            <h6 className="mb-0 fw-bold">Payment Methods</h6>

            <button
              className="btn p-1"
              style={{
                borderRadius: "50%",
                border: `1px solid ${orangeColor}`,
                width: "40px",
                height: "40px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              onClick={handleAddPaymentMethod}
            >
              <FaPlus style={{ color: orangeColor }} />
            </button>
          </div>
        </div>

        {/* Selected Plan Box - Removed as it's not needed for payment methods screen */}

        {/* Payment Methods List */}
        <div className="px-1 mb-4" style={{ maxHeight: "60vh", overflowY: "auto" }}>
          {paymentMethods.length === 0 ? (
            <div className="text-center py-4">
              <p>No saved payment methods</p>
            </div>
          ) : (
            paymentMethods.map((method) => (
              <div
                key={method.id}
                className="mb-3 p-3 d-flex align-items-center justify-content-between"
                style={{
                  border: `1px solid ${selectedMethod === method.id ? orangeColor : "#ccc"}`,
                  borderRadius: "12px",
                  cursor: "pointer",
                }}
                onClick={() => handleSelectMethod(method.id)}
              >
                <div>
                  <div className="fw-semibold">
                    {method.card.brand} •••• {method.card.last4}
                  </div>
                  <div className="text-muted small">
                    Expires {method.card.exp_month}/{method.card.exp_year}
                  </div>
                </div>
                <div className="d-flex align-items-center">
                  <input
                    className="form-check-input me-3"
                    type="radio"
                    checked={selectedMethod === method.id}
                    onChange={() => handleSelectMethod(method.id)}
                    style={{ accentColor: orangeColor }}
                  />
                  <button
                    className="btn p-0"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleDeleteMethod(method.id);
                    }}
                  >
                    <FaTrash style={{ color: "#dc3545" }} />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Continue Button */}
        {selectedMethod && (
          <div style={{ position: "absolute", bottom: "20px", left: "20px", right: "20px" }}>
            <button
              className="btn w-100 fw-bold text-white rounded-pill py-2"
              style={{ backgroundColor: orangeColor }}
              onClick={() => {
                // Save selected payment method and proceed
                navigate("/checkout");
              }}
            >
              Continue with Selected Card
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default PaymentMethod;