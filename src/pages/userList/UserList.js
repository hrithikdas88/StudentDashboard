import React from "react";
import useFilteredAndSortedStudents from "../../Componnents/CustomHooks/useFilteredAndSortedStudents";
import "./UserList.scss";
import SearchBar from "../../Componnents/Search/SearchBar";
import SortSelect from "../../Componnents/Sort/SortSelect";
import AddStudentPopup from "../../Componnents/AddStudentPopup/AddStudentPopup";
import StudentCard from "../../Componnents/StudentCard/StudentCard";

const UserList = () => {
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
    handleClosePopup,
   

  } = useFilteredAndSortedStudents();

  return (
    <div>
      <div className="content">
        <h2 className="page-title">Dashboard</h2>

        <div className="sort-container">
          <SortSelect
            sortOrder={sortOrder}
            handleSortOrderChange={handleSortOrderChange}
          />
        </div>

        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

        <div className="student-list">
          {sortedStudents.map((student) => (
            <StudentCard
              key={student.id}
              student={student}
              handleDeleteStudent={handleDeleteStudent}
            />
          ))}
        </div>
        <div>
          <AddStudentPopup
            isPopupOpen={isPopupOpen}
            setPopupOpen={setPopupOpen}
            newStudent={newStudent}
            setNewStudent={setNewStudent}
            handleAddStudent={handleAddStudent}
            handleClosePopup={handleClosePopup}
          />
        </div>
      </div>
    </div>
  );
};

export default UserList;