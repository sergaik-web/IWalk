import {Button, Footer, FooterTab, Text} from "native-base";
import React from "react";

const MainPageFooter = ({navigation}) => {
  return (
    <Footer>
      <FooterTab >
        <Button
          badge
          style={styles.stndButton}
          onPress={()=>navigation.push('Contacts')}
        >
          <Text style={styles.textContent}>Выбрать контакты</Text>
        </Button>
      </FooterTab>
    </Footer>
  )
};

const styles = {
  textContent: {
    fontSize: 16,
    color: 'red',
  },
  stndButton: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'red'
  }
};

export default MainPageFooter;
