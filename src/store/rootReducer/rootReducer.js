import { combineReducers } from "redux";

const loginInitialState = {
  users: [],
  isSucces: false,
  error: null,
};

const loginReducer = (state = loginInitialState, action) => {
  if (action.type === "GET") {
    const newData = action.data.filter((item, i) => i % 2);
    return {
      ...state,
      users: newData,
    };
  }

  if (action.type === "DELETE") {
    const taskId = action.payload;
    const deleteData = state.users.filter((data) => data.id !== taskId);
    console.log(deleteData);
    return {
      ...state,
      users: deleteData,
    };
  }

  if (action.type === "SUCCES") {
    return {
      ...state,
      isSucces: true,
    };
  }

  if (action.type === "ERROR") {
    return {
      ...state,
      error: action.payload,
    };
  }

  return state;
};

export const rootReducer = combineReducers({
  login: loginReducer,
});
