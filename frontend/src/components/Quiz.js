import React, { Component } from 'react'

import data from '../data'

class Quiz extends Component {
  constructor (props) {
    super(props)
    this.state = {
      title: '',
      questions: [],
      selectedAnswers: []
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
  selectAnswer (e) {
    const selectedAnswersCopy = this.state.selectedAnswers.slice()
    this.setState({
      selectedAnswers: selectedAnswersCopy.concat({ answer: e.target.value })
    })
  }

  formatAnswers (array) {
    const formattedObject = {
      result: {
        answers: array }
    }
    return formattedObject
  }

  sendAnswers (selectedAnswers) {
    let formattedAnswers = this.formatAnswers(selectedAnswers)
    console.log(formattedAnswers)
    data.postAnswers(formattedAnswers)
      .then(result => console.log(result))
  }

  render () {
    return (
      <React.Fragment>
        <h3>{this.state.title}</h3>
        <ol>
          {this.state.questions.map((question, idx) =>
            <li key={idx}>
              {question.text}

              {question.answers.map((answer, idx) =>
                <div key={idx}>
                  <input type='radio' id={answer.id}
                    name={question.id} value={answer.id} onChange={(e) => this.selectAnswer(e)} />
                  <label htmlFor={answer.id}>{answer.text}</label>
                </div>
              )}

            </li>
          )}
        </ol>
        <button onClick={() => this.sendAnswers(this.state.selectedAnswers)}>Clear</button>
      </React.Fragment>

    )
  }
}

export default Quiz
