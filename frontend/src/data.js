import request from 'superagent'

let userToken
const apiDomain = 'http://localhost:3001'
// back end hosting link: https://blooming-savannah-88933.herokuapp.com

const data = {
  setUserToken: (token) => {
    userToken = token
  },
  getUserToken: () => {
    return userToken
  },
  login: (username, password) => {
    return request.post(`${apiDomain}/api/login`)
      .send({ username, password })
      .then(res => res.body.token)
      .then(token => {
        data.setUserToken(token)
        return { username, token }
      })
      .catch(err => {
        if (err.response.statusCode === 422) {
          throw new Error('You must provide a username and password.')
        } else if (err.response.statusCode === 401) {
          throw new Error('There is no user with that username and password.')
        } else {
          throw new Error('There was a problem communicating with the server.')
        }
      })
  },
  register: (username, password) => {
    return request.post(`${apiDomain}/api/users`)
      .send({ username, password })
      .then(res => res.body)
      .then(user => {
        data.setUserToken(user.token)
        return user
      })
      .catch(err => {
        if (err.response.statusCode === 422) {
          const errors = err.response.body.errors
          if (errors[0].msg === 'cannot be empty') {
            throw new Error('You must provide a username and password.')
          } else if (errors[0] === 'user already exists') {
            throw new Error('A user with that username already exists.')
          } else {
            throw new Error(`An unknown problem occurred: ${errors}`)
          }
        } else {
          throw new Error('There was a problem communicating with the server.')
        }
      })
  },
  getQuizzes: () => {
    return request.get(`${apiDomain}/quizzes`)
      .then(res => res.body.Quizzes)
  }
}

export default data
