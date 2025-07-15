import React from 'react'
import { Link } from 'react-router-dom'
import logo from "../assets/image/logo.png"

const ForgotPassword = () => {
  return (
    <div className=''>
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
      <h5 className="fw-bold mb-3 auth-withus_signup">Forgot Your Password?</h5>
      <p className="sub_heading mb-5">
        Enter your Registered Phone number below to receive <br />
        <strong>one time Passcode</strong>
        <br />
      </p>
    </div>
    <form>
      <div className="mb-3 mt-4">
        <label htmlFor="email" className="form-label">
          Phone Number
        </label>
        <input type="text" className="form-control" id="email" />
      </div>
      <button type="submit" className="btn btn-primary w-100 py-4 mb-3">
        <Link to="/otp">Send OTP</Link>
      </button>
      <div className="text-center mb-3">
        Back To{" "}
        <Link
        to="/login"
          className="text-decoration-none fw-bold forgotpassword-text"
        >
          LOGIN
        </Link>
      </div>
    </form>
  </div>
</div>

    </div>
  )
}

export default ForgotPassword