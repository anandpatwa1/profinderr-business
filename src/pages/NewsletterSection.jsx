import React from "react";

const NewsletterSection = () => {
  return (
    <section className="newsletter-section position-relative">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6">
            <h3 className="fw-bold text-white">Subscribe our Newsletter</h3>
          </div>
          <div className="col-md-6">
            <form className="newsletterform-group position-relative">
              <input
                type="email"
                className="form-control shadow-none border-0 px-4"
                placeholder="Enter Your Email address"
                required
              />
              <button type="submit" className="btn btn-primary">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
