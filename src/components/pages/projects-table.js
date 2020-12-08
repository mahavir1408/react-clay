import React, { Component } from "react";
import ClayProgressBar from "@clayui/progress-bar";
import spritemap from "../../assets/images/icons/icons.svg";
import Table from "../shared/table";

class ProjectsTable extends Component {
  columns = [
    { path: "project", label: "Project" },
    { path: "brand", label: "Brand" },
    { path: "country", label: "Country" },
    { path: "classification", label: "Classification" },
    { path: "scope", label: "Scope" },
    {
      path: "progress",
      key: "progress",
      label: "Progress",
      content: (project) => (
        <ClayProgressBar spritemap={spritemap} value={project.progress} />
      ),
    },
  ];

  render() {
    const { projects, onSort, sortColumn } = this.props;
    return (
      <Table
        columns={this.columns}
        data={projects}
        sortColumn={sortColumn}
        onSort={onSort}
      />
    );
  }
}

export default ProjectsTable;
