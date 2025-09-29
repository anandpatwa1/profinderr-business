import { getPlanList } from "../utils/PlanAPI";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { getBusiness } from "../utils/AuthAPI";

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

      if (response.success) {
        setBusiness(response.data);
        // Set the default selected plan only if business is not active
        if (!response.data.isActive && response.data.plans?.length > 0) {
          setSelectedPlan(response.data.plans[0]._id);
        }
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

  const getFilteredPlans = () => {
    if (!Business.isActive) {
      // Show all plans if business is not active
      return plans;
    }

    if (!Business.currentPlan || !plans.length) {
      return [];
    }

    // Sort plans by price
    const sortedPlans = [...plans].sort((a, b) => a.price - b.price);
    const currentPlanPrice = Business.currentPlan.price;

    // Find the current plan index
    const currentPlanIndex = sortedPlans.findIndex(plan => plan.price === currentPlanPrice);

    if (currentPlanIndex === -1) {
      return sortedPlans; // show all if current plan not found
    }

    // Filter plans:
    // 1. Show all plans except the current one
    // 2. If current plan is not the lowest, show all higher plans and one lower plan (if exists)
    const filteredPlans = sortedPlans.filter((plan, index) => {
      // Always exclude the current plan
      if (plan.price === currentPlanPrice) return false;

      // If current plan is the lowest, show all higher plans
      if (currentPlanIndex === 0) return true;

      // For other cases:
      // Show all higher plans
      if (plan.price > currentPlanPrice) return true;

      // Show only one plan lower than current (the immediate lower one)
      if (index === currentPlanIndex - 1) return true;

      return false;
    });

    return filteredPlans;
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

  const filteredPlans = getFilteredPlans();

  return (
    <div className="d-flex justify-content-center align-items-center bg-white" style={{ minHeight: "100vh" }}>
      <div className="w-100 bg-white rounded-4" style={{ maxWidth: "400px", minHeight: "100vh" }}>
        <div className="d-flex flex-column h-100 p-4 pb-2">
          {/* Heading */}
          <div className="mb-4">
            <h4 className="fw-bold mb-1">Hello <span style={{ color: "#ff6600" }}>{Business?.businessName ? Business.businessName.charAt(0).toUpperCase() + Business.businessName.slice(1) : 'Company Name'}</span> 👋</h4>
            <p className="mb-0" style={{ color: "rgba(74, 74, 74, 1)", fontSize: "22px", fontWeight: "bold" }}>
              Please Choose Your Subscription Plan
            </p>
          </div>

          {/* Plan Cards */}
          <div className="flex-grow-1 mb-4">
            {filteredPlans.length === 0 ? (
              <div className="text-center py-4">
                {Business.isActive
                  ? "You're on the highest plan. For more options, contact support at profinndrr."
                  : "No subscription plans available."}
              </div>
            ) : (
              filteredPlans.map((plan) => (
                <div
                  key={plan._id}
                  onClick={() => plan.isActive && setSelectedPlan(plan._id)}
                  className={`d-flex justify-content-between align-items-center px-3 py-3 mb-3 rounded-4 subscription-card ${
                    selectedPlan === plan._id ? "selected" : ""
                  } ${!plan.isActive ? "opacity-50" : ""}`}
                  style={{ 
                    cursor: plan.isActive ? "pointer" : "default"
                  }}
                >
                  {/* Left side: circle checkbox + text */}
                  <div className="d-flex align-items-center">
                    {/* Circle Checkbox */}
                    <div className={`custom-check ${selectedPlan === plan._id ? "checked" : ""} ${
                      !plan.isActive ? "disabled" : ""
                    }`}></div>
          
                    {/* Text */}
                    <div className="ms-3">
                      <div className="fw-semibold fs-6 mb-0">
                        {plan.name}
                        {!plan.isActive && <span className="badge bg-secondary ms-2">Coming Soon</span>}
                      </div>
                      <div className="text-muted small">{formatPrice(plan.price)}</div>
                        {plan.isActive && <span className="badge bg-primary ms-2">Introductory price</span>}
                    </div>
                  </div>
          
                  {/* View Details Button or Coming Soon Text */}
                  {plan.isActive ? (
                    <Link to={`/payment?plan=${plan._id}&business=${BusinessId}`}>
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
                    </Link>
                  ) : (
                    <span className="text-muted small">Launching Soon</span>
                  )}
                </div>
              ))
            )}
          </div>
          {/* Continue/Update Button */}
          {selectedPlan ? (
            <Link to={`/payment?plan=${selectedPlan}&business=${BusinessId}`}>
              <button
                className="btn btn-warning text-white fw-bold rounded-pill py-2 mb-3"
                style={{ backgroundColor: "#ff6600" }}
              >
                {Business.isActive ? 'Update' : 'Continue'}
              </button>
            </Link>
          ) : (
            <button
              className="btn btn-warning text-white fw-bold rounded-pill py-2 mb-3"
              style={{ backgroundColor: "#ccc", cursor: "not-allowed" }}
              disabled
            >
              {Business.isActive ? 'Update' : 'Continue'}
            </button>
          )}

          {/* Footer */}
          {/* <p className="text-center small text-muted mb-0">
            By Signing In, You Agree to our <br />
            <a href="#" className="text-decoration-underline">Terms & Conditions</a>,{" "}
            <a href="#" className="text-decoration-underline">Privacy Policy</a> &{" "}
            <a href="#" className="text-decoration-underline">Content Policy</a>
          </p> */}
        </div>
      </div>
    </div>
  );
};

export default SubscriptionPlan;