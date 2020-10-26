const initialState = {
  iWalk: false,
  searchValue: '',
  selectedContacts: [],
  iwalkTimer: '00:00:00:00',
  permissionsGranted: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_I_WALK_STATUS':
      return {
        ...state,
        iWalk: !state.iWalk,
      };
    case 'SET_SEARCH_VALUE':
      return {
        ...state,
        searchValue: action.payload,
      };
    case 'SET_SELECTED_CONTACTS':
      return {
        ...state,
        selectedContacts: action.payload,
      };
    case 'DEL_SELECTED_CONTACTS':
      return {
        ...state,
        selectedContacts: [],
      };
    case 'SET_IWALK_TIMER':
      return {
        ...state,
        iwalkTimer: action.payload,
      };
    case 'SET_PERMISSIONS_GRANTED':
      return {
        ...state,
        permissionsGranted: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
};

export default reducer;
