import React from "react";

const SortSelect = ({ sortOrder, handleSortOrderChange }) => {
  return (
    <div className="sort-select-wrapper">
      <select
        id="sort-order"
        value={sortOrder}
        onChange={handleSortOrderChange}
        className="sort-select"
      >
        <option value="">sort</option>
        <option value="asc">Ascending</option>
        <option value="desc">Descending</option>
      </select>
    </div>
  );
};

export default SortSelect;