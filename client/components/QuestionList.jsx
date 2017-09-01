import React from 'react'


const QuestionList = (props) => {
  return (
    <div>
      <p>Title: {props.title}</p>
      <p>Avatar: {props.profile_image}</p>
      <p>Answered: {props.is_answered}</p>
      <p>Tags: {props.tags}</p>
      <p>Score: {props.score}</p>
    </div>
  )
}

export default QuestionList
