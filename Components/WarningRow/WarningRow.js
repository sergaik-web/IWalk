import {Button, Text, Row} from 'native-base';
import {connect} from 'react-redux';
import SendSMS from 'react-native-send-sms';
import React from 'react';

const WarningRow = (props) => {
  const {selectedContacts} = props;
  const sendSMS = () => {
    const arrPhone = selectedContacts.map((item) => item.phone);
    arrPhone.map((item) => {
      SendSMS.send(item, 'TEST', (msg) => {
        alert(msg);
      });
    });
  };

  return (
    <>
      <Row style={styles.rowStyleText}>
        <Text style={{textAlign: 'center'}}>
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
            console.log('SOS');
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
