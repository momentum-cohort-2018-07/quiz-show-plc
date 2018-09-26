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
      <React.Fragment>
        <table className='pure-table pure-table-horizontal'>
          <thead>
            <tr>
              <th>#</th>
              <th>Quiz Title</th>
              <th />
            </tr>
          </thead>

          <tbody>
            {quizzes.map((quiz, idx) =>
              <tr key={idx}>
                <td>{quiz.id}</td>
                <td>{quiz.title}</td>
                <td><button className='pure-button' onClick={() => this.props.setSelectedQuiz(quiz.id)}>Start Quiz</button></td>
              </tr>
            )}
          </tbody>
        </table>
        <ul className='AllQuizzes' />

      </React.Fragment>

    )
  }
}

export default AllQuizzes
