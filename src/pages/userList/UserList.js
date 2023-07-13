import React, { useState } from "react";
import useFilteredAndSortedStudents from "../../Componnents/CustomHooks/useFilteredAndSortedStudents";
import "./UserList.scss";
import SearchBar from "../../Componnents/Search/SearchBar";
import SortSelect from "../../Componnents/Sort/SortSelect";
import AddStudentPopup from "../../Componnents/AddStudentPopup/AddStudentPopup";
import StudentCard from "../../Componnents/StudentCard/StudentCard";
import Pagination from "../../Componnents/Pagination/Pagination";
import usePagination from "../../Componnents/CustomHooks/usePagination";
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
    
    
  } = useFilteredAndSortedStudents();

  const itemsPerPage = 20;
  const totalItems = sortedStudents.length;

  const { currentPage, totalPages, handlePageChange } = usePagination(totalItems, itemsPerPage);

  const displayedStudents = sortedStudents.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );


  

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
          {displayedStudents.map((student) => (
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
          />
        </div>

        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );
};

export default UserList;

