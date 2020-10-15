import AsyncStorage from "@react-native-community/async-storage";

const saveContactState = async () => {
  try {
    await AsyncStorage.getAllKeys().then(e=>console.log(e));
  } catch (e) {
    console.log(e);
  }
};

export default saveContactState;
