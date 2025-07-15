import React from 'react';
import tshirt from "../assets/image/t-shirt.png";
import shoes from "../assets/image/shoes.png";
import headphone from "../assets/image/headphone.png";

const hotDeals = [
  { image: shoes, title: "Super table fan for Summer...", price: 100, discounted: 80, stock: "In stock", expiry: "15 Apr 2025" },
  { image: headphone, title: "Super table fan for Summer...", price: 100, discounted: 80, stock: "In stock", expiry: "15 Apr 2025" },
  { image: tshirt, title: "Super table fan for Summer...", price: 100, discounted: 80, stock: "In stock", expiry: "15 Apr 2025" },
  { image: shoes, title: "Super table fan for Summer...", price: 100, discounted: 80, stock: "In stock", expiry: "15 Apr 2025" },
  { image: headphone, title: "Super table fan for Summer...", price: 100, discounted: 80, stock: "In stock", expiry: "15 Apr 2025" },
  { image: tshirt, title: "Super table fan for Summer...", price: 100, discounted: 80, stock: "In stock", expiry: "15 Apr 2025" },
];

const HotDealsSection = () => (
  <section className="category-section services-nearby-section">
    <div className="container">
      <div className="common-services-card position-relative overflow-hidden">
        <div className="d-flex align-items-center gap-3 mb-4 flex-wrap justify-content-between">
          <h2 className="common-card-headeing mb-0">Hot Deals</h2>
          <a href="#" className="btn btn-primary px-3">
            View All Deals{" "}
            <svg width={18} height={19} viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3.18652 9.46944H5.00322M14.8134 9.46944L10.4533 5.10938M14.8134 9.46944L10.4533 13.8295M14.8134 9.46944H7.18325"
                stroke="white" strokeWidth="1.125" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>
        <div className="row gy-4">
          {hotDeals.map((deal, i) => (
            <div className="col-xl-4 col-md-6" key={i}>
              <div className="deal-card">
                <div className="row">
                  <div className="col-5">
                    <div className="deal-image">
                      <img src={deal.image} alt="Product" />
                    </div>
                  </div>
                  <div className="col-7">
                    <div className="deal-details">
                      <h3 className="title">{deal.title}</h3>
                      <span className="distance position-static fw-bold d-inline-block py-1 mb-2">
                        <span className="text-decoration-line-through">£{deal.price}</span>&nbsp; £{deal.discounted}
                      </span>
                      <p className="text-success fw-semibold mb-0">{deal.stock}</p>
                      <div className="fw-semibold">
                        <span className="text-danger">Expire on:</span> {deal.expiry}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default HotDealsSection;
