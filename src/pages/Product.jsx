import React from 'react'
import s1 from "../assets/image/s1.png"
import s2 from "../assets/image/s2.png"
import s3 from "../assets/image/s3.png"


const Product = () => {
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
  <section className="add-products-section">
    <div className="container">
      <div className="common-services-card">
        {/* Upload Box */}
        <input
          type="file"
          name="productImg"
          id="productImg"
          className="d-none"
        />
        <label htmlFor="productImg" className="w-100">
          <div className="product-upload rounded p-5 text-center mb-4">
            <div className="mb-2">
              <svg
                width={61}
                height={61}
                viewBox="0 0 61 61"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18.4277 20.3333C18.4277 19.4907 18.7625 18.6826 19.3583 18.0868C19.9541 17.491 20.7622 17.1562 21.6048 17.1562C22.4474 17.1562 23.2555 17.491 23.8514 18.0868C24.4472 18.6826 24.7819 19.4907 24.7819 20.3333C24.7819 21.1759 24.4472 21.9841 23.8514 22.5799C23.2555 23.1757 22.4474 23.5104 21.6048 23.5104C20.7622 23.5104 19.9541 23.1757 19.3583 22.5799C18.7625 21.9841 18.4277 21.1759 18.4277 20.3333Z"
                  fill="#818181"
                />
                <path
                  d="M23.8078 5.71875H37.1922C39.9677 5.71875 42.1688 5.71875 43.9403 5.86362C45.7551 6.01104 47.2877 6.32112 48.6907 7.03279C50.962 8.1914 52.8083 10.0394 53.9647 12.3118C54.6789 13.7097 54.989 15.2449 55.1364 17.0597C55.2813 18.8312 55.2812 21.0323 55.2812 23.8078V37.1922C55.2812 39.9677 55.2813 42.1688 55.1364 43.9403C54.989 45.7551 54.6789 47.2877 53.9672 48.6907C52.8093 50.9617 50.9622 52.8078 48.6907 53.9647C47.2877 54.6789 45.7551 54.989 43.9403 55.1364C42.1688 55.2813 39.9677 55.2812 37.1922 55.2812H23.8078C21.0323 55.2812 18.8312 55.2813 17.0597 55.1364C15.2449 54.989 13.7123 54.6789 12.3118 53.9672C10.0399 52.8097 8.19284 50.9626 7.03533 48.6907C6.32112 47.2877 6.01104 45.7551 5.86617 43.9403C5.71875 42.1688 5.71875 39.9677 5.71875 37.1922V23.8078C5.71875 21.0323 5.71875 18.8312 5.86362 17.0597C6.01104 15.2449 6.32112 13.7123 7.03279 12.3118C8.19097 10.0395 10.039 8.19241 12.3118 7.03533C13.7097 6.32112 15.2449 6.01104 17.0597 5.86362C18.8312 5.71875 21.0323 5.71875 23.8078 5.71875ZM9.53125 34.9555V37.1083C9.53125 39.988 9.53125 42.0315 9.66342 43.6303C9.7905 45.2061 10.037 46.1846 10.431 46.9598C11.2229 48.5137 12.4863 49.7771 14.0402 50.569C14.8154 50.963 15.7939 51.207 17.3698 51.3366C18.3585 51.4179 19.5175 51.4484 20.9383 51.4611C20.8213 47.9231 21.3627 44.5732 22.4455 41.4978C19.5988 37.4159 14.8687 34.7853 9.53125 34.9555ZM51.4713 27.117C36.5695 25.864 24.2068 36.9635 24.7558 51.4688H37.1083C39.988 51.4688 42.0315 51.4688 43.6303 51.3366C45.2061 51.2095 46.1846 50.963 46.9598 50.569C48.5137 49.7771 49.7771 48.5137 50.569 46.9598C50.963 46.1846 51.207 45.2061 51.3366 43.6303C51.4688 42.029 51.4688 39.9855 51.4688 37.1083L51.4713 27.117ZM14.6146 20.3333C14.6146 22.1871 15.351 23.9649 16.6618 25.2757C17.9726 26.5865 19.7504 27.3229 21.6042 27.3229C23.4579 27.3229 25.2357 26.5865 26.5465 25.2757C27.8574 23.9649 28.5938 22.1871 28.5938 20.3333C28.5938 18.4796 27.8574 16.7018 26.5465 15.391C25.2357 14.0802 23.4579 13.3438 21.6042 13.3438C19.7504 13.3438 17.9726 14.0802 16.6618 15.391C15.351 16.7018 14.6146 18.4796 14.6146 20.3333ZM18.4271 20.3333C18.4271 19.4907 18.7618 18.6826 19.3576 18.0868C19.9534 17.491 20.7616 17.1562 21.6042 17.1562C22.4468 17.1562 23.2549 17.491 23.8507 18.0868C24.4465 18.6826 24.7812 19.4907 24.7812 20.3333C24.7812 21.1759 24.4465 21.9841 23.8507 22.5799C23.2549 23.1757 22.4468 23.5104 21.6042 23.5104C20.7616 23.5104 19.9534 23.1757 19.3576 22.5799C18.7618 21.9841 18.4271 21.1759 18.4271 20.3333Z"
                  fill="#818181"
                />
              </svg>
            </div>
            <h5 className="fw-bold">Select your Product Image</h5>
            <p className="mb-0">Or</p>
            <p className="text-muted mb-0">or Drop Your Photo</p>
          </div>
        </label>
        {/* Image Thumbnails */}
        <div className="mb-3">
          <div className="row align-items-center">
            <div className="col-md-2 col-sm-3">
              <div className="image-thumb-wrapper ">
                <img
                  src={s1}
                  className="image-thumb"
                />
                <span className="delete-btn overflow-hidden ">
                  <svg
                    width={34}
                    height={34}
                    viewBox="0 0 34 34"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <foreignObject
                      x="-8.33333"
                      y="-8.33333"
                      width="50.6667"
                      height="50.6667"
                    >
                      <div
                        xmlns="http://www.w3.org/1999/xhtml"
                        style={{
                          backdropFilter: "blur(4.17px)",
                          clipPath: "url(#bgblur_0_1_4553_clip_path)",
                          height: "100%",
                          width: "100%"
                        }}
                      ></div>
                    </foreignObject>
                    <circle
                      data-figma-bg-blur-radius="8.33333"
                      cx={17}
                      cy={17}
                      r={17}
                      fill="white"
                      fillOpacity="0.69"
                    />
                    <path
                      d="M12.952 24.2858C12.5068 24.2858 12.1258 24.1274 11.809 23.8106C11.4922 23.4938 11.3335 23.1125 11.333 22.6667V12.1429H10.5234V10.5239H14.5711V9.71436H19.4282V10.5239H23.4758V12.1429H22.6663V22.6667C22.6663 23.112 22.5079 23.4933 22.1911 23.8106C21.8743 24.1279 21.493 24.2863 21.0472 24.2858H12.952ZM21.0472 12.1429H12.952V22.6667H21.0472V12.1429ZM14.5711 21.0477H16.1901V13.762H14.5711V21.0477ZM17.8092 21.0477H19.4282V13.762H17.8092V21.0477Z"
                      fill="#EB2626"
                    />
                    <defs>
                      <clipPath
                        id="bgblur_0_1_4553_clip_path"
                        transform="translate(8.33333 8.33333)"
                      >
                        <circle cx={17} cy={17} r={17} />
                      </clipPath>
                    </defs>
                  </svg>
                </span>
              </div>
            </div>
            <div className="col-md-2 col-sm-3">
              <div className="image-thumb-wrapper ">
                <img
                  src={s2}
                  className="image-thumb"
                />
                <span className="delete-btn overflow-hidden ">
                  <svg
                    width={34}
                    height={34}
                    viewBox="0 0 34 34"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <foreignObject
                      x="-8.33333"
                      y="-8.33333"
                      width="50.6667"
                      height="50.6667"
                    >
                      <div
                        xmlns="http://www.w3.org/1999/xhtml"
                        style={{
                          backdropFilter: "blur(4.17px)",
                          clipPath: "url(#bgblur_0_1_4553_clip_path)",
                          height: "100%",
                          width: "100%"
                        }}
                      ></div>
                    </foreignObject>
                    <circle
                      data-figma-bg-blur-radius="8.33333"
                      cx={17}
                      cy={17}
                      r={17}
                      fill="white"
                      fillOpacity="0.69"
                    />
                    <path
                      d="M12.952 24.2858C12.5068 24.2858 12.1258 24.1274 11.809 23.8106C11.4922 23.4938 11.3335 23.1125 11.333 22.6667V12.1429H10.5234V10.5239H14.5711V9.71436H19.4282V10.5239H23.4758V12.1429H22.6663V22.6667C22.6663 23.112 22.5079 23.4933 22.1911 23.8106C21.8743 24.1279 21.493 24.2863 21.0472 24.2858H12.952ZM21.0472 12.1429H12.952V22.6667H21.0472V12.1429ZM14.5711 21.0477H16.1901V13.762H14.5711V21.0477ZM17.8092 21.0477H19.4282V13.762H17.8092V21.0477Z"
                      fill="#EB2626"
                    />
                    <defs>
                      <clipPath
                        id="bgblur_0_1_4553_clip_path"
                        transform="translate(8.33333 8.33333)"
                      >
                        <circle cx={17} cy={17} r={17} />
                      </clipPath>
                    </defs>
                  </svg>
                </span>
              </div>
            </div>
            <div className="col-md-2 col-sm-3">
              <div className="image-thumb-wrapper ">
                <img
                  src={s3}
                  className="image-thumb"
                />
                <span className="delete-btn overflow-hidden ">
                  <svg
                    width={34}
                    height={34}
                    viewBox="0 0 34 34"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <foreignObject
                      x="-8.33333"
                      y="-8.33333"
                      width="50.6667"
                      height="50.6667"
                    >
                      <div
                        xmlns="http://www.w3.org/1999/xhtml"
                        style={{
                          backdropFilter: "blur(4.17px)",
                          clipPath: "url(#bgblur_0_1_4553_clip_path)",
                          height: "100%",
                          width: "100%"
                        }}
                      ></div>
                    </foreignObject>
                    <circle
                      data-figma-bg-blur-radius="8.33333"
                      cx={17}
                      cy={17}
                      r={17}
                      fill="white"
                      fillOpacity="0.69"
                    />
                    <path
                      d="M12.952 24.2858C12.5068 24.2858 12.1258 24.1274 11.809 23.8106C11.4922 23.4938 11.3335 23.1125 11.333 22.6667V12.1429H10.5234V10.5239H14.5711V9.71436H19.4282V10.5239H23.4758V12.1429H22.6663V22.6667C22.6663 23.112 22.5079 23.4933 22.1911 23.8106C21.8743 24.1279 21.493 24.2863 21.0472 24.2858H12.952ZM21.0472 12.1429H12.952V22.6667H21.0472V12.1429ZM14.5711 21.0477H16.1901V13.762H14.5711V21.0477ZM17.8092 21.0477H19.4282V13.762H17.8092V21.0477Z"
                      fill="#EB2626"
                    />
                    <defs>
                      <clipPath
                        id="bgblur_0_1_4553_clip_path"
                        transform="translate(8.33333 8.33333)"
                      >
                        <circle cx={17} cy={17} r={17} />
                      </clipPath>
                    </defs>
                  </svg>
                </span>
              </div>
            </div>
            <div className="col-md-2 col-sm-3">
              <div className="image-thumb-wrapper ">
                <img
                  src={s1}
                  className="image-thumb"
                />
                <span className="delete-btn overflow-hidden ">
                  <svg
                    width={34}
                    height={34}
                    viewBox="0 0 34 34"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <foreignObject
                      x="-8.33333"
                      y="-8.33333"
                      width="50.6667"
                      height="50.6667"
                    >
                      <div
                        xmlns="http://www.w3.org/1999/xhtml"
                        style={{
                          backdropFilter: "blur(4.17px)",
                          clipPath: "url(#bgblur_0_1_4553_clip_path)",
                          height: "100%",
                          width: "100%"
                        }}
                      ></div>
                    </foreignObject>
                    <circle
                      data-figma-bg-blur-radius="8.33333"
                      cx={17}
                      cy={17}
                      r={17}
                      fill="white"
                      fillOpacity="0.69"
                    />
                    <path
                      d="M12.952 24.2858C12.5068 24.2858 12.1258 24.1274 11.809 23.8106C11.4922 23.4938 11.3335 23.1125 11.333 22.6667V12.1429H10.5234V10.5239H14.5711V9.71436H19.4282V10.5239H23.4758V12.1429H22.6663V22.6667C22.6663 23.112 22.5079 23.4933 22.1911 23.8106C21.8743 24.1279 21.493 24.2863 21.0472 24.2858H12.952ZM21.0472 12.1429H12.952V22.6667H21.0472V12.1429ZM14.5711 21.0477H16.1901V13.762H14.5711V21.0477ZM17.8092 21.0477H19.4282V13.762H17.8092V21.0477Z"
                      fill="#EB2626"
                    />
                    <defs>
                      <clipPath
                        id="bgblur_0_1_4553_clip_path"
                        transform="translate(8.33333 8.33333)"
                      >
                        <circle cx={17} cy={17} r={17} />
                      </clipPath>
                    </defs>
                  </svg>
                </span>
              </div>
            </div>
          </div>
          <small className="text-muted mt-1 d-block text-center">
            Selected image will be used as a thumb image
          </small>
        </div>
        {/* Form Fields */}
        <form className="product-form common-form-fields">
          <div className="row g-3">
            <div className="col-md-6">
              <label className="form-label">City</label>
              <input
                type="text"
                className="form-control"
                defaultValue="Lorem ipsum"
              />
            </div>
            <div className="col-md-6">
              <label className="form-label">Product Code</label>
              <input
                type="text"
                className="form-control"
                defaultValue={253548}
              />
            </div>
            <div className="col-md-6">
              <label className="form-label">Brand / Manufacturer</label>
              <input
                type="text"
                className="form-control"
                defaultValue="Lorem ipsum"
              />
            </div>
            <div className="col-md-6">
              <label className="form-label">Choose Category</label>
              <select className="form-select">
                <option selected="">Shoes &gt;&gt; Adidas</option>
                <option>Shoes &gt;&gt; Nike</option>
              </select>
            </div>
            <div className="col-md-6">
              <label className="form-label">Availability</label>
              <select className="form-select">
                <option selected="">In Stock</option>
                <option>Out of Stock</option>
              </select>
            </div>
            <div className="col-md-6">
              <label className="form-label">Quantity</label>
              <input type="number" className="form-control" defaultValue={10} />
            </div>
            <div className="col-md-6">
              <label className="form-label">Product Price</label>
              <input type="text" className="form-control" defaultValue="£150" />
            </div>
            <div className="col-md-6">
              <label className="form-label">ASIN No</label>
              <input
                type="text"
                className="form-control"
                defaultValue={25488}
              />
            </div>
            <div className="col-12">
              <label className="form-label">Description</label>
              <textarea className="form-control" rows={3} defaultValue={""} />
            </div>
            <div className="col-12">
              <div className="text-end">
                <button className="btn btn-outline-secondary p-2">
                  <i className="bi bi-plus" /> Add Variants
                </button>
              </div>
            </div>
            <div className="col-12">
              <label className="form-label">Option Name</label>
              <input type="text" className="form-control" defaultValue="Red " />
            </div>
            <div className="col-12">
              <div className="row align-items-end">
                <div className="col-md-6">
                  <label className="form-label">Option Value</label>
                  <input
                    type="text"
                    className="form-control"
                    defaultValue="Red"
                  />
                </div>
                <div className="col-md-6">
                  <input
                    type="text"
                    className="form-control"
                    defaultValue="Price"
                  />
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <input type="text" className="form-control" defaultValue="Size" />
            </div>
            <div className="col-md-6">
              <div className="text-end">
                <button className="btn btn-primary py-2 ">Add</button>
              </div>
            </div>
            <div className="col-12">
              <div className="d-flex align-items-center justify-content-end gap-3 mt-5">
                <button className="btn btn-grey-blue py-3 px-5 text-white">
                  <a href="product-view.html" style={{ color: "white" }}>
                    View
                  </a>
                </button>
                <button className="btn btn-primary py-3 px-5 ">
                  <a href="dashboard-home.html" style={{ color: "white" }}>
                    Submit
                  </a>
                </button>
              </div>
            </div>
          </div>
        </form>
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
</>

    </div>
  )
}

export default Product