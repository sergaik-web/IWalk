import React, {useState, useEffect} from 'react';
import {Container, Text} from "native-base";
import * as Contacts from 'expo-contacts';

const ContactsList = ()=>{
  const [cont, setContacts] = useState([]);
  useEffect(() => {
    (async () => {
      const { status } = await Contacts.requestPermissionsAsync();
      if (status === 'granted') {
        const { data } = await Contacts.getContactsAsync();

        if (data.length > 0) {
          const contact = data[356];
          setContacts(contact);
          console.log(contact);
        }
      }
    })();
  }, []);

  return (
    <Container>
      <Text>
        {cont ? cont.id : 'loading'}
      </Text>
    </Container>
  )
};

export default ContactsList;
