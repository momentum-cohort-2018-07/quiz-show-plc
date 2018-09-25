import React, { Component } from 'react'
import './App.css'
// components
import LoginForm from './components/LoginForm'
import RegisterForm from './components/RegisterForm'
import AllQuizzes from './components/AllQuizzes'
import Quiz from './components/Quiz'
// end components
class App extends Component {
  constructor () {
    super()
    this.state = {
      selectedQuiz: ''
    }
    this.setSelectedQuiz = this.setSelectedQuiz.bind(this)
    this.clearSelectedQuiz = this.clearSelectedQuiz.bind(this)
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

  render () {
    return (
      <div className='App'>
        <header className='App-header'>
          <h1 className='App-title'>Quiz Show PLC</h1>
          <LoginForm />
          <RegisterForm />
        </header>
        <AllQuizzes setSelectedQuiz={this.setSelectedQuiz} />
        {this.state.selectedQuiz !== '' && <Quiz id={this.state.selectedQuiz} clear={this.clearSelectedQuiz} />}
      </div>
    )
  }
}

export default App
