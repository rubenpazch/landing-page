import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { applyMiddleware, createStore } from 'redux';
import rootReducer from './reducers/root.reducer';

const middleware = composeWithDevTools(
  applyMiddleware(thunk),
);

export default createStore(rootReducer, middleware);
