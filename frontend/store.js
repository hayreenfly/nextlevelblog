import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import { userSignupReducer, userSigninReducer } from './reducers/userReducers';

const reducer = combineReducers({
  userSignup: userSignupReducer,
  userSignin: userSigninReducer,
});

const userInfoFromStorage =
  typeof window !== 'undefined'
    ? JSON.parse(localStorage.getItem('userInfo'))
    : null;

const initialState = {
  userSignin: { userInfo: userInfoFromStorage },
};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
