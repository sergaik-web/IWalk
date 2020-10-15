const setIWalkStatus = () => {
  return {
    type: "SET_I_WALK_STATUS",
  };
};

const setSearchValue = (searchValue) => {
  return {
    type: 'SET_SEARCH_VALUE',
    payload: searchValue
  }
};

export { setIWalkStatus, setSearchValue };
