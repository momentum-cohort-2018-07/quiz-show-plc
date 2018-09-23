import React, { Component } from 'react'

import data from '../data'

class AllQuizzes extends Component {
  constructor () {
    super()
    this.state = {
      quizzes: [
        { quizTitle: 'title 1' },
        { quizTitle: 'title 2' },
        { quizTitle: 'title 3' }
      ]
    }
  }

  render () {
    const quizzes = this.state.quizzes
    return (
      <ul className='AllQuizzes'>
        {quizzes.map((quiz, idx) =>
          <li key={idx}>
            <h4>Quiz Title: {quiz.quizTitle}</h4>
          </li>
          // data.getQuizzes
        )}
      </ul>

    )
  }
}

export default AllQuizzes
