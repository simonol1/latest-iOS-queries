import React from 'react'

import {connect} from 'react-redux'
import {fetchPosts} from '../actions'

class LoadQuestions extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      question: ''
    }
  }

  handleChange(e) {
    this.setState({question: e.target.value })
  }

  render() {
    return (
      <div>
        <input type='text' name='question' value={this.state.question} onChange={this.handleChange.bind(this)}/>
        <button
          onClick={()=> this.props.dispatch(fetchPosts(this.state.question))} >
          Give Me Those Sweet Memes
        </button>

      </div>
    )
  }
}

const mapStateToProps = (state) => {
  question: state.question
}

export default connect(mapStateToProps)(LoadQuestions)
