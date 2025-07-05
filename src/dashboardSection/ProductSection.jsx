import React from "react";

const products = [
  {
    title: "Super table fan for Summer lorem Ipsum",
    image: "https://cdn.pixabay.com/photo/2023/03/20/15/37/postcards-7865294_640.jpg",
    price: "£100",
    inStock: true,
    quantity: 10,
    stockColor: "warning",
  },
  {
    title: "Headphone Red Large",
    image: "https://cdn.pixabay.com/photo/2021/08/03/06/42/the-soap-6518625_640.jpg",
    price: "£100",
    inStock: false,
  },
  {
    title: "Headphone Red Medium",
    image: "https://cdn.pixabay.com/photo/2019/05/18/17/03/chicken-eggs-4212132_640.jpg",
    price: "£100",
    inStock: true,
    quantity: 7,
    stockColor: "danger",
  },
  {
    title: "Another Product",
    image: "https://cdn.pixabay.com/photo/2017/02/27/21/47/yogurt-2104327_640.jpg",
    price: "£100",
    inStock: true,
    quantity: 15,
    stockColor: "success",
  },
  // Add more...
];

const ProductSection = () => {
  return (
    <section className="category-section products-nearby-section">
      <div className="container">
        <div className="common-services-card position-relative overflow-hidden">
          <div className="d-flex align-items-center gap-3 mb-4 flex-wrap justify-content-between">
            <h2 className="common-card-headeing mb-0">Products</h2>
            <a href="#" className="btn btn-primary px-3">
              View All Products{" "}
              <svg width={18} height={19} viewBox="0 0 18 19" fill="none">
                <path
                  d="M3.18652 9.46944H5.00322M14.8134 9.46944L10.4533 5.10938M14.8134 9.46944L10.4533 13.8295M14.8134 9.46944H7.18325"
                  stroke="white"
                  strokeWidth="1.125"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </div>
          <div className="row gy-3">
            {products.map((product, index) => (
              <div className="col-xl-3 col-lg-4 col-md-6" key={index}>
                <div className="product-card">
                  <div className="product-image">
                    <img src={product.image} alt="Product" />
                    <div className="price-tag">{product.price}</div>
                  </div>
                  <div className="product-content">
                    <h4>{product.title}</h4>
                    <div className="d-flex align-items-center gap-2">
                      <p
                        className={`mb-0 fw-semibold ${
                          product.inStock ? "text-success" : "text-danger"
                        }`}
                      >
                        {product.inStock ? "In Stock" : "Out Of Stock"}
                      </p>
                      {product.quantity && (
                        <div
                          className={`stock-pill bg-${product.stockColor} rounded-1 py-1 px-2 d-inline-block text-white`}
                        >
                          {product.quantity}
                        </div>
                      )}
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
};

export default ProductSection;
