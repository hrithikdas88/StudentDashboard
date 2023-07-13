import React from "react";
import { RiSave2Line, RiCloseCircleLine } from "react-icons/ri";

const EditableFields = ({ editedStudent, handleEditInputChange, handleEditSubmit, handleCancelEdit }) => {
  return (
    <div className="editable-fields">
      <div className="editable-field">
        <input
          type="text"
          name="name"
          value={editedStudent.name}
          onChange={handleEditInputChange}
        />
      </div>
      <div className="editable-field">
        <input
          type="date"
          name="dateOfBirth"
          value={editedStudent.dateOfBirth}
          onChange={handleEditInputChange}
        />
      </div>
      <div className="edit-actions">
        <button className="save-button" onClick={handleEditSubmit}>
          <RiSave2Line />
        </button>
        <button className="cancel-button" onClick={handleCancelEdit}>
          <RiCloseCircleLine />
        </button>
      </div>
    </div>
  );
};

export default EditableFields;
