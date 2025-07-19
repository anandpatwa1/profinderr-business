import React, { useState } from "react";
import logo from "../assets/image/logo-mobile.png";
import "../App.css";
import { Link } from "react-router-dom";

const EmailVerification = () => {
  const [showModal, setShowModal] = useState(false);

  const handleLinkClick = (e) => {
    e.preventDefault(); // stop default link navigation
    setShowModal(true); // show modal
  };

  return (
    <div className="d-flex justify-content-center align-items-center bg-white" style={{ minHeight: "100vh" }}>
      <div
        className="w-100 bg-white position-relative"
        style={{
          maxWidth: "400px",
          height: "92vh",
        }}
      >
        <div className="d-flex flex-column h-100 p-4 ">
          {/* Logo */}
          <div className="text-left mb-1">
            <img
              src={logo}
              alt="Profinderr Business"
              className="img-fluid"
              style={{ maxHeight: "40px" }}
            />
          </div>
          <hr className="w-100 text-dark" />

          {/* Main Content */}
          <div className="mb-4 flex-grow-1">
            <p className="mb-2">Hello Tekplus,</p>
            <p>
              Thanks to choose Profinderr app. Please click on below link to
              verify your email ID
            </p>
            <a
              href="https://www.profinderr.co.uk/jhasgjasgjsdcah/s"
              className="d-block text-primary mb-3"
              onClick={handleLinkClick}
            >
              https://www.profinderr.co.uk/jhasgjasgjsdcah/s
            </a>
            <p>
              Thanks & Regards,
              <br />
              Profinderr Team
            </p>
          </div>

        
        </div>

        {/* Modal shown on link click */}
        
      </div>
    </div>
  );
};

export default EmailVerification;
