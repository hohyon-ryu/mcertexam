import _ from 'lodash'
import actionType from 'constants'

let initialState = {
  currentMenu: "Intro"
};

export default (state = initialState, action) => {
  switch(action.type) {
    case actionType.CHANGE_MENU:
      return {
        currentMenu: action.currentMenu
      };
    default:
      return state
  }
}