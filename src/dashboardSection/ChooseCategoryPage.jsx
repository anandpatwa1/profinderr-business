import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const categories = [
  "Electronics", "Life Style", "Health", "Sports", "Home Decor", "Gadgets",
  "Accessories", "Hair Oils", "Lorem Ipsum", "Ipsum Doller Ser", "Watches",
  "Fashion", "Pet Care", "Decor", "Sports Items"
];

const ChooseCategoryPage = () => {
  const [selected, setSelected] = useState([]);

  const toggleCategory = (category) => {
    setSelected((prevSelected) =>
      prevSelected.includes(category)
        ? prevSelected.filter((c) => c !== category)
        : [...prevSelected, category]
    );
  };

  return (
    <div className="container py-5">
      <div className="text-center mb-4">
        <h4>
          Choose Your Business <span className="text-primary">Categories</span> To Get Started
        </h4>
        <p className="text-muted">
          This Will Help To Make Selections Especially-Curated For You
        </p>
      </div>

      <div className="d-flex justify-content-center mb-4">
        <input
          type="text"
          placeholder="Search"
          className="form-control w-50 text-center"
        />
      </div>

      <div className="d-flex flex-wrap justify-content-center gap-2 mb-4">
        {categories.map((cat, idx) => (
          <button
            key={idx}
            onClick={() => toggleCategory(cat)}
            className={`btn btn-sm ${
              selected.includes(cat)
                ? 'btn-primary text-white'
                : 'btn-outline-secondary'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="text-center my-3">
        <p className="text-muted">
          Total Selected Categories are: <strong>{selected.length.toString().padStart(2, '0')}</strong>
        </p>
      </div>

      <div className="d-flex justify-content-between w-50 mx-auto">
        <button className="btn btn-link text-muted">Skip For Now</button>
        <button className="btn btn-primary">Continue</button>
      </div>
    </div>
  );
};

export default ChooseCategoryPage;
