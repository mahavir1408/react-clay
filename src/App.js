// import Container from "./components/container";
import Filter from "./components/filter";
import Table from "./components/table";
import Paginate from "./components/paginate";

function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="sheet col-md-4">Task list</div>
        <div className="sheet col-md-8">
          <div className="sheet-section">
            <div class="panel panel-secondary">
              <div class="panel-header">
                <Filter />
              </div>
            </div>
            <div class="panel">
              <div class="panel-body px-0">
                <Table />
              </div>
              <div class="panel-footer px-0">
                <Paginate />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
