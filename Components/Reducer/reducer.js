const initialState = {
  iWalk: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_I_WALK_STATUS':
      return {
        ...state,
        iWalk: true
      };
    default:
      return {
        ...state
      }
  }
};

export default reducer;