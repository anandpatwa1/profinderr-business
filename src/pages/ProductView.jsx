import React from 'react'

const ProductView = () => {
  return (
    <div>
        <>
  <div className="breadcrum-section">
    <div className="container position-relative">
      <div className="nav-item backbtn">
        <a
          href="#"
          className="nav-icons d-flex align-items-center justify-content-center"
        >
          <svg
            width={31}
            height={30}
            viewBox="0 0 31 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19.7087 23.5L11.3516 15.1429L19.7087 6.78571"
              stroke="#353535"
              strokeWidth="3.23143"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </a>
      </div>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb justify-content-center">
          <li className="breadcrumb-item">
            <a href="#">Add Product</a>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Product Customer View
          </li>
        </ol>
      </nav>
    </div>
  </div>
  <section className="product-view-section">
    <div className="container">
      <div className="common-services-card p-lg-5">
        <div className="row g-4">
          {/* Left: Image Swipers */}
          <div className="col-md-6">
            <div className="pe-lg-5 position-relative">
              <div className="d-flex pe-lg-5 align-items-center justify-content-between w-100 rate-wishlist-wrapper">
                <div className="ratingProduct fw-semibold rounded-2">
                  4.5
                  <svg
                    width={21}
                    height={20}
                    viewBox="0 0 21 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M17.1252 19.6444L10.852 16.3075L4.57646 19.6444L5.77776 12.5718L0.696289 7.56397L7.71184 6.53274L10.852 0L13.9922 6.53274L21.0077 7.56397L15.9263 12.5742L17.1252 19.6444Z"
                      fill="#FFC529"
                    />
                  </svg>{" "}
                  (25+)
                </div>
                <div className="wishlist-circle rounded-circle d-flex align-items-center justify-content-center me-5">
                  <svg
                    width={27}
                    height={27}
                    viewBox="0 0 27 27"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13.5 24.0187L11.8687 22.5337C6.075 17.28 2.25 13.8037 2.25 9.5625C2.25 6.08625 4.9725 3.375 8.4375 3.375C10.395 3.375 12.2737 4.28625 13.5 5.715C14.7262 4.28625 16.605 3.375 18.5625 3.375C22.0275 3.375 24.75 6.08625 24.75 9.5625C24.75 13.8037 20.925 17.28 15.1312 22.5337L13.5 24.0187Z"
                      fill="#5D5D5D"
                    />
                  </svg>
                </div>
              </div>
              {/* Main Swiper */}
              <div className="swiper product-main mb-3">
                <div className="swiper-wrapper">
                  <div className="swiper-slide">
                    <img src="./assets/img/productShoe-img.jpg" alt="" />
                  </div>
                  <div className="swiper-slide">
                    <img src="./assets/img/productShoe-img1.jpg" alt="" />
                  </div>
                  <div className="swiper-slide">
                    <img src="./assets/img/productShoe-img2.jpg" alt="" />
                  </div>
                  <div className="swiper-slide">
                    <img src="./assets/img/productShoe-img3.jpg" alt="" />
                  </div>
                  <div className="swiper-slide">
                    <img src="./assets/img/productShoe-img.jpg" alt="" />
                  </div>
                  <div className="swiper-slide">
                    <img src="./assets/img/productShoe-img1.jpg" alt="" />
                  </div>
                  <div className="swiper-slide">
                    <img src="./assets/img/productShoe-img2.jpg" alt="" />
                  </div>
                  <div className="swiper-slide">
                    <img src="./assets/img/productShoe-img3.jpg" alt="" />
                  </div>
                </div>
              </div>
              {/* Thumbnail Swiper */}
              <div className="swiper product-thumb">
                <div className="swiper-wrapper">
                  <div className="swiper-slide">
                    <img src="./assets/img/productShoe-img.jpg" alt="" />
                  </div>
                  <div className="swiper-slide">
                    <img src="./assets/img/productShoe-img1.jpg" alt="" />
                  </div>
                  <div className="swiper-slide">
                    <img src="./assets/img/productShoe-img2.jpg" alt="" />
                  </div>
                  <div className="swiper-slide">
                    <img src="./assets/img/productShoe-img3.jpg" alt="" />
                  </div>
                  <div className="swiper-slide">
                    <img src="./assets/img/productShoe-img.jpg" alt="" />
                  </div>
                  <div className="swiper-slide">
                    <img src="./assets/img/productShoe-img1.jpg" alt="" />
                  </div>
                  <div className="swiper-slide">
                    <img src="./assets/img/productShoe-img2.jpg" alt="" />
                  </div>
                  <div className="swiper-slide">
                    <img src="./assets/img/productShoe-img3.jpg" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Right: Product Details */}
          <div className="col-md-6">
            <h2 className="common-card-headeing mb-3">
              Lorem ipsum Product Name
            </h2>
            <span className="distance-pill text-white position-static d-inline-block mb-2">
              <span className="d-inline-block me-1">
                <svg
                  width={9}
                  height={12}
                  viewBox="0 0 9 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3.5 4.87488C4.12132 4.87488 4.625 4.3712 4.625 3.74988C4.625 3.12856 4.12132 2.62488 3.5 2.62488C2.87868 2.62488 2.375 3.12856 2.375 3.74988C2.375 4.3712 2.87868 4.87488 3.5 4.87488Z"
                    stroke="white"
                    strokeWidth="0.75"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M3.5 0.750122C2.70435 0.750122 1.94129 1.06619 1.37868 1.6288C0.816071 2.19141 0.5 2.95447 0.5 3.75012C0.5 4.45962 0.65075 4.92387 1.0625 5.43762L3.5 8.25012L5.9375 5.43762C6.34925 4.92387 6.5 4.45962 6.5 3.75012C6.5 2.95447 6.18393 2.19141 5.62132 1.6288C5.05871 1.06619 4.29565 0.750122 3.5 0.750122Z"
                    stroke="white"
                    strokeWidth="0.75"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                2.5 mi
              </span>
            </span>
            <p className="common-subheading mb-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
              arcu mauris, scelerisque euLorem ipsum dolor sit amet, consectetur
              adipiscing elit. Etiam arcu mauris, scelerisque eu consectetur
              adipiscing elit. Etiam arcu mauris, scelerisque euLorem ipsum
              dolor sit amet, consectetur adipiscing elit. Etiam arcu mauris,
              scelerisque eu
            </p>
            <p className="mb-3">
              <strong>Qty:</strong> 20
            </p>
            <p className="mb-3">
              <strong>Price:</strong>{" "}
              <span className="text-primary fw-bold">£180</span>
            </p>
            <p className="mb-3">
              <strong>Category:</strong> Lorem ipsum
            </p>
            <p className="mb-3">
              <strong>City:</strong> Lorem ipsum
            </p>
            <div className="mb-2">
              <strong>Variants:</strong>
            </div>
            <div className="d-flex mb-3">
              <div className="variant-circle bg-primary" />
              <div className="variant-circle bg-purple active" />
              <div className="variant-circle bg-pink" />
              <div className="variant-circle bg-lightpink" />
              <div className="variant-circle bg-danger" />
            </div>
            <div className="mb-2">
              <strong>Size:</strong>
            </div>
            <div className="d-flex mb-4">
              <div className="size-box fw-semibold">4.0</div>
              <div className="size-box fw-semibold">4.1</div>
              <div className="size-box fw-semibold">4.2</div>
              <div className="size-box fw-semibold">4.3</div>
              <div className="size-box fw-semibold">4.4</div>
              <div className="size-box fw-semibold">5.0</div>
            </div>
            <div className="accordion" id="specsAccordion">
              <div className="accordion-item border-0 shadow-none p-0">
                <h2 className="accordion-header px-0">
                  <button
                    className="accordion-button collapsed border-0 shadow-none p-0 bg-transparent fw-bold"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseSpecs"
                  >
                    Specifications
                  </button>
                </h2>
                <div
                  id="collapseSpecs"
                  className="accordion-collapse "
                  data-bs-parent="#specsAccordion"
                >
                  <div className="accordion-body px-0">
                    <div className="border-bottom py-2 d-flex ailgn-items-center justify-content-between">
                      <p className="mb-0">
                        <strong>Brand:</strong>
                      </p>
                      <p className="text-secondary mb-0 fw-medium">BRUTON</p>
                    </div>
                    <div className="border-bottom py-2 d-flex ailgn-items-center justify-content-between">
                      <p className="mb-0">
                        <strong>Manufacturer:</strong>
                      </p>
                      <p className="text-secondary mb-0 fw-medium">
                        Bruton Footware
                      </p>
                    </div>
                    <div className="border-bottom py-2 d-flex ailgn-items-center justify-content-between">
                      <p className="mb-0">
                        <strong>Product Code:</strong>
                      </p>
                      <p className="text-secondary mb-0 fw-medium">
                        BOF4DV4JZ8
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 mt-5">
            <div className="text-end">
              <button className="btn btn-primary px-5 py-3">
                <a href="dashboard-home.html" style={{ color: "white" }}>
                  {" "}
                  Done
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Newsletter Section */}
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
              required=""
            />
            <button className="btn btn-primary">Subscribe</button>
          </form>
        </div>
      </div>
    </div>
  </section>
  {/* Button trigger modal */}
  {/* Modal */}
  <div
    className="modal fade"
    id="dealDetailModal"
    tabIndex={-1}
    aria-labelledby="dealDetailLabel"
    aria-hidden="true"
  >
    <div className="modal-dialog modal-dialog-centered">
      <div className="modal-content bg-white">
        <div className="modal-header border-0">
          <h1
            className="modal-title text-center fw-semibold fs-5"
            id="dealDetailLabel"
          >
            Enter Deal Detail
          </h1>
          <button
            type="button"
            className="btn-close text-dark"
            data-bs-dismiss="modal"
            aria-label="Close"
          />
        </div>
        <div className="modal-body border-0">
          <form action="" className="common-form-fields">
            <label htmlFor="" className="form-label">
              Enter Deal Start Date &amp; Time
            </label>
            <div className="position-relative input-icon">
              <input type="date" name="" id="" className="form-control" />
              <span className="icon">
                <svg
                  width={22}
                  height={22}
                  viewBox="0 0 22 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17.4154 3.66683H15.582V2.75016C15.582 2.50705 15.4855 2.27389 15.3135 2.10198C15.1416 1.93007 14.9085 1.8335 14.6654 1.8335C14.4222 1.8335 14.1891 1.93007 14.0172 2.10198C13.8453 2.27389 13.7487 2.50705 13.7487 2.75016V3.66683H8.2487V2.75016C8.2487 2.50705 8.15212 2.27389 7.98021 2.10198C7.8083 1.93007 7.57515 1.8335 7.33203 1.8335C7.08892 1.8335 6.85576 1.93007 6.68385 2.10198C6.51194 2.27389 6.41536 2.50705 6.41536 2.75016V3.66683H4.58203C3.85269 3.66683 3.15321 3.95656 2.63749 4.47229C2.12176 4.98801 1.83203 5.68748 1.83203 6.41683V17.4168C1.83203 18.1462 2.12176 18.8456 2.63749 19.3614C3.15321 19.8771 3.85269 20.1668 4.58203 20.1668H17.4154C18.1447 20.1668 18.8442 19.8771 19.3599 19.3614C19.8756 18.8456 20.1654 18.1462 20.1654 17.4168V6.41683C20.1654 5.68748 19.8756 4.98801 19.3599 4.47229C18.8442 3.95656 18.1447 3.66683 17.4154 3.66683ZM18.332 17.4168C18.332 17.6599 18.2355 17.8931 18.0635 18.065C17.8916 18.2369 17.6585 18.3335 17.4154 18.3335H4.58203C4.33892 18.3335 4.10576 18.2369 3.93385 18.065C3.76194 17.8931 3.66536 17.6599 3.66536 17.4168V11.0002H18.332V17.4168ZM18.332 9.16683H3.66536V6.41683C3.66536 6.17371 3.76194 5.94056 3.93385 5.76865C4.10576 5.59674 4.33892 5.50016 4.58203 5.50016H6.41536V6.41683C6.41536 6.65994 6.51194 6.8931 6.68385 7.06501C6.85576 7.23692 7.08892 7.3335 7.33203 7.3335C7.57515 7.3335 7.8083 7.23692 7.98021 7.06501C8.15212 6.8931 8.2487 6.65994 8.2487 6.41683V5.50016H13.7487V6.41683C13.7487 6.65994 13.8453 6.8931 14.0172 7.06501C14.1891 7.23692 14.4222 7.3335 14.6654 7.3335C14.9085 7.3335 15.1416 7.23692 15.3135 7.06501C15.4855 6.8931 15.582 6.65994 15.582 6.41683V5.50016H17.4154C17.6585 5.50016 17.8916 5.59674 18.0635 5.76865C18.2355 5.94056 18.332 6.17371 18.332 6.41683V9.16683Z"
                    fill="#44474B"
                  />
                </svg>
              </span>
            </div>
            <label htmlFor="" className="form-label">
              Enter Deal Start Date &amp; Time
            </label>
            <div className="position-relative input-icon">
              <input type="date" name="" id="" className="form-control" />
              <span className="icon">
                <svg
                  width={22}
                  height={22}
                  viewBox="0 0 22 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17.4154 3.66683H15.582V2.75016C15.582 2.50705 15.4855 2.27389 15.3135 2.10198C15.1416 1.93007 14.9085 1.8335 14.6654 1.8335C14.4222 1.8335 14.1891 1.93007 14.0172 2.10198C13.8453 2.27389 13.7487 2.50705 13.7487 2.75016V3.66683H8.2487V2.75016C8.2487 2.50705 8.15212 2.27389 7.98021 2.10198C7.8083 1.93007 7.57515 1.8335 7.33203 1.8335C7.08892 1.8335 6.85576 1.93007 6.68385 2.10198C6.51194 2.27389 6.41536 2.50705 6.41536 2.75016V3.66683H4.58203C3.85269 3.66683 3.15321 3.95656 2.63749 4.47229C2.12176 4.98801 1.83203 5.68748 1.83203 6.41683V17.4168C1.83203 18.1462 2.12176 18.8456 2.63749 19.3614C3.15321 19.8771 3.85269 20.1668 4.58203 20.1668H17.4154C18.1447 20.1668 18.8442 19.8771 19.3599 19.3614C19.8756 18.8456 20.1654 18.1462 20.1654 17.4168V6.41683C20.1654 5.68748 19.8756 4.98801 19.3599 4.47229C18.8442 3.95656 18.1447 3.66683 17.4154 3.66683ZM18.332 17.4168C18.332 17.6599 18.2355 17.8931 18.0635 18.065C17.8916 18.2369 17.6585 18.3335 17.4154 18.3335H4.58203C4.33892 18.3335 4.10576 18.2369 3.93385 18.065C3.76194 17.8931 3.66536 17.6599 3.66536 17.4168V11.0002H18.332V17.4168ZM18.332 9.16683H3.66536V6.41683C3.66536 6.17371 3.76194 5.94056 3.93385 5.76865C4.10576 5.59674 4.33892 5.50016 4.58203 5.50016H6.41536V6.41683C6.41536 6.65994 6.51194 6.8931 6.68385 7.06501C6.85576 7.23692 7.08892 7.3335 7.33203 7.3335C7.57515 7.3335 7.8083 7.23692 7.98021 7.06501C8.15212 6.8931 8.2487 6.65994 8.2487 6.41683V5.50016H13.7487V6.41683C13.7487 6.65994 13.8453 6.8931 14.0172 7.06501C14.1891 7.23692 14.4222 7.3335 14.6654 7.3335C14.9085 7.3335 15.1416 7.23692 15.3135 7.06501C15.4855 6.8931 15.582 6.65994 15.582 6.41683V5.50016H17.4154C17.6585 5.50016 17.8916 5.59674 18.0635 5.76865C18.2355 5.94056 18.332 6.17371 18.332 6.41683V9.16683Z"
                    fill="#44474B"
                  />
                </svg>
              </span>
            </div>
            <label htmlFor="" className="form-label">
              Offer Price (£200)
            </label>
            <input name="" id="" className="form-control" defaultValue={150} />
          </form>
        </div>
        <div className="modal-footer border-0">
          <div className="row w-100">
            <div className="col-6">
              <button
                type="button"
                className="btn btn-grey-blue w-100 py-3"
                data-bs-dismiss="modal"
              >
                Cancel
              </button>
            </div>
            <div className="col-6">
              <button type="button" className="btn btn-primary w-100 py-3">
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</>

    </div>
  )
}

export default ProductView