import React, { Component } from 'react'

import data from '../data'

class AllQuizzes extends Component {
  constructor () {
    super()
    this.state = {
      quizzes: []
    }
  }

  componentDidMount () {
    this.loadQuizzes()
  }

  loadQuizzes () {
    data.getQuizzes()
      .then(quizzes => this.setState({
        quizzes: quizzes
      }))
  }

  render () {
    const quizzes = this.state.quizzes
    return (
      <ul className='AllQuizzes'>
        {quizzes.map((quiz, idx) =>
          <li key={idx}>
            <a onClick={() => this.props.setSelectedQuiz(quiz.id)}>Quiz Title: {quiz.title}</a>
          </li>
        )}
      </ul>

    )
  }
}

export default AllQuizzes
