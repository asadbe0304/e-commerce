import { combineReducers } from 'redux';
import counterReducer from './slice';

const rootReducer = combineReducers({
  counter: counterReducer,
  // Other reducers can be added here
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
