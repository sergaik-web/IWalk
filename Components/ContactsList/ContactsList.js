import React, {useState, useEffect} from 'react';
import {Container, Text, Spinner} from "native-base";
import ContactsListItems from './ContactsListItems/ContactsListItems';
import checkedStorage from "../Scripts/checkedStorage";
import * as Contacts from 'expo-contacts';

const ContactsList = ()=>{
  const [cont, setContacts] = useState();

  useEffect(() => {
    (async () => {
        const { data } = await Contacts.getContactsAsync({
          fields: [Contacts.Fields.PhoneNumbers],
        });
        if (data.length > 0) {
          const contact = data.map(item=>{
            if (item.phoneNumbers) {
              return {
                id: item.id,
                name: item.name,
                phone: item.phoneNumbers[0].number
              }
            }
          }).filter(item => item !== undefined);
          checkedStorage(contact);
          setContacts(contact);
        }
    })();
  }, []);

  if (!cont) {
    return (
      <Container style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Spinner color="red" />
      </Container>
    )
  }

  return (
    <Container>
      <ContactsListItems cont={cont}/>
    </Container>
  )

};

export default ContactsList;
