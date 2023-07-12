import React from "react";

const AddStudentForm = ({ newStudent, setNewStudent, handleAddStudent }) => {
  return (
    <div className="popup-content">
      <input
        type="text"
        placeholder="Name"
        value={newStudent.name}
        onChange={(e) =>
          setNewStudent({ ...newStudent, name: e.target.value })
        }
      />
      <input
        type="date"
        placeholder="Date of Birth"
        value={newStudent.dateOfBirth}
        onChange={(e) =>
          setNewStudent({
            ...newStudent,
            dateOfBirth: e.target.value,
          })
        }
      />
      <button
        onClick={handleAddStudent}
        disabled={!newStudent.name || !newStudent.dateOfBirth}
      >
        Add Student
      </button>
    </div>
  );
};

export default AddStudentForm;
