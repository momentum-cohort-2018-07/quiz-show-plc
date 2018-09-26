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
        questions: quiz.data.questions,
        score: ''
      }))
  }
  selectAnswer (e) {
    this.setState({
      selectedAnswers: Object.assign({}, this.state.selectedAnswers, { [e.target.name]: e.target.value })
    })
  }

  formatAnswers (answerIDs) {
    const array = answerIDs.map(answerID => { return { answer: answerID } })
    const formattedObject = {
      score: {
        answers: array }
    }
    return formattedObject
  }
  sendAnswers (selectedAnswers) {
    let answerId = Object.values(selectedAnswers)
    let formattedAnswers = this.formatAnswers(answerId)
    console.log(formattedAnswers)
    data.postAnswers(formattedAnswers)
      .then(result => result.result.result)
      .then(result => this.setState({
        score: result
      }))
  }

  render () {
    return (
      <React.Fragment>
        <h3>{this.state.title}</h3>
        {this.state.score !== ''
          ? <div>
            <p>You're score is {this.state.score}</p>
            <button className='pure-button pure-button-primary' onClick={() => this.props.clear()}>Return to Quiz List</button>
          </div>
          : <div>
            <ol>
              {this.state.questions.map((question, idx) =>
                <li key={idx}>
                  {question.text}

                  {question.answers.map((answer, idx) =>
                    <div key={idx}>
                      <label className='pure-radio' htmlFor={answer.id}>
                        <input type='radio' id={answer.id}
                          name={question.id} value={answer.id} onChange={(e) => this.selectAnswer(e)} />
                        {answer.text}</label>
                    </div>
                  )}

                </li>
              )}
            </ol>
            <button className='pure-button pure-button-primary' onClick={() => this.sendAnswers(this.state.selectedAnswers)}>Submit</button>
          </div>
        }

      </React.Fragment>

    )
  }
}

export default Quiz
