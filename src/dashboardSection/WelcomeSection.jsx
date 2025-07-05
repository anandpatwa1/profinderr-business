import React from "react";

const WelcomeSection = () => {
  return (
    <section className="my-4">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-5">
            <h2 className="welcome-txt">
              Welcome <span className="text-primary">Pantherforce !</span>
            </h2>
          </div>
          <div className="col-md-7">
            <div className="d-flex align-items-center gap-2 flex-wrap justify-content-md-end">
              <button className="btn btn-outline-primary">Manage Stocks</button>
              <button className="btn btn-primary">My Subscription</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WelcomeSection;
