import { getPlanList } from "../utils/PlanAPI";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { getBusiness } from "../utils/AuthAPI";
// import { getPlanList } from "../api"; // Adjust import path as needed

const SubscriptionPlan = () => {
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [plans, setPlans] = useState([]);
  const [Business, setBusiness] = useState({});
  const [loading, setLoading] = useState(true);

  const BusinessId = new URLSearchParams(location.search).get('business');

  if (!BusinessId) {
    return (
      <div className="d-flex flex-column justify-content-center align-items-center" style={{ minHeight: "100vh" }}>
        <p>No Business details available</p>
        <p>Go to mobile screen and Retry</p>
      </div>

    );
  }

  useEffect(() => {
    fetchPlans();
    fetchBusiness();
  }, []);

  const fetchPlans = async () => {
    try {
      setLoading(true);
      const response = await getPlanList();

      if (response.success) {
        setPlans(response.plans);
        // Set the first plan as selected by default
        if (response.plans.length > 0) {
          setSelectedPlan(response.plans[0]._id);
        }
      } else {
        throw new Error("Failed to fetch plans");
      }
    } catch (error) {
      console.error('Error fetching plans:', error);
      toast.error(error.message || 'Failed to fetch subscription plans');
    } finally {
      setLoading(false);
    }
  };
  const fetchBusiness = async () => {
    try {
      setLoading(true);
      const response = await getBusiness(BusinessId);
      console.log(response.data);

      if (response.success) {
        setBusiness(response.data);

      } else {
        throw new Error("Failed to fetch Business");
      }
    } catch (error) {
      console.error('Error fetching plans:', error);
      toast.error(error.message || 'Failed to fetch Business');
    } finally {
      setLoading(false);
    }
  };

  const formatPrice = (price) => {
    return `£${price.toFixed(2)} per month`;
  };

  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center bg-white" style={{ minHeight: "100vh" }}>
        <div className="spinner-border text-warning" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="d-flex justify-content-center align-items-center bg-white" style={{ minHeight: "100vh" }}>
      <div className="w-100 bg-white rounded-4" style={{ maxWidth: "400px", minHeight: "100vh" }}>
        <div className="d-flex flex-column h-100 p-4 pb-2">
          {/* Heading */}
          <div className="mb-4">
            <h4 className="fw-bold mb-1">Hello <span style={{ color: "#ff6600" }}>{Business?.businessName ||"Company Name"}</span> 👋</h4>
            <p className="mb-0" style={{ color: "rgba(74, 74, 74, 1)", fontSize: "22px", fontWeight: "bold" }}>
              Please Choose Your Subscription Plan
            </p>
          </div>

          {/* Plan Cards */}
          <div className="flex-grow-1 mb-4">
          {(() => {
  const filteredPlans = plans.filter(plan => 
    !Business.isActive ||  // Show all if business is inactive
    (Business.currentPlan && 
     typeof Business.currentPlan.price === 'number' && 
     plan.price > Business.currentPlan.price)
  );

  if (filteredPlans.length === 0) {
    return (
      <div className="text-center py-4">
        You're on the highest plan. For more options, contact support at profinndrr.
      </div>
    );
  }

  return filteredPlans.map((plan) => (
    <div
      key={plan._id}
      onClick={() => setSelectedPlan(plan._id)}
      className={`d-flex justify-content-between align-items-center px-3 py-3 mb-3 rounded-4 subscription-card ${selectedPlan === plan._id ? "selected" : ""}`}
      style={{ cursor: "pointer" }}
    >
      {/* Left side: circle checkbox + text */}
      <div className="d-flex align-items-center">
        {/* Circle Checkbox */}
        <div className={`custom-check ${selectedPlan === plan._id ? "checked" : ""}`}></div>

        {/* Text */}
        <div className="ms-3">
          <div className="fw-semibold fs-6 mb-0">{plan.name}</div>
          <div className="text-muted small">{formatPrice(plan.price)}</div>
        </div>
      </div>

      {/* View Details Button */}
      <button
        className="btn btn-sm text-white fw-medium rounded-pill px-3 py-1"
        style={{
          backgroundColor: "#ff6600",
          fontSize: "14px",
          whiteSpace: "nowrap",
        }}
      >
        View Details
      </button>
    </div>
  ));
})()}
          </div>
         {/* ad {Business.currentPlan.price}ds */}

          {/* Continue Button */}
          {Business.isActive ?
            <Link to={`/payment?plan=${selectedPlan}&business=${BusinessId}`}>
            <button
              className="btn btn-warning text-white fw-bold rounded-pill py-2 mb-3"
              style={{ backgroundColor: "#ff6600" }}
              disabled={!selectedPlan}
            >
              Update
            </button>
          </Link>
          :
          <Link to={`/payment?plan=${selectedPlan}&business=${BusinessId}`}>
          <button
            className="btn btn-warning text-white fw-bold rounded-pill py-2 mb-3"
            style={{ backgroundColor: "#ff6600" }}
            disabled={!selectedPlan}
          >
            Continue
          </button>
        </Link>
          }
         
        

          {/* Footer */}
          <p className="text-center small text-muted mb-0">
            By Signing In, You Agree to our <br />
            <a href="#" className="text-decoration-underline">Terms & Conditions</a>,{" "}
            <a href="#" className="text-decoration-underline">Privacy Policy</a> &{" "}
            <a href="#" className="text-decoration-underline">Content Policy</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SubscriptionPlan;
