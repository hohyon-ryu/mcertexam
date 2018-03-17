import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import reducers from 'reducers'
export default () => {
  let middlewares = [thunk];
  return createStore(reducers, applyMiddleware(...middlewares));
}