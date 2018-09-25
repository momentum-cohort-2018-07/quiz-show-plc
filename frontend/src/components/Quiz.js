import React, { Component } from 'react'

import data from '../data'

class Quiz extends Component {
  constructor (props) {
    super(props)
    this.state = {
      title: '',
      questions: []
    }
  }

  componentDidMount () {
    this.loadQuiz()
  }

  loadQuiz () {
    data.getQuiz(this.props.id)
      .then(quiz => this.setState({
        title: quiz.data.title,
        questions: quiz.data.questions
      }))
  }

  render () {
    return (
      <React.Fragment>
        <ol>
          {this.state.questions.map((question, idx) =>
            <li key={idx}>
              {question.text}

              {question.answers.map((answer, idx) =>
                <div key={idx}>
                  <input type='radio' id={answer.id}
                    name={question.id} value={answer.id} />
                  <label htmlFor={answer.id}>{answer.text}</label>
                </div>
              )}

            </li>
          )}
        </ol>
        <button onClick={() => this.props.clear()}>Clear</button>
      </React.Fragment>

    )
  }
}

export default Quiz
