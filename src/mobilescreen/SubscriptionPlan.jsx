import React, { useState } from "react";
import { Link } from "react-router-dom";


const plans = [
  { name: "Basic", price: "£2.99 per month" },
  { name: "Standard", price: "£15.99 per month" },
  { name: "Premium", price: "£35 per month" },
  { name: "Enterprise", price: "£89 per month" },
];

const SubscriptionPlan = () => {
  const [selectedPlan, setSelectedPlan] = useState("Standard");

  return (
    <div className="d-flex justify-content-center align-items-center bg-white" style={{ minHeight: "100vh" }}>
      <div className="w-100 bg-white  rounded-4" style={{ maxWidth: "400px", minHeight: "100vh" }}>
        <div className="d-flex flex-column h-100 p-4 pb-2">
          {/* Heading */}
          <div className="mb-4">
            <h4 className="fw-bold mb-1">Hello <span style={{color:"#ff6600"}}>Company Name</span> 👋</h4>
            <p className="mb-0" style={{color:"rgba(74, 74, 74, 1)", fontSize:"22px", fontWeight:"bold"}}>Please Choose Your Subscription Plan</p>
          </div>

          {/* Plan Cards */}
          <div className="flex-grow-1 mb-4">
            {plans.map((plan) => (
              <div
                key={plan.name}
                onClick={() => setSelectedPlan(plan.name)}
                className={`d-flex justify-content-between align-items-center px-3 py-3 mb-3 rounded-4 subscription-card ${selectedPlan === plan.name ? "selected" : ""}`}
                style={{ cursor: "pointer" }}
              >
                {/* Left side: circle checkbox + text */}
                <div className="d-flex align-items-center">
                  {/* Circle Checkbox */}
                  <div className={`custom-check ${selectedPlan === plan.name ? "checked" : ""}`}></div>

                  {/* Text */}
                  <div className="ms-3">
                    <div className="fw-semibold fs-6 mb-0">{plan.name}</div>
                    <div className="text-muted small">{plan.price}</div>
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
            ))}
          </div>

          {/* Continue Button */}
     <Link to="/dashboards/payment">    <button className="btn btn-warning text-white fw-bold rounded-pill py-2 mb-3" style={{ backgroundColor: "#ff6600" }}>
            Continue
          </button>
          </Link> 

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
