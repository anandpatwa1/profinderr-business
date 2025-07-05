import React, { useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { Modal } from "react-bootstrap";
import "bootstrap-icons/font/bootstrap-icons.css";

const AddCardPage = () => {
  const [cardNumber, setCardNumber] = useState("");
  const [holderName, setHolderName] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvv, setCvv] = useState("");
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (cardNumber && holderName && expiry && cvv) {
      setShowModal(true);
    }
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center bg-light"
      style={{ minHeight: "812px", padding: "16px" }}
    >
      <div className="bg-white p-4 w-100" style={{ maxWidth: "375px" }}>
        {/* Header */}
        <div className="d-flex align-items-center mb-4" style={{ position: "relative" }}>
          <div
            style={{
              position: "absolute",
              left: 0,
              top: "50%",
              transform: "translateY(-50%)",
              marginLeft: "10px",
              backgroundColor: "#F2F2F2",
              width: "36px",
              height: "36px",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
            }}
          >
            <FaArrowLeft size={16} />
          </div>
          <h5 className="mb-0 w-100 text-center fw-semibold">Add card</h5>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label small text-muted">Card Number</label>
            <input
              type="text"
              className="form-control bg-light border-0 rounded-3"
              placeholder="Enter Card Number"
              value={cardNumber}
              onChange={(e) => setCardNumber(e.target.value)}
              style={{ height: "48px" }}
            />
          </div>

          <div className="mb-3">
            <label className="form-label small text-muted">Card Holder Name</label>
            <input
              type="text"
              className="form-control bg-light border-0 rounded-3"
              placeholder="Enter Holder Name"
              value={holderName}
              onChange={(e) => setHolderName(e.target.value)}
              style={{ height: "48px" }}
            />
          </div>

          <div className="row" style={{ marginBottom: "200px" }}>
            <div className="col-6">
              <label className="form-label small text-muted">Expired</label>
              <input
                type="text"
                className="form-control bg-light border-0 rounded-3"
                placeholder="MM/YY"
                value={expiry}
                onChange={(e) => setExpiry(e.target.value)}
                style={{ height: "48px" }}
              />
            </div>
            <div className="col-6">
              <label className="form-label small text-muted">CVV Code</label>
              <input
                type="text"
                className="form-control bg-light border-0 rounded-3"
                placeholder="CVV"
                value={cvv}
                onChange={(e) => setCvv(e.target.value)}
                style={{ height: "48px" }}
              />
            </div>
          </div>

          <button
            type="submit"
            className="btn w-100 py-2 text-white fw-semibold rounded-pill"
            style={{
              backgroundColor: "#FF6B00",
              fontSize: "16px",
              height: "50px",
            }}
          >
            {cardNumber && holderName && expiry && cvv ? "Pay" : "Add New Card"}
          </button>
        </form>
      </div>

      {/* Modal */}
      <Modal
        show={showModal}
        onHide={() => setShowModal(false)}
        centered
        contentClassName="border-0"
      >
        <div
          className="w-100 p-4"
          style={{
            maxWidth: "375px",
            borderRadius: "16px",
            backgroundColor: "#fff",
            margin: "auto",
          }}
        >
          <div className="text-center mb-3">
            <div
              style={{
                backgroundColor: "#1EC26B",
                width: "64px",
                height: "64px",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "0 auto",
              }}
            >
              <i className="bi bi-check-lg text-white" style={{ fontSize: "32px" }}></i>
            </div>
          </div>

          <div className="text-center mb-3">
            <p className="mb-1 fw-medium">
              Plan : <span className="fw-semibold">Standard</span>
            </p>
            <p className="mb-1 fw-medium">Starting Date : 01-07-2025</p>
            <p className="mb-3 fw-medium">Next Renewal Date : 31-07-2025</p>
            <h6 className="fw-bold mb-0">Your Subscription Done</h6>
            <h6 className="fw-bold">Successfully!</h6>
          </div>

          <button
            onClick={() => setShowModal(false)}
            className="btn text-white fw-semibold w-100"
            style={{
              backgroundColor: "#FF6B00",
              height: "50px",
              borderRadius: "10px",
            }}
          >
            Back To App
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default AddCardPage;
