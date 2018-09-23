import React, { Component } from 'react'
import './App.css'

class App extends Component {
  render () {
    return (
      <div className='App'>
        <header className='App-header'>
          <h1 className='App-title'>Quiz Show PLC</h1>
          <input className='signin_input' type='text' defaultValue='username' />
          <input className='signin_input' type='text' defaultValue='password' />
          <button>Sign In</button>
        </header>
        <ul>By Monday:
          <li>a React front-end that talks to a Rails API</li>
          <li>API hosted on Heroku </li>
          <li>front-end hosted on Firebase</li>
          <li>Documentation of your intended API and database structure</li>
          <li>React components you plan to use</li>
          <li>ability to register users</li>
          <li>ability to log in users</li>
          <li>ability to see a list of quizzes</li>
          <li>database with seed data</li>
        </ul>
      </div>
    )
  }
}

export default App
