import { combineReducers } from 'redux';

import restaurantReducer from './restaurants.reducer';
import commentReducer from './comments.reducer';
import picturesReducer from './pictures.reducer';


export default combineReducers({
  restaurantStore: restaurantReducer,
  picturesStore: picturesReducer,
  commentsStore: commentReducer,
});
