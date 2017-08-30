import React from 'react'

import {Link} from 'react-router-dom'

import * as api from '../api'

export default class Questions extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      error: null,
      questions: []
    }
  }

  componentDidMount () {
   api.getQuestions((err, questions) => this.renderQuestions(err, questions))
 }

 renderQuestions (err, questions) {
   this.setState({
     error: err,
     questions: questions || []
   })
 }

  render () {
    return (
      <div className='question-titles'>
        <Link to='answers' path='/'><h5> What is an iOS? </h5></Link>
        <renderQuestions/>
      </div>
    )
  }
}
