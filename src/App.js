//import logo from './logo.svg';
import React, { Component } from 'react';
import {CardList} from './components/card-list/card-list.component'
import {SearchBox} from './components/search-box/search-box.component'
import './App.css';

class App extends Component {
  constructor(){
    super();

    this.state= {
      employees:[],
      searchField:''
    };

    //this.handleChange = this.handleChange.bind(this)
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({employees:users}));
  }

  handleChange = e => {
    this.setState({ searchField: e.target.value })
  }

  render(){
    const { employees, searchField } = this.state;
    const filteredEmployees =employees.filter( employee =>
      employee.name.toLowerCase().includes(searchField.toLowerCase())
      )
    return (
      <div className="App">
        <h1>Employees List</h1>
        <SearchBox 
          placeholder='Search employees'
          handleChange= { this.handleChange }
        />
        <CardList employees={filteredEmployees}>
        
        </CardList>
        
      </div>
    );

  }
}
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <p>Hi 1st React App</p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
