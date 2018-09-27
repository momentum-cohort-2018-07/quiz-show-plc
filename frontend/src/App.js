import React, { Component } from 'react'
import purecss from 'purecss'
import './App.css'

// components
import LoginForm from './components/LoginForm'
import RegisterForm from './components/RegisterForm'
import AllQuizzes from './components/AllQuizzes'
import Quiz from './components/Quiz'
import data from './data'
// end components

class App extends Component {
  constructor () {
    super()
    this.state = {
      selectedQuiz: '',
      register: false,
      currentUser: null
    }

    const username = window.localStorage.getItem('username')
    const token = window.localStorage.getItem('token')
    if (username && token) {
      this.state.currentUser = { username, token }
      data.setUserToken(token)
    }

    this.setSelectedQuiz = this.setSelectedQuiz.bind(this)
    this.clearSelectedQuiz = this.clearSelectedQuiz.bind(this)
    this.setRegister = this.setRegister.bind(this)
    this.setLogin = this.setLogin.bind(this)
    this.setCurrentUser = this.setCurrentUser.bind(this)
    this.logout = this.logout.bind(this)
  }

  setSelectedQuiz (id) {
    this.setState({
      selectedQuiz: id
    })
  }

  clearSelectedQuiz () {
    this.setState({
      selectedQuiz: ''
    })
  }

  setRegister () {
    this.setState({
      register: true
    })
  }

  setLogin () {
    this.setState({
      register: false
    })
  }

  setCurrentUser (user) {
    window.localStorage.setItem('username', user.username)
    window.localStorage.setItem('token', user.token)
    this.setState({ currentUser: user })
  }

  logout () {
    data.setUserToken(null)
    window.localStorage.clear()
    this.setState({
      currentUser: null
    })
  }

  render () {
    return (
      <div className='App'>
        <header className='App-header'>
          <h1 className='App-title'>Quiz Show PLC</h1>
          {this.state.currentUser &&
          <div className='logged-in'><span className='welcome'>Hi, {this.state.currentUser.username}!</span>
            <button className='pure-button' onClick={() => this.logout()}>Logout</button>
          </div>}
        </header>
        {this.state.currentUser
          ? <div>

            {this.state.selectedQuiz !== ''
              ? <Quiz id={this.state.selectedQuiz} clear={this.clearSelectedQuiz} />
              : <AllQuizzes setSelectedQuiz={this.setSelectedQuiz} />
            }
          </div>
          : <div>
            {this.state.register
              ? <RegisterForm setLogin={this.setLogin} setCurrentUser={this.setCurrentUser} />
              : <LoginForm setRegister={this.setRegister} setCurrentUser={this.setCurrentUser} />}
          </div>
        }
      </div>
    )
  }
}

export default App
