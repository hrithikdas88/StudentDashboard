import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./Sidebar.scss";
import { useLocation } from "react-router-dom";
const Sidebar = () => {
  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
  };

  const location = useLocation();

  const navigate = useNavigate();
  const { decoded, profilePhoto } = location.state  || {};

  return (
    <div className="sidebar">
      <div className="logo">
        <div className="logo-text">
          {decoded && (
            <div>
              <p className="text-white"> {decoded.name}</p>
              <p className="text-sm text-slate-200"> {decoded.email}</p>
              {profilePhoto && (
                <img className="logo-icon" src={profilePhoto} alt="Profile" />
              )}
            </div>
          )}
        </div>
      </div>
      <ul className="sidebar-menu">
        <li>
          <Link to="/dashboard" className="menu-item ">
            Dashboard
          </Link>
        </li>
        <li>
          <Link to="/dashboard/add" className="menu-item ">
            Add Student details
          </Link>
        </li>
        <li>
          <a href="#" className="menu-item ">
            My tasks
          </a>
        </li>
        <li>
          <a href="#" className="menu-item ">
            Settings
          </a>
        </li>
        <li>
          <a href="#" className="menu-item ">
            Projects
          </a>
        </li>
        <div className="buttons-container">
          <button onClick={handleLogout}>Logout</button>
        </div>
      </ul>
    </div>
  );
};

export default Sidebar;
