import React from 'react'


const QuestionList = (props) => {
  let q = props.question
  return (
    <div>
      <h4>Title: {q.title}</h4>
      <p>Avatar: {q.profile_image}</p>
      <p>Answered: {q.is_answered}</p>
      <p>Tags: {q.tags}</p>
      <p>Score: {q.score}</p>
    </div>
  )
}

export default QuestionList
