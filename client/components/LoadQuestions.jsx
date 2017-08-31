import React from 'react'

import {connect} from 'react-redux'
import {fetchQuestions} from '../actions'

class LoadQuestions extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      question: ''
    }
  }
  componentWillMount() {
    this.props.dispatch(fetchQuestions(this.state.question))
  }


  render() {
    return (
      <div>Questions</div>
    )
  }
}

const mapStateToProps = (state) => {
  question: state.question
}

export default connect(mapStateToProps)(LoadQuestions)
