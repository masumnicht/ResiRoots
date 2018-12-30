
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
                <p>Use this model to help you understand the different 
                  loan products and decide which products to ask for 
                  when getting preapproved.  The data presented here 
                  is a weighted average of loan costs around the country for 
                  each loan type.  If you already have loan quotes from lenders, 
                  you can evaluate them in our User Loan Analysis model.  
                </p>
                <button onClick={this.handleClick}> Click me </button>
                <button onClick={this.triggerChange}> Click me </button>
            </div>
            
        );
    }
}

export default App;

