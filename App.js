import { StatusBar } from 'expo-status-bar';
import {Provider} from 'react-redux';
import store from "./Components/Store/store";
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const App = () => {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <TouchableOpacity style={styles.button}>
          <Text
            style={styles.buttonText}
            onPress={()=>console.log('press')}
          >
            Я Гуляю!
          </Text>
        </TouchableOpacity>
        <StatusBar style="auto" />
      </View>
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    borderRadius: 25,
    backgroundColor: 'red',
    padding: 25,
  },
  buttonText: {
    color: '#fff',
    fontSize: 25,
  }
});

export default App;