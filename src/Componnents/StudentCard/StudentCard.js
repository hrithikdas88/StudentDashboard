import React from "react";
import { RiDeleteBin6Line } from "react-icons/ri";

const StudentCard = ({ student, handleDeleteStudent }) => {
  return (
    <div key={student.id} className="card">
      <h3>{student.name}</h3>
      <p>DoB: {student.dateOfBirth}</p>
      <button
        className="delete-button"
        onClick={() => handleDeleteStudent(student.id)}
      >
        <RiDeleteBin6Line />
      </button>
    </div>
  );
};

export default StudentCard;
