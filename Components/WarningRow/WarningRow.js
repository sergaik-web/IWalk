import {Button, Text, Row} from 'native-base';
import {connect} from 'react-redux';
import React from 'react';
import {NativeModules, PermissionsAndroid} from 'react-native';
let DirectSms = NativeModules.DirectSms;

const WarningRow = (props) => {
  const {selectedContacts} = props;
  const sendSMS = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.SEND_SMS,
        {
          title: 'Разрешение на отправку СМС',
          message:
            'Приложению требуется доступ к отправке СМС,' +
            'для рассылки СМС на фоне, в случае тревоги.',
          buttonNeutral: 'Спросить позже',
          buttonNegative: 'Отмена',
          buttonPositive: 'Разрешить',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        DirectSms.sendDirectSms('+375445885494', 'Здесь текст сообщения');
      } else {
        console.log('Разрешение на отправку СМС не дано');
      }
    } catch (err) {
      console.warn(err);
    }
  };

  return (
    <>
      <Row style={styles.rowStyleText}>
        <Text style={styles.rowTextAlign}>
          Кнопка немедленного оповещения близких о том что у тебя возникли
          проблемы (рассылка смс по выбранным контактам)
        </Text>
      </Row>
      <Row style={styles.rowStyle}>
        <Button
          large
          style={styles.SOSButton}
          onPress={() => {
            sendSMS();
          }}>
          <Text>SOS!</Text>
        </Button>
      </Row>
    </>
  );
};

const styles = {
  rowStyle: {
    backgroundColor: 'white',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
  },
  rowStyleText: {
    backgroundColor: 'white',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 100,
  },
  rowTextAlign: {
    textAlign: 'center',
  },
  SOSButton: {
    backgroundColor: 'red',
    borderRadius: 15,
    justifyContent: 'center',
    height: 80,
    width: 150,
  },
};

const mapStateToProps = (state) => {
  return {
    selectedContacts: state.selectedContacts,
  };
};

export default connect(mapStateToProps)(WarningRow);
