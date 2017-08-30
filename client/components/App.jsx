import React from 'react'

import {HashRouter as Router, Route} from 'react-router-dom'

import Questions from './Questions'
import * as api from '../api'


export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      Questions:[]
    }
  }

    componentDidMount () {
      api.getQuestions((questions) => this.renderQuestions(questions))
    }

    renderQuestions (err, questions) {
      this.setState({
        error: err,
        Questions: questions || []
      })
    }

render () {
  return (
  <Router>
    <div className='app-container'>
      <h1>Latest iOS Questions & Answers</h1>
      <Route exact path="/" component={Questions} />
      <renderQuestions />
    </div>
  </Router>
  )}
}
