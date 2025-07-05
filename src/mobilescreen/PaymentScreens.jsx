import React from "react";
import { FaArrowLeft, FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";

const products = Array.from({ length: 6 }, (_, i) => ({
  name: "Product Name",
  description:
    "A product Short description A product Short description A product Short description .   ",
    
}));

const PaymentScreens = () => {
     const orangeColor = "rgba(255, 98, 0, 1)";
  return (
        <div
      className="d-flex justify-content-center align-items-center"
      style={{ minHeight: "100vh", backgroundColor: "#f8f9fa" }}
    >
      <div
        className="bg-white w-100 "
        style={{
          maxWidth: "400px",
          borderRadius: "25px",
          height: "95vh",
          overflow: "hidden",
          position: "relative",
        }}
      >
        {/* Top Header */}
        <div className="p-3">
          <div className="d-flex justify-content-between align-items-center mb-2">
            <button
              className="btn p-1"
              style={{
                borderRadius: "50% !important",
                border: `1px solid ${orangeColor}`,
                width: "40px",
                height: "40px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <FaArrowLeft style={{ color: orangeColor }} />
            </button>

            <h6 className="mb-0 fw-bold">Payment Methods</h6>

            <button
              className="btn p-1"
              style={{
                borderRadius: "50% !important",
                border: `1px solid ${orangeColor}`,
                width: "40px",
                height: "40px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <FaPlus style={{ color: orangeColor }} />
            </button>
          </div>
        </div>

        {/* Plan Section */}
        <div className="px-3">
          <div
            className="p-3 mb-3"
            style={{
              border: `2px solid ${orangeColor}`,
              borderRadius: "15px",
              backgroundColor: "#fff",
            }}
          >
            <div className="d-flex align-items-center mb-2">
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
                <h6 className="fw-bold mb-0">Standard</h6>
                <p className="mb-0" style={{ fontSize: "14px" }}>£15.99 per month</p>
              </div>
            </div>

            {/* HR line below Standard */}
            <hr style={{ borderColor: orangeColor }} />

            {/* Product List */}
            <div>
              {[...Array(5)].map((_, i) => (
                <div className="mb-3" key={i}>
                  <div className="d-flex">
                    <div
                      className="me-2 mt-1"
                      style={{
                        width: "8px",
                        height: "8px",
                        backgroundColor: orangeColor,
                        borderRadius: "50%",
                      }}
                    ></div>
                    <div>
                      <p className="mb-1 fw-bold">Product Name</p>
                      <p className="mb-0 text-muted" style={{ fontSize: "13px" }}>
                        A product short description goes here.
                      </p>
                      
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Button */}
        <div className="position-absolute bottom-0 w-100 p-3">
    <Link to="/dashboards/paymentmethod">      <button
            className="btn w-100 rounded-pill fw-bold"
            style={{
              backgroundColor: orangeColor,
              color: "#fff",
              fontSize: "16px",
              padding: "12px",
            }}
          >
            Click Here to Select
          </button> </Link>
        </div>
      </div>
    </div>
  )
}

export default PaymentScreens