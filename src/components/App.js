
import React, { Component } from "react";

import '../styles/App.css';

class App extends Component {
    state = {
      username: 'user@company.com'
    }
    handleClick = (e) => {
      this.setState({'username': 'different@company.com'})
    }
    render() {
        return (
            <div>
                <h1>ResiRoots</h1>
                <p>{this.state.username}</p>
                <button onClick={this.handleClick}> Click me </button>
            </div>
            
        );
    }
}

export default App;

