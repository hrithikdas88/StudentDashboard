import React, { useState } from "react";
import { RiDeleteBin6Line, RiEditFill } from "react-icons/ri";
import useFilteredAndSortedStudents from "../CustomHooks/useFilteredAndSortedStudents";
import EditableFields from "../EditableFields/EditableFields";
import "./StudentCard.scss";

const StudentCard = ({ student }) => {
  const {
    editedStudent,
    isEditing,
    handleEditClick,
    handleEditInputChange,
    handleEditSubmit,
    handleCancelEdit,
    handleDeleteStudent,
  } = useFilteredAndSortedStudents();

  return (
    <div className="card">
      {isEditing ? (
        <EditableFields
          editedStudent={editedStudent}
          handleEditInputChange={handleEditInputChange}
          handleEditSubmit={() => handleEditSubmit(student.id)}
          handleCancelEdit={handleCancelEdit}
        />
      ) : (
        <>
          <h3>{student.name}</h3>
          <p>DoB: {student.dateOfBirth}</p>
          <button
            className="edit-button"
            onClick={() => handleEditClick(student)}
          >
            <RiEditFill />
          </button>
          <button
            className="delete-button"
            onClick={() => handleDeleteStudent(student.id)}
          >
            <RiDeleteBin6Line />
          </button>
        </>
      )}
    </div>
  );
};

export default StudentCard;
