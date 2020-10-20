import AsyncStorage from '@react-native-community/async-storage';

const saveAllCheckedContact = async (setSelectedContacts) => {
  try {
    const keys = await AsyncStorage.getAllKeys();
    const result = [];
    const res = keys.map(async (item) => {
      await AsyncStorage.getItem(item).then((e) => {
        result.push(JSON.parse(e));
        result.length === keys.length ? setSelectedContacts(result) : null;
      });
    });
  } catch (e) {
    console.log(e);
  }
};

export default saveAllCheckedContact;
