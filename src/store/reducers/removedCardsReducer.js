const removedCardsReducer= (state = [], action) => {
  switch (action.type) {
    case 'REMOVE_CARD':
      return [...state, action.payload];
    
    case 'CLEAR_REMOVED_CARDS':
        return []
    
    default:
      return state;
  }
}

export default removedCardsReducer