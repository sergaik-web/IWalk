import {Button, Text} from 'native-base';
import React, {useEffect} from 'react';
import BackgroundGeolocation from '@mauron85/react-native-background-geolocation';
import {setIwalkTimer} from '../Actions/actions';
import {connect} from 'react-redux';
import iwalkTimer from '../Scripts/iwalkTimer';

BackgroundGeolocation.configure({
  desiredAccuracy: BackgroundGeolocation.HIGH_ACCURACY,
  stationaryRadius: 50,
  distanceFilter: 50,
  notificationTitle: 'Отслеживание геолокации',
  notificationText: 'Включено',
  debug: false,
  startOnBoot: false,
  stopOnTerminate: true,
  locationProvider: BackgroundGeolocation.ACTIVITY_PROVIDER,
  interval: 10000,
  fastestInterval: 5000,
  activitiesInterval: 10000,
  notificationIconColor: '#fd0000',
  stopOnStillActivity: false,
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

const IWalkButton = (props) => {
  const {iWalk, setIWalkStatus, setIwalkTimer} = props;
  const buttonData = ['Я ГУЛЯЮ!', 'ЗАКОНЧИТЬ ГУЛЯТЬ'];

  useEffect(() => {
    let checkLocation;
    let iwalkTimerInterval;
    if (iWalk) {
      iwalkTimerInterval = setInterval(() => {
        iwalkTimer(setIwalkTimer);
      }, 1000);
      BackgroundGeolocation.start();
      checkLocation = setInterval(() => {
        BackgroundGeolocation.getCurrentLocation((location) =>
          console.log(location.latitude, location.longitude),
        );
      }, 10000);
    }
    return () => {
      BackgroundGeolocation.stop();
      clearInterval(checkLocation);
      clearInterval(iwalkTimerInterval);
    };
  }, [iWalk, setIwalkTimer]);

  return (
    <Button
      style={styles.iWalkButton}
      onPress={() => {
        setIWalkStatus();
        console.log(iWalk);
      }}>
      <Text style={styles.iWalkButtonText}>
        {!iWalk ? buttonData[0] : buttonData[1]}
      </Text>
    </Button>
  );
};

const styles = {
  iWalkButton: {
    backgroundColor: 'white',
    borderRadius: 15,
    borderColor: 'red',
    borderWidth: 1,
    height: 150,
  },
  iWalkButtonText: {
    fontSize: 22,
    color: 'red',
  },
};

const mapDispatchToProps = {setIwalkTimer};

export default connect(null, mapDispatchToProps)(IWalkButton);
