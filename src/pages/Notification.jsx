import React from 'react'

const Notification = () => {
  return (
    <div>
        <>
  <div className="breadcrum-section">
    <div className="container position-relative">
      <div className="nav-item backbtn">
        <a
          href="#"
          className="nav-icons d-flex align-items-center justify-content-center"
        >
          <svg
            width={31}
            height={30}
            viewBox="0 0 31 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19.7087 23.5L11.3516 15.1429L19.7087 6.78571"
              stroke="#353535"
              strokeWidth="3.23143"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </a>
      </div>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb justify-content-center">
          <li className="breadcrumb-item">
            <a href="#">Add Product</a>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Notifications
          </li>
        </ol>
      </nav>
    </div>
  </div>
  <section className="notifications-list-section">
    <div className="container py-5">
      {/* TODAY */}
      <div className="mb-3 d-flex align-items-center">
        <span className="section-label">Today</span>
        <span className="badge-counter">2</span>
      </div>
      <div className="notification-card common-services-card p-3 border-left">
        <div className="notification-content">
          <img
            src="https://randomuser.me/api/portraits/men/10.jpg"
            className="notification-avatar"
            alt=""
          />
          <div>
            <p className="notification-title mb-2">Appointment with Charless</p>
            <p className="notification-subtitle">
              Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit Dolor Sit
              Amet, Consectetur Adipiscing ...
            </p>
          </div>
        </div>
        <div className="notification-time">11:00AM</div>
      </div>
      <div className="notification-card common-services-card p-3 border-left">
        <div className="notification-content">
          <img
            src="https://randomuser.me/api/portraits/men/12.jpg"
            className="notification-avatar"
            alt=""
          />
          <div>
            <p className="notification-title mb-2">New session booked</p>
            <p className="notification-subtitle">
              Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit Dolor Sit
              Amet, Consectetur Adipiscing ...
            </p>
          </div>
        </div>
        <div className="notification-time">11:00AM</div>
      </div>
      <div className="notification-card common-services-card p-3">
        <div className="notification-content">
          <img
            src="https://randomuser.me/api/portraits/men/15.jpg"
            className="notification-avatar"
            alt=""
          />
          <div>
            <p className="notification-title mb-2">Payment Not Added</p>
            <p className="notification-subtitle">
              Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit Dolor Sit
              Amet, Consectetur Adipiscing ...
            </p>
          </div>
        </div>
        <div className="notification-time">11:00AM</div>
      </div>
      {/* YESTERDAY */}
      <div className="mt-4 mb-3 d-flex align-items-center">
        <span className="section-label">Yesterday</span>
        <span className="badge-counter">4</span>
      </div>
      <div className="notification-card common-services-card p-3">
        <div className="notification-content">
          <img
            src="https://randomuser.me/api/portraits/women/20.jpg"
            className="notification-avatar"
            alt=""
          />
          <div>
            <p className="notification-title mb-2">Appointment with Charless</p>
            <p className="notification-subtitle">
              Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit Dolor Sit
              Amet, Consectetur Adipiscing ...
            </p>
          </div>
        </div>
        <div className="notification-time">11:00AM</div>
      </div>
      <div className="notification-card common-services-card p-3">
        <div className="notification-content">
          <img
            src="https://randomuser.me/api/portraits/men/15.jpg"
            className="notification-avatar"
            alt=""
          />
          <div>
            <p className="notification-title mb-2">Payment Not Added</p>
            <p className="notification-subtitle">
              Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit Dolor Sit
              Amet, Consectetur Adipiscing ...
            </p>
          </div>
        </div>
        <div className="notification-time">11:00AM</div>
      </div>
      <div className="notification-card common-services-card p-3">
        <div className="notification-content">
          <img
            src="https://randomuser.me/api/portraits/women/20.jpg"
            className="notification-avatar"
            alt=""
          />
          <div>
            <p className="notification-title mb-2">Appointment with Charless</p>
            <p className="notification-subtitle">
              Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit Dolor Sit
              Amet, Consectetur Adipiscing ...
            </p>
          </div>
        </div>
        <div className="notification-time">11:00AM</div>
      </div>
      <div className="notification-card common-services-card p-3">
        <div className="notification-content">
          <img
            src="https://randomuser.me/api/portraits/men/15.jpg"
            className="notification-avatar"
            alt=""
          />
          <div>
            <p className="notification-title mb-2">Payment Not Added</p>
            <p className="notification-subtitle">
              Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit Dolor Sit
              Amet, Consectetur Adipiscing ...
            </p>
          </div>
        </div>
        <div className="notification-time">11:00AM</div>
      </div>
      <div className="notification-card common-services-card p-3">
        <div className="notification-content">
          <img
            src="https://randomuser.me/api/portraits/women/20.jpg"
            className="notification-avatar"
            alt=""
          />
          <div>
            <p className="notification-title mb-2">Appointment with Charless</p>
            <p className="notification-subtitle">
              Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit Dolor Sit
              Amet, Consectetur Adipiscing ...
            </p>
          </div>
        </div>
        <div className="notification-time">11:00AM</div>
      </div>
      <div className="notification-card common-services-card p-3">
        <div className="notification-content">
          <img
            src="https://randomuser.me/api/portraits/men/15.jpg"
            className="notification-avatar"
            alt=""
          />
          <div>
            <p className="notification-title mb-2">Payment Not Added</p>
            <p className="notification-subtitle">
              Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit Dolor Sit
              Amet, Consectetur Adipiscing ...
            </p>
          </div>
        </div>
        <div className="notification-time">11:00AM</div>
      </div>
      <div className="notification-card common-services-card p-3">
        <div className="notification-content">
          <img
            src="https://randomuser.me/api/portraits/women/20.jpg"
            className="notification-avatar"
            alt=""
          />
          <div>
            <p className="notification-title mb-2">Appointment with Charless</p>
            <p className="notification-subtitle">
              Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit Dolor Sit
              Amet, Consectetur Adipiscing ...
            </p>
          </div>
        </div>
        <div className="notification-time">11:00AM</div>
      </div>
      <div className="notification-card common-services-card p-3">
        <div className="notification-content">
          <img
            src="https://randomuser.me/api/portraits/men/15.jpg"
            className="notification-avatar"
            alt=""
          />
          <div>
            <p className="notification-title mb-2">Payment Not Added</p>
            <p className="notification-subtitle">
              Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit Dolor Sit
              Amet, Consectetur Adipiscing ...
            </p>
          </div>
        </div>
        <div className="notification-time">11:00AM</div>
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
  {/* Button trigger modal */}
  {/* Modal */}
  <div
    className="modal fade"
    id="dealDetailModal"
    tabIndex={-1}
    aria-labelledby="dealDetailLabel"
    aria-hidden="true"
  >
    <div className="modal-dialog modal-dialog-centered">
      <div className="modal-content bg-white">
        <div className="modal-header border-0">
          <h1
            className="modal-title text-center fw-semibold fs-5"
            id="dealDetailLabel"
          >
            Enter Deal Detail
          </h1>
          <button
            type="button"
            className="btn-close text-dark"
            data-bs-dismiss="modal"
            aria-label="Close"
          />
        </div>
        <div className="modal-body border-0">
          <form action="" className="common-form-fields">
            <label htmlFor="" className="form-label">
              Enter Deal Start Date &amp; Time
            </label>
            <div className="position-relative input-icon">
              <input type="date" name="" id="" className="form-control" />
              <span className="icon">
                <svg
                  width={22}
                  height={22}
                  viewBox="0 0 22 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17.4154 3.66683H15.582V2.75016C15.582 2.50705 15.4855 2.27389 15.3135 2.10198C15.1416 1.93007 14.9085 1.8335 14.6654 1.8335C14.4222 1.8335 14.1891 1.93007 14.0172 2.10198C13.8453 2.27389 13.7487 2.50705 13.7487 2.75016V3.66683H8.2487V2.75016C8.2487 2.50705 8.15212 2.27389 7.98021 2.10198C7.8083 1.93007 7.57515 1.8335 7.33203 1.8335C7.08892 1.8335 6.85576 1.93007 6.68385 2.10198C6.51194 2.27389 6.41536 2.50705 6.41536 2.75016V3.66683H4.58203C3.85269 3.66683 3.15321 3.95656 2.63749 4.47229C2.12176 4.98801 1.83203 5.68748 1.83203 6.41683V17.4168C1.83203 18.1462 2.12176 18.8456 2.63749 19.3614C3.15321 19.8771 3.85269 20.1668 4.58203 20.1668H17.4154C18.1447 20.1668 18.8442 19.8771 19.3599 19.3614C19.8756 18.8456 20.1654 18.1462 20.1654 17.4168V6.41683C20.1654 5.68748 19.8756 4.98801 19.3599 4.47229C18.8442 3.95656 18.1447 3.66683 17.4154 3.66683ZM18.332 17.4168C18.332 17.6599 18.2355 17.8931 18.0635 18.065C17.8916 18.2369 17.6585 18.3335 17.4154 18.3335H4.58203C4.33892 18.3335 4.10576 18.2369 3.93385 18.065C3.76194 17.8931 3.66536 17.6599 3.66536 17.4168V11.0002H18.332V17.4168ZM18.332 9.16683H3.66536V6.41683C3.66536 6.17371 3.76194 5.94056 3.93385 5.76865C4.10576 5.59674 4.33892 5.50016 4.58203 5.50016H6.41536V6.41683C6.41536 6.65994 6.51194 6.8931 6.68385 7.06501C6.85576 7.23692 7.08892 7.3335 7.33203 7.3335C7.57515 7.3335 7.8083 7.23692 7.98021 7.06501C8.15212 6.8931 8.2487 6.65994 8.2487 6.41683V5.50016H13.7487V6.41683C13.7487 6.65994 13.8453 6.8931 14.0172 7.06501C14.1891 7.23692 14.4222 7.3335 14.6654 7.3335C14.9085 7.3335 15.1416 7.23692 15.3135 7.06501C15.4855 6.8931 15.582 6.65994 15.582 6.41683V5.50016H17.4154C17.6585 5.50016 17.8916 5.59674 18.0635 5.76865C18.2355 5.94056 18.332 6.17371 18.332 6.41683V9.16683Z"
                    fill="#44474B"
                  />
                </svg>
              </span>
            </div>
            <label htmlFor="" className="form-label">
              Enter Deal Start Date &amp; Time
            </label>
            <div className="position-relative input-icon">
              <input type="date" name="" id="" className="form-control" />
              <span className="icon">
                <svg
                  width={22}
                  height={22}
                  viewBox="0 0 22 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17.4154 3.66683H15.582V2.75016C15.582 2.50705 15.4855 2.27389 15.3135 2.10198C15.1416 1.93007 14.9085 1.8335 14.6654 1.8335C14.4222 1.8335 14.1891 1.93007 14.0172 2.10198C13.8453 2.27389 13.7487 2.50705 13.7487 2.75016V3.66683H8.2487V2.75016C8.2487 2.50705 8.15212 2.27389 7.98021 2.10198C7.8083 1.93007 7.57515 1.8335 7.33203 1.8335C7.08892 1.8335 6.85576 1.93007 6.68385 2.10198C6.51194 2.27389 6.41536 2.50705 6.41536 2.75016V3.66683H4.58203C3.85269 3.66683 3.15321 3.95656 2.63749 4.47229C2.12176 4.98801 1.83203 5.68748 1.83203 6.41683V17.4168C1.83203 18.1462 2.12176 18.8456 2.63749 19.3614C3.15321 19.8771 3.85269 20.1668 4.58203 20.1668H17.4154C18.1447 20.1668 18.8442 19.8771 19.3599 19.3614C19.8756 18.8456 20.1654 18.1462 20.1654 17.4168V6.41683C20.1654 5.68748 19.8756 4.98801 19.3599 4.47229C18.8442 3.95656 18.1447 3.66683 17.4154 3.66683ZM18.332 17.4168C18.332 17.6599 18.2355 17.8931 18.0635 18.065C17.8916 18.2369 17.6585 18.3335 17.4154 18.3335H4.58203C4.33892 18.3335 4.10576 18.2369 3.93385 18.065C3.76194 17.8931 3.66536 17.6599 3.66536 17.4168V11.0002H18.332V17.4168ZM18.332 9.16683H3.66536V6.41683C3.66536 6.17371 3.76194 5.94056 3.93385 5.76865C4.10576 5.59674 4.33892 5.50016 4.58203 5.50016H6.41536V6.41683C6.41536 6.65994 6.51194 6.8931 6.68385 7.06501C6.85576 7.23692 7.08892 7.3335 7.33203 7.3335C7.57515 7.3335 7.8083 7.23692 7.98021 7.06501C8.15212 6.8931 8.2487 6.65994 8.2487 6.41683V5.50016H13.7487V6.41683C13.7487 6.65994 13.8453 6.8931 14.0172 7.06501C14.1891 7.23692 14.4222 7.3335 14.6654 7.3335C14.9085 7.3335 15.1416 7.23692 15.3135 7.06501C15.4855 6.8931 15.582 6.65994 15.582 6.41683V5.50016H17.4154C17.6585 5.50016 17.8916 5.59674 18.0635 5.76865C18.2355 5.94056 18.332 6.17371 18.332 6.41683V9.16683Z"
                    fill="#44474B"
                  />
                </svg>
              </span>
            </div>
            <label htmlFor="" className="form-label">
              Offer Price (£200)
            </label>
            <input name="" id="" className="form-control" defaultValue={150} />
          </form>
        </div>
        <div className="modal-footer border-0">
          <div className="row w-100">
            <div className="col-6">
              <button
                type="button"
                className="btn btn-grey-blue w-100 py-3"
                data-bs-dismiss="modal"
              >
                Cancel
              </button>
            </div>
            <div className="col-6">
              <button type="button" className="btn btn-primary w-100 py-3">
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</>

    </div>
  )
}

export default Notification