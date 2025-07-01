import React from 'react'

const Chat = () => {
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
            Chat
          </li>
        </ol>
      </nav>
    </div>
  </div>
  <section>
    <div className="container">
      <div className="d-flex gap-4" id="SingleChatId">
        <div className="chat-list-outer dashboard-card common-services-card p-0">
          <div className="p-3">
            <div className="search-outer d-flex align-items-center gap-3 py-2">
              <div>
                <i className="bi bi-search" />
              </div>
              <div className="w-100">
                <input
                  type="search"
                  name=""
                  id=""
                  placeholder="Search Chat"
                  className="w-100"
                />
              </div>
            </div>
          </div>
          <h4 className="chat-listtype text-dark mx-4 mb-2">Active Chats</h4>
          <ul className="chat-list list-unstyled">
            <li>
              <a
                href="javascript:void(0);"
                className="d-flex align-items-center gap-2 single-chat-user"
              >
                <div>
                  <img
                    src="./assets/img/user-img.png"
                    alt=""
                    className="rounded-circle user-prfil-pic object-fit-cover"
                  />
                </div>
                <div className="messageUser-area">
                  <div className="d-flex align-items-center justify-content-between gap-2">
                    <h5 className="user-name text-primary mb-0">Profinderr</h5>
                    <div>
                      <span className="dateTime">11:12PM</span>
                    </div>
                  </div>
                  <div className="d-flex align-items-center justify-content-between gap-2">
                    <p className="msg-prev mb-0">Hey! Your are there 😆</p>
                    <span className="msg-numb d-flex align-items-center justify-content-center rounded-circle">
                      2
                    </span>
                  </div>
                </div>
              </a>
            </li>
            <li>
              <a
                href="javascript:void(0);"
                className="d-flex align-items-center gap-2 single-chat-user active"
              >
                <div>
                  <img
                    src="./assets/img/user-img.png"
                    alt=""
                    className="rounded-circle user-prfil-pic object-fit-cover"
                  />
                </div>
                <div className="messageUser-area">
                  <div className="d-flex align-items-center justify-content-between gap-2">
                    <h5 className="user-name text-white mb-0">Jamison Jen</h5>
                    <div>
                      <span className="dateTime">11:12PM</span>
                    </div>
                  </div>
                  <p className="msg-prev typing mb-0">Typing..</p>
                </div>
              </a>
            </li>
            <li>
              <a
                href="javascript:void(0);"
                className="d-flex align-items-center gap-2 single-chat-user"
              >
                <div>
                  <img
                    src="./assets/img/user-img.png"
                    alt=""
                    className="rounded-circle user-prfil-pic object-fit-cover"
                  />
                </div>
                <div className="messageUser-area">
                  <div className="d-flex align-items-center justify-content-between gap-2">
                    <h5 className="user-name text-dark mb-0">Andy Max</h5>
                    <div>
                      <span className="dateTime">11:12PM</span>
                    </div>
                  </div>
                  <div className="d-flex align-items-center justify-content-between gap-2">
                    <p className="msg-prev mb-0">Great! good work</p>
                    <span>
                      <img
                        src="./assets/images/icons/ci_check-all.svg"
                        alt=""
                      />
                    </span>
                  </div>
                </div>
              </a>
            </li>
          </ul>
          <h4 className="chat-listtype text-dark mx-4 mb-2">All Chats</h4>
          <ul className="chat-list list-unstyled">
            <li>
              <a
                href="javascript:void(0);"
                className="d-flex align-items-center gap-2 single-chat-user"
              >
                <div>
                  <img
                    src="./assets/img/user-img.png"
                    alt=""
                    className="rounded-circle user-prfil-pic object-fit-cover"
                  />
                </div>
                <div className="messageUser-area">
                  <div className="d-flex align-items-center justify-content-between gap-2">
                    <h5 className="user-name text-dark mb-0">Rony Max</h5>
                    <div>
                      <span className="dateTime">11:12PM</span>
                    </div>
                  </div>
                  <p className="msg-prev mb-0">Lorem ipsum doller set</p>
                </div>
              </a>
            </li>
            <li>
              <a
                href="javascript:void(0);"
                className="d-flex align-items-center gap-2 single-chat-user "
              >
                <div>
                  <img
                    src="./assets/img/user-img.png"
                    alt=""
                    className="rounded-circle user-prfil-pic object-fit-cover"
                  />
                </div>
                <div className="messageUser-area">
                  <div className="d-flex align-items-center justify-content-between gap-2">
                    <h5 className="user-name text-dark mb-0">Rony Max</h5>
                    <div>
                      <span className="dateTime">11:12PM</span>
                    </div>
                  </div>
                  <p className="msg-prev mb-0">Lorem ipsum doller set</p>
                </div>
              </a>
            </li>
            <li>
              <a
                href="javascript:void(0);"
                className="d-flex align-items-center gap-2 single-chat-user"
              >
                <div>
                  <img
                    src="./assets/img/user-img.png"
                    alt=""
                    className="rounded-circle user-prfil-pic object-fit-cover"
                  />
                </div>
                <div className="messageUser-area">
                  <div className="d-flex align-items-center justify-content-between gap-2">
                    <h5 className="user-name text-dark mb-0">Rony Max</h5>
                    <div>
                      <span className="dateTime">11:12PM</span>
                    </div>
                  </div>
                  <p className="msg-prev mb-0">Lorem ipsum doller set</p>
                </div>
              </a>
            </li>
            <li>
              <a
                href="javascript:void(0);"
                className="d-flex align-items-center gap-2 single-chat-user"
              >
                <div>
                  <img
                    src="./assets/img/user-img.png"
                    alt=""
                    className="rounded-circle user-prfil-pic object-fit-cover"
                  />
                </div>
                <div className="messageUser-area">
                  <div className="d-flex align-items-center justify-content-between gap-2">
                    <h5 className="user-name text-dark mb-0">Rony Max</h5>
                    <div>
                      <span className="dateTime">11:12PM</span>
                    </div>
                  </div>
                  <p className="msg-prev mb-0">Lorem ipsum doller set</p>
                </div>
              </a>
            </li>
            <li>
              <a
                href="javascript:void(0);"
                className="d-flex align-items-center gap-2 single-chat-user"
              >
                <div>
                  <img
                    src="./assets/img/user-img.png"
                    alt=""
                    className="rounded-circle user-prfil-pic object-fit-cover"
                  />
                </div>
                <div className="messageUser-area">
                  <div className="d-flex align-items-center justify-content-between gap-2">
                    <h5 className="user-name text-dark mb-0">Rony Max</h5>
                    <div>
                      <span className="dateTime">11:12PM</span>
                    </div>
                  </div>
                  <p className="msg-prev mb-0">Lorem ipsum doller set</p>
                </div>
              </a>
            </li>
            <li>
              <a
                href="javascript:void(0);"
                className="d-flex align-items-center gap-2 single-chat-user"
              >
                <div>
                  <img
                    src="./assets/img/user-img.png"
                    alt=""
                    className="rounded-circle user-prfil-pic object-fit-cover"
                  />
                </div>
                <div className="messageUser-area">
                  <div className="d-flex align-items-center justify-content-between gap-2">
                    <h5 className="user-name text-dark mb-0">Rony Max</h5>
                    <div>
                      <span className="dateTime">11:12PM</span>
                    </div>
                  </div>
                  <p className="msg-prev mb-0">Lorem ipsum doller set</p>
                </div>
              </a>
            </li>
          </ul>
        </div>
        <div className="chat-messages-outer dashboard-card common-services-card position-relative">
          <div className="chat-profile-links d-flex align-items-center justify-content-between gap-3">
            <div className="active-chatUser d-flex align-items-center gap-2">
              <div className="backtoChatlist text-white px-2 d-block d-lg-none">
                <i className="fa-solid fa-chevron-left" />
              </div>
              <div>
                <img
                  src="./assets/img/user-img.png"
                  alt=""
                  className="rounded-circle user-prfil-pic object-fit-cover"
                />
              </div>
              <div className="messageUser-area">
                <h5 className="user-name text-dark mb-0">Jamison Jen</h5>
                <p className="msg-prev typing mb-0">Typing..</p>
              </div>
            </div>
            <div className="d-flex align-items-center gap-2">
              <div className="icon-file">
                <svg
                  width={19}
                  height={19}
                  viewBox="0 0 19 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3.0348 3.16659H6.58938L7.73492 6.03084L5.8943 7.25792C5.78591 7.33024 5.69704 7.42819 5.63559 7.54309C5.57413 7.65799 5.54199 7.78628 5.54201 7.91659C5.54438 7.991 5.54201 7.91738 5.54201 7.91738V7.934C5.5424 7.96941 5.54399 8.00479 5.54676 8.04009C5.55098 8.10553 5.56021 8.19261 5.57446 8.30134C5.60534 8.51509 5.66471 8.80959 5.7803 9.15634C6.01305 9.853 6.46905 10.7547 7.3573 11.643C8.24555 12.5312 9.14726 12.9872 9.84313 13.22C10.1907 13.3355 10.4844 13.3941 10.6997 13.4258C10.8212 13.4434 10.9436 13.454 11.0663 13.4575L11.0765 13.4583H11.0829C11.0829 13.4583 11.1715 13.4535 11.0837 13.4583C11.2307 13.4582 11.3747 13.4172 11.4997 13.3399C11.6247 13.2625 11.7257 13.1519 11.7914 13.0205L12.3218 11.9596L15.8337 12.5455V15.9655C14.1625 16.2069 9.64838 16.4452 6.10171 12.8985C2.55505 9.35188 2.79255 4.837 3.0348 3.16659ZM7.18313 8.30134L8.61367 7.34817C8.91589 7.14659 9.13959 6.84722 9.24727 6.50027C9.35494 6.15332 9.34003 5.77989 9.20505 5.44263L8.05951 2.57838C7.94195 2.28459 7.73907 2.03277 7.47703 1.8554C7.21499 1.67802 6.90581 1.58323 6.58938 1.58325H2.99363C2.27401 1.58325 1.59713 2.08279 1.47917 2.86338C1.21001 4.63829 0.845049 9.88071 4.9823 14.018C9.11955 18.1552 14.362 17.7895 16.1369 17.5211C16.9175 17.4023 17.417 16.7263 17.417 16.0066V12.5455C17.4171 12.1707 17.2841 11.808 17.0419 11.522C16.7997 11.236 16.4638 11.0452 16.0941 10.9835L12.5823 10.3985C12.2483 10.3427 11.9052 10.3955 11.6034 10.5491C11.3016 10.7027 11.057 10.949 10.9055 11.2519L10.6316 11.8005C10.5348 11.7764 10.439 11.7487 10.3443 11.7174C9.85342 11.5543 9.1718 11.2186 8.47672 10.5235C7.78163 9.82846 7.44596 9.14684 7.28288 8.65521C7.24444 8.53885 7.21141 8.42076 7.18392 8.30134H7.18313Z"
                    fill="#000"
                  />
                </svg>
              </div>
              <div className="icon-file px-3">
                <svg
                  width={4}
                  height={19}
                  viewBox="0 0 4 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_0_2711)">
                    <path
                      d="M4.13031 9.5C4.13031 10.0476 3.91278 10.5727 3.52558 10.9599C3.13838 11.3471 2.61323 11.5647 2.06564 11.5647C1.51806 11.5647 0.992904 11.3471 0.605703 10.9599C0.218503 10.5727 0.000976563 10.0476 0.000976562 9.5C0.000976562 8.95242 0.218503 8.42726 0.605703 8.04006C0.992904 7.65286 1.51806 7.43533 2.06564 7.43533C2.61323 7.43533 3.13838 7.65286 3.52558 8.04006C3.91278 8.42726 4.13031 8.95242 4.13031 9.5ZM4.13031 2.06467C4.13031 2.61225 3.91278 3.13741 3.52558 3.52461C3.13838 3.91181 2.61323 4.12933 2.06564 4.12933C1.51806 4.12933 0.992904 3.91181 0.605703 3.52461C0.218503 3.13741 0.000976563 2.61225 0.000976562 2.06467C0.000976562 1.51708 0.218503 0.991927 0.605703 0.604727C0.992904 0.217527 1.51806 0 2.06564 0C2.61323 0 3.13838 0.217527 3.52558 0.604727C3.91278 0.991927 4.13031 1.51708 4.13031 2.06467ZM4.13031 16.9345C4.13031 17.4821 3.91278 18.0073 3.52558 18.3945C3.13838 18.7817 2.61323 18.9992 2.06564 18.9992C1.51806 18.9992 0.992904 18.7817 0.605703 18.3945C0.218503 18.0073 0.000976563 17.4821 0.000976562 16.9345C0.000976562 16.387 0.218503 15.8618 0.605703 15.4746C0.992904 15.0874 1.51806 14.8699 2.06564 14.8699C2.61323 14.8699 3.13838 15.0874 3.52558 15.4746C3.91278 15.8618 4.13031 16.387 4.13031 16.9345Z"
                      fill="#000"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_0_2711">
                      <rect width="3.95833" height={19} fill="#000" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
            </div>
          </div>
          <div className="chat-container d-flex flex-column gap-1 h-100">
            <div className="chat-row">
              <div className="profilepic-outer">
                <img
                  src="./assets/img/jamison-pic.png"
                  alt="Jamison"
                  className="profile-img"
                />
              </div>
              <div>
                <div className="chat-message recieved">
                  It Is A Long Established Fact That A Reader Will Be Distract
                </div>
                <div className="name-chattime">
                  <h5 className="name">Jamison Jen</h5>
                  <div className="chat-timestamp">11:00AM</div>
                </div>
              </div>
            </div>
            <div className="chat-row sent-msg">
              <div>
                <div className="chat-message sent">
                  It Is A Long Fact That A Reader Will Be Distract As Opposed To
                  Using
                </div>
                <div className="name-chattime">
                  <h5 className="name">You</h5>
                  <div className="chat-timestamp">11:00AM</div>
                </div>
              </div>
              <div className="profilepic-outer">
                <img
                  src="./assets/img/my-pic.png"
                  alt="You"
                  className="profile-img"
                />
              </div>
            </div>
            <div className="chat-row">
              <div className="profilepic-outer">
                <img
                  src="./assets/img/jamison-pic.png"
                  alt="Jamison"
                  className="profile-img"
                />
              </div>
              <div>
                <div className="chat-message recieved">
                  It Is A Long Established Fact That A Reader Will Be Distract
                </div>
                <div className="name-chattime">
                  <h5 className="name">Jamison Jen</h5>
                  <div className="chat-timestamp">11:00AM</div>
                </div>
              </div>
            </div>
            <div className="chat-row sent-msg">
              <div>
                <div className="chat-message sent">
                  It Is A Long Fact That A Reader Will Be Distract As Opposed To
                  Using
                </div>
                <div className="name-chattime">
                  <h5 className="name">You</h5>
                  <div className="chat-timestamp">11:00AM</div>
                </div>
              </div>
              <div className="profilepic-outer">
                <img
                  src="./assets/img/my-pic.png"
                  alt="You"
                  className="profile-img"
                />
              </div>
            </div>
            <div className="msg-input-area d-flex align-items-center gap-2 justify-content-between">
              <textarea
                type="text"
                className="form-control me-2"
                placeholder="Type Message Here"
                rows={1}
                defaultValue={""}
              />
              <div className="d-flex align-items-center gap-2">
                <div className="icon-file">
                  <svg
                    width={26}
                    height={26}
                    viewBox="0 0 26 26"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12.9997 2.16675C18.983 2.16675 23.833 7.01683 23.833 13.0001C23.833 18.9833 18.983 23.8334 12.9997 23.8334C7.01647 23.8334 2.16638 18.9833 2.16638 13.0001C2.16638 7.01683 7.01647 2.16675 12.9997 2.16675ZM12.9997 4.33341C10.7012 4.33341 8.49677 5.24651 6.87146 6.87182C5.24614 8.49714 4.33305 10.7015 4.33305 13.0001C4.33305 15.2986 5.24614 17.503 6.87146 19.1283C8.49677 20.7537 10.7012 21.6667 12.9997 21.6667C15.2983 21.6667 17.5027 20.7537 19.128 19.1283C20.7533 17.503 21.6664 15.2986 21.6664 13.0001C21.6664 10.7015 20.7533 8.49714 19.128 6.87182C17.5027 5.24651 15.2983 4.33341 12.9997 4.33341ZM16.033 15.0118C16.1341 14.9099 16.2544 14.829 16.387 14.774C16.5196 14.7189 16.6619 14.6908 16.8054 14.6912C16.949 14.6916 17.091 14.7205 17.2233 14.7763C17.3556 14.8321 17.4755 14.9136 17.576 15.0161C17.6765 15.1186 17.7556 15.2401 17.8088 15.3734C17.8619 15.5068 17.8881 15.6494 17.8856 15.793C17.8832 15.9365 17.8522 16.0781 17.7945 16.2096C17.7369 16.3411 17.6537 16.4598 17.5497 16.5588C16.336 17.7517 14.7015 18.4191 12.9997 18.4167C11.2979 18.4191 9.66348 17.7517 8.44972 16.5588C8.24933 16.3567 8.13655 16.0838 8.13577 15.7992C8.13498 15.5145 8.24625 15.241 8.44552 15.0378C8.64478 14.8345 8.91604 14.7178 9.20063 14.713C9.48523 14.7081 9.7603 14.8155 9.96638 15.0118C10.7752 15.8076 11.8651 16.2525 12.9997 16.2501C14.1805 16.2501 15.2498 15.7788 16.033 15.0118ZM9.20805 8.66675C9.63902 8.66675 10.0524 8.83795 10.3571 9.1427C10.6618 9.44745 10.833 9.86077 10.833 10.2917C10.833 10.7227 10.6618 11.136 10.3571 11.4408C10.0524 11.7455 9.63902 11.9167 9.20805 11.9167C8.77707 11.9167 8.36375 11.7455 8.059 11.4408C7.75425 11.136 7.58305 10.7227 7.58305 10.2917C7.58305 9.86077 7.75425 9.44745 8.059 9.1427C8.36375 8.83795 8.77707 8.66675 9.20805 8.66675ZM16.7914 8.66675C17.2224 8.66675 17.6357 8.83795 17.9404 9.1427C18.2452 9.44745 18.4164 9.86077 18.4164 10.2917C18.4164 10.7227 18.2452 11.136 17.9404 11.4408C17.6357 11.7455 17.2224 11.9167 16.7914 11.9167C16.3604 11.9167 15.9471 11.7455 15.6423 11.4408C15.3376 11.136 15.1664 10.7227 15.1664 10.2917C15.1664 9.86077 15.3376 9.44745 15.6423 9.1427C15.9471 8.83795 16.3604 8.66675 16.7914 8.66675Z"
                      fill="#1D1D1D"
                    />
                  </svg>
                </div>
                <div className="icon-file">
                  <svg
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.29 21C8.46382 20.996 7.64668 20.8278 6.88614 20.505C6.1256 20.1823 5.43686 19.7115 4.86 19.12C4.28746 18.5774 3.82755 17.9272 3.50658 17.2066C3.18561 16.486 3.00987 15.7092 2.98944 14.9206C2.96901 14.1321 3.10427 13.3472 3.38749 12.611C3.67071 11.8747 4.09633 11.2016 4.64 10.63L12 3.20001C12.3927 2.80722 12.8611 2.4983 13.3768 2.29202C13.8925 2.08575 14.4447 1.9864 15 2.00001C15.5947 2.00204 16.1831 2.12245 16.7307 2.35423C17.2784 2.58601 17.7745 2.92452 18.19 3.35001C19.017 4.14625 19.4966 5.23653 19.5247 6.38419C19.5527 7.53185 19.1271 8.64428 18.34 9.48001L10.94 16.91C10.703 17.1486 10.4209 17.3378 10.1102 17.4666C9.79951 17.5953 9.46632 17.6611 9.13 17.66C8.76667 17.6605 8.40693 17.5882 8.07201 17.4473C7.7371 17.3065 7.43379 17.1 7.18 16.84C6.67272 16.3489 6.37977 15.6774 6.36479 14.9715C6.34981 14.2655 6.61402 13.5822 7.1 13.07L13.93 6.21001C14.1244 6.08091 14.3578 6.02386 14.5898 6.04873C14.8218 6.07359 15.0378 6.17881 15.2004 6.34617C15.3631 6.51353 15.462 6.73248 15.4802 6.96512C15.4984 7.19775 15.4346 7.42942 15.3 7.62001L8.47 14.48C8.3561 14.6172 8.30067 14.7937 8.31563 14.9714C8.3306 15.1491 8.41476 15.3138 8.55 15.43C8.69071 15.5717 8.8804 15.654 9.08 15.66C9.15393 15.6611 9.22734 15.6475 9.296 15.62C9.36465 15.5926 9.42719 15.5518 9.48 15.5L16.87 8.07001C17.2848 7.60919 17.5016 7.00364 17.4735 6.38426C17.4455 5.76488 17.1748 5.18142 16.72 4.76001C16.2976 4.32145 15.7231 4.06147 15.1149 4.03357C14.5066 4.00567 13.9108 4.21196 13.45 4.61001L6.06 12C5.70064 12.386 5.42116 12.8392 5.23762 13.3336C5.05409 13.828 4.97013 14.3538 4.99058 14.8808C5.01102 15.4077 5.13547 15.9255 5.35676 16.4042C5.57805 16.8828 5.89181 17.313 6.28 17.67C6.66927 18.0736 7.13506 18.3955 7.65016 18.617C8.16525 18.8384 8.71932 18.9551 9.28 18.96C9.76341 18.9639 10.2428 18.8723 10.6908 18.6904C11.1387 18.5085 11.5462 18.2399 11.89 17.9L19.28 10.47C19.3726 10.3768 19.4826 10.3027 19.6038 10.252C19.725 10.2013 19.8551 10.1749 19.9865 10.1745C20.1179 10.174 20.2481 10.1994 20.3696 10.2493C20.4912 10.2991 20.6018 10.3724 20.695 10.465C20.7882 10.5576 20.8623 10.6676 20.913 10.7888C20.9637 10.9101 20.9901 11.0401 20.9906 11.1715C20.991 11.3029 20.9656 11.4331 20.9157 11.5546C20.8659 11.6762 20.7926 11.7868 20.7 11.88L13.31 19.31C12.7853 19.844 12.1597 20.2684 11.4696 20.5585C10.7795 20.8486 10.0386 20.9987 9.29 21Z"
                      fill="#1D1D1D"
                    />
                  </svg>
                </div>
                <button className="btn btn-sendmsg">
                  <svg
                    width={32}
                    height={32}
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M26.9794 7.58125C27.5554 5.98792 26.0114 4.44392 24.4181 5.02125L4.94474 12.0639C3.34607 12.6426 3.15274 14.8239 4.6234 15.6759L10.8394 19.2746L16.3901 13.7239C16.6415 13.481 16.9783 13.3466 17.3279 13.3497C17.6775 13.3527 18.012 13.4929 18.2592 13.7402C18.5064 13.9874 18.6466 14.3218 18.6496 14.6714C18.6527 15.021 18.5183 15.3578 18.2754 15.6093L12.7247 21.1599L16.3247 27.3759C17.1754 28.8466 19.3567 28.6519 19.9354 27.0546L26.9794 7.58125Z"
                      fill="white"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
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

export default Chat