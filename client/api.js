import request from 'superagent'

var questionUrl = 'http://localhost:3000/api/questions'

const getQuestions = (callback) => {
  request
    .get(questionUrl)
    .end((err, res) => {
      if (err) {
        callback(err)
      } else {
        callback(null, res.body)
      }
    })
}

export default getQuestions
