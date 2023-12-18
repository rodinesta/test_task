const switchReducer = (state = false, action) => {
  switch (action.type) {
    case 'GET_STATE':
      return action.payload;

    default:
      return state;
  }
};

export default switchReducer