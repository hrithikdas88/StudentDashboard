import React from "react";
import { FaAngleLeft,FaAngleRight } from "react-icons/fa";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const handlePageChange = (pageNumber) => {
    onPageChange(pageNumber);
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  return (
    <div className="pagination">
      <button
        className="prev-button"
        onClick={handlePreviousPage}
        disabled={currentPage === 1}
      >
        <FaAngleLeft/>
      </button>

      {Array.from({ length: totalPages }, (_, index) => (
        <button
          key={index + 1}
          className={currentPage === index + 1 ? "active" : ""}
          onClick={() => handlePageChange(index + 1)}
        >
          {index + 1}
        </button>
      ))}

      <button
        className="next-button"
        onClick={handleNextPage}
        disabled={currentPage === totalPages}
      >
        <FaAngleRight/>
      </button>
    </div>
  );
};

export default Pagination;

