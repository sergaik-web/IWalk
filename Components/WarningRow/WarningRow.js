import {Button, Text} from "native-base";
import React from "react";

const WarningRow = () => {
  return (
    <>
      <Row style={styles.rowStyle}>
        <Text style={{textAlign: 'center'}}>
          Кнопка немедленного оповещения близких о том что у тебя возникли
          проблемы (рассылка смс по выбранным контактам)
        </Text>
      </Row>
      <Row style={styles.rowStyle}>
        <Button
          large
          style={styles.iWalkButton}
          onPress={() => {
            console.log("SOS");
          }}
        >
          <Text>SOS!</Text>
        </Button>
      </Row>
    </>
  )
};

export default WarningRow;