import React from 'react'


const QuestionList = (props) => {
  let q = props.question
  return (
    <div>
      <h4>{q.title}?</h4>
      <p><img src={q.owner.profile_image}/></p>
      <p>Number of answers: {q.answer_count}</p>
      <p>Tags: {q.tags}</p>
      <p>Score: {q.score}</p>
      <a href={q.link}>{q.link}</a>
      <hr></hr>
    </div>
  )
}

export default QuestionList
