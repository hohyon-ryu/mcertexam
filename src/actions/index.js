import actionType from '../constants'

export function changeMenu(currentMenu) {
  return dispatch => dispatch({
    type: actionType.CHANGE_MENU,
    currentMenu
  });
}