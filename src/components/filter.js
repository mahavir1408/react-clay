import React from "react";
import icons from "../assets/images/icons/icons.svg";

const Filter = () => {
  return (
    <nav className="management-bar management-bar-light navbar navbar-expand-md">
      <div className="container">
        <ul className="navbar-nav">
          <li className="nav-item">
            <div className="custom-control custom-checkbox">
              <label>
                <input className="custom-control-input" type="checkbox" />
                <span className="custom-control-label"></span>
              </label>
            </div>
          </li>
          <li className="dropdown nav-item">
            <a
              aria-expanded="false"
              aria-haspopup="true"
              className="dropdown-toggle nav-link navbar-breakpoint-down-d-none"
              data-toggle="dropdown"
              href="#1"
              role="button"
            >
              <span className="navbar-text-truncate">Filter</span>
              <svg
                className="lexicon-icon lexicon-icon-caret-bottom"
                focusable="false"
                role="presentation"
              >
                <use href={`${icons}#caret-bottom`} />
              </svg>
            </a>
            <a
              aria-expanded="false"
              aria-haspopup="true"
              className="nav-link nav-link-monospaced dropdown-toggle navbar-breakpoint-d-none"
              data-toggle="dropdown"
              href="#1"
              role="button"
            >
              <svg
                className="lexicon-icon lexicon-icon-filter"
                focusable="false"
                role="presentation"
              >
                <use href={`${icons}#filter`} />
              </svg>
            </a>
            <div className="dropdown-menu" role="menu">
              <ul className="list-unstyled">
                <li>
                  <a className="dropdown-item" href="#1" role="button">
                    Filter Action 1
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#1" role="button">
                    Filter Action 2
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#1" role="button">
                    Filter Action 3
                  </a>
                </li>
              </ul>
            </div>
          </li>
        </ul>
        <div className="navbar-form navbar-form-autofit navbar-overlay navbar-overlay-sm-down">
          <div className="container">
            <form role="search">
              <div className="input-group">
                <div className="input-group-item">
                  <input
                    className="form-control input-group-inset input-group-inset-after"
                    placeholder="Search for..."
                    type="text"
                  />
                  <span className="input-group-inset-item input-group-inset-item-after">
                    <button
                      className="btn btn-unstyled navbar-breakpoint-d-none"
                      type="button"
                    >
                      <svg
                        className="lexicon-icon lexicon-icon-times"
                        focusable="false"
                        role="presentation"
                      >
                        <use href={`${icons}#times"`} />
                      </svg>
                    </button>
                    <button
                      className="btn btn-unstyled navbar-breakpoint-d-block"
                      type="button"
                    >
                      <svg
                        className="lexicon-icon lexicon-icon-search"
                        focusable="false"
                        role="presentation"
                      >
                        <use href={`${icons}#search`} />
                      </svg>
                    </button>
                  </span>
                </div>
              </div>
            </form>
          </div>
        </div>
        <ul className="navbar-nav">
          <li className="nav-item navbar-breakpoint-d-none">
            <a className="nav-link nav-link-monospaced" href="#1" role="button">
              <svg
                className="lexicon-icon lexicon-icon-search"
                focusable="false"
                role="presentation"
              >
                <use href={`${icons}#search`} />
              </svg>
            </a>
          </li>
          <li className="dropdown nav-item">
            <a
              aria-expanded="false"
              aria-haspopup="true"
              className="dropdown-toggle nav-link nav-link-monospaced"
              data-toggle="dropdown"
              href="#1"
              role="button"
            >
              <svg
                className="lexicon-icon lexicon-icon-cards2"
                focusable="false"
                role="presentation"
              >
                <use href={`${icons}#cards2`} />
              </svg>
            </a>
            <div
              className="dropdown-menu dropdown-menu-right dropdown-menu-indicator-start"
              role="menu"
            >
              <ul className="list-unstyled">
                <li>
                  <a className="active dropdown-item" href="#1">
                    <span className="dropdown-item-indicator">
                      <svg
                        className="lexicon-icon lexicon-icon-list"
                        focusable="false"
                        role="presentation"
                      >
                        <use href={`${icons}#list`} />
                      </svg>
                    </span>
                    List View
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#1">
                    <span className="dropdown-item-indicator">
                      <svg
                        className="lexicon-icon lexicon-icon-card2"
                        focusable="false"
                        role="presentation"
                      >
                        <use href={`${icons}#card2`} />
                      </svg>
                    </span>
                    Table View
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#1">
                    <span className="dropdown-item-indicator">
                      <svg
                        className="lexicon-icon lexicon-icon-cards2"
                        focusable="false"
                        role="presentation"
                      >
                        <use href={`${icons}#cards2`} />
                      </svg>
                    </span>
                    Card View
                  </a>
                </li>
              </ul>
            </div>
          </li>
          <li className="nav-item">
            <div class="autofit-col">
              <button class="btn btn-primary btn-sm" type="button">
                <span class="inline-item inline-item-before">
                  <svg
                    class="lexicon-icon lexicon-icon-plus"
                    focusable="false"
                    role="presentation"
                  >
                    <use href={`${icons}#plus`}></use>
                  </svg>
                </span>
                New Project
              </button>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default Filter;
