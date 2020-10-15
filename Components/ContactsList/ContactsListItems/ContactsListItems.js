import React from 'react';
import { List, ListItem, Left, Right, Text, Switch } from "native-base";

const ContactsListItems = (props) => {
  const {cont} = props;
  const listItems = cont.filter(item => item !== undefined);

  return (
    <List
      dataArray={listItems}
      renderRow={(item) =>
        <ListItem>
          <Left>
            <Text>{item.name}</Text>
          </Left>
          <Right>
            <Switch/>
          </Right>
        </ListItem>
      }
    >
    </List>
  )
};

export default ContactsListItems;