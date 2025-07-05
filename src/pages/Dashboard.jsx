import React from 'react'
import banner from "../assets/image/banner.png"
import orange from "../assets/image/orange.png"
import blue from "../assets/image/blue.png"
import skyblue from "../assets/image/skyblue.png"
import shoes from "../assets/image/shoes.png"
import headphone from "../assets/image/headphone.png"
import tshirt from "../assets/image/t-shirt.png"
import mobile from "../assets/image/mobile.png"
import WelcomeSection  from "../dashboardSection/WelcomeSection"
import DashboardBanner  from "../dashboardSection/DashboardBanner"
import InsightsSection  from "../dashboardSection/InsightsSection"
import CategorySection from '../dashboardSection/CategorySection'
import ProductSection from '../dashboardSection/ProductSection'
import HotDealsSection from '../dashboardSection/HotDealsSection'
import AppDownloadSection from '../dashboardSection/AppDownloadSection'
import TestimonialsSection from '../dashboardSection/TestimonialsSection'
import NewsletterSection from './NewsletterSection'






const Dashboard = () => {
  return (
    <div>
        <>
  {/* <section className="my-4">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-md-5">
          <h2 className="welcome-txt">
            Welcome <span className="text-primary">Pantherforce !</span>
          </h2>
        </div>
        <div className="col-md-7">
          <div className="d-flex align-items-center gap-2 flex-wrap justify-content-md-end">
            <button className="btn btn-outline-primary ">Manage Stocks</button>
            <button className="btn btn-primary">My Subscription</button>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="mb-4 dashboard-banner">
    <div className="container">
      <div className="img-card position-relative overflow-hidden">
        <div className="d-flex  align-items-center justify-content-between w-100 rate-wishlist-wrapper">
          <div className="ratingProduct fw-semibold rounded-2">
            4.5
            <svg
              width={21}
              height={20}
              viewBox="0 0 21 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17.1252 19.6444L10.852 16.3075L4.57646 19.6444L5.77776 12.5718L0.696289 7.56397L7.71184 6.53274L10.852 0L13.9922 6.53274L21.0077 7.56397L15.9263 12.5742L17.1252 19.6444Z"
                fill="#FFC529"
              />
            </svg>{" "}
            (25+)
          </div>
          <div className="wishlist-circle rounded-circle d-flex align-items-center justify-content-center me-5">
            <svg
              width={27}
              height={27}
              viewBox="0 0 27 27"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13.5 24.0187L11.8687 22.5337C6.075 17.28 2.25 13.8037 2.25 9.5625C2.25 6.08625 4.9725 3.375 8.4375 3.375C10.395 3.375 12.2737 4.28625 13.5 5.715C14.7262 4.28625 16.605 3.375 18.5625 3.375C22.0275 3.375 24.75 6.08625 24.75 9.5625C24.75 13.8037 20.925 17.28 15.1312 22.5337L13.5 24.0187Z"
                fill="#5D5D5D"
              />
            </svg>
          </div>
        </div>
        <img
          src={banner}
          alt=""
          className="banner-img"
        />
        <div className="gradient-edit-icon ">
          <img src="./assets/img/gradient-edit-icon.png" alt="" />
        </div>
      </div>
    </div>
  </section>
  <section className="insight-cards-section">
    <div className="container">
      <div className="common-services-card position-relative overflow-hidden">
        <h2 className="common-card-headeing">Insights</h2>
        <div className="row">
          <div className="col-md-4 col-sm-6">
            <div className="single-insight-card position-relative">
              <img src={orange} />
              <div className="headings">
                <h3 className="insight-heading text-white mb-1">2099+</h3>
                <h5 className="text-white">Products in Wishlist</h5>
              </div>
              <div className="insight-type">
                <p className="text-white mb-0">
                  <svg
                    width={18}
                    height={18}
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_169_1626)">
                      <path
                        d="M12.2148 4.5H17.3577V9.64286"
                        stroke="#3FC93F"
                        strokeWidth="1.36364"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M17.3569 4.5L10.0926 11.7643C9.97241 11.8821 9.81085 11.9481 9.64258 11.9481C9.47431 11.9481 9.31275 11.8821 9.19258 11.7643L6.23544 8.80714C6.11527 8.68935 5.9537 8.62338 5.78544 8.62338C5.61717 8.62338 5.4556 8.68935 5.33544 8.80714L0.642578 13.5"
                        stroke="#3FC93F"
                        strokeWidth="1.36364"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_169_1626">
                        <rect width={18} height={18} fill="white" />
                      </clipPath>
                    </defs>
                  </svg>{" "}
                  Last 30 Days
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-sm-6">
            <div className="single-insight-card position-relative">
              <img src={blue} alt="" />
              <div className="headings">
                <h3 className="insight-heading text-white mb-1">2099+</h3>
                <h5 className="text-white">Products in Wishlist</h5>
              </div>
              <div className="insight-type">
                <p className="text-white mb-0">
                  <svg
                    width={18}
                    height={18}
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_169_1626)">
                      <path
                        d="M12.2148 4.5H17.3577V9.64286"
                        stroke="#3FC93F"
                        strokeWidth="1.36364"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M17.3569 4.5L10.0926 11.7643C9.97241 11.8821 9.81085 11.9481 9.64258 11.9481C9.47431 11.9481 9.31275 11.8821 9.19258 11.7643L6.23544 8.80714C6.11527 8.68935 5.9537 8.62338 5.78544 8.62338C5.61717 8.62338 5.4556 8.68935 5.33544 8.80714L0.642578 13.5"
                        stroke="#3FC93F"
                        strokeWidth="1.36364"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_169_1626">
                        <rect width={18} height={18} fill="white" />
                      </clipPath>
                    </defs>
                  </svg>{" "}
                  Last 30 Days
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-sm-6">
            <div className="single-insight-card position-relative">
              <img src={skyblue} alt="" />
              <div className="headings">
                <h3 className="insight-heading text-white mb-1">2099+</h3>
                <h5 className="text-white">Products in Wishlist</h5>
              </div>
              <div className="insight-type">
                <p className="text-white mb-0">
                  <svg
                    width={18}
                    height={18}
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_169_1626)">
                      <path
                        d="M12.2148 4.5H17.3577V9.64286"
                        stroke="#3FC93F"
                        strokeWidth="1.36364"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M17.3569 4.5L10.0926 11.7643C9.97241 11.8821 9.81085 11.9481 9.64258 11.9481C9.47431 11.9481 9.31275 11.8821 9.19258 11.7643L6.23544 8.80714C6.11527 8.68935 5.9537 8.62338 5.78544 8.62338C5.61717 8.62338 5.4556 8.68935 5.33544 8.80714L0.642578 13.5"
                        stroke="#3FC93F"
                        strokeWidth="1.36364"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_169_1626">
                        <rect width={18} height={18} fill="white" />
                      </clipPath>
                    </defs>
                  </svg>{" "}
                  Last 30 Days
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section> */}

   <WelcomeSection />
      <DashboardBanner />
      <InsightsSection />





  {/* Category Section */}
  {/* <section className="category-section">
    <div className="container">
      <div className="common-services-card position-relative overflow-hidden">
        <h2 className="common-card-headeing">Choose Category</h2>
        <div className="categoryswiper">
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <div className="category-card">
                <div className="icon">
                  <svg
                    width={26}
                    height={26}
                    viewBox="0 0 26 26"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.9375 3.25V4.875M4.875 8.9375H3.25M22.75 8.9375H21.125M4.875 13H3.25M22.75 13H21.125M4.875 17.0625H3.25M22.75 17.0625H21.125M8.9375 21.125V22.75M13 3.25V4.875M13 21.125V22.75M17.0625 3.25V4.875M17.0625 21.125V22.75M7.3125 21.125H18.6875C19.334 21.125 19.954 20.8682 20.4111 20.4111C20.8682 19.954 21.125 19.334 21.125 18.6875V7.3125C21.125 6.66603 20.8682 6.04605 20.4111 5.58893C19.954 5.13181 19.334 4.875 18.6875 4.875H7.3125C6.66603 4.875 6.04605 5.13181 5.58893 5.58893C5.13181 6.04605 4.875 6.66603 4.875 7.3125V18.6875C4.875 19.334 5.13181 19.954 5.58893 20.4111C6.04605 20.8682 6.66603 21.125 7.3125 21.125ZM8.125 8.125H17.875V17.875H8.125V8.125Z"
                      stroke="#75AF70"
                      strokeWidth="1.625"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                Electronics
              </div>
            </div>
            <div className="swiper-slide">
              <div className="category-card">
                <div className="icon">
                  <svg
                    width={26}
                    height={26}
                    viewBox="0 0 26 26"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13 22.75C18.3848 22.75 22.75 18.3848 22.75 13C22.75 7.61522 18.3848 3.25 13 3.25C7.61522 3.25 3.25 7.61522 3.25 13C3.25 18.3848 7.61522 22.75 13 22.75Z"
                      stroke="#D98080"
                      strokeWidth="1.625"
                      strokeMiterlimit={10}
                      strokeLinecap="round"
                    />
                    <path
                      d="M13 8.89435L9.13605 12.1357M13 8.89435L16.8639 12.1357M13 8.89435V5.97087M9.13605 12.1357L10.1562 16.25M9.13605 12.1357L6.45125 10.9982M10.1562 16.25H15.8438M10.1562 16.25L8.73438 18.6875M15.8438 16.25L16.8639 12.1357M15.8438 16.25L17.2656 18.6875L15.8438 22.293M16.8639 12.1357L19.5487 10.9982M19.5487 10.9982L20.8579 7.27798M19.5487 10.9982L22.6992 13.7094M6.45125 10.9982L5.14211 7.27798M6.45125 10.9982L3.30078 13.7094M13 5.97087L16.25 3.80556M13 5.97087L9.75 3.80505M20.8579 18.6875H17.3672M8.73438 18.6875L10.175 22.3184M8.73438 18.6875H5.1609"
                      stroke="#D98080"
                      strokeWidth="1.625"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                Sports
              </div>
            </div>
            <div className="swiper-slide">
              <div className="category-card">
                <div className="icon">
                  <svg
                    width={27}
                    height={27}
                    viewBox="0 0 27 27"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M19.4724 24.0453L14.1245 19.1853C11.1738 16.25 15.5073 10.6552 19.4724 15.2414C23.5301 10.7478 27.771 16.3407 24.8203 19.1853L19.4724 24.0453Z"
                      stroke="#D27DC1"
                      strokeWidth="1.92857"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M1.19775 11.7411H3.83411L7.3499 17.8933L15.259 2.95264L18.7748 9.98421"
                      stroke="#D27DC1"
                      strokeWidth="1.92857"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <rect
                      x="6.45654"
                      y="5.28259"
                      width="0.586957"
                      height="5.28261"
                      rx="0.293478"
                      fill="#D27DC1"
                    />
                    <rect
                      x="9.39111"
                      y="7.63049"
                      width="0.586957"
                      height="5.28261"
                      rx="0.293478"
                      transform="rotate(90 9.39111 7.63049)"
                      fill="#D27DC1"
                    />
                  </svg>
                </div>
                Health
              </div>
            </div>
            <div className="swiper-slide">
              <div className="category-card">
                <div className="icon">
                  <svg
                    width={27}
                    height={27}
                    viewBox="0 0 27 27"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M21.4886 20.25H8.95831C5.65756 20.25 4.00831 20.25 3.00144 18.9934C1.09231 16.6084 3.26807 10.2634 4.58544 7.875C5.03207 10.575 9.63219 10.4996 11.3073 10.125C10.1913 7.87613 11.6808 7.12575 12.4256 6.75H12.4278C15.7499 10.6875 22.8543 12.8295 24.5947 17.1214C25.3473 18.9754 23.2031 20.25 21.4886 20.25Z"
                      stroke="#A2A64F"
                      strokeWidth="1.61413"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M2.25 15.75C6.93562 17.3587 9.82238 17.8245 13.5248 16.6545C14.6464 16.3001 15.2066 16.1224 15.5565 16.146C15.9053 16.1708 16.6196 16.5026 18.0461 17.1686C19.827 17.9989 22.2716 18.477 24.75 17.2777M15.1875 10.6875L16.875 9M17.4375 12.375L19.125 10.6875"
                      stroke="#A2A64F"
                      strokeWidth="1.61413"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                Shoes
              </div>
            </div>
            <div className="swiper-slide">
              <div className="category-card">
                <div className="icon">
                  <svg
                    width={26}
                    height={26}
                    viewBox="0 0 26 26"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M20.5834 11.9167L21.6667 20.5833H4.33338L5.41671 11.9167H20.5834ZM15.1667 3.25H10.8334L8.66671 5.41667V9.75H5.09171C4.63524 9.73429 4.19007 9.89392 3.84759 10.1961C3.50511 10.4983 3.29129 10.9201 3.25004 11.375L2.16671 20.6917C2.14283 20.9498 2.17244 21.21 2.25368 21.4562C2.33493 21.7023 2.46607 21.9291 2.63891 22.1222C2.81175 22.3154 3.02257 22.4709 3.2582 22.5789C3.49384 22.6869 3.74921 22.7451 4.00838 22.75H21.9917C22.2509 22.7451 22.5062 22.6869 22.7419 22.5789C22.9775 22.4709 23.1883 22.3154 23.3612 22.1222C23.534 21.9291 23.6652 21.7023 23.7464 21.4562C23.8276 21.21 23.8573 20.9498 23.8334 20.6917L22.75 11.375C22.7088 10.9201 22.495 10.4983 22.1525 10.1961C21.81 9.89392 21.3648 9.73429 20.9084 9.75H17.3334V5.41667L15.1667 3.25ZM10.8334 9.75V5.41667H15.1667V9.75"
                      fill="#D78D8D"
                    />
                  </svg>
                </div>
                Purse
              </div>
            </div>
            <div className="swiper-slide">
              <div className="category-card">
                <div className="icon">
                  <svg
                    width={28}
                    height={28}
                    viewBox="0 0 28 28"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M25.6668 14C25.6668 20.4435 20.4437 25.6667 14.0002 25.6667C7.55666 25.6667 2.3335 20.4435 2.3335 14C2.3335 7.55654 7.55666 2.33337 14.0002 2.33337"
                      stroke="#D3A560"
                      strokeWidth="2.33333"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M21.9393 5.52539L22.088 5.98389H22.5704L22.1802 6.26739L22.3289 6.72589L21.9393 6.44239L21.549 6.72589L21.6978 6.26739L21.3081 5.98389H21.7899L21.9393 5.52539Z"
                      stroke="#D3A560"
                      strokeWidth="2.33333"
                    />
                    <path
                      d="M9.3335 18.0834C9.3335 18.0834 10.5002 20.4167 14.0002 20.4167C17.5002 20.4167 18.6668 18.0834 18.6668 18.0834"
                      stroke="#D3A560"
                      strokeWidth="2.33333"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M9.91699 14.5834C10.8835 14.5834 11.667 13.7999 11.667 12.8334C11.667 11.8669 10.8835 11.0834 9.91699 11.0834C8.95049 11.0834 8.16699 11.8669 8.16699 12.8334C8.16699 13.7999 8.95049 14.5834 9.91699 14.5834Z"
                      stroke="#D3A560"
                      strokeWidth="2.33333"
                    />
                    <path
                      d="M18.0835 14.5834C19.05 14.5834 19.8335 13.7999 19.8335 12.8334C19.8335 11.8669 19.05 11.0834 18.0835 11.0834C17.117 11.0834 16.3335 11.8669 16.3335 12.8334C16.3335 13.7999 17.117 14.5834 18.0835 14.5834Z"
                      stroke="#D3A560"
                      strokeWidth="2.33333"
                    />
                  </svg>
                </div>
                Beauty
              </div>
            </div>
            <div className="swiper-slide">
              <div className="category-card">
                <div className="icon">
                  <svg
                    width={30}
                    height={30}
                    viewBox="0 0 30 30"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15.0004 5.625C14.6353 5.6247 14.2781 5.731 13.9725 5.93084C13.667 6.13069 13.4264 6.41539 13.2804 6.75C13.1413 7.04359 12.8934 7.27149 12.5891 7.38542C12.2849 7.49935 11.9482 7.49035 11.6505 7.36034C11.3528 7.23033 11.1174 6.98952 10.9942 6.68893C10.8709 6.38833 10.8696 6.05157 10.9904 5.75C11.1279 5.43667 11.2979 5.145 11.5004 4.875C11.8991 4.34397 12.4134 3.91066 13.0044 3.6079C13.5954 3.30515 14.2475 3.14089 14.9114 3.12759C15.5753 3.11428 16.2335 3.25227 16.8362 3.5311C17.4388 3.80993 17.9701 4.22228 18.3898 4.73691C18.8094 5.25153 19.1064 5.85493 19.2582 6.50137C19.41 7.14781 19.4127 7.82032 19.2661 8.46796C19.1194 9.11559 18.8273 9.72134 18.4118 10.2393C17.9962 10.7573 17.4683 11.1739 16.8679 11.4575C16.673 11.5444 16.4972 11.6689 16.3504 11.8237C16.2504 11.9387 16.2504 11.995 16.2504 12.0012C16.2504 12.0475 16.2754 12.0912 16.3154 12.1137L25.7441 17.3512C26.4056 17.7183 26.9264 18.2946 27.2248 18.9897C27.5231 19.6848 27.5822 20.4594 27.3926 21.1917C27.2031 21.924 26.7757 22.5726 26.1775 23.0357C25.5793 23.4987 24.8443 23.75 24.0879 23.75H5.92914C5.17391 23.7503 4.43972 23.5012 3.84055 23.0415C3.24138 22.5818 2.81076 21.9371 2.61555 21.2075C2.42034 20.478 2.47145 19.7044 2.76097 19.0069C3.05048 18.3093 3.56218 17.7269 4.21664 17.35L11.2504 13.2937C11.5373 13.1306 11.8772 13.0876 12.1957 13.1741C12.5143 13.2605 12.7857 13.4695 12.9507 13.7554C13.1158 14.0412 13.1611 14.3808 13.0767 14.6999C12.9923 15.019 12.7851 15.2918 12.5004 15.4587L5.46539 19.5175C5.28866 19.6198 5.15058 19.7775 5.07252 19.9662C4.99446 20.155 4.98078 20.3641 5.03358 20.5614C5.08639 20.7587 5.20274 20.933 5.36463 21.0575C5.52652 21.182 5.72492 21.2496 5.92914 21.25H24.0879C24.2903 21.25 24.487 21.1828 24.6471 21.0589C24.8072 20.935 24.9216 20.7614 24.9724 20.5655C25.0232 20.3695 25.0074 20.1622 24.9277 19.9762C24.8479 19.7901 24.7086 19.6358 24.5316 19.5375L15.1029 14.2987C14.693 14.0716 14.3514 13.7388 14.1136 13.335C13.8757 12.9312 13.7503 12.4711 13.7504 12.0025C13.7504 10.4925 14.9804 9.58375 15.8004 9.1975C16.1867 9.01627 16.4997 8.70869 16.6875 8.32556C16.8754 7.94243 16.927 7.50668 16.8338 7.09027C16.7405 6.67386 16.508 6.30172 16.1747 6.03531C15.8413 5.7689 15.4271 5.62416 15.0004 5.625Z"
                      fill="#4A5CA7"
                    />
                  </svg>
                </div>
                Fashion
              </div>
            </div>
            <div className="swiper-slide">
              <div className="category-card">
                <div className="icon">
                  <svg
                    width={27}
                    height={27}
                    viewBox="0 0 27 27"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M19.4724 24.0453L14.1245 19.1853C11.1738 16.25 15.5073 10.6552 19.4724 15.2414C23.5301 10.7478 27.771 16.3407 24.8203 19.1853L19.4724 24.0453Z"
                      stroke="#D27DC1"
                      strokeWidth="1.92857"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M1.19775 11.7411H3.83411L7.3499 17.8933L15.259 2.95264L18.7748 9.98421"
                      stroke="#D27DC1"
                      strokeWidth="1.92857"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <rect
                      x="6.45654"
                      y="5.28259"
                      width="0.586957"
                      height="5.28261"
                      rx="0.293478"
                      fill="#D27DC1"
                    />
                    <rect
                      x="9.39111"
                      y="7.63049"
                      width="0.586957"
                      height="5.28261"
                      rx="0.293478"
                      transform="rotate(90 9.39111 7.63049)"
                      fill="#D27DC1"
                    />
                  </svg>
                </div>
                Health
              </div>
            </div>
          </div>
          <div className="swiper-button-prev" />
          <div className="swiper-button-next" />
        </div>
      </div>
    </div>
  </section>
  <section className="category-section products-nearby-section">
    <div className="container">
      <div className="common-services-card position-relative overflow-hidden">
        <div className="d-flex align-items-center gap-3 mb-4 flex-wrap justify-content-between ">
          <h2 className="common-card-headeing mb-0 ">Products </h2>
          <div>
            <a href="#" className="btn btn-primary px-3">
              View All Products{" "}
              <svg
                width={18}
                height={19}
                viewBox="0 0 18 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.18652 9.46944H5.00322M14.8134 9.46944L10.4533 5.10938M14.8134 9.46944L10.4533 13.8295M14.8134 9.46944H7.18325"
                  stroke="white"
                  strokeWidth="1.125"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </div>
        </div>
        <div className="row gy-3">
          <div className="col-xl-3 col-lg-4 col-md-6">
            <div className="product-card">
              <a href="product-detail.html">
                <div className="product-image">
                  <img
                    src="//images.ctfassets.net/yadj1kx9rmg0/wtrHxeu3zEoEce2MokCSi/cf6f68efdcf625fdc060607df0f3baef/quwowooybuqbl6ntboz3.jpg"
                    alt="Product Image"
                  />
                  <div className="price-tag">£100</div>
                </div>
                <div className="product-content">
                  <h4>Super table fan for Summer lorem Ipsum</h4>
                  <div className="d-flex align-items-center gap-2">
                    <p className="mb-0 text-success fw-semibold">In Stock</p>
                    <div className="stock-pill bg-warning rounded-1 py-1 px-2 d-inline-block text-white">
                      10
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-md-6">
            <div className="product-card">
              <div className="product-image">
                <img src="https://pm.epages.com/WebRoot/Store/Shops/apidocu/51E7/F905/2E4C/78C2/30C2/AC14/145F/A4E5/013-headphone-red_h.jpg" alt="Product Image" />
                <div className="price-tag">£100</div>
              </div>
              <div className="product-content">
                <h4>Super table fan for Summer lorem Ipsum</h4>
                <div className="d-flex align-items-center gap-2">
                  <p className="mb-0 text-success fw-semibold">In Stock</p>
                  <div className="stock-pill bg-warning rounded-1 py-1 px-2 d-inline-block text-white">
                    10
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-md-6">
            <div className="product-card">
              <div className="product-image">
                <img src="https://pm.epages.com/WebRoot/Store/Shops/apidocu/51E7/F905/2E4C/78C2/30C2/AC14/145F/A4E5/013-headphone-red_m.jpg" alt="Product Image" />
                <div className="price-tag">£100</div>
              </div>
              <div className="product-content">
                <h4>Super table fan for Summer lorem Ipsum</h4>
                <div className="d-flex align-items-center gap-2">
                  <p className="mb-0 text-danger fw-semibold">Out Of Stock</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-md-6">
            <div className="product-card">
              <div className="product-image">
                <img src="https://pm.epages.com/WebRoot/Store/Shops/apidocu/51E7/F905/2E4C/78C2/30C2/AC14/145F/A4E5/013-headphone-red_m.jpg" alt="Product Image" />
                <div className="price-tag">£100</div>
              </div>
              <div className="product-content">
                <h4>Super table fan for Summer lorem Ipsum</h4>
                <div className="d-flex align-items-center gap-2">
                  <p className="mb-0 text-success fw-semibold">In Stock</p>
                  <div className="stock-pill bg-danger rounded-1 py-1 px-2 d-inline-block text-white">
                    07
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-md-6">
            <div className="product-card">
              <div className="product-image">
                <img src="https://pm.epages.com/WebRoot/Store/Shops/apidocu/51E7/F905/2E4C/78C2/30C2/AC14/145F/A4E5/013-headphone-red_m.jpg" alt="Product Image" />
                <div className="price-tag">£100</div>
              </div>
              <div className="product-content">
                <h4>Super table fan for Summer lorem Ipsum</h4>
                <div className="d-flex align-items-center gap-2">
                  <p className="mb-0 text-danger fw-semibold">Out Of Stock</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-md-6">
            <div className="product-card">
              <div className="product-image">
                <img src="https://pm.epages.com/WebRoot/Store/Shops/apidocu/51E7/F905/2E4C/78C2/30C2/AC14/145F/A4E5/013-headphone-red_m.jpg" alt="Product Image" />
                <div className="price-tag">£100</div>
              </div>
              <div className="product-content">
                <h4>Super table fan for Summer lorem Ipsum</h4>
                <div className="d-flex align-items-center gap-2">
                  <p className="mb-0 text-success fw-semibold">In Stock</p>
                  <div className="stock-pill bg-success rounded-1 py-1 px-2 d-inline-block text-white">
                    15
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-md-6">
            <div className="product-card">
              <div className="product-image">
                <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FImage&psig=AOvVaw3SBrco_y3RqNoBHuSZGnoG&ust=1751533559127000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCLjy9KDpnY4DFQAAAAAdAAAAABAE" alt="Product Image" />
                <div className="price-tag">£100</div>
              </div>
              <div className="product-content">
                <h4>Super table fan for Summer lorem Ipsum</h4>
                <div className="d-flex align-items-center gap-2">
                  <p className="mb-0 text-success fw-semibold">In Stock</p>
                  <div className="stock-pill bg-warning rounded-1 py-1 px-2 d-inline-block text-white">
                    10
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-md-6">
            <div className="product-card">
              <div className="product-image">
                <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FImage&psig=AOvVaw3SBrco_y3RqNoBHuSZGnoG&ust=1751533559127000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCLjy9KDpnY4DFQAAAAAdAAAAABAE" alt="Product Image" />
                <div className="price-tag">£100</div>
              </div>
              <div className="product-content">
                <h4>Super table fan for Summer lorem Ipsum</h4>
                <div className="d-flex align-items-center gap-2">
                  <p className="mb-0 text-success fw-semibold">In Stock</p>
                  <div className="stock-pill bg-warning rounded-1 py-1 px-2 d-inline-block text-white">
                    10
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section> */}


 <CategorySection />
      <ProductSection />



  {/* <section className="category-section services-nearby-section">
    <div className="container">
      <div className="common-services-card position-relative overflow-hidden">
        <div className="d-flex align-items-center gap-3 mb-4 flex-wrap justify-content-between">
          <h2 className="common-card-headeing mb-0 ">Hot Deals</h2>
          <div>
            <a href="#" className="btn btn-primary px-3">
              View All Deals{" "}
              <svg
                width={18}
                height={19}
                viewBox="0 0 18 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.18652 9.46944H5.00322M14.8134 9.46944L10.4533 5.10938M14.8134 9.46944L10.4533 13.8295M14.8134 9.46944H7.18325"
                  stroke="white"
                  strokeWidth="1.125"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </div>
        </div>
        <div className="dealswiper">
          <div className="row gy-4">
            <div className="col-xl-4 col-md-6">
              <div className="deal-card">
                <a href="hot-deal.html">
                  <div className="row">
                    <div className="col-5">
                      <div className="deal-image">
                        <img
                          src={shoes}
                          alt="Product Image"
                        />
                      </div>
                    </div>
                    <div className="col-7">
                      <div className="deal-details">
                        <h3 className="title">Super table fan for Summer...</h3>
                        <span className="distance position-static fw-bold d-inline-block py-1 mb-2">
                          <span className="text-decoration-line-through">
                            £100
                          </span>{" "}
                          &nbsp; £80
                        </span>
                        <p className="text-success fw-semibold mb-0">
                          In stock
                        </p>
                        <div className=" fw-semibold">
                          <span className="text-danger">Expire on:</span> 15 Apr
                          2025
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="deal-card">
                <div className="row">
                  <div className="col-5">
                    <div className="deal-image">
                      <img
                        src={headphone}
                        alt="Product Image"
                      />
                    </div>
                  </div>
                  <div className="col-7">
                    <div className="deal-details">
                      <h3 className="title">Super table fan for Summer...</h3>
                      <span className="distance position-static fw-bold d-inline-block py-1 mb-2">
                        <span className="text-decoration-line-through">
                          £100
                        </span>{" "}
                        &nbsp; £80
                      </span>
                      <p className="text-success fw-semibold mb-0">In stock</p>
                      <div className=" fw-semibold">
                        <span className="text-danger">Expire on:</span> 15 Apr
                        2025
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="deal-card">
                <div className="row">
                  <div className="col-5">
                    <div className="deal-image">
                      <img
                        src={tshirt}
                        alt="Product Image"
                      />
                    </div>
                  </div>
                  <div className="col-7">
                    <div className="deal-details">
                      <h3 className="title">Super table fan for Summer...</h3>
                      <span className="distance position-static fw-bold d-inline-block py-1 mb-2">
                        <span className="text-decoration-line-through">
                          £100
                        </span>{" "}
                        &nbsp; £80
                      </span>
                      <p className="text-success fw-semibold mb-0">In stock</p>
                      <div className=" fw-semibold">
                        <span className="text-danger">Expire on:</span> 15 Apr
                        2025
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="deal-card">
                <div className="row">
                  <div className="col-5">
                    <div className="deal-image">
                      <img
                        src={shoes}
                        alt="Product Image"
                      />
                    </div>
                  </div>
                  <div className="col-7">
                    <div className="deal-details">
                      <h3 className="title">Super table fan for Summer...</h3>
                      <span className="distance position-static fw-bold d-inline-block py-1 mb-2">
                        <span className="text-decoration-line-through">
                          £100
                        </span>{" "}
                        &nbsp; £80
                      </span>
                      <p className="text-success fw-semibold mb-0">In stock</p>
                      <div className=" fw-semibold">
                        <span className="text-danger">Expire on:</span> 15 Apr
                        2025
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="deal-card">
                <div className="row">
                  <div className="col-5">
                    <div className="deal-image">
                      <img
                        src={headphone}
                        alt="Product Image"
                      />
                    </div>
                  </div>
                  <div className="col-7">
                    <div className="deal-details">
                      <h3 className="title">Super table fan for Summer...</h3>
                      <span className="distance position-static fw-bold d-inline-block py-1 mb-2">
                        <span className="text-decoration-line-through">
                          £100
                        </span>{" "}
                        &nbsp; £80
                      </span>
                      <p className="text-success fw-semibold mb-0">In stock</p>
                      <div className=" fw-semibold">
                        <span className="text-danger">Expire on:</span> 15 Apr
                        2025
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="deal-card">
                <div className="row">
                  <div className="col-5">
                    <div className="deal-image">
                      <img
                        src={tshirt}
                        alt="Product Image"
                      />
                    </div>
                  </div>
                  <div className="col-7">
                    <div className="deal-details">
                      <h3 className="title">Super table fan for Summer...</h3>
                      <span className="distance position-static fw-bold d-inline-block py-1 mb-2">
                        <span className="text-decoration-line-through">
                          £100
                        </span>{" "}
                        &nbsp; £80
                      </span>
                      <p className="text-success fw-semibold mb-0">In stock</p>
                      <div className=" fw-semibold">
                        <span className="text-danger">Expire on:</span> 15 Apr
                        2025
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="category-section products-nearby-section">
    <div className="container">
      <div className="common-services-card">
        <div className="row align-items-center gy-4">
          <div className="col-lg-5">
            <div className="text-center">
              <img src={mobile} alt="" />
            </div>
          </div>
          <div className="col-lg-6">
            <h2 className="common-card-headeing">
              Download Our app and Find your <br /> Product Nearby
            </h2>
            <p className="common-subheading mb-4">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look even
              slightly believable. If you are going to use a passage of Lorem
              Ipsum,
            </p>
            <div className="d-flex gap-3 flex-wrap">
              <a href="#" className="d-inline-block">
                <img src="./assets/img/g-play-img.png" alt="" />
              </a>
              <a href="#" className="d-inline-block">
                <img src="./assets/img/dwnload-appstore-img.png" alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="category-section testimonialsection">
    <div className="container">
      <div className="common-services-card position-relative overflow-hidden">
        <h2 className="common-card-headeing">What Our Customer Says</h2>
        <div className="testimonialswiper">
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <div className="single-testimonial">
                <div className="row justify-content-center">
                  <div className="col-md-10">
                    <div className="text-center">
                      <img
                        src="./assets/img/testimonials-img.png"
                        alt=""
                        className="mb-3 testimonial-user rounded-circle"
                      />
                      <h3 className="common-card-headeing mb-2">Jhon smith</h3>
                      <span>
                        <svg
                          width={13}
                          height={13}
                          viewBox="0 0 13 13"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M10.515 12.5731L6.5 10.4374L2.48344 12.5731L3.25231 8.04634L0 4.84119L4.49018 4.18117L6.5 0L8.50982 4.18117L13 4.84119L9.74769 8.04789L10.515 12.5731Z"
                            fill="#FFC529"
                          />
                        </svg>
                      </span>
                      <span>
                        <svg
                          width={13}
                          height={13}
                          viewBox="0 0 13 13"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M10.515 12.5731L6.5 10.4374L2.48344 12.5731L3.25231 8.04634L0 4.84119L4.49018 4.18117L6.5 0L8.50982 4.18117L13 4.84119L9.74769 8.04789L10.515 12.5731Z"
                            fill="#FFC529"
                          />
                        </svg>
                      </span>
                      <span>
                        <svg
                          width={13}
                          height={13}
                          viewBox="0 0 13 13"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M10.515 12.5731L6.5 10.4374L2.48344 12.5731L3.25231 8.04634L0 4.84119L4.49018 4.18117L6.5 0L8.50982 4.18117L13 4.84119L9.74769 8.04789L10.515 12.5731Z"
                            fill="#FFC529"
                          />
                        </svg>
                      </span>
                      <span>
                        <svg
                          width={13}
                          height={13}
                          viewBox="0 0 13 13"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M10.515 12.5731L6.5 10.4374L2.48344 12.5731L3.25231 8.04634L0 4.84119L4.49018 4.18117L6.5 0L8.50982 4.18117L13 4.84119L9.74769 8.04789L10.515 12.5731Z"
                            fill="#FFC529"
                          />
                        </svg>
                      </span>
                      <span>
                        <svg
                          width={13}
                          height={13}
                          viewBox="0 0 13 13"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M10.515 12.5731L6.5 10.4374L2.48344 12.5731L3.25231 8.04634L0 4.84119L4.49018 4.18117L6.5 0L8.50982 4.18117L13 4.84119L9.74769 8.04789L10.515 12.5731Z"
                            fill="#FFC529"
                          />
                        </svg>
                      </span>
                      <p className="common-subheading">
                        In a highly competitive market, finding truck drivers is
                        one of the most challenging types of recruitment. In
                        partnership with Goodway Tanner's strategized marketing,
                        they helped create an in-depth plan to bring in the best
                        talent to us in record time! We had every seat filled
                        faster than any other recruitment site We highly
                        recommend!
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="single-testimonial">
                <div className="row justify-content-center">
                  <div className="col-md-10">
                    <div className="text-center">
                      <img
                        src="./assets/img/testimonials-img.png"
                        alt=""
                        className="mb-3 testimonial-user rounded-circle"
                      />
                      <h3 className="common-card-headeing mb-2">Jhon smith</h3>
                      <span>
                        <svg
                          width={13}
                          height={13}
                          viewBox="0 0 13 13"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M10.515 12.5731L6.5 10.4374L2.48344 12.5731L3.25231 8.04634L0 4.84119L4.49018 4.18117L6.5 0L8.50982 4.18117L13 4.84119L9.74769 8.04789L10.515 12.5731Z"
                            fill="#FFC529"
                          />
                        </svg>
                      </span>
                      <span>
                        <svg
                          width={13}
                          height={13}
                          viewBox="0 0 13 13"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M10.515 12.5731L6.5 10.4374L2.48344 12.5731L3.25231 8.04634L0 4.84119L4.49018 4.18117L6.5 0L8.50982 4.18117L13 4.84119L9.74769 8.04789L10.515 12.5731Z"
                            fill="#FFC529"
                          />
                        </svg>
                      </span>
                      <span>
                        <svg
                          width={13}
                          height={13}
                          viewBox="0 0 13 13"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M10.515 12.5731L6.5 10.4374L2.48344 12.5731L3.25231 8.04634L0 4.84119L4.49018 4.18117L6.5 0L8.50982 4.18117L13 4.84119L9.74769 8.04789L10.515 12.5731Z"
                            fill="#FFC529"
                          />
                        </svg>
                      </span>
                      <span>
                        <svg
                          width={13}
                          height={13}
                          viewBox="0 0 13 13"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M10.515 12.5731L6.5 10.4374L2.48344 12.5731L3.25231 8.04634L0 4.84119L4.49018 4.18117L6.5 0L8.50982 4.18117L13 4.84119L9.74769 8.04789L10.515 12.5731Z"
                            fill="#FFC529"
                          />
                        </svg>
                      </span>
                      <span>
                        <svg
                          width={13}
                          height={13}
                          viewBox="0 0 13 13"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M10.515 12.5731L6.5 10.4374L2.48344 12.5731L3.25231 8.04634L0 4.84119L4.49018 4.18117L6.5 0L8.50982 4.18117L13 4.84119L9.74769 8.04789L10.515 12.5731Z"
                            fill="#FFC529"
                          />
                        </svg>
                      </span>
                      <p className="common-subheading">
                        In a highly competitive market, finding truck drivers is
                        one of the most challenging types of recruitment. In
                        partnership with Goodway Tanner's strategized marketing,
                        they helped create an in-depth plan to bring in the best
                        talent to us in record time! We had every seat filled
                        faster than any other recruitment site We highly
                        recommend!
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="single-testimonial">
                <div className="row justify-content-center">
                  <div className="col-md-10">
                    <div className="text-center">
                      <img
                        src="./assets/img/testimonials-img.png"
                        alt=""
                        className="mb-3 testimonial-user rounded-circle"
                      />
                      <h3 className="common-card-headeing mb-2">Jhon smith</h3>
                      <span>
                        <svg
                          width={13}
                          height={13}
                          viewBox="0 0 13 13"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M10.515 12.5731L6.5 10.4374L2.48344 12.5731L3.25231 8.04634L0 4.84119L4.49018 4.18117L6.5 0L8.50982 4.18117L13 4.84119L9.74769 8.04789L10.515 12.5731Z"
                            fill="#FFC529"
                          />
                        </svg>
                      </span>
                      <span>
                        <svg
                          width={13}
                          height={13}
                          viewBox="0 0 13 13"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M10.515 12.5731L6.5 10.4374L2.48344 12.5731L3.25231 8.04634L0 4.84119L4.49018 4.18117L6.5 0L8.50982 4.18117L13 4.84119L9.74769 8.04789L10.515 12.5731Z"
                            fill="#FFC529"
                          />
                        </svg>
                      </span>
                      <span>
                        <svg
                          width={13}
                          height={13}
                          viewBox="0 0 13 13"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M10.515 12.5731L6.5 10.4374L2.48344 12.5731L3.25231 8.04634L0 4.84119L4.49018 4.18117L6.5 0L8.50982 4.18117L13 4.84119L9.74769 8.04789L10.515 12.5731Z"
                            fill="#FFC529"
                          />
                        </svg>
                      </span>
                      <span>
                        <svg
                          width={13}
                          height={13}
                          viewBox="0 0 13 13"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M10.515 12.5731L6.5 10.4374L2.48344 12.5731L3.25231 8.04634L0 4.84119L4.49018 4.18117L6.5 0L8.50982 4.18117L13 4.84119L9.74769 8.04789L10.515 12.5731Z"
                            fill="#FFC529"
                          />
                        </svg>
                      </span>
                      <span>
                        <svg
                          width={13}
                          height={13}
                          viewBox="0 0 13 13"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M10.515 12.5731L6.5 10.4374L2.48344 12.5731L3.25231 8.04634L0 4.84119L4.49018 4.18117L6.5 0L8.50982 4.18117L13 4.84119L9.74769 8.04789L10.515 12.5731Z"
                            fill="#FFC529"
                          />
                        </svg>
                      </span>
                      <p className="common-subheading">
                        In a highly competitive market, finding truck drivers is
                        one of the most challenging types of recruitment. In
                        partnership with Goodway Tanner's strategized marketing,
                        they helped create an in-depth plan to bring in the best
                        talent to us in record time! We had every seat filled
                        faster than any other recruitment site We highly
                        recommend!
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="swiper-button-prev" />
          <div className="swiper-button-next" />
        </div>
      </div>
    </div>
  </section> */}


    <HotDealsSection />
    <AppDownloadSection />
    <TestimonialsSection />
  {/* Newsletter Section */}
  {/* <section className="newsletter-section position-relative">
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
  </section> */}
  <NewsletterSection />
</>

    </div>
  )
}

export default Dashboard