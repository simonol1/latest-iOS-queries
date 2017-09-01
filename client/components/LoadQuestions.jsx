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
  componentWillMount() {
    this.props.dispatch(fetchQuestions())
  }

  componentWillReceiveProps({question}) {
    console.log({question});
    this.setState({
      question:question
    })
  }


  render() {
    return (
        <div>
          <h1>{this.question.title}</h1>
          <QuestionList />
        </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
  question: state.iosQuestions.question
}
}

export default connect(mapStateToProps)(LoadQuestions)
