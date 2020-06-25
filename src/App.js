import React, { Component } from "react";
import {CardList} from "./components/card-list/card-list.component";
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
    // .catch(console.log('Server Error!!'))
  }

  render() {
    return (
      <div className="App">
        {
          <CardList monsters={this.state.monsters}></CardList>
        }
      </div>
    );
  }
}

export default App;
