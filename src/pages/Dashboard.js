import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchStudents } from "../store/studentSlice";
import "./Dashboard.scss";

import { useState } from "react";

const Dashboard = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const students = useSelector((state) => state.students.data);
  const status = useSelector((state) => state.students.status);
  const error = useSelector((state) => state.students.error);

  // search logic
  const [searchTerm, setSearchTerm] = useState("");
  const filteredStudents = students.filter((student) =>
    student.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  //sort logic
  const [sortOrder, setSortOrder] = useState('asc'); 

  const sortedStudents = [...filteredStudents];
  if (sortOrder !== "") {
    sortedStudents.sort((a, b) => {
      if (sortOrder === "asc") {
        return new Date(a.dateOfBirth) - new Date(b.dateOfBirth);
      } else {
        return new Date(b.dateOfBirth) - new Date(a.dateOfBirth);
      }
    });
  }

  const handleSortOrderChange = (event) => {
    setSortOrder(event.target.value);
  };

  

  const handleLogout = () => {
    navigate("/");
  };

  useEffect(() => {
    dispatch(fetchStudents());
  }, [dispatch]);

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (status === "failed") {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="flex">
      <div className="sidebar">
        <div className="logo">
          <div className="logo-icon">UI</div>
          <div className="logo-text">
            <p className="text-white">Untitled UI</p>
            <p className="text-sm text-slate-200">info@untitled.com</p>
          </div>
        </div>
        <ul className="sidebar-menu">
          <li>
            <a href="#" className="menu-item active">
              Dashboard
            </a>
          </li>
          <li>
            <a href="#" className="menu-item">
              Store
            </a>
          </li>
          <li>
            <a href="#" className="menu-item">
              My tasks
            </a>
          </li>
          <li>
            <a href="#" className="menu-item">
              Settings
            </a>
          </li>
          <li>
            <a href="#" className="menu-item">
              Projects
            </a>
          </li>
        </ul>
      </div>

     
        <div className="content">
        <h2 className="page-title">Welcome to your Dashboard</h2>

        <div className="sort-container">
  <label htmlFor="sort-order" className="sort-label">Sort Order:</label>
  <div className="sort-select-wrapper">
    <select
      id="sort-order"
      value={sortOrder}
      onChange={handleSortOrderChange}
      className="sort-select"
    >
      <option value="">No Sort</option>
      <option value="asc">Ascending</option>
      <option value="desc">Descending</option>
    </select>
    <span className="sort-select-icon">&#9662;</span>
  </div>
</div>

        <input
          type="text"
          placeholder="Search by student name"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <div className="student-list">
          {sortedStudents.map((student) => (
            <div key={student.id} className="card">
              <h3>{student.name}</h3>
              <p>DoB: {student.dateOfBirth}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
