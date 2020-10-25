import {Button, Text} from 'native-base';
import React, {useEffect} from 'react';
import BackgroundGeolocation from '@mauron85/react-native-background-geolocation';
import {ToastAndroid} from 'react-native';

const IWalkButton = (props) => {
  const {iWalk, setIWalkStatus} = props;
  const buttonData = ['Я ГУЛЯЮ!', 'ЗАКОНЧИТЬ ГУЛЯТЬ'];

  BackgroundGeolocation.configure({
    desiredAccuracy: BackgroundGeolocation.HIGH_ACCURACY,
    stationaryRadius: 50,
    distanceFilter: 50,
    notificationTitle: 'Background tracking',
    notificationText: 'enabled',
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

  useEffect(() => {
    let checkLocation;
    if (iWalk) {
      BackgroundGeolocation.start();
      checkLocation = setInterval(() => {
        BackgroundGeolocation.getCurrentLocation((location) =>
          ToastAndroid.show(JSON.stringify(location), ToastAndroid.SHORT),
        );
      }, 10000);
    }
    return () => {
      BackgroundGeolocation.stop();
      clearInterval(checkLocation);
    };
  }, [iWalk]);

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

export default IWalkButton;
