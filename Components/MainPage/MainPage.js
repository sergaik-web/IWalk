import React from "react";
import { connect } from "react-redux";
import { setIWalkStatus } from "../Actions/actions";
import PageHeader from "../PageHeader/PageHeader";
import PageFooter from "../PageFooter/PageFooter";
import IWalkButton from "../IWalkButton/IWalkButton";
import WarningRow from "../WarningRow/WarningRow";
import {
  Content,

} from "native-base";
import { Row, Grid } from 'react-native-easy-grid';

const MainPage = (props) => {
  const { setIWalkStatus, iWalk } = props;

  return (
    <>
      <PageHeader/>
      <Content>
        <Grid>
          <Row style={styles.rowStyle}>
            <IWalkButton iWalk={iWalk} setIWalkStatus={setIWalkStatus}/>
          </Row>
          <Row style={styles.rowStyle}>
            <WarningRow/>
          </Row>
        </Grid>
      </Content>
      <PageFooter/>
    </>
  );
};

const styles = {
  rowStyle: {
    backgroundColor: 'white',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50
  },
  textContent: {
    fontSize: 16,
    color: 'red',
  },
  iWalkButton: {
    backgroundColor: 'red',
    borderRadius: 15,
  },
  stndButton: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'red'
  }
};

const mapStateToProps = (state) => {
  return {
    iWalk: state.iWalk,
  };
};

const mapDispatchToProps = { setIWalkStatus };

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
