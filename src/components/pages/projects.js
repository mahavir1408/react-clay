import React, { Component } from "react";
import _ from "lodash";
import { getProjects } from "../../services/project-service";
import Pagination from "../shared/pagination";
import { paginate } from "../../utils/paginate";
import Filter from "../shared/filter";
import ProjectsTable from "./projects-table";

class Projects extends Component {
  state = {
    projects: [],
    currentPage: 1,
    pageSize: 4,
    searchQuery: "",
    selectedGenre: null,
    sortColumn: { path: "project", order: "asc" },
  };

  async componentDidMount() {
    const { data: projects } = await getProjects();
    this.setState({ projects });
  }

  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };

  handlePageSizeChange = (pageSize) => {
    this.setState({ pageSize });
  };

  handleSearch = (query) => {
    this.setState({ searchQuery: query, currentPage: 1 });
  };

  handleSort = (sortColumn) => {
    this.setState({ sortColumn });
  };

  getPageData = () => {
    const {
      pageSize,
      currentPage,
      sortColumn,
      searchQuery,
      projects: allProjects,
    } = this.state;
    let filtered = allProjects;
    if (searchQuery) {
      filtered = allProjects.filter((m) =>
        m.title.toLowerCase().startsWith(searchQuery.toLowerCase())
      );
    }
    const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);
    const projects = paginate(sorted, currentPage, pageSize);

    return { totalCount: filtered.length, data: projects };
  };

  render() {
    const { pageSize, currentPage, sortColumn, searchQuery } = this.state;

    const { totalCount, data: projects } = this.getPageData();

    return (
      <main className="container">
        <div className="row mt-5 autofit-col-expand">
          <div className="col-sm-4">
            <div className="sheet">col-sm-4</div>
          </div>
          <div className="col-sm-8">
            <div className="sheet">
              <div className="sheet-section">
                <Filter value={searchQuery} onChange={this.handleSearch} />
              </div>
              <div className="sheet-section">
                <ProjectsTable
                  projects={projects}
                  sortColumn={sortColumn}
                  onLike={this.handleLike}
                  onDelete={this.handleDelete}
                  onSort={this.handleSort}
                />
              </div>
              <div className="sheet-section">
                <Pagination
                  itemsCount={totalCount}
                  pageSize={pageSize}
                  currentPage={currentPage}
                  onPageChange={this.handlePageChange}
                  onPageSizeChange={this.handlePageSizeChange}
                />
              </div>
            </div>
          </div>
        </div>
      </main>
    );
  }
}

export default Projects;
