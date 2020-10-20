import Contacts from 'react-native-contacts';

const getPhoneContacts = async () => {
  const result = [];
  await Contacts.getAll().then((res) => {
    if (res.length > 0) {
      res.map((item) =>
        item.phoneNumbers.length > 0
          ? result.push({
              id: item.recordID,
              name: item.displayName,
              phone: item.phoneNumbers[0].number,
            })
          : console.log('false'),
      );
    }
  });
  return result;
};

export default getPhoneContacts;
