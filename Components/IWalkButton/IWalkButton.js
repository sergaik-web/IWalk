import {Button, Text} from "native-base";
import React from "react";

const IWalkButton = (props) => {
  const {iWalk, setIWalkStatus} = props;
  const buttonData = ["Я ГУЛЯЮ!", "ЗАКОНЧИТЬ ГУЛЯТЬ"];

  return (
      <Button
        style={styles.iWalkButton}
        onPress={() => {
          setIWalkStatus();
          console.log(iWalk);
        }}
      >
        <Text style={styles.iWalkButtonText}>{!iWalk ? buttonData[0] : buttonData[1]}</Text>
      </Button>
  )
};

const styles = {
  iWalkButton: {
    backgroundColor: 'white',
    borderRadius: 15,
    borderColor: 'red',
    borderWidth: 1,
    height: 150
  },
  iWalkButtonText: {
    fontSize: 22,
    color: 'red'
  }
};

export default IWalkButton;