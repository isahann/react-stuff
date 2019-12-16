import _ from 'lodash';
import jsonPlaceholder from '../apis/jsonPlaceholder';

export const fetchPostsAndUsers = () => async (dispatch, getState) => {
  // console.log('going to fetch posts');
  await dispatch(fetchPosts());
  // console.log('fetched posts');

  // console.log('going to fetch users id');
  // The _.map returns an array with only the 'userId' property from the posts
  // and the _.uniq function remove duplicates

  // const userIds = _.uniq(_.map(getState().posts, 'userId'));
  // userIds.forEach(userId => dispatch(fetchUser(userId)));

  // Chain allows to manipulate a single collection with many methods as we want
  // *we need to call value() at the end to execute the methods
  _.chain(getState().posts)
    .map('userId')
    .uniq()
    .forEach(userId => dispatch(fetchUser(userId)))
    .value();
};

export const fetchPosts = () => async (dispatch, getState) => {
  // Bad approach, breaks the rules of an action creator and causes an error
  // Actions must be plain objects, we need to use MIDDLEWARES for async actions
  // const response = await jsonPlaceholder.get('/posts');

  // Using redux thunk as a middleware, now we can make asynchronous operations
  // it doesn't need to return an action, just use the dispatch function
  // you can also access the redux store with the getState function (if it's not being used you can remove it)
  const response = await jsonPlaceholder.get('/posts');

  dispatch({
    type: 'FETCH_POSTS',
    payload: response.data
  });
};

export const fetchUser = id => async dispatch => {
  const response = await jsonPlaceholder.get(`/users/${id}`);

  dispatch({
    type: 'FETCH_USER',
    payload: response.data
  });
};

// export const fetchUser = id => dispatch => {
//   _fetchUser(id, dispatch);
// };
// const _fetchUser = _.memoize(async (id, dispatch) => {
//   const response = await jsonPlaceholder.get(`/users/${id}`);

//   dispatch({
//     type: 'FETCH_USER',
//     payload: response.data
//   });
// });
