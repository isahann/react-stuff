import { combineReducers } from 'redux';
import postsReducer from './postsReducer';
import usersReducer from './usersReducer';

// this replaceMe reducer is just some boilerplate to avoid getting errors in the app,
// so you can work on the rest of the app without worrying about not having any reducers setted up
export default combineReducers({
  // replaceMe: () => 'hi'
  posts: postsReducer,
  users: usersReducer
});
