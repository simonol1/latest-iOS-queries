import React from 'react'

import {HashRouter as Router, Route} from 'react-router-dom'

import Questions from './Questions'


export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      error: null,
      Questions:[]
    }
  }

  render () {
    return (
      <Router>
        <div className='app-container'>
          <h1>Latest iOS Questions & Answers</h1>
          <Route exact path="/" component={Questions} />
        </div>
      </Router>
    )}
}
