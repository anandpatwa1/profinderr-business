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

          {/* Footer */}
          <div className="text-center small text-muted mt-auto pt-3">
            By Signing In, You Agree to our <br />
            <a href="#" className="text-decoration-underline">
              Terms & Conditions
            </a>
            ,{" "}
            <a href="#" className="text-decoration-underline">
              Privacy Policy
            </a>{" "}
            &{" "}
            <a href="#" className="text-decoration-underline">
              Content Policy
            </a>
          </div>
        </div>

        {/* Modal shown on link click */}
        {showModal && (
          <div
            className="d-flex justify-content-center align-items-center bg-dark bg-opacity-50 position-absolute top-0 start-0 w-100 h-100"
            style={{ zIndex: 9999 }}
          >
            <div
              className="bg-white rounded-4 p-4 text-center shadow-sm modal-box-custom"
              style={{
                width: "100%",
                maxWidth: "440px",
                height: "390px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                alignItems:"center",
                padding: "20px",
                margin: "20px"
              }}
            >
              {/* Modal Content */}
              <div>
                <h6 className="fw-bold fs-2">Thanks for verification</h6>
                <p className="my-2">Now Final Step</p>
                <h6 className="fw-bold fs-2 ">Choose Your Subscription Plan</h6>

               <Link to="/mobile/subscription">  <button className="btn btn-warning fw-bold px-4 py-2 my-2 rounded-pill text-white w-100" style={{ backgroundColor: "#ff6600", border: "none" }}>
                 Go
                </button></Link>
              </div>

              {/* Modal Footer */}
              <p className="small text-muted mt-4 mb-0">
                By choosing subscription plan, You Agree to our <br />
                <a href="#" className="text-decoration-underline">Terms & Conditions</a>,{" "}
                <a href="#" className="text-decoration-underline">Privacy Policy</a> &{" "}
                <a href="#" className="text-decoration-underline">Content Policy</a>
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default EmailVerification;
