import _ from 'lodash'
import actionType from 'constants'

let initialState = {
  question_no: 1
};

export default (state = initialState, action) => {
  switch(action.type) {
    case actionType.LOAD_QUESTIONS:
      return state;
    case actionType.LOAD_QUESTIONS_SUCCESS:
      return _.merge(state, {question_list: action.payload});
    default:
      return state
  }
}