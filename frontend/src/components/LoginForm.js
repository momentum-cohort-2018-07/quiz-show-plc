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
        .then(user => this.props.setCurrentUser(user))
    } else {
      window.alert('Username and Password required')
    }
  }

  render () {
    return (
      <div className='pure-form pure-form-aligned form'>
        <div className='pure-control-group'>
          <label htmlFor='username'>Username</label>
          <input
            id='username'
            type='text'
            onChange={event => this.updateUsername(event.target.value)} />
        </div>
        <div className='pure-control-group'>
          <label htmlFor='password'>Password</label>
          <input
            id='password'
            type='password'
            onChange={event => this.updatePassword(event.target.value)} />
        </div>
        <div className='pure-controls'>
          <button className='pure-button pure-button-primary' onClick={e => this.sendUserLoginData(e)}>Sign In</button>
          <p>Don't have an account? <a className='switch' onClick={() => this.props.setRegister()}>Register</a> </p>
        </div>

      </div>

    )
  }
}

export default LoginForm
