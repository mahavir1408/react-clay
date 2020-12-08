import React from "react";
import PropTypes from "prop-types";
import _ from "lodash";
import PaginationDropdown from "./pagination-dropdown";

import spritemap from "../../assets/images/icons/icons.svg";

const Pagination = ({
  itemsCount,
  pageSize,
  currentPage,
  onPageChange,
  onPageSizeChange,
}) => {
  const pagesCount = Math.ceil(itemsCount / pageSize);
  if (pagesCount === 1) return null;
  const pages = _.range(1, pagesCount + 1);

  return (
    <div className="pagination-bar">
      <PaginationDropdown
        {...{
          itemsCount,
          pageSize,
          currentPage,
          onPageChange,
          onPageSizeChange,
        }}
      />

      <ul className="pagination">
        {pages.length > 1 && currentPage > 1 && (
          <li className="page-item">
            <a
              className="page-link"
              href="#1"
              role="button"
              tabIndex="-1"
              onClick={() => onPageChange(currentPage - 1)}
            >
              <svg
                className="lexicon-icon lexicon-icon-angle-left"
                focusable="false"
                role="presentation"
              >
                <use href={`${spritemap}#angle-left`}></use>
              </svg>
              <span className="sr-only">Previous</span>
            </a>
          </li>
        )}

        {pages.map((page, i) => (
          <li
            className={page === currentPage ? "page-item active" : "page-item"}
            key={i}
          >
            <a
              href="#/"
              className="page-link"
              onClick={() => onPageChange(page)}
            >
              {page}
            </a>
          </li>
        ))}

        {pages.length > 1 && currentPage <= pages.length - 1 && (
          <li className="page-item">
            <a
              className="page-link"
              href="#1"
              role="button"
              onClick={() => onPageChange(currentPage + 1)}
            >
              <svg
                className="lexicon-icon lexicon-icon-angle-right"
                focusable="false"
                role="presentation"
              >
                <use href={`${spritemap}#angle-right`}></use>
              </svg>
              <span className="sr-only">Next</span>
            </a>
          </li>
        )}
      </ul>
    </div>
  );
};

Pagination.propTypes = {
  itemsCount: PropTypes.number.isRequired,
  pageSize: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
};
export default Pagination;
