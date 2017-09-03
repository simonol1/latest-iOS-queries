import React from 'react'


const QuestionList = (props) => {
  let q = props.question
  return (
    <div>
      <p><img src={q.owner.profile_image}/><h4>{q.title}?</h4></p>
      <p>Number of answers: {q.answer_count}</p>
      <p>Score: {q.score}</p>
      <p>Tags: {q.tags}</p>
      <a href={q.link}>{q.link}</a>
      <hr></hr>
    </div>
  )
}

export default QuestionList
