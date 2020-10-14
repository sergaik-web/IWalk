import {Body, Header, Title} from "native-base";
import React from "react";

const PageHeader = () => {
  return (
    <Header androidStatusBarColor={'red'} style={{backgroundColor:'white', justifyContent: 'center', textAlign: 'center'}}>
      <Body>
        <Title style={{color: 'red', fontSize: 26 }}>На прогулке 00:00:00</Title>
      </Body>
    </Header>
  )
};

export default PageHeader;