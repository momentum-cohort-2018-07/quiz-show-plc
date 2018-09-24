import React, { Component } from 'react'
import './App.css'

import LoginForm from './components/LoginForm'
import RegisterForm from './components/RegisterForm'
import AllQuizzes from './components/AllQuizzes'
class App extends Component {
  render () {
    return (
      <div className='App'>
        <header className='App-header'>
          <h1 className='App-title'>Quiz Show PLC</h1>
          <LoginForm />
          <RegisterForm />
        </header>
        <AllQuizzes />
      </div>
    )
  }
}

export default App
