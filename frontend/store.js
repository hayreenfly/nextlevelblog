import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import { userSignupReducer, userSigninReducer } from './reducers/userReducers';

const reducer = combineReducers({
  userSignup: userSignupReducer,
  userSignin: userSigninReducer,
});

const initialState = {};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
