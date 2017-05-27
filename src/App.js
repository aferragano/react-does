import React, { Component } from 'react';
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">

          <h2>React Does list</h2>
        </div>
        <div>
          
          <form className="ToDo-App">
            <input type="text"/>
          </form>
          <div>
            <ul>
              <li><input type="checkbox"/> learn JSX</li>
              <li><input type="checkbox"/>learn JSX</li>
            </ul>
          </div>
        </div>
        
      </div>
    );
  }
}

export default App;