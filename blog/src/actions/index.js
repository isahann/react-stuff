import jsonPlaceholder from '../apis/jsonPlaceholder';

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
    payload: response
  });
};
