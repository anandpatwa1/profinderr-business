import React from 'react'
import { Link } from 'react-router-dom'
import logo from "../assets/image/logo.png"
import Successmark from "../assets/image/Successmark.png"



const CreateNewPassword = () => {
  return (
    <div className='register_wrapper'>

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
        <h5 className="fw-bold mb-3 auth-withus_signup">Create New Password</h5>
        <p className="sub_heading mb-5">
          Your new Password must be unique from those previously used.
        </p>
      </div>
      <form>
        <div className="mb-3 mt-4">
          <label htmlFor="email" className="form-label">
            New Password
          </label>
          <input type="text" className="form-control" id="newPassword" />
        </div>
        <div className="mb-3 mt-4">
          <label htmlFor="email" className="form-label">
            Confirm Password
          </label>
          <input type="text" className="form-control" id="confirmPassword"  />
        </div>
        <button
          type="button"
          className="btn btn-primary w-100 py-4 mb-3 "
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          Reset Password
        </button>
      </form>
    </div>
  </div>
  {/* Button trigger modal */}
  {/* Modal */}
  <div
    className="modal fade "
    id="exampleModal"
    tabIndex={-1}
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div className="modal-dialog modal-dialog-centered">
      <div className="modal-content">
        <div className="modal-body sucess_moderl">
          <div className="sucess_img">
            <img src={Successmark} />
          </div>
          <h6>
            Password Changed <br />
            Successfully!
            <br />
          </h6>
        </div>
        <div className="sucess_popupbtn">
          <button type="button" className="btn btn-primary ">
           <Link to="/login">
            Back To Login
           </Link>
          </button>
        </div>
      </div>
    </div>
  </div>



        
    </div>
  )
}

export default CreateNewPassword