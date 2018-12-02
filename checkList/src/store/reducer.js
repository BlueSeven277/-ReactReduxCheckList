

const defaultState = {
  inputValue: "Go shopping",
  list: ["Meet professor"]
};
//reducer cannot change state directly, hence we have to copy and return new state to store
export default (state = defaultState, action) => {
  if (action.type === "change_input_value") {
    const newState = JSON.parse(JSON.stringify(state)); //copy
    newState.inputValue = action.value;
    return newState;
  }
  if (action.type === "add_item") {
    const newState = JSON.parse(JSON.stringify(state)); //copy
    newState.list.push(newState.inputValue);
    newState.inputValue = "";
    console.log(newState);
    return newState;
  }
  if (action.type === "delete_item") {
    const newState = JSON.parse(JSON.stringify(state)); //copy
    console.log(action.index);
    
    newState.list.splice(action.index, 1);

    return newState;
  }
  //console.log(state, action);
  return state;
};
