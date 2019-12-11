// Basic rules of reducers
// 1 - must return any value besides 'undefined'
// 2 - produces 'state', or data to be used inside of your app using ONLY previous state and the actions
// 3 - must not reach 'out of itself' (API requests, query selectors etc) to decide what value to return (reducers are pure)
// 4 - must not mutate its input 'state' argument
// (misleading rule! you can mutate and don't see any errors, but it's easier to tell beginners to not mutate instead of telling them when they can and can't)

export default (state = [], action) => {
  switch (action.type) {
    case 'FETCH_POSTS':
      return action.payload;
    default:
      return state;
  }
};
