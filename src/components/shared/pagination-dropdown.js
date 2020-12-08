import React, { useState } from "react";
import _ from "lodash";
import spritemap from "../../assets/images/icons/icons.svg";

const PaginationDropdown = ({ itemsCount, onPageSizeChange }) => {
  const [showList, setShowDropDownList] = useState(false);
  const [selectedPageSize, setSelectedPageSize] = useState(5);
  const pageSizeList = _.range(5, 20, 5);
  return (
    <React.Fragment>
      <div className="dropdown pagination-items-per-page">
        <a
          aria-expanded="false"
          aria-haspopup="true"
          className="dropdown-toggle"
          data-toggle="dropdown"
          href="#/"
          role="button"
          onClick={() => setShowDropDownList(!showList)}
        >
          {selectedPageSize} entries
          <svg
            className="lexicon-icon lexicon-icon-caret-double-l"
            focusable="false"
            role="presentation"
          >
            <use href={`${spritemap}#caret-double-l`}></use>
          </svg>
        </a>
        <ul className={`dropdown-menu ${showList && `show`} dropdown-menu-top`}>
          {pageSizeList.map((pageSize) => (
            <li key={pageSize}>
              <a
                className="dropdown-item"
                href="#/"
                onClick={() => {
                  onPageSizeChange(pageSize);
                  setSelectedPageSize(pageSize);
                  setShowDropDownList(!showList);
                }}
              >
                {pageSize}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="pagination-results">
        Showing {selectedPageSize} of {itemsCount} entries.
      </div>
    </React.Fragment>
  );
};

export default PaginationDropdown;
