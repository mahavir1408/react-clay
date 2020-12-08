import React, { Component } from "react";
import _ from "lodash";
import ClayTable from "@clayui/table";

class TableBody extends Component {
  renderCell = (item, column) => {
    if (column.content) return column.content(item);
    return _.get(item, column.path);
  };

  createKey = (item, column) => {
    return item._id + (column.path || column.key);
  };

  render() {
    const { data, columns } = this.props;
    return (
      <ClayTable.Body>
        {data.map((item) => (
          <ClayTable.Row key={item.id}>
            {columns.map((column) => (
              <ClayTable.Cell key={this.createKey(item, column)}>
                {this.renderCell(item, column)}
              </ClayTable.Cell>
            ))}
          </ClayTable.Row>
        ))}
      </ClayTable.Body>
    );
  }
}
export default TableBody;
