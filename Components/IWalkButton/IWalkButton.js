import {Button, Text} from 'native-base';
import React, {useEffect} from 'react';
import BackgroundGeolocation from '@mauron85/react-native-background-geolocation';
import {setIwalkTimer} from '../Actions/actions';
import {connect} from 'react-redux';
import iwalkTimer from '../Scripts/iwalkTimer';
import configBgGloc from './configBgGLoc';

BackgroundGeolocation.configure(configBgGloc);

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
