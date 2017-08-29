import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'
import Questions from './Questions'

const App = () => (
  <Router>
    <div className='app-container'>
      <h1>Latest iOS Questions & Answers</h1>
      <Route exact path="/" component={Questions} />
    </div>
  </Router>
)

export default App
