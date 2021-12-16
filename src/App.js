import React, { Component } from 'react'
import ClassForm from './ClassForm';
import FunctionForm from './FunctionForm';
import "./styles.css";
class App extends Component {
  render() {
    return (
      <div className='body'>
        <ClassForm />
        <br />
        <hr />
        <FunctionForm />
        <br />
        <hr />
      </div>
    )
  }
}

export default App;