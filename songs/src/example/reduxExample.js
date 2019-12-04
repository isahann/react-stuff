console.clear();

// People dropping off a form (Action creators)

const createPolicy = (name, amount) => {
  // Action (a form in our analogy)
  return {
    // Usually we don't use something like "Create a new policy"
    type: 'CREATE_POLICY',
    payload: {
      name: name,
      amount: amount
      // or {name, amount}
    }
  };
};

const deletePolicy = (name) => {
  return{
    type: 'DELETE_POLICY',
    payload: {
      name: name
    }
  }
};

const createClaim = (name, amountToCollect) => {
  return {
      type: 'CREATE_CLAIM',
      payload: {
        name: name,
        amountToCollect: amountToCollect
      }
  };
};

// Reducers (departments!)

// = [] gets assigned if oldListOfClaims is undefined
const claimsHistory = (oldListOfClaims = [], action) => {
  if(action.type === 'CREATE_CLAIM'){
    // We care about this action (form)
    
    // Takes the array (oldListOfClaim), the (...) means it's taking every record in it, and the action.payload will be added to it, and it will be returned in a new array
    
    // Avoid using oldListOfClaims.push
    return [...oldListOfClaims, action.payload];
  }
  
  // We don't care about the action (form)
  return oldListOfClaims;
};

const accounting = (bagOfMoney = 100, action) => {
  if(action.type === 'CREATE_CLAIM'){
    return bagOfMoney - action.payload.amountToCollect;
  } else if(action.type === 'CREATE_POLICY'){
    return bagOfMoney + action.payload.amount;
  }
  
  return bagOfMoney;
}

const policies = (listOfPolicies = [], action) => {
  if(action.type === 'CREATE_POLICY'){
    return [...listOfPolicies, action.payload.name];
  } else if (action.type === 'DELETE_POLICY'){
    return listOfPolicies.filter(name => name !== action.payload.name);
  }
  
  return listOfPolicies;
}

// 

const { createStore, combineReducers } = Redux;

const departments = combineReducers({
  currentMoney: accounting,
  claimsHistory: claimsHistory,
  policiesList: policies
});

const store = createStore(departments);

store.dispatch(createPolicy('John', 50));
store.dispatch(createPolicy('Alex', 60));
store.dispatch(createPolicy('Bob', 20));
console.log(store.getState());

store.dispatch(createClaim('Alex', 120));
store.dispatch(createClaim('Bob', 20));
console.log(store.getState());

store.dispatch(deletePolicy('John'));
console.log(store.getState());