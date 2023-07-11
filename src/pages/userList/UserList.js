import React from "react";
import useFilteredAndSortedStudents from "../../Componnents/CustomHooks/useFilteredAndSortedStudents";
import { useSelector } from "react-redux";
import { RiDeleteBin6Line } from "react-icons/ri";
import "./UserList.scss";
import { BsFileEarmarkPlus,BsX } from "react-icons/bs";



const UserList = () => {
  const students = useSelector((state) => state.students.data);

  const {
    searchTerm,
    setSearchTerm,
    sortedStudents,
    handleSortOrderChange,
    sortOrder,
    handleAddStudent,
    isPopupOpen,
    newStudent,
    setNewStudent,
    setPopupOpen,
    handleDeleteStudent,
  } = useFilteredAndSortedStudents(students);


  const handleClosePopup = () => {
    
    setPopupOpen(false);
  };

  return (
    <div>
      <div className="content">
        <h2 className="page-title"> Dashboard</h2>

        <div className="sort-container">
          <div className="sort-select-wrapper">
            <select
              id="sort-order"
              value={sortOrder}
              onChange={handleSortOrderChange}
              className="sort-select"
            >
              <option>Sort</option>
              <option value="asc">Ascending</option>
              <option value="desc">Descending</option>
            </select>
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
              <button
                className="delete-button"
                onClick={() => handleDeleteStudent(student.id)}
              >
                <RiDeleteBin6Line />
              </button>
            </div>
          ))}
          <div>
            <button onClick={() => setPopupOpen(true)}>
              {" "}
              <BsFileEarmarkPlus />{" "}
            </button>
            {isPopupOpen && (
              <div className="popup">
                <div className="popup-content">
                <button className="close-button" onClick={handleClosePopup}>
              <BsX  size={30}/>
            </button>
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
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserList;
