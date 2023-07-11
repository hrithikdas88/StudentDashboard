import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchStudents } from "../../store/studentSlice";
import "./Dashboard.scss";
import Sidebar from "../sidebar/Sidebar";

const Dashboard = () => {
  const dispatch = useDispatch();

  const status = useSelector((state) => state.students.status);
  const error = useSelector((state) => state.students.error);

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
      <Sidebar />

      <Outlet />
    </div>
  );
};

export default Dashboard;
