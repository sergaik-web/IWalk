import AsyncStorage from '@react-native-community/async-storage';

const clearAllContacts = async () => {
  try {
    await AsyncStorage.clear();
    console.log('clear');
  } catch (e) {
    console.log(e);
  }
};

export default clearAllContacts;
