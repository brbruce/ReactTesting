// See https://www.ag-grid.com/react-getting-started/

import React, { Component } from 'react';
import './App.css';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      columnDefs: [{
        headerName: "Make", field: "make", sortable: true, filter: true, checkboxSelection: true // Added checkboxSelection for multi select
      }, {
        headerName: "Model", field: "model", sortable: true, filter: true
      }, {
        headerName: "Price", field: "price", sortable: true, filter: true
      }]
    //   ,
    //   rowData: [{
    //     make: "Toyota", model: "Celica", price: 35000
    //   }, {
    //     make: "Ford", model: "Mondeo", price: 32000
    //   }, {
    //     make: "Porsche", model: "Boxter", price: 72000
    //   }]
    }
  }

  // For debugging.  breakpoint.
  setState(data) {
    super.setState(data);
  }

  componentDidMount() {
      fetch('https://api.myjson.com/bins/15psn9')
          .then(result => result.json())
          .then(rowData => this.setState({ rowData }))
  }

  render() {
    return (
      <div 
        className="ag-theme-balham"
        style={{ height: '500px', width: '600px' }}
      >
        <button onClick={this.onButtonClick}>Get selected rows</button>

        <AgGridReact
          columnDefs={this.state.columnDefs}
          rowData={this.state.rowData}
          rowSelection="multiple" 
          onGridReady={ params => this.gridApi = params.api } // Save gridApi object so we can get selected rows on click.
        />
      </div>
    );
  }

  onButtonClick = e => {
    // Convert array of selected rows to array of strings, and join together into single string.
    const selectedNodes = this.gridApi.getSelectedNodes()
    const selectedData = selectedNodes.map( node => node.data )
    const selectedDataStringPresentation = selectedData.map( node => node.make + ' ' + node.model).join(', ')
    alert(`Selected nodes: ${selectedDataStringPresentation}`)
  }
  
}


export default App;
