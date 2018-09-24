import React, { Component } from 'react'

import data from '../data'

class AllQuizzes extends Component {
  constructor () {
    super()
    this.state = {
      quizzes: [
        { title: 'title 1' },
        { title: 'title 2' },
        { title: 'title 3' }
      ]
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
            <h4>Quiz Title: {quiz.title}</h4>
          </li>
        )}
      </ul>

    )
  }
}

export default AllQuizzes
