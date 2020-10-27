import BackgroundGeolocation from '@mauron85/react-native-background-geolocation';

const configBgGloc = {
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
};

export default configBgGloc;
