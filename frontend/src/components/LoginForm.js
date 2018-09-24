import React, { Component } from 'react'

import data from '../data'

class LoginForm extends Component {
  constructor () {
    super()
    this.state = {
      username: '',
      password: ''
    }
  }

  updateUsername (value) {
    this.setState({ username: value })
  }

  updatePassword (value) {
    this.setState({ password: value })
  }

  sendUserLoginData (e) {
    let username = this.state.username
    let password = this.state.password
    if (username !== '' && password !== '') {
      console.log('username: ', username, 'password: ', password)
      data.login(username, password)
    } else {
      window.alert('Username and Password required')
    }
  }

  render () {
    return (
      <div className='LoginForm'>
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
        <button onClick={e => this.sendUserLoginData(e)}>Sign In</button>
      </div>

    )
  }
}

export default LoginForm
