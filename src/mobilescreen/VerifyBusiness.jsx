import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { verifyBusiness } from "../utils/AuthAPI"; // <-- your function

const VerifyBusiness = () => {
const orangeColor = "rgba(255, 98, 0, 1)";
  const location = useLocation();
  const navigate = useNavigate();
  const [message, setMessage] = useState("Verifying business...");
  const [loading, setLoading] = useState(true);

  const BusinessId = new URLSearchParams(location.search).get("business");

  useEffect(() => {
    const verify = async () => {
      if (!BusinessId) {
        setMessage("No business ID found! Please Retry");
        setLoading(false);
        return;
      }

      try {
        const response = await verifyBusiness(BusinessId);
        if (response.success) {
          setMessage("✅ Your Email verified successfully!");
        } else {
          setMessage("❌ Verification failed!");
        }
      } catch (err) {
        console.error("Verification error:", err);
        toast.error(err.message || "Something went wrong");
        setMessage("❌ Verification failed!");
      } finally {
        setLoading(false);
      }
    };

    verify();
  }, [BusinessId]);

  return (
    <div
      className="d-flex flex-column justify-content-center align-items-center"
      style={{ minHeight: "100vh", backgroundColor: "#f8f9fa" }}
    >
      <h3 className="mb-4">{message}</h3>

      {!loading && BusinessId && (
        <button
          onClick={() => navigate(`/continue?business=${BusinessId}`)}
          className="btn  rounded-pill px-4 py-2 fw-bold"
          style={{
            backgroundColor: orangeColor,
            color: "#fff",
            fontSize: "16px",
            padding: "12px",
          }}
        >
          Buy new plan to continue
        </button>
      )}
    </div>
  );
};

export default VerifyBusiness;
