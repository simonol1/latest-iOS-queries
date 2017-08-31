function iosQuestions (state = [], action) {
  switch (action.type) {
    case 'RECEIVE_QUESTION':
      return [
        ...action.question
      ]
    default:
      return state
  }
}

export default iosQuestions
