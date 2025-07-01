import React from 'react'

const ProductDetail = () => {
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
            Product Detail
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
            <div className="pe-lg-5">
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
            <div className="row">
              <div className="col-md-6">
                <div className="row align-items-center gy-4 ">
                  <div className="col-lg-5">
                    <button className="btn btn-primary px-5 py-3 w-100">
                      Save
                    </button>
                  </div>
                  <div className="col-lg-5">
                    <button className="btn btn-grey-blue px-5 py-3 text-white w-100">
                      Edit
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="text-end">
                  <button
                    className="btn btn-primary px-5 py-3"
                    type="button"
                    data-bs-toggle="modal"
                    data-bs-target="#dealDetailModal"
                  >
                    <svg
                      width={22}
                      height={22}
                      viewBox="0 0 22 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M18.3333 11.9168V16.5002C18.3333 17.2295 18.0436 17.929 17.5279 18.4447C17.0122 18.9604 16.3127 19.2502 15.5833 19.2502H11.9167V11.9168H18.3333ZM10.0833 11.9168V19.2502H6.41667C5.68732 19.2502 4.98785 18.9604 4.47212 18.4447C3.9564 17.929 3.66667 17.2295 3.66667 16.5002V11.9168H10.0833ZM8.25 1.8335C8.77019 1.83347 9.28444 1.94413 9.75858 2.15812C10.2327 2.37211 10.6559 2.68455 11 3.07466C11.3441 2.68455 11.7673 2.37211 12.2414 2.15812C12.7156 1.94413 13.2298 1.83347 13.75 1.8335H14.2083C14.573 1.8335 14.9227 1.97836 15.1806 2.23622C15.4385 2.49409 15.5833 2.84382 15.5833 3.2085V3.66683C15.5833 4.33508 15.4046 4.96116 15.0929 5.50016H17.4167C17.9029 5.50016 18.3692 5.69332 18.713 6.03713C19.0568 6.38095 19.25 6.84727 19.25 7.3335V9.16683C19.25 9.5005 19.1611 9.814 19.0043 10.0835H11.9167V7.3335C11.9167 7.09038 11.8201 6.85722 11.6482 6.68531C11.4763 6.51341 11.2431 6.41683 11 6.41683C10.7569 6.41683 10.5237 6.51341 10.3518 6.68531C10.1799 6.85722 10.0833 7.09038 10.0833 7.3335V10.0835H2.99567C2.83474 9.8048 2.75001 9.48865 2.75 9.16683V7.3335C2.75 6.84727 2.94315 6.38095 3.28697 6.03713C3.63079 5.69332 4.0971 5.50016 4.58333 5.50016H6.90708C6.58555 4.94268 6.41642 4.31039 6.41667 3.66683V3.2085C6.41667 2.84382 6.56153 2.49409 6.81939 2.23622C7.07726 1.97836 7.42699 1.8335 7.79167 1.8335H8.25ZM8.25 3.66683C8.25 4.15306 8.44315 4.61938 8.78697 4.96319C9.13079 5.30701 9.5971 5.50016 10.0833 5.50016C10.0833 5.01393 9.89018 4.54762 9.54636 4.2038C9.20255 3.85998 8.73623 3.66683 8.25 3.66683ZM13.75 3.66683C13.2638 3.66683 12.7975 3.85998 12.4536 4.2038C12.1098 4.54762 11.9167 5.01393 11.9167 5.50016C12.4029 5.50016 12.8692 5.30701 13.213 4.96319C13.5568 4.61938 13.75 4.15306 13.75 3.66683Z"
                        fill="white"
                      />
                    </svg>
                    Add To Deal
                  </button>
                </div>
              </div>
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

export default ProductDetail