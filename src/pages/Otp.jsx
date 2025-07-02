import React from 'react'
import { Link } from 'react-router-dom'
import logo from "../assets/image/logo.png"

const Otp = () => {
  return (
    <div className='otp_wrapper'>
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
      <h5 className="fw-bold mb-2 auth-withus_signup">Enter OTP</h5>
      <p className="sub_heading mb-3">
        Enter OTP Sent To Your Registered Mobile Number. <br />
        <strong>+44 77******59</strong>
        <br />
      </p>
      <a href="javascript:;" className="change_mobile mb-4">
        Change Mobile Number{" "}
      </a>
    </div>
    <form>
      <div className="mb-4 mt-4 otp_fields">
        <input type="text" className="form-control" id="email" />
        <input type="text" className="form-control" id="email" />
        <input type="text" className="form-control" id="email" />
        <input type="text" className="form-control" id="email" />
        <input type="text" className="form-control" id="email" />
        <input type="text" className="form-control" id="email" />
      </div>
      <button type="submit" className="btn btn-primary w-100 py-4 mb-3">
        <a href="home-business.html" style={{ color: "white" }}>
          Submit
        </a>{" "}
      </button>
      <div className="text-center mb-3">
        <Link
        to="/newpassword"
          className="text-decoration-none fw-bold forgotpassword-text"
        >
          Resend
        </Link>{" "}
        OTP Again
      </div>
    </form>
  </div>
</div>

    </div>
  )
}

export default Otp