import React from 'react'
import CommonHeader from '../pages/CommonHeader'
import editlogo from "../assets/image/editlogo.png"

const EditPage = () => {
  return (
    <div>
        <CommonHeader />
           <section className="add-products-section edit-profile-section">
      <div className="container">
        <div className="common-services-card">
          <div className="position-relative mb-4">
            <img
              src={editlogo}
              alt="edit banner"
              className="edit-banner-img"
            />
            <div className="edit-icon">
              <img src="./assets/img/gradient-edit-icon.png" alt="edit icon" />
            </div>
          </div>

          <div className="mb-3">
            <div className="row align-items-center">
              {[1, 2].map((item, index) => (
                <div key={index} className="col-md-2 col-sm-3">
                  <div className="image-thumb-wrapper">
                    <img
                      src={`./assets/img/productShoe-img${index === 0 ? "" : "1"}.jpg`}
                      className="image-thumb"
                      alt="product thumb"
                    />
                    <span className="delete-btn overflow-hidden">
                      <svg
                        width="34"
                        height="34"
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
                              width: "100%",
                            }}
                          ></div>
                        </foreignObject>
                        <circle
                          cx="17"
                          cy="17"
                          r="17"
                          fill="white"
                          fillOpacity="0.69"
                        />
                        <path
                          d="M12.952 24.2858C12.5068 24.2858 12.1258 24.1274 11.809 23.8106C11.4922 23.4938 11.3335 23.1125 11.333 22.6667V12.1429H10.5234V10.5239H14.5711V9.71436H19.4282V10.5239H23.4758V12.1429H22.6663V22.6667C22.6663 23.112 22.5079 23.4933 22.1911 23.8106C21.8743 24.1279 21.493 24.2863 21.0472 24.2858H12.952ZM21.0472 12.1429H12.952V22.6667H21.0472V12.1429ZM14.5711 21.0477H16.1901V13.762H14.5711V21.0477ZM17.8092 21.0477H19.4282V13.762H17.8092V21.0477Z"
                          fill="#EB2626"
                        />
                        <defs>
                          <clipPath id="bgblur_0_1_4553_clip_path" transform="translate(8.33333 8.33333)">
                            <circle cx="17" cy="17" r="17" />
                          </clipPath>
                        </defs>
                      </svg>
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <form className="product-form common-form-fields">
            <div>
              <label className="form-label">Your Logo</label>
              <div className="position-relative logo-wrapper mb-4">
                <img
                  src="./assets/img/company-logo.jpg"
                  alt="company logo"
                  className="logo-img"
                />
                <span className="add-icon">
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 40 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="19.9065"
                      cy="19.9065"
                      r="19.0218"
                      fill="white"
                      stroke="#643696"
                      strokeWidth="1.76947"
                    />
                    <path
                      d="M20.3486 12.8662C21.0608 12.8662 21.6388 13.4442 21.6388 14.1564V19.0593H26.5417C26.8839 19.0593 27.2121 19.1953 27.4541 19.4372C27.696 19.6792 27.832 20.0074 27.832 20.3496C27.832 20.6918 27.696 21.0199 27.4541 21.2619C27.2121 21.5039 26.8839 21.6398 26.5417 21.6398H21.6388V26.5427C21.6388 26.8849 21.5029 27.2131 21.2609 27.455C21.019 27.697 20.6908 27.8329 20.3486 27.8329C20.0064 27.8329 19.6782 27.697 19.4363 27.455C19.1943 27.2131 19.0584 26.8849 19.0584 26.5427V21.6398H14.1555C13.8133 21.6398 13.4851 21.5039 13.2431 21.2619C13.0012 21.0199 12.8652 20.6918 12.8652 20.3496C12.8652 20.0074 13.0012 19.6792 13.2431 19.4372C13.4851 19.1953 13.8133 19.0593 14.1555 19.0593H19.0584V14.1564C19.0584 13.4442 19.6364 12.8662 20.3486 12.8662Z"
                      fill="#643696"
                    />
                  </svg>
                </span>
              </div>
            </div>

            <div className="row g-3">
              <div className="col-md-6">
                <label className="form-label">Company Name</label>
                <input type="text" className="form-control" defaultValue="Lorem ipsum" />
              </div>
              <div className="col-md-6">
                <label className="form-label">Email Address</label>
                <input type="text" className="form-control" defaultValue="Example@gmail.com" />
              </div>
              <div className="col-md-6">
                <label className="form-label">Phone Number</label>
                <input type="tel" className="form-control" defaultValue="8289086089" />
              </div>
              <div className="col-md-6">
                <label className="form-label">Category</label>
                <input type="tel" className="form-control" defaultValue="8289086089" />
              </div>
              <div className="col-md-6">
                <label className="form-label">Enter Post Code</label>
                <input type="tel" className="form-control" defaultValue="8289086089" />
              </div>
              <div className="col-md-6">
                <label className="form-label">Select Address</label>
                <select className="form-select" defaultValue="Shoes >> Adidas">
                  <option>Lorem Ipsum</option>
                  <option>Shoes &gt;&gt; Adidas</option>
                  <option>Shoes &gt;&gt; Nike</option>
                </select>
              </div>
              <div className="col-md-6">
                <label className="form-label">Address Line1</label>
                <input type="text" className="form-control" defaultValue="Lorem Ipsum" />
              </div>
              <div className="col-md-6">
                <label className="form-label">Address Line2</label>
                <input type="text" className="form-control" defaultValue="Lorem Ipsum" />
              </div>
              <div className="col-md-6">
                <label className="form-label">City</label>
                <input type="text" className="form-control" defaultValue="Lorem Ipsum" />
              </div>
              <div className="col-md-6">
                <label className="form-label">Location</label>
                <input type="text" className="form-control" defaultValue="Lorem Ipsum" />
              </div>
              <div className="col-12">
                <div className="text-end">
                  <button type="submit" className="btn btn-primary px-5">
                    Update
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
    </div>
  )
}

export default EditPage