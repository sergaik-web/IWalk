import React from "react";
import { connect } from "react-redux";
import { setIWalkStatus } from "../Actions/actions";
import MainPageFooter from "../MainPageFooter/MainPageFooter";
import IWalkButton from "../IWalkButton/IWalkButton";
import WarningRow from "../WarningRow/WarningRow";
import { Container, Content } from "native-base";
import { Row, Grid } from "react-native-easy-grid";

const MainPage = (props) => {
  const { setIWalkStatus, iWalk, navigation } = props;

  return (
    <Container>
      <Content>
        <Grid>
          <Row style={styles.rowStyle}>
            <IWalkButton iWalk={iWalk} setIWalkStatus={setIWalkStatus} />
          </Row>
          <WarningRow />
        </Grid>
      </Content>
      <MainPageFooter navigation={navigation} />
    </Container>
  );
};

const styles = {
  rowStyle: {
    backgroundColor: "white",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 100,
  },
};

const mapStateToProps = (state) => {
  return {
    iWalk: state.iWalk,
  };
};

const mapDispatchToProps = { setIWalkStatus };

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
