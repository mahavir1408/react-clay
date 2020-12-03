import React from "react";
import icons from "../assets/images/icons/icons.svg";

const Paginate = () => {
  return (
    <div className="pagination-bar pagination-sm">
      <div className="dropdown pagination-items-per-page">
        <a
          aria-expanded="false"
          aria-haspopup="true"
          className="dropdown-toggle"
          data-toggle="dropdown"
          href="#1"
          role="button"
        >
          10 entries
          <svg
            className="lexicon-icon lexicon-icon-caret-double-l"
            focusable="false"
            role="presentation"
          >
            <use href={`${icons}#caret-double-l`} />
          </svg>
        </a>
        <ul className="dropdown-menu dropdown-menu-top">
          <li>
            <a className="dropdown-item" href="#1">
              5
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#1">
              10
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#1">
              20
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#1">
              30
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#1">
              50
            </a>
          </li>
        </ul>
      </div>
      <div className="pagination-results">Showing 1 to 20 of 203 entries.</div>
      <ul className="pagination">
        <li className="disabled page-item">
          <a className="page-link" href="#1" role="button" tabindex="-1">
            <svg
              className="lexicon-icon lexicon-icon-angle-left"
              focusable="false"
              role="presentation"
            >
              <use href={`${icons}#angle-left`} />
            </svg>
            <span className="sr-only">Previous</span>
          </a>
        </li>
        <li className="active page-item">
          <a className="page-link" href="#1">
            1
          </a>
        </li>
        <li className="page-item">
          <a className="page-link" href="#1">
            2
          </a>
        </li>
        <li className="dropdown page-item">
          <a
            aria-expanded="false"
            aria-haspopup="true"
            className="dropdown-toggle page-link"
            data-toggle="dropdown"
            href="#1"
            role="button"
          >
            ...
          </a>
          <ul className="dropdown-menu dropdown-menu-top-center">
            <li>
              <ul className="inline-scroller">
                <li>
                  <a className="dropdown-item" href="#1">
                    3
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#1">
                    4
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#1">
                    5
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#1">
                    6
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#1">
                    7
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#1">
                    8
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#1">
                    9
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#1">
                    10
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#1">
                    11
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#1">
                    12
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#1">
                    13
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#1">
                    14
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#1">
                    15
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li className="page-item">
          <a className="page-link" href="#1">
            16
          </a>
        </li>
        <li className="page-item">
          <a className="page-link" href="#1" role="button">
            <svg
              className="lexicon-icon lexicon-icon-angle-right"
              focusable="false"
              role="presentation"
            >
              <use href={`${icons}#angle-right`} />
            </svg>
            <span className="sr-only">Next</span>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Paginate;
