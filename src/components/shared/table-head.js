import React, { Component } from "react";
import ClayTable from "@clayui/table";
import ClayIcon from "@clayui/icon";
import spritemap from "../../assets/images/icons/icons.svg";

class TableHead extends Component {
  raiseSort = (path) => {
    const sortColumn = { ...this.props.sortColumn };
    if (sortColumn.path === path) {
      sortColumn.order = sortColumn.order === "asc" ? "desc" : "asc";
    } else {
      sortColumn.path = path;
      sortColumn.order = "asc";
    }
    this.props.onSort(sortColumn);
  };

  renderSortIcon = (column) => {
    const { sortColumn } = this.props;
    if (column.path !== this.props.sortColumn.path) return null;
    if (sortColumn.order === "asc")
      return <ClayIcon symbol="order-arrow-down" spritemap={spritemap} />;
    return <ClayIcon symbol="order-arrow-up" spritemap={spritemap} />;
  };

  render() {
    return (
      <ClayTable.Head>
        <ClayTable.Row>
          {this.props.columns.map((column) => (
            <ClayTable.Cell
              className="clickable"
              key={column.path || column.key}
              onClick={() => this.raiseSort(column.path)}
            >
              {column.label} {this.renderSortIcon(column)}
            </ClayTable.Cell>
          ))}
        </ClayTable.Row>
      </ClayTable.Head>
    );
  }
}
export default TableHead;
