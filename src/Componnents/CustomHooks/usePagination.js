import { useState } from "react";

const usePagination = (totalItems, itemsPerPage) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return {
    currentPage,
    totalPages,
    handlePageChange,
  };
};

export default usePagination;
