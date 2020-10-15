import {Button, Footer, FooterTab, Text} from "native-base";
import React from "react";
import saveContactState from "../Scripts/saveContactState";

const ContactListFooter = (props) => {
  const {navigation} = props;
  return (
    <Footer>
      <FooterTab >
        <Button
          badge
          style={styles.stndButton}
          onPress={()=>{
            saveContactState();
            navigation.push('Home');
          }}
        >
          <Text style={styles.textContent}>Сохранить</Text>
        </Button>
      </FooterTab>
      <FooterTab >
        <Button
          badge
          style={styles.stndButton}
          onPress={()=>console.log('Очистить')}
        >
          <Text style={styles.textContent}>Очистить</Text>
        </Button>
      </FooterTab>
    </Footer>
  )
};

const styles = {
  textContent: {
    fontSize: 16,
    color: 'white',
  },
  stndButton: {
    backgroundColor: 'red',
    borderWidth: 1,
    borderColor: 'white'
  }
};

export default ContactListFooter;
