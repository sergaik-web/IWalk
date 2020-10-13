import React from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  SafeAreaView,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { connect } from "react-redux";
import { setIWalkStatus } from "../Actions/actions";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 16,
  },
  buttonActive: {
    borderRadius: 25,
    backgroundColor: "red",
    padding: 25,
  },
  buttonDeactive: {
    borderRadius: 25,
    backgroundColor: "white",
    padding: 25,
    border: "solid red 1px",
  },
  buttonTextActive: {
    color: "white",
    fontSize: 25,
  },
  buttonTextDeactive: {
    color: "red",
    fontSize: 25,
  },
  title: {
    textAlign: "center",
    marginVertical: 8,
    marginTop: 200,
    fontSize: 20,
  },
});

const MainPage = (props) => {
  const { setIWalkStatus, iWalk } = props;
  const buttonData = ["Я ГУЛЯЮ!", "ЗАКОНЧИТЬ ГУЛЯТЬ"];

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <TouchableOpacity
          style={!iWalk ? styles.buttonActive : styles.buttonDeactive}
          enabled={!iWalk}
          onPress={() => {
            console.log(iWalk);
            setIWalkStatus();
          }}
        >
          <Text
            style={!iWalk ? styles.buttonTextActive : styles.buttonTextDeactive}
          >
            {!iWalk ? buttonData[0] : buttonData[1]}
          </Text>
        </TouchableOpacity>
        <Text style={styles.title}>
          Кнопка немедленного оповещения родных о том что у тебя возникли
          проблемы (рассылка смс)
        </Text>
        <TouchableOpacity
          style={styles.buttonActive}
          onPress={() => {
            console.log("SOS");
          }}
        >
          <Text style={styles.buttonTextActive}>SOS!</Text>
        </TouchableOpacity>
        <StatusBar style="auto" />
      </View>
    </SafeAreaView>
  );
};

const mapStateToProps = (state) => {
  return {
    iWalk: state.iWalk,
  };
};

const mapDispatchToProps = { setIWalkStatus };

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
