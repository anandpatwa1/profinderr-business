import React from 'react'
import { Link } from 'react-router-dom'
import logo from "../assets/image/logo.png"
export default function Login() {
  return (
    <div className="login-wrapper">
  {/* Left Image Section */}
  <div className="login-left">
    <p className="text-white text-center auth-para">
      Best Place to Showcase Your Products, <br />
      Services and Find Customers
    </p>
  </div>
  {/* Right Form Section */}
  <div className="login-right">
    <div className="login-form text-center">
      <img
        src={logo}
        alt="logo"
        className="logo mb-3"
      />
      <h5 className="fw-bold mb-4 auth-withus">
        <span>LOGIN</span> WITH US!
      </h5>
    </div>
    <form>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">
          Email / Mobile Number
        </label>
        <input
          type="text"
          className="form-control"
          id="email"
          placeholder="Example@gmail.com / +44 7741046159"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="password" className="form-label">
          Password
        </label>
        <input
          type="password"
          className="form-control"
          id="password"
          placeholder="●●●●●●"
        />
      </div>
      <div className="d-flex justify-content-between align-items-center mb-3">
        <div className="form-check d-flex gap-1 align-items-end">
          <div>
            <input
              className="form-check-input float-none"
              type="checkbox"
              id="remember"
            />
          </div>
          <label className="form-check-label mt-1" htmlFor="remember">
            Remember Password
          </label>
        </div>
        <Link
       to="/forgot"
          className="text-decoration-none forgotpassword-text"
        >
          Forgot Password?
        </Link>
      </div>
      <button type="submit" className="btn btn-primary w-100 py-4 mb-3">
        <a href="" /> Login
      </button>
      <div className="text-center mb-3">
        Don’t have an account?{" "}
         <Link  className="text-decoration-none fw-bold forgotpassword-text" to="/register">
          REGISTER
      </Link>
      </div>
      <p className="footer-text text-center text-muted">
        By Signing In, You Agree to our
        <br />
        <a href="#" className="text-primary">
          Terms &amp; Conditions
        </a>
        ,
        <a href="#" className="text-primary">
          Privacy Policy
        </a>{" "}
        &amp;
        <a href="#" className="text-primary">
          Content Policy
        </a>
      </p>
    </form>
  </div>
</div>

  )
}
