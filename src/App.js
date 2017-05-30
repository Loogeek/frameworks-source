import React, { Component } from 'react';
import { createStore } from './mini-redux/store';
import reducer from './mini-redux/reducer';
import logo from './logo.svg';
import './App.css';

const store = createStore(reducer);

class App extends Component {

  constructor() {
    super();
    this.state = {
      text: 'Welcome to React',
      color: 'red'
    };
  }
  
  componentDidMount() {
    store.subscribe(() => this.setState({
      text: store.getState().title.text,
      color: store.getState().title.color
    }));
  }

  handleChangeTitleTxt = () => {
    store.dispatch({
      type: 'CHANGE_TITLE_TXT', 
      text: 'Hello World'
    });
  }

  handleChangeTitleColor = () => {
    store.dispatch({
      type: 'CHANGE_TITLE_COLOR',
      color: 'yellow'
    });
  }

  render() {
    const { text, color } = this.state;

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2 style={{'color': color}}>{text}</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={this.handleChangeTitleTxt}>change title</button>
        <button onClick={this.handleChangeTitleColor}>change content</button>
      </div>
    );
  }
}

export default App;
