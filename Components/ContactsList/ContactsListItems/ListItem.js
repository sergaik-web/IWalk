import { Body, Left, Right, Switch, Text, ListItem } from "native-base";
import setItemStorage from "../../Scripts/setItemStorage";
import removeItemStorage from "../../Scripts/removeItemStorage";
import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

const checkedInclude = (checkItem, arr) => {
  let isEnabled = false;
  arr.map((item) => {
    item.id === checkItem.id ? (isEnabled = true) : null;
  });
  return isEnabled;
};

const ListItems = (props) => {
  const { item, selectedContacts } = props;
  const [isEnabled, setIsEnabled] = useState();

  useEffect(() => {
    const res = checkedInclude(item, selectedContacts);
    setIsEnabled(res);
  }, []);

  const toggleSwitch = () => {
    setIsEnabled((previousState) => {
      previousState ? removeItemStorage(item) : setItemStorage(item);
      return !previousState;
    });
  };

  return (
    <ListItem id={item.id}>
      <Left>
        <Text>{item.name}</Text>
      </Left>
      <Body>
        <Text style={{ color: "grey", fontSize: 12 }}>{item.phone}</Text>
      </Body>
      <Right>
        <Switch onValueChange={toggleSwitch} value={isEnabled} />
      </Right>
    </ListItem>
  );
};

const mapStateToProps = (state) => {
  return {
    selectedContacts: state.selectedContacts,
  };
};

export default connect(mapStateToProps)(ListItems);
