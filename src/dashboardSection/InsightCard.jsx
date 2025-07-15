import React from "react";

const InsightCard = ({ image, value, label }) => {
  return (
    <div className="col-md-4 col-sm-6">
      <div className="single-insight-card position-relative">
        <img src={image} alt={label} />
        <div className="headings">
          <h3 className="insight-heading text-white mb-1">{value}</h3>
          <h5 className="text-white">{label}</h5>
        </div>
        <div className="insight-type">
          <p className="text-white mb-0">
            <svg width={18} height={18} viewBox="0 0 18 18" fill="none">
              <path
                d="M12.2148 4.5H17.3577V9.64286"
                stroke="#3FC93F"
                strokeWidth="1.36364"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M17.3569 4.5L10.0926 11.7643C9.97241 11.8821 9.81085 11.9481 9.64258 11.9481C9.47431 11.9481 9.31275 11.8821 9.19258 11.7643L6.23544 8.80714C6.11527 8.68935 5.9537 8.62338 5.78544 8.62338C5.61717 8.62338 5.4556 8.68935 5.33544 8.80714L0.642578 13.5"
                stroke="#3FC93F"
                strokeWidth="1.36364"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>{" "}
            Last 30 Days
          </p>
        </div>
      </div>
    </div>
  );
};

export default InsightCard;
