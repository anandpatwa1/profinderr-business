import React, { useState } from "react";
import { FaArrowLeft, FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";

const PaymentMethod = () => {
  const [selectedMethods, setSelectedMethods] = useState(["paypal"]);
  const orange = "rgba(255, 98, 0, 1)";
     const orangeColor = "rgba(255, 98, 0, 1)";


  const toggleMethod = (method) => {
    if (selectedMethods.includes(method)) {
      setSelectedMethods(selectedMethods.filter((m) => m !== method));
    } else {
      setSelectedMethods([...selectedMethods, method]);
    }
  };

  const isChecked = (method) => selectedMethods.includes(method);

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
          padding: "20px",
          boxSizing: "border-box",
        }}
      >

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
  



        {/* Selected Plan Box */}
        <div
          className="px-3 py-2 mb-4 d-flex justify-content-between align-items-center"
          style={{
            border: `2px solid ${orange}`,
            borderRadius: "18px",
          }}
        >
          <div>
            <div className="fw-bold mb-1" style={{ fontSize: "16px" }}>
              Standard
            </div>
            <div className="fw-semibold text-dark" style={{ fontSize: "14px" }}>
              £15.99 per month
            </div>
          </div>
          <span
            className="badge rounded-pill text-white fw-semibold"
            style={{
              backgroundColor: orange,
              padding: "6px 12px",
              fontSize: "13px",
            }}
          >
            Selected
          </span>
        </div>

        {/* Payment Options (Checkbox Style) */}
        <div className="flex-grow-1 px-1 mb-4">
          {/* PayPal */}
          <div
            className="form-check mb-4 p-3 d-flex align-items-center justify-content-between"
            style={{
              border: `1px solid ${isChecked("paypal") ? orange : "#ccc"}`,
              borderRadius: "12px",
            }}
          >
          
           <div className=""> <label className="form-check-label ms-3 w-100" htmlFor="paypal">
              <div className="fw-semibold">PayPal</div>
              <div className="text-muted small">•••• 87652</div>
              <div className="text-muted small">Mahmoudul Hasan</div>
            </label></div>
             <div className="">
             <input
              className="form-check-input mt-1"
              type="checkbox"
              id="paypal"
              checked={isChecked("paypal")}
              onChange={() => toggleMethod("paypal")}
              style={{ accentColor: orange }}
            />
           </div>
          </div>

          {/* Mastercard */}
          <div
            className="form-check mb-4 p-3 d-flex align-items-center justify-content-between "
            style={{
              border: `1px solid ${isChecked("mastercard") ? orange : "#ccc"}`,
              borderRadius: "12px",
            }}
          >
         
         <div className="">
               <label className="form-check-label ms-3 w-100" htmlFor="mastercard">
              <div className="fw-semibold">Mastercard</div>
              <div className="text-muted small">•••• 87652</div>
              <div className="text-muted small">Mahmoudul Hasan</div>
            </label>
         </div>

           <div className=""> <input
              className="form-check-input mt-1"
              type="checkbox"
              id="mastercard"
              checked={isChecked("mastercard")}
              onChange={() => toggleMethod("mastercard")}
              style={{ accentColor: orange }}
            /></div>
          </div>
        </div>

        {/* Add New Card Button */}
        <div  style={{marginTop:"100px"}}>
        <Link to="/dashboards/Card">
          <button
            className="btn w-100 fw-bold text-white rounded-pill py-2"
            style={{ backgroundColor: orange }}
          >
            Add New Card
          </button>
        </Link>
        </div>
      </div>
    </div>
  );
};

export default PaymentMethod;
