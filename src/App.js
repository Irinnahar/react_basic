import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor(){
    super();

    this.state = {
      monsters: []
    }
  }

  // fetching data from server
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(resolve => resolve.json())
    .then(users => 
        this.setState({monsters: users})
      )
    .catch(console.log('Server Error!!'))
  }

  render() {
    return (
      <div className="App">
        {
          this.state.monsters.map(monster => {
            return (
              <h1 key={monster.id}> {monster.name} </h1>
            )
          })
        }
      </div>
    );
  }
}

export default App;
