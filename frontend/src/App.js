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
        <ul>Tasks Due By Monday:
          <li>a React front-end that talks to a Rails API</li>
          <ul>
            <li>Status: Incomplete</li>
            <li>Responsibility: Both</li>
          </ul>
          <li>API hosted on Heroku: <a href='https://blooming-savannah-88933.herokuapp.com/'>blooming-savannah-88933.herokuapp.com/</a> </li>
          <ul>
            <li>Status: Initial Deployment Complete, Deployments continue as we update</li>
            <li>Responsibility: Back End</li>
          </ul>
          <li>front-end hosted on Firebase: <a href='https://quiz-show-plc.firebaseapp.com'>quiz-show-plc.firebaseapp.com</a> </li>
          <ul>
            <li>Status: Initial Deployment Complete, Deployments continue as we update</li>
            <li>Responsibility: Front End</li>
          </ul>
          <li>Documentation of your intended API and database structure</li>
          <ul>
            <li>Status: Incomplete</li>
            <li>Responsibility: Back End</li>
          </ul>
          <li>Documentation of React components you plan to use</li>
          <ul>
            <li>Status: Incomplete</li>
            <li>Responsibility: Front End </li>
          </ul>
          <li>ability to register users</li>
          <ul>
            <li>Status: Incomplete</li>
            <li>Responsibility: Both</li>
            <li>FE NOTE: Registering currently logs Username and Password in the Console, use data.register(username, password) when API Calls are ready</li>
          </ul>
          <li>ability to log in users</li>
          <ul>
            <li>Status: Incomplete</li>
            <li>Responsibility: Both</li>
            <li>FE NOTE: LogIn currently logs Username and Password in the Console, use data.login(username, password) when API Calls are ready</li>
          </ul>
          <li>ability to see a list of quizzes</li>
          <ul>
            <li>Status: Incomplete</li>
            <li>Responsibility: Both</li>
            <li>FE NOTE: this now runs on a local dev rails server</li>
          </ul>
          <li>database with seed data</li>
          <ul>
            <li>Status: Incomplete</li>
            <li>Responsibility: Back End</li>
          </ul>
        </ul>
      </div>
    )
  }
}

export default App
