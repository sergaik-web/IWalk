import React from 'react';
import {connect} from 'react-redux';
import {setIWalkStatus, setPermissionsGranted} from '../Actions/actions';
import MainPageFooter from '../MainPageFooter/MainPageFooter';
import IWalkButton from '../IWalkButton/IWalkButton';
import WarningRow from '../WarningRow/WarningRow';
import {Container, Content, View} from 'native-base';
import {Row, Grid} from 'react-native-easy-grid';
import {PermissionsAndroid, Platform, Text} from 'react-native';

const MainPage = (props) => {
  const {
    setIWalkStatus,
    setPermissionsGranted,
    iWalk,
    navigation,
    iwalkTimer,
    permissionsGranted,
  } = props;
  if (Platform.OS === 'android') {
    PermissionsAndroid.requestMultiple([
      PermissionsAndroid.PERMISSIONS.READ_CONTACTS,
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      PermissionsAndroid.PERMISSIONS.SEND_SMS,
    ]).then((result) => {
      if (
        result['android.permission.READ_CONTACTS'] &&
        result['android.permission.ACCESS_FINE_LOCATION'] &&
        result['android.permission.SEND_SMS'] === 'granted'
      ) {
        setPermissionsGranted(true);
      } else if (
        result['android.permission.READ_CONTACTS'] ||
        result['android.permission.ACCESS_FINE_LOCATION'] ||
        result['android.permission.SEND_SMS'] === 'never_ask_again'
      ) {
        setPermissionsGranted(false);
      } else {
        setPermissionsGranted(false);
      }
    });
  }
  if (permissionsGranted) {
    return (
      <Container>
        <Content>
          <Grid>
            <Text>{`Всего нагулено ${iwalkTimer}`}</Text>
            <Row style={styles.rowStyle}>
              <IWalkButton iWalk={iWalk} setIWalkStatus={setIWalkStatus} />
            </Row>
            <WarningRow />
          </Grid>
        </Content>
        <MainPageFooter navigation={navigation} />
      </Container>
    );
  } else {
    return (
      <View>
        <Text>
          Пожалуйста дайте права приложинию
          (настройки=>права=>'Контакты','Локация','Сообщения')
        </Text>
      </View>
    );
  }
};

const styles = {
  rowStyle: {
    backgroundColor: 'white',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 100,
  },
};

const mapStateToProps = (state) => {
  return {
    iWalk: state.iWalk,
    iwalkTimer: state.iwalkTimer,
    permissionsGranted: state.permissionsGranted,
  };
};

const mapDispatchToProps = {setIWalkStatus, setPermissionsGranted};

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
