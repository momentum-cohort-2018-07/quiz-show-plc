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
    return request.post(`${apiDomain}/api/session`)
      .send({ username, password })
      .then(res => console.log(res.body))
      // .then(token => {
      //   data.setUserToken(token)
      //   return { username, token }
      // })
  },
  register: (username, password, email) => {
    return request.post(`${apiDomain}/api/users`)
      .send({
        'user': `${username}`,
        'email': `${email}`,
        'password': `${password}`
      })
      .then(res => console.log(res.body))
      // .then(user => {
      //   data.setUserToken(user.token)
      //   return user
      // })
  },
  getQuizzes: () => {
    return request.get(`${apiDomain}/api/quizzes`)
      .then(res => res.body)
  }
}

export default data