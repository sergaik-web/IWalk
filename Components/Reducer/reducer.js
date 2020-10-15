const initialState = {
  iWalk: false,
  searchValue: ''
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_I_WALK_STATUS":
      return {
        ...state,
        iWalk: !state.iWalk,
      };
    case 'SET_SEARCH_VALUE':
      return {
        ...state,
        searchValue: action.payload
      };
    default:
      return {
        ...state,
      };
  }
};

export default reducer;
