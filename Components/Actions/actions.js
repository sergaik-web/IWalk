const setIWalkStatus = () => {
  return {
    type: 'SET_I_WALK_STATUS',
  };
};

const setSearchValue = (searchValue) => {
  return {
    type: 'SET_SEARCH_VALUE',
    payload: searchValue,
  };
};

const setSelectedContacts = (selectedContacts) => {
  return {
    type: 'SET_SELECTED_CONTACTS',
    payload: selectedContacts,
  };
};

const delSelectedContacts = () => {
  return {
    type: 'DEL_SELECTED_CONTACTS',
  };
};

const setIwalkTimer = (time) => {
  return {
    type: 'SET_IWALK_TIMER',
    payload: time,
  };
};

const setPermissionsGranted = (granded) => {
  return {
    type: 'SET_PERMISSIONS_GRANTED',
    payload: granded,
  };
};

export {
  setIWalkStatus,
  setSearchValue,
  setSelectedContacts,
  delSelectedContacts,
  setIwalkTimer,
  setPermissionsGranted,
};
