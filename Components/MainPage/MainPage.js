import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {StatusBar} from "expo-status-bar";
import {connect} from "react-redux";
import { setIWalkStatus } from "../Actions/actions";

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

const MainPage = (props) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button}>
        <Text
          style={styles.buttonText}
          onPress={()=> {
              props.setIWalkStatus();
              console.log(props.iwalk)
            }
          }
        >
          Я Гуляю!
        </Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  )
};

const mapStateToProps = (state) => {
  return {
    iwalk: state.iWalk
  }
};

const mapDispatchToProps = {setIWalkStatus};

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);