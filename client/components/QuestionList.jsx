import React from 'react'


const QuestionList = (questions) => {
  return (
    <div>
      <p>Title: {questions.title}</p>
      <p>Number of Comments: {questions.numOfComments}</p>
      <p>Number of Answers: {questions.numOfAnswers}</p>
      <p>Score: {questions.score}</p>
    </div>
  )
}

export default QuestionList
