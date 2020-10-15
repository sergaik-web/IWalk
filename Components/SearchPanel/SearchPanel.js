import {Icon, Input, InputGroup} from "native-base";
import React from 'react';
import {setSearchValue} from "../Actions/actions";
import {connect} from "react-redux";

const SearchPanel = (props) => {
  const {searchValue, setSearchValue} = props;

  return (
    <InputGroup>
      <Icon name="ios-search" />
        <Input
          placeholder="Search"
          onChangeText={(text) => {
            setSearchValue(text);
          }}
          value={searchValue}
        />
      <Icon name="ios-people" />
    </InputGroup>
  )
};

const mapStateToProps = (state) => {
  return {
    searchValue: state.searchValue
  }
};

const mapDispatchToProps = { setSearchValue };

export default connect(mapStateToProps, mapDispatchToProps)(SearchPanel);
