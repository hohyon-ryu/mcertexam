import actionType from '../constants'
import {getQuestions} from 'javascripts/firebase'

export function loadQuestions(n) {
  return dispatch => {
    dispatch({
      type: actionType.LOAD_QUESTIONS,
    });

    getQuestions(20)
      .then(questions => {
        dispatch({
          type: actionType.LOAD_QUESTIONS_SUCCESS,
          payload: questions.val()
        })
      })
      .catch(error => {
        dispatch({
          type: actionType.LOAD_QUESTIONS_FAILED,
          payload: error
        })
      })
  }
}