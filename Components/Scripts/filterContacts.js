const filterContacts = (contacts, searchValue) => {
  return contacts.filter((item) =>
    item.name.toLowerCase().includes(searchValue.toLowerCase()),
  );
};

export default filterContacts;
