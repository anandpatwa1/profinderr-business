import React from 'react'

const CommonHeader = () => {
  return (
    <div>

          <div className="breadcrum-section">
    <div className="container position-relative">
      <div className="nav-item backbtn">
        <a href="#" className="nav-icons d-flex align-items-center justify-content-center">
          {/* SVG icon */}
        </a>
      </div>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb justify-content-center">
          <li className="breadcrumb-item"><a href="#">Home</a></li>
          <li className="breadcrumb-item active" aria-current="page">Edit Profile</li>
        </ol>
      </nav>
    </div>
  </div>
    </div>
  )
}

export default CommonHeader