import React, {useState, useEffect} from 'react';
import {Container, Spinner} from 'native-base';
import ContactsListItems from './ContactsListItems/ContactsListItems';
import ContactListFooter from '../ContactListFooter/ContactListFooter';
import getPhoneContacts from '../Scripts/getPhoneContacts';

const ContactsList = (props) => {
  const {navigation} = props;
  const [contacts, setContacts] = useState();

  useEffect(() => {
    getPhoneContacts().then((con) => setContacts(con));
  }, []);

  if (!contacts) {
    return (
      <Container
        style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Spinner color="red" />
      </Container>
    );
  }

  return (
    <Container>
      <ContactsListItems contacts={contacts} />
      <ContactListFooter navigation={navigation} />
    </Container>
  );
};

export default ContactsList;
