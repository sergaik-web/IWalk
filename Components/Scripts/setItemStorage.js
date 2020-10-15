import AsyncStorage from "@react-native-community/async-storage";

const setItemStorage = async (contact) => {
  try {
      await AsyncStorage.setItem(contact.id, JSON.stringify(contact));
    } catch (e) {
      console.log(e);
  }
};

export default setItemStorage;
