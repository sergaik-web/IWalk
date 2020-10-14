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
        <Text>{!iWalk ? buttonData[0] : buttonData[1]}</Text>
      </Button>
  )
};

export default IWalkButton;