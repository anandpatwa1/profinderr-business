import React, { useState, useEffect } from "react";
import { FaArrowLeft, FaPlus } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { getPlanSingle } from "../utils/PlanAPI";
import { getBusiness } from "../utils/AuthAPI";

const PaymentScreens = () => {
  const orangeColor = "rgba(255, 98, 0, 1)";
  const location = useLocation();
  const navigate = useNavigate();
  const [plan, setPlan] = useState(null);
  const [loading, setLoading] = useState(true);
  const [Business, setBusiness] = useState({});

  const planId = new URLSearchParams(location.search).get('plan');
  const BusinessId = new URLSearchParams(location.search).get('business');

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

  useEffect(() => {
    fetchBusiness();
  }, []);

  if (!BusinessId) {
    return (
      <div className="d-flex flex-column justify-content-center align-items-center" style={{ minHeight: "100vh" }}>
        <p>No Business details available</p>
        <p>Go to mobile screen and Retry</p>
      </div>

    );
  }

  if (!planId) {
    return (
      <div className="d-flex flex-column justify-content-center align-items-center" style={{ minHeight: "100vh" }}>
        <p>No plan details available</p>
        <p>Go Back and Retry</p>
      </div>

    );
  }

  useEffect(() => {
    if (planId) {
      fetchPlanDetails();
    } else {
      toast.error("No plan selected");
      navigate("/plans");
    }
  }, [planId]);

  const fetchPlanDetails = async () => {
    try {
      setLoading(true);
      const response = await getPlanSingle(planId);
      if (response.success) {
        setPlan(response.plan);
      } else {
        throw new Error("Failed to fetch plan details");
      }
    } catch (error) {
      console.error('Error fetching plan details:', error);
      toast.error(error.message || 'Failed to fetch plan details');
      navigate("/plans");
    } finally {
      setLoading(false);
    }
  };

  const formatPrice = (price) => {
    return `£${price.toFixed(2)} per month`;
  };

  const formatFeatureValue = (value) => {
    if (typeof value === 'boolean') return value ? 'Yes' : 'No';
    return value;
  };

  const renderFeatureList = () => {
    if (!plan) return null;
  
    const capitalizeFirstLetter = (str) => {
      return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
    };
  
    const formatLabel = (label) => {
      // Split camelCase and capitalize first letter of each word
      return label
        .split(/(?=[A-Z])/)
        .map(word => capitalizeFirstLetter(word))
        .join(' ');
    };
  
    const features = [];
    
    // Add general features
    Object.entries(plan.features).forEach(([key, value]) => {
      if (typeof value === 'object') {
        // Handle nested objects (serviceProvider, trader, both)
        Object.entries(value).forEach(([subKey, subValue]) => {
          features.push({
            label: `${formatLabel(key)} (${formatLabel(subKey)})`,
            value: formatFeatureValue(subValue)
          });
        });
      } else {
        features.push({
          label: formatLabel(key),
          value: formatFeatureValue(value)
        });
      }
    });
  
    return (
      <div style={{ maxHeight: '50vh', overflowY: 'auto' }}>
        {features.map((feature, i) => (
          <div key={i} className="d-flex justify-content-between mb-2 px-2">
            <span className="fw-bold" style={{ color: '#4a4a4a' }}>
              {feature.label}:
            </span>
            <span style={{ color: orangeColor }}>
              {feature.value}
            </span>
          </div>
        ))}
      </div>
    );
  };

  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center" style={{ minHeight: "100vh" }}>
        <div className="spinner-border text-warning" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  if (!plan) {
    return (
      <div className="d-flex justify-content-center align-items-center" style={{ minHeight: "100vh" }}>
        <p>No plan details available</p>
      </div>
    );
  }

  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ minHeight: "100vh", backgroundColor: "#f8f9fa" }}
    >
      <div
        className="bg-white w-100 d-flex flex-column"
        style={{
          maxWidth: "400px",
          borderRadius: "25px",
          height: "95vh",
          overflow: "hidden",
        }}
      >
        {/* Top Header */}
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

            <h6 className="mb-0 fw-bold">Plan Details</h6>

            <div style={{ width: "40px" }}></div> {/* Spacer for alignment */}
          </div>
        </div>
        {/* Plan Section */}
        <div className="px-3 flex-grow-1 d-flex flex-column">
          <div
            className="p-3 mb-3 flex-grow-1 d-flex flex-column"
            style={{
              border: `2px solid ${orangeColor}`,
              borderRadius: "15px",
              backgroundColor: "#fff",
            }}
          >
            <div className="d-flex align-items-center mb-3">
              <span
                className="me-2"
                style={{
                  width: "24px",
                  height: "24px",
                  backgroundColor: orangeColor,
                  color: "white",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "14px",
                  borderRadius: "50%",
                }}
              >
                ✓
              </span>
              <div>
                <h5 className="fw-bold mb-0">{plan.name}</h5>
                <p className="mb-0" style={{ fontSize: "16px" }}>
                  {formatPrice(plan.price)}
                </p>
              </div>
            </div>

            <hr style={{ borderColor: orangeColor }} />

            {/* Scrollable Feature List */}
            <div className="flex-grow-1" style={{ overflowY: 'auto' }}>
              {renderFeatureList()}
            </div>
          </div>
        </div>

        {/* Bottom Button */}
        <div className="p-3">
        {Business.isActive ?
          <Link to={`/pay?plan=${plan._id}&business=${BusinessId}`} className="w-100">
          {/* <Link to={`/paymentmethod?plan=${plan._id}`} className="w-100"> */}
            <button
              className="btn w-100 rounded-pill fw-bold"
              style={{
                backgroundColor: orangeColor,
                color: "#fff",
                fontSize: "16px",
                padding: "12px",
              }}
            >
              Update to this Plan
            </button>
          </Link>
        :
        <Link to={`/pay?plan=${plan._id}&business=${BusinessId}`} className="w-100">
        {/* <Link to={`/paymentmethod?plan=${plan._id}`} className="w-100"> */}
          <button
            className="btn w-100 rounded-pill fw-bold"
            style={{
              backgroundColor: orangeColor,
              color: "#fff",
              fontSize: "16px",
              padding: "12px",
            }}
          >
            Select This Plan
          </button>
        </Link>
       }
        
        </div>
      </div>
    </div>
  );
};

export default PaymentScreens;
