import React from "react";
import banner from "../assets/image/banner.png"; // Update path accordingly

const DashboardBanner = () => {
  return (
    <section className="mb-4 dashboard-banner">
      <div className="container">
        <div className="img-card position-relative overflow-hidden">
          <div className="d-flex align-items-center justify-content-between w-100 rate-wishlist-wrapper">
            <div className="ratingProduct fw-semibold rounded-2">
              4.5
              <svg width={21} height={20} fill="none" viewBox="0 0 21 20">
                <path
                  d="M17.1252 19.6444L10.852 16.3075L4.57646 19.6444L5.77776 12.5718L0.696289 7.56397L7.71184 6.53274L10.852 0L13.9922 6.53274L21.0077 7.56397L15.9263 12.5742L17.1252 19.6444Z"
                  fill="#FFC529"
                />
              </svg>{" "}
              (25+)
            </div>
            <div className="wishlist-circle rounded-circle d-flex align-items-center justify-content-center me-5">
              <svg width={27} height={27} viewBox="0 0 27 27" fill="none">
                <path
                  d="M13.5 24.0187L11.8687 22.5337C6.075 17.28 2.25 13.8037 2.25 9.5625C2.25 6.08625 4.9725 3.375 8.4375 3.375C10.395 3.375 12.2737 4.28625 13.5 5.715C14.7262 4.28625 16.605 3.375 18.5625 3.375C22.0275 3.375 24.75 6.08625 24.75 9.5625C24.75 13.8037 20.925 17.28 15.1312 22.5337L13.5 24.0187Z"
                  fill="#5D5D5D"
                />
              </svg>
            </div>
          </div>
          <img src={banner} alt="banner" className="banner-img" />
          <div className="gradient-edit-icon">
            <img src="./assets/img/gradient-edit-icon.png" alt="edit" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DashboardBanner;
