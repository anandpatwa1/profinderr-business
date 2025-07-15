import React from "react";
import InsightCard from "./InsightCard";

import orange from "../assets/image/orange.png";
import blue from "../assets/image/blue.png";
import skyblue from "../assets/image/skyblue.png";

const InsightsSection = () => {
  return (
    <section className="insight-cards-section">
      <div className="container">
        <div className="common-services-card position-relative overflow-hidden">
          <h2 className="common-card-headeing">Insights</h2>
          <div className="row">
            <InsightCard image={orange} value="2099+" label="Products in Wishlist" />
            <InsightCard image={blue} value="2099+" label="Products in Wishlist" />
            <InsightCard image={skyblue} value="2099+" label="Products in Wishlist" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default InsightsSection;
