import React, {useEffect, useState} from 'react';
import { List } from "native-base";
import { connect } from "react-redux";
import filterContacts from "../../Scripts/filterContacts";
import ListItems from './ListItem';

const ContactsListItems = (props) => {
  const {contacts, searchValue} = props;
  const [viewContacts, setViewContacts] = useState(contacts);

  useEffect(()=>{
    setViewContacts(filterContacts(contacts, searchValue));
  }, [searchValue, contacts]);

  return (
    <List
      dataArray={viewContacts}
      renderRow={(item) =>
        <ListItems item={item} />
      }
    >
    </List>
  )
};

const mapStateToProps = (state) => {
  return {
    searchValue: state.searchValue
  }
};

export default connect(mapStateToProps)(ContactsListItems);
