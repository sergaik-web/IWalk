import AsyncStorage from "@react-native-community/async-storage";

const checkedStorage = async (contact) => {
  try {
    const phoneArr = await AsyncStorage.getItem('phoneArr').then(console.log('GET OK'));
    console.log(phoneArr === JSON.stringify(contact));
    if (phoneArr !== null && phoneArr !== JSON.stringify(contact)) {
      console.log('Rewrite phone base');
      await AsyncStorage.removeItem('phoneArr').then(console.log('Remove OK'));
      await AsyncStorage.setItem('phoneArr', JSON.stringify(contact)).then(console.log('Set OK'))
    } else {
      console.log('The old and new bases are the same.');
    }
    } catch (e) {
    console.log(e);
  }
};

export default checkedStorage;