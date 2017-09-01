import React from 'react'

import {connect} from 'react-redux'
import {fetchQuestions} from '../actions'
import QuestionList from './QuestionList'

class LoadQuestions extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      question: []
    }
  }
  componentDidMount() {
    this.props.dispatch(fetchQuestions(this.state.question))
    console.log(fetchQuestions());
  }


  render() {
    return (
        <div>
          <QuestionList />
        </div>
    )
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
  question: state.question
}
}

export default connect(mapStateToProps)(LoadQuestions)
