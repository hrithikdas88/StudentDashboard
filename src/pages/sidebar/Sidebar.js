import React from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import './Sidebar.scss'
import { useLocation } from 'react-router-dom';
const Sidebar = () => {
    const handleLogout = () => {
    localStorage.clear();
    navigate("/");
  };

  const location = useLocation();
  //const decodedData = location.state;
  const navigate = useNavigate();
  const { decoded, profilePhoto } = location.state;

  return (
    <div className="sidebar">
    <div className="logo">
      {/* <div className="logo-icon">UI</div> */}
      <div className="logo-text">
        
        
      {decoded && (
        <div>
          <p className="text-white"> {decoded.name}</p>
          <p className="text-sm text-slate-200"> {decoded.email}</p>
          {profilePhoto && <img className='logo-icon' src={profilePhoto} alt="Profile" />}
          {/* Display other details from the decoded data */}
        </div>
      )}
        
        {/* <p className="text-white">Untitled UI</p>
        <p className="text-sm text-slate-200">info@untitled.com</p> */}
      </div>
    </div>
    <ul className="sidebar-menu">
      <li>
        <Link to="/dashboard" className="menu-item ">
          Dashboard
        </Link>
      </li>
      <li>
        <Link to="/AddstudentDetails"  className="menu-item ">
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
  )
}

export default Sidebar