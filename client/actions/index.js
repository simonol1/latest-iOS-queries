import request from 'superagent'

export const receiveQuestion = (questions) => {
  return {
    type: 'RECEIVE_QUESTION',
    questions: questions.map(question => question.data)
  }
}
export const setErrorMessage = (message) => {
  return {
    type: 'SET_ERROR_MESSAGE',
    errorMessage: message
  }
}


export function fetchQuestions () {
  return (dispatch) => {
    request
      .get('https://api.stackexchange.com/2.2/search?order=desc&sort=activity&tagged=ios&site=stackoverflow')

      .end((err, res) => {
       err ? dispatch(setErrorMessage("ERROR:" + err.message)) : dispatch(receiveQuestion(res.body))
      console.log(res.body);
     })
    }
  }
