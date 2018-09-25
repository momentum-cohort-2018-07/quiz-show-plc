import React, { Component } from 'react'

import data from '../data'

class RegisterForm extends Component {
  constructor () {
    super()
    this.state = {
      username: '',
      password: '',
      confirmation: '',
      email: ''
    }
  }

  updateUsername (value) {
    this.setState({ username: value })
  }

  updatePassword (value) {
    this.setState({ password: value })
  }

  updateConfirmation (value) {
    this.setState({ confirmation: value })
  }

  updateEmail (value) {
    this.setState({
      email: value
    })
  }

  sendRegisterData (e) {
    let email = this.state.email
    let username = this.state.username
    let password = this.state.password
    let confirmation = this.state.confirmation
    if (username !== '' && password !== '') {
      if (password === confirmation) {
        console.log('username:', username, 'password:', password, 'password confirmation:', confirmation, 'email: ', email)
        data.register(username, password, email)
          .then(user => this.props.setCurrentUser(user))
      } else {
        window.alert('Password and Confirm Password must match.')
      }
    } else {
      window.alert('Username and Password required.')
    }
  }

  render () {
    return (
      <div className='RegisterForm'>
        <label>Email
          <input
            className='signin_input'
            type='text'
            onChange={event => this.updateEmail(event.target.value)} />
        </label>
        <label>Username
          <input
            className='signin_input'
            type='text'
            onChange={event => this.updateUsername(event.target.value)} />
        </label>
        <label>Password
          <input
            className='signin_input'
            type='text'
            onChange={event => this.updatePassword(event.target.value)} />
        </label>
        <label>Confirm Password
          <input
            className='signin_input'
            type='text'
            onChange={event => this.updateConfirmation(event.target.value)} />
        </label>
        <button onClick={e => this.sendRegisterData(e)}>Register</button>
        <p>Already have an account? <a onClick={() => this.props.setLogin()}>Login</a> </p>
      </div>

    )
  }
}

export default RegisterForm
