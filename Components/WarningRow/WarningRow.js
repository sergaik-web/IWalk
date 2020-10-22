import {Button, Text, Row} from 'native-base';
import {connect} from 'react-redux';
import React from 'react';
import BackgroundGeolocation from '@mauron85/react-native-background-geolocation';

let SmsAndroid = require('react-native-sms-android');

const WarningRow = (props) => {
  const {selectedContacts} = props;
  const sendSMS = () => {
    BackgroundGeolocation.configure({
      desiredAccuracy: BackgroundGeolocation.HIGH_ACCURACY,
      stationaryRadius: 50,
      distanceFilter: 50,
      notificationTitle: 'Background tracking',
      notificationText: 'enabled',
      debug: true,
      startOnBoot: false,
      stopOnTerminate: true,
      locationProvider: BackgroundGeolocation.ACTIVITY_PROVIDER,
      interval: 10000,
      fastestInterval: 5000,
      activitiesInterval: 10000,
      stopOnStillActivity: false,
      url: 'http://192.168.81.15:3000/location',
      httpHeaders: {
        'X-FOO': 'bar',
      },
      // customize post properties
      postTemplate: {
        lat: '@latitude',
        lon: '@longitude',
        foo: 'bar', // you can also add your own properties
      },
    });

    BackgroundGeolocation.start();
    setInterval(() => {
      BackgroundGeolocation.getCurrentLocation((location) =>
        console.log(JSON.stringify(location)),
      );
    }, 10000);

    SmsAndroid.sms(
      '+375295885494', // phone number to send sms to
      'This is the sms text', // sms body
      'sendIndirect', // sendDirect or sendIndirect
      (err, message) => {
        if (err) {
          console.log(err);
        } else {
          console.log(message); // callback message
        }
      },
    );
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
