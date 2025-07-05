// src/components/Sidebar.js
import React from 'react';
import {
  FaUserEdit, FaLock, FaCommentDots, FaRegFileAlt, FaInfoCircle,
  FaQuestionCircle, FaClock, FaHistory, FaQrcode, FaGlobe,
  FaSignOutAlt, FaTrashAlt, FaSyncAlt, FaTags, FaWallet
} from 'react-icons/fa';
import { BsBoxArrowUpRight } from 'react-icons/bs';


const Sidebar = ({ onClose }) => {
  const menuItems = [
    { icon: <FaUserEdit />, label: "Edit Profile" },
    { icon: <FaLock />, label: "Change Password" },
    { icon: <FaCommentDots />, label: "Feedback" },
    { icon: <FaRegFileAlt />, label: "Privacy Policy" },
    { icon: <FaInfoCircle />, label: "Terms & Conditions" },
    { icon: <BsBoxArrowUpRight />, label: "Support" },
    { icon: <FaWallet />, label: "My Subscription" },
    { icon: <FaClock />, label: "Store Timing" },
    { icon: <FaQuestionCircle />, label: "FAQ’s" },
    { icon: <FaSyncAlt />, label: "Update Categories" },
    { icon: <FaTags />, label: "Manage Deals" },
    { icon: <FaHistory />, label: "Payment History" },
    { icon: <BsBoxArrowUpRight />, label: "Upgrade Plan" },
    { icon: <FaQrcode />, label: "My QR Code" },
    { icon: <FaGlobe />, label: "My Web Address" },
    { icon: <FaSignOutAlt />, label: "Sign Out" },
    { icon: <FaTrashAlt />, label: "Delete Account", danger: true },
  ];

  return (
    <div className="custom-sidebar shadow">
      <div className="d-flex justify-content-between align-items-center p-3 border-bottom">
        <h5 className="mb-0 fw-bold text-primary">Profinder Business</h5>
        <button className="btn-close" onClick={onClose}></button>
      </div>
      <ul className="list-unstyled p-3">
        {menuItems.map((item, i) => (
          <li
            key={i}
            className={`d-flex align-items-center p-2 mb-2 rounded ${item.danger ? "text-danger" : "text-dark"} sidebar-item`}
          >
            <span className="me-3">{item.icon}</span>
            {item.label}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
