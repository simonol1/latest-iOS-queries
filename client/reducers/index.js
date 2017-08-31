import {combineReducers} from 'redux'

import iosQuestions from './iosQuestions'
import errorMessage from './errorMessage'
export default combineReducers({
  iosQuestions,
  errorMessage
})
