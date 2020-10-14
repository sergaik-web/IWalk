import React, {useState, useEffect} from 'react';
import {Container, Text} from "native-base";
import * as Contacts from 'expo-contacts';

const ContactsList = ()=>{
  // const [cont, setContacts] = useState([]);
  // useEffect(() => {
  //   (async () => {
  //     const { status } = await Contacts.requestPermissionsAsync();
  //     if (status === 'granted') {
  //       const { data } = await Contacts.getContactsAsync({
  //         fields: [Contacts.Fields.Emails],
  //       });
  //
  //       if (data.length > 0) {
  //         const contact = data[0];
  //         console.log(contact);
  //       }
  //     }
  //   })();
  // }, []);

  return (
    <Container>
      <Text>
        'loading'
      </Text>
    </Container>
  )
};

export default ContactsList;
