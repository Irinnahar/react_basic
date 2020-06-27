import React, { Component } from "react";
import {CardList} from "./components/card-list/card-list.component";
import "./App.css";

class App extends Component {
  constructor(){
    super();

    this.state = {
      monsters: [],
      searchField: ''
    }
  }

  // fetching data from server
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(resolve => resolve.json())
    .then(users => 
        this.setState({monsters: users})
      )
    // .catch(console.log('Server Error!!'))
  }

  render() {
    const {searchField,monsters } = this.state;
    const filteredMonster = monsters.filter(monster => {
      return monster.name.toLowerCase().includes(searchField.toLowerCase())
    })
    return (
      <div className="App">
        <input type="search" placeholder="Search for monster" onChange={ e => this.setState({searchField : e.target.value})} />
        <CardList monsters={filteredMonster}></CardList>
      </div>
    );
  }
}

export default App;
