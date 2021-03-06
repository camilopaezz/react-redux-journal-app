import {applyMiddleware, compose, createStore} from 'redux';
import thunk from 'redux-thunk';
import {authReducer} from '../reducers/authReducer';

const composeEnhancers =
  (typeof window !== 'undefined' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

export const store = createStore(
    authReducer,
    composeEnhancers(
        applyMiddleware(thunk),
    ),
);
