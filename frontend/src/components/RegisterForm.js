import React, { Component } from 'react'

import data from '../data'

class RegisterForm extends Component {
  constructor () {
    super()
    this.state = {
      username: '',
      password: '',
      confirmation: ''
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

  sendRegisterData (e) {
    let username = this.state.username
    let password = this.state.password
    let confirmation = this.state.confirmation
    if (username !== '' && password !== '') {
      if (password === confirmation) {
        console.log('username:', username, 'password:', password, 'password confirmation:', confirmation)
        // data.register(username, password)
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
      </div>

    )
  }
}

export default RegisterForm
