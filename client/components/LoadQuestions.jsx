import React from 'react'

import {connect} from 'react-redux'
import {fetchQuestions} from '../actions'
import QuestionList from './QuestionList'

class LoadQuestions extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      question: {items:[]}
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
          {this.state.question.items.map((question,idx) => <QuestionList question={question} key={idx} />)}
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
