import React, { Component } from 'react';
import './App.css';
import './Output.css';
import UserInput from './UserInput';
import UserOutput from './UserOutput';

class App extends Component {

  state = {
      user: {
        name: ''
      }
  };


  userNameHandler = (event) => {

    this.setState({
      user: {
        name: event.target.value
      }
    });

  }

  render() {
    const style = {
      padding: '10px',
      backgroundColor: 'lightgrey'
    }

    return (
      <div style={style}>
        <div>User Name: </div>
        <UserInput
          name={this.state.user.name}
          changed={this.userNameHandler}>
        </UserInput>

        <div className="UserOutput">
          <UserOutput
            name={this.state.user.name}>
          </UserOutput>
        </div>
      </div>

    )
  }
}

export default App;
