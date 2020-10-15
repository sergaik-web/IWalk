import {Icon, Input, InputGroup} from "native-base";
import React, {useState} from 'react';

const SearchPanel = () => {
  const [value, onChangeText] = useState();
  return (
    <InputGroup>
      <Icon name="ios-search" />
        <Input
          placeholder="Search"
          onChangeText={(text) => {
            onChangeText(text);
          }}
          value={value}
        />
      <Icon name="ios-people" />
    </InputGroup>
  )
};

export default SearchPanel;