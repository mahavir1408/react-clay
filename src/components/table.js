import React from "react";

const Table = () => {
  return (
    <div className="table-responsive">
      <table className="show-quick-actions-on-hover table table-autofit table-hover table-list">
        <thead>
          <tr>
            <th>Project</th>
            <th>Brand</th>
            <th>Country</th>
            <th>Classification</th>
            <th>Scope</th>
            <th>Progress</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="table-cell-expand">
              <div className="table-list-title">
                <section className="autofit-section">
                  <p className="list-group-title">
                    <a href="#1">Account Example One</a>
                  </p>
                  <p className="list-group-subtext">Second Level Text</p>
                </section>
              </div>
            </td>
            <td>txt1</td>
            <td>txt2</td>
            <td>txt3</td>
            <td>txt4</td>
            <td>
              <div className="progress-group">
                <div className="progress">
                  <div
                    aria-valuenow="30"
                    aria-valuemin="0"
                    aria-valuemax="100"
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: "30%" }}
                  ></div>
                </div>
                <div className="progress-group-addon">30%</div>
              </div>
            </td>
          </tr>
          <tr>
            <td className="table-cell-expand">
              <div className="table-list-title">
                <section className="autofit-section">
                  <p className="list-group-title">
                    <a href="#1">Account Example One</a>
                  </p>
                  <p className="list-group-subtext">Second Level Text</p>
                </section>
              </div>
            </td>
            <td>txt1</td>
            <td>txt2</td>
            <td>txt3</td>
            <td>txt4</td>
            <td>
              <div className="progress-group">
                <div className="progress">
                  <div
                    aria-valuenow="30"
                    aria-valuemin="0"
                    aria-valuemax="100"
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: "30%" }}
                  ></div>
                </div>
                <div className="progress-group-addon">30%</div>
              </div>
            </td>
          </tr>
          <tr>
            <td className="table-cell-expand">
              <div className="table-list-title">
                <section className="autofit-section">
                  <p className="list-group-title">
                    <a href="#1">Account Example One</a>
                  </p>
                  <p className="list-group-subtext">Second Level Text</p>
                </section>
              </div>
            </td>
            <td>txt1</td>
            <td>txt2</td>
            <td>txt3</td>
            <td>txt4</td>
            <td>
              <div className="progress-group">
                <div className="progress">
                  <div
                    aria-valuenow="30"
                    aria-valuemin="0"
                    aria-valuemax="100"
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: "30%" }}
                  ></div>
                </div>
                <div className="progress-group-addon">30%</div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Table;
