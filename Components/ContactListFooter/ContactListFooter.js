import { Button, Footer, FooterTab, Text } from "native-base";
import React from "react";
import saveAllCheckedContact from "../Scripts/saveAllCheckedContact";
import clearAllContacts from "../Scripts/clearAllContacts";
import { setSelectedContacts, delSelectedContacts } from "../Actions/actions";
import { connect } from "react-redux";

const ContactListFooter = (props) => {
  const { navigation, setSelectedContacts } = props;
  const onPressSave = () => {
    saveAllCheckedContact(setSelectedContacts);
  };

  return (
    <Footer>
      <FooterTab>
        <Button
          badge
          style={styles.stndButton}
          onPress={() => {
            onPressSave();
            navigation.push("Home");
          }}
        >
          <Text style={styles.textContent}>Сохранить</Text>
        </Button>
      </FooterTab>
      <FooterTab>
        <Button
          badge
          style={styles.stndButton}
          onPress={() => {
            delSelectedContacts();
            clearAllContacts();
          }}
        >
          <Text style={styles.textContent}>Очистить</Text>
        </Button>
      </FooterTab>
    </Footer>
  );
};

const styles = {
  textContent: {
    fontSize: 16,
    color: "white",
  },
  stndButton: {
    backgroundColor: "red",
    borderWidth: 1,
    borderColor: "white",
  },
};

const mapDispatchToProps = { setSelectedContacts, delSelectedContacts };

export default connect(null, mapDispatchToProps)(ContactListFooter);
