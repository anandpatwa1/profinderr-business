// src/components/Navbar.js
import React, { useState } from 'react';
import navlogo from "../assets/image/navlogo.png";
import Sidebar from './Sidebar';

export default function Navbar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <>
      <header className="">
        <nav className="navbar navbar-expand-xl bg-white py-2">
          <div className="container">
            <a className="navbar-brand fw-bold" href="#">
              <img src={navlogo} alt="logo" className="me-2" />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0 gap-3">
                <li className="nav-item">
                  <a href="" className="nav-link active">Home</a>
                </li>
                <li className="nav-item">
                  <a href="" className="nav-link">Products</a>
                </li>
                <li className="nav-item">
                  <button className="btn text-white affliate-prg-btn gap-2 d-none d-md-flex align-items-center p-2">
                    {/* ... Your SVG code remains unchanged ... */}
                    <div className="text-end">
                      <span className="sml-text">Join & Earn</span> <br />
                      Affiliated Program
                    </div>
                  </button>
                </li>
                <li className="nav-item">
                  <button className="btn btn-primary px-3">
                    {/* ... Your SVG for Add Products ... */}
                    Add Products
                  </button>
                </li>
                <li className="nav-item">
                  <a href="" className="nav-icons d-flex align-items-center justify-content-center">
                    {/* ... Your heart icon SVG ... */}
                  </a>
                </li>
                <li className="nav-item">
                  <a href="" className="nav-icons d-flex align-items-center justify-content-center">
                    {/* ... Your bell icon SVG ... */}
                  </a>
                </li>
                <li className="nav-item">
                  <button
                    className="nav-icons d-flex align-items-center justify-content-center bg-transparent border-0"
                    onClick={() => setIsSidebarOpen(true)}
                  >
                    {/* Your toggle icon */}
                    <svg
                      width={22}
                      height={22}
                      viewBox="0 0 22 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M3 6H18.2957M3 10.7344H18.2957M3 15.4687H18.2957"
                        stroke="#5C5C5C"
                        strokeWidth="2.1851"
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                      />
                    </svg>
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>

      {/* Sidebar Render */}
      {isSidebarOpen && <Sidebar onClose={() => setIsSidebarOpen(false)} />}
    </>
  );
}
