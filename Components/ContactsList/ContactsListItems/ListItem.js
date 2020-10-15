import {Body, Left, Right, Switch, Text, ListItem} from "native-base";
import setItemStorage from "../../Scripts/setItemStorage";
import removeItemStorage from "../../Scripts/removeItemStorage";
import React, { useState } from 'react';

const ListItems = (props) => {
  const { item } = props;
  const [isEnabled, setIsEnabled] = useState(false);

  const toggleSwitch = () => {
    setIsEnabled((previousState) => {
      previousState ? removeItemStorage(item) : setItemStorage(item);
      return !previousState;
    })
  };

  return (
    <ListItem id={item.id}>
      <Left>
        <Text>{item.name}</Text>
      </Left>
      <Body>
        <Text style={{color: 'grey', fontSize: 12}}>{item.phone}</Text>
      </Body>
      <Right>
        <Switch
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
      </Right>
    </ListItem>
  )
};

export default ListItems;
