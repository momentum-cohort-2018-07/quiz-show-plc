import request from 'superagent'

let userToken
const apiDomain = 'https://blooming-savannah-88933.herokuapp.com'
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
  },
  register: (username, password) => {
    return request.post(`${apiDomain}/users`)
      .send({ username, password })
      .then(res => res.body)
      .then(user => {
        data.setUserToken(user.token)
        return user
      })
  },
  getQuizzes: () => {
    return request.get(`${apiDomain}/api/quizzes`)
      .then(res => res.body)
  }
}

export default data
