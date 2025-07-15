import React from 'react'
import { Link } from 'react-router-dom'
import product from "../assets/image/product.png"

const HomePage = () => {
  return (
    <div>
        <>
  {/* Category Section */}
  <section className="category-section mt-4">
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
  <section className="add-your-project">
    <div className="container">
      <div className="common-services-card position-relative text-center py-4 py-lg-5">
        <img
          src={product}
          alt="Add product"
          className="mb-4"
        />
        <p className="addProduct-para">
          You Haven’t Added Any Product Yet <br className="d-none d-lg-block" />{" "}
          Please Add Your Products
        </p>
        <button className="btn btn-primary">
          <svg
            width={21}
            height={21}
            viewBox="0 0 21 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className='mx-1'
          >
            <g clipPath="url(#clip0_1_20311)">
              <path
                d="M10.5 0C13.2848 0 15.9555 1.10625 17.9246 3.07538C19.8938 5.04451 21 7.71523 21 10.5C21 13.2848 19.8938 15.9555 17.9246 17.9246C15.9555 19.8938 13.2848 21 10.5 21C7.71523 21 5.04451 19.8938 3.07538 17.9246C1.10625 15.9555 0 13.2848 0 10.5C0 7.71523 1.10625 5.04451 3.07538 3.07538C5.04451 1.10625 7.71523 0 10.5 0ZM11.8939 5.6595C11.8939 5.3114 11.7556 4.97756 11.5095 4.73142C11.2633 4.48528 10.9295 4.347 10.5814 4.347C10.2333 4.347 9.89944 4.48528 9.6533 4.73142C9.40716 4.97756 9.26888 5.3114 9.26888 5.6595V9.26888H5.6595C5.3114 9.26888 4.97756 9.40716 4.73142 9.6533C4.48528 9.89944 4.347 10.2333 4.347 10.5814C4.347 10.9295 4.48528 11.2633 4.73142 11.5095C4.97756 11.7556 5.3114 11.8939 5.6595 11.8939H9.26888V15.5033C9.26888 15.8513 9.40716 16.1852 9.6533 16.4313C9.89944 16.6775 10.2333 16.8158 10.5814 16.8158C10.9295 16.8158 11.2633 16.6775 11.5095 16.4313C11.7556 16.1852 11.8939 15.8513 11.8939 15.5033V11.8939H15.5033C15.8513 11.8939 16.1852 11.7556 16.4313 11.5095C16.6775 11.2633 16.8158 10.9295 16.8158 10.5814C16.8158 10.2333 16.6775 9.89944 16.4313 9.6533C16.1852 9.40716 15.8513 9.26888 15.5033 9.26888H11.8939V5.6595Z"
                fill="white"
              />
            </g>
            <defs>
              <clipPath id="clip0_1_20311">
                <rect width={21} height={21} fill="white" />
              </clipPath>
            </defs>
          </svg>
          <Link to="/dashboard" style={{ color: "white" }}>
            Add Products
          </Link>
        </button>
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

export default HomePage