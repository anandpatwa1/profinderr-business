import React from 'react'
import { Link } from 'react-router-dom'

const Register = () => {
  return (
    <div>

<div className="login-wrapper align-items-start">
  {/* Left Image Section */}
  <div className="login-left">
    <p className="text-white text-center auth-para">
      Best Place to Showcase Your Products, <br />
      Services and Find Customers
    </p>
  </div>
  {/* Right Form Section */}
  <div className="login-right register_right">
    <div className="login-form text-center">
      <img
        src="./assets/img/logo-vertical.png"
        alt="logo"
        className="logo mb-3"
      />
      <h5 className="fw-bold mb-4 auth-withus_signup">
        <span>Hello</span> 👋 Get started with <span>Profinderr</span>
      </h5>
    </div>
    <div className="register_tab">
      <ul className="nav nav-tabs" id="myTab" role="tablist">
        <li className="nav-item" role="presentation">
          <button
            className="nav-link active"
            id="home-tab"
            data-bs-toggle="tab"
            data-bs-target="#home"
            type="button"
            role="tab"
            aria-controls="home"
            aria-selected="true"
          >
            Service Provide
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className="nav-link"
            id="profile-tab"
            data-bs-toggle="tab"
            data-bs-target="#profile"
            type="button"
            role="tab"
            aria-controls="profile"
            aria-selected="false"
          >
            Trader
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className="nav-link"
            id="contact-tab"
            data-bs-toggle="tab"
            data-bs-target="#contact"
            type="button"
            role="tab"
            aria-controls="contact"
            aria-selected="false"
          >
            Both
          </button>
        </li>
      </ul>
      <div className="tab-content" id="myTabContent">
        <div
          className="tab-pane fade show active"
          id="home"
          role="tabpanel"
          aria-labelledby="home-tab"
        >
          <form className="register_form">
            <div className="row mb-2">
              <div className="col-md-6">
                <label htmlFor="email" className="form-label">
                  Company Name
                </label>
                <input type="text" className="form-control" id="email" />
              </div>
              <div className="col-md-6">
                <label htmlFor="email" className="form-label">
                  Company Numer
                </label>
                <input type="text" className="form-control" id="email" />
              </div>
            </div>
            <div className="row mb-2">
              <div className="col-md-6">
                <label htmlFor="email" className="form-label">
                  Vat Number
                </label>
                <input type="text" className="form-control" id="email" />
              </div>
              <div className="col-md-6">
                <label htmlFor="email" className="form-label">
                  Contact Person Name
                </label>
                <input type="text" className="form-control" id="email" />
              </div>
            </div>
            <div className="row mb-2">
              <div className="col-md-6">
                <label htmlFor="email" className="form-label">
                  Email Address
                </label>
                <input type="text" className="form-control" id="email" />
              </div>
              <div className="col-md-6">
                <label htmlFor="email" className="form-label">
                  Phone Number
                </label>
                <input type="text" className="form-control" id="email" />
              </div>
            </div>
            <div className="row mb-2">
              <div className="col-md-6">
                <label htmlFor="email" className="form-label">
                  Password
                </label>
                <input type="text" className="form-control" id="email" />
              </div>
              <div className="col-md-6">
                <label htmlFor="email" className="form-label">
                  Confirm Password
                </label>
                <input type="text" className="form-control" id="email" />
              </div>
            </div>
            <div className="row mb-2">
              <div className="col-md-6 position-relative">
                <label htmlFor="email" className="form-label">
                  Enter Post Code
                </label>
                <input type="text" className="form-control" id="email" />
                <button className="find_btn">find</button>
              </div>
              <div className="col-md-6 position-relative">
                <label htmlFor="email" className="form-label">
                  Select Addess
                </label>
                <select className="form-control">
                  <option>lorem ipsum</option>
                  <option>lorem ipsum</option>
                </select>
                <span className="d_arrow">
                  <img src="./assets/img/down_arrow.png" />
                </span>
              </div>
            </div>
            <div className="row mb-2">
              <div className="col-md-6">
                <label htmlFor="email" className="form-label">
                  Address Line1
                </label>
                <input type="text" className="form-control" id="email" />
              </div>
              <div className="col-md-6">
                <label htmlFor="email" className="form-label">
                  Address Line2
                </label>
                <input type="text" className="form-control" id="email" />
              </div>
            </div>
            <div className="row mb-2">
              <div className="col-md-6">
                <label htmlFor="email" className="form-label">
                  City
                </label>
                <input type="text" className="form-control" id="email" />
              </div>
              <div className="col-md-6 position-relative">
                <label htmlFor="email" className="form-label">
                  Location
                </label>
                <input type="text" className="form-control" id="email" />
                <div className="location">
                  <span>
                    <img src="./assets/img/location.png" />
                  </span>
                  Use My Location
                </div>
              </div>
            </div>
            <div className="form-check d-flex gap-1 align-items-end">
              <div>
                <input
                  className="form-check-input float-none"
                  type="checkbox"
                  id="remember"
                />
              </div>
              <label className="form-check-label terms mt-1" htmlFor="remember">
                By Signing In, You Agree to our{" "}
                <a href="javascript:;">Terms &amp; Conditions</a> ,{" "}
                <a href="javascript:;">Privacy Policy</a> &amp; Content Policy
              </label>
            </div>
            <button
              type="submit"
              className="btn btn-primary w-100 py-4 mb-3 mt-3"
            >
              Register
            </button>
            <div className="text-center mb-3">
              Already have an account?{" "}
              <Link
           to="/login"
                className="text-decoration-none fw-bold forgotpassword-text"
              >
                Login
              </Link>
            </div>
          </form>
        </div>
        <div
          className="tab-pane fade"
          id="profile"
          role="tabpanel"
          aria-labelledby="profile-tab"
        >
          <form className="register_form">
            <div className="row mb-2">
              <div className="col-md-6">
                <label htmlFor="email" className="form-label">
                  Company Name
                </label>
                <input type="text" className="form-control" id="email" />
              </div>
              <div className="col-md-6">
                <label htmlFor="email" className="form-label">
                  Company Numer
                </label>
                <input type="text" className="form-control" id="email" />
              </div>
            </div>
            <div className="row mb-2">
              <div className="col-md-6">
                <label htmlFor="email" className="form-label">
                  Vat Number
                </label>
                <input type="text" className="form-control" id="email" />
              </div>
              <div className="col-md-6">
                <label htmlFor="email" className="form-label">
                  Contact Person Name
                </label>
                <input type="text" className="form-control" id="email" />
              </div>
            </div>
            <div className="row mb-2">
              <div className="col-md-6">
                <label htmlFor="email" className="form-label">
                  Email Address
                </label>
                <input type="text" className="form-control" id="email" />
              </div>
              <div className="col-md-6">
                <label htmlFor="email" className="form-label">
                  Phone Number
                </label>
                <input type="text" className="form-control" id="email" />
              </div>
            </div>
            <div className="row mb-2">
              <div className="col-md-6">
                <label htmlFor="email" className="form-label">
                  Password
                </label>
                <input type="text" className="form-control" id="email" />
              </div>
              <div className="col-md-6">
                <label htmlFor="email" className="form-label">
                  Confirm Password
                </label>
                <input type="text" className="form-control" id="email" />
              </div>
            </div>
            <div className="row mb-2">
              <div className="col-md-6 position-relative">
                <label htmlFor="email" className="form-label">
                  Enter Post Code
                </label>
                <input type="text" className="form-control" id="email" />
                <button className="find_btn">find</button>
              </div>
              <div className="col-md-6 position-relative">
                <label htmlFor="email" className="form-label">
                  Select Addess
                </label>
                <select className="form-control">
                  <option>lorem ipsum</option>
                  <option>lorem ipsum</option>
                </select>
                <span className="d_arrow">
                  <img src="./assets/img/down_arrow.png" />
                </span>
              </div>
            </div>
            <div className="row mb-2">
              <div className="col-md-6">
                <label htmlFor="email" className="form-label">
                  Address Line1
                </label>
                <input type="text" className="form-control" id="email" />
              </div>
              <div className="col-md-6">
                <label htmlFor="email" className="form-label">
                  Address Line2
                </label>
                <input type="text" className="form-control" id="email" />
              </div>
            </div>
            <div className="row mb-2">
              <div className="col-md-6">
                <label htmlFor="email" className="form-label">
                  City
                </label>
                <input type="text" className="form-control" id="email" />
              </div>
              <div className="col-md-6 position-relative">
                <label htmlFor="email" className="form-label">
                  Location
                </label>
                <input type="text" className="form-control" id="email" />
                <div className="location">
                  <span>
                    <img src="./assets/img/location.png" />
                  </span>
                  Use My Location
                </div>
              </div>
            </div>
            <div className="form-check d-flex gap-1 align-items-end">
              <div>
                <input
                  className="form-check-input float-none"
                  type="checkbox"
                  id="remember"
                />
              </div>
              <label className="form-check-label terms mt-1" htmlFor="remember">
                By Signing In, You Agree to our{" "}
                <a href="javascript:;">Terms &amp; Conditions</a> ,{" "}
                <a href="javascript:;">Privacy Policy</a> &amp; Content Policy
              </label>
            </div>
            <button
              type="submit"
              className="btn btn-primary w-100 py-4 mb-3 mt-3"
            >
              Register
            </button>
            <div className="text-center mb-3">
              Already have an account?{" "}
              <a
                href="login.html"
                className="text-decoration-none fw-bold forgotpassword-text"
              >
                Login
              </a>
            </div>
          </form>
        </div>
        <div
          className="tab-pane fade"
          id="contact"
          role="tabpanel"
          aria-labelledby="contact-tab"
        >
          <form className="register_form">
            <div className="row mb-2">
              <div className="col-md-6">
                <label htmlFor="email" className="form-label">
                  Company Name
                </label>
                <input type="text" className="form-control" id="email" />
              </div>
              <div className="col-md-6">
                <label htmlFor="email" className="form-label">
                  Company Numer
                </label>
                <input type="text" className="form-control" id="email" />
              </div>
            </div>
            <div className="row mb-2">
              <div className="col-md-6">
                <label htmlFor="email" className="form-label">
                  Vat Number
                </label>
                <input type="text" className="form-control" id="email" />
              </div>
              <div className="col-md-6">
                <label htmlFor="email" className="form-label">
                  Contact Person Name
                </label>
                <input type="text" className="form-control" id="email" />
              </div>
            </div>
            <div className="row mb-2">
              <div className="col-md-6">
                <label htmlFor="email" className="form-label">
                  Email Address
                </label>
                <input type="text" className="form-control" id="email" />
              </div>
              <div className="col-md-6">
                <label htmlFor="email" className="form-label">
                  Phone Number
                </label>
                <input type="text" className="form-control" id="email" />
              </div>
            </div>
            <div className="row mb-2">
              <div className="col-md-6">
                <label htmlFor="email" className="form-label">
                  Password
                </label>
                <input type="text" className="form-control" id="email" />
              </div>
              <div className="col-md-6">
                <label htmlFor="email" className="form-label">
                  Confirm Password
                </label>
                <input type="text" className="form-control" id="email" />
              </div>
            </div>
            <div className="row mb-2">
              <div className="col-md-6 position-relative">
                <label htmlFor="email" className="form-label">
                  Enter Post Code
                </label>
                <input type="text" className="form-control" id="email" />
                <button className="find_btn">find</button>
              </div>
              <div className="col-md-6 position-relative">
                <label htmlFor="email" className="form-label">
                  Select Addess
                </label>
                <select className="form-control">
                  <option>lorem ipsum</option>
                  <option>lorem ipsum</option>
                </select>
                <span className="d_arrow">
                  <img src="./assets/img/down_arrow.png" />
                </span>
              </div>
            </div>
            <div className="row mb-2">
              <div className="col-md-6">
                <label htmlFor="email" className="form-label">
                  Address Line1
                </label>
                <input type="text" className="form-control" id="email" />
              </div>
              <div className="col-md-6">
                <label htmlFor="email" className="form-label">
                  Address Line2
                </label>
                <input type="text" className="form-control" id="email" />
              </div>
            </div>
            <div className="row mb-2">
              <div className="col-md-6">
                <label htmlFor="email" className="form-label">
                  City
                </label>
                <input type="text" className="form-control" id="email" />
              </div>
              <div className="col-md-6 position-relative">
                <label htmlFor="email" className="form-label">
                  Location
                </label>
                <input type="text" className="form-control" id="email" />
                <div className="location">
                  <span>
                    <img src="./assets/img/location.png" />
                  </span>
                  Use My Location
                </div>
              </div>
            </div>
            <div className="form-check d-flex gap-1 align-items-end">
              <div>
                <input
                  className="form-check-input float-none"
                  type="checkbox"
                  id="remember"
                />
              </div>
              <label className="form-check-label terms mt-1" htmlFor="remember">
                By Signing In, You Agree to our{" "}
                <a href="javascript:;">Terms &amp; Conditions</a> ,{" "}
                <a href="javascript:;">Privacy Policy</a> &amp; Content Policy
              </label>
            </div>
            <button
              type="submit"
              className="btn btn-primary w-100 py-4 mb-3 mt-3"
            >
              Register
            </button>
            <div className="text-center mb-3">
              Already have an account?{" "}
              <a
                href="login.html"
                className="text-decoration-none fw-bold forgotpassword-text"
              >
                Login
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</div>



    </div>
  )
}

export default Register