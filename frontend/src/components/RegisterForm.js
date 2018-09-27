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
      <div className='pure-form pure-form-aligned form'>
        <div className='pure-control-group'>
          <label>Email</label>
          <input
            className='signin_input'
            type='text'
            onChange={event => this.updateEmail(event.target.value)} />
        </div>
        <div className='pure-control-group'>
          <label>Username</label>
          <input
            className='signin_input'
            type='text'
            onChange={event => this.updateUsername(event.target.value)} />
        </div>
        <div className='pure-control-group'>
          <label>Password</label>
          <input
            className='signin_input'
            type='password'
            onChange={event => this.updatePassword(event.target.value)} />
        </div>
        <div className='pure-control-group'>
          <label>Confirm Password</label>
          <input
            className='signin_input'
            type='password'
            onChange={event => this.updateConfirmation(event.target.value)} />
        </div>
        <div className='pure-controls'>
          <button className='pure-button pure-button-primary' onClick={e => this.sendRegisterData(e)}>Register</button>
          <p>Already have an account? <a className='switch' onClick={() => this.props.setLogin()}>Login</a> </p>
        </div>

      </div>

    )
  }
}

export default RegisterForm
