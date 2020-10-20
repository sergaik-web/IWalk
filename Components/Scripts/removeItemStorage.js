import AsyncStorage from '@react-native-community/async-storage';

const removeItemStorage = async (contact) => {
  try {
    await AsyncStorage.removeItem(contact.id);
  } catch (e) {
    console.log(e);
  }
};

export default removeItemStorage;
