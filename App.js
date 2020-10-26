import {Provider} from 'react-redux';
import MainPage from './Components/MainPage/MainPage';
import ContactsList from './Components/ContactsList/ContactsList';
import SearchPanel from './Components/SearchPanel/SearchPanel';
import store from './Components/Store/store';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {connect} from 'react-redux';
import {PermissionsAndroid, Platform, Text} from 'react-native';
import {setPermissionsGranted} from './Components/Actions/actions';

const App = (props) => {
  const {iwalkTimer, permissionsGranted, setPermissionsGranted} = props;

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

  const Stack = createStackNavigator();
  if (permissionsGranted) {
    return (
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="Home"
              component={MainPage}
              options={{title: `Всего нагулено: ${iwalkTimer}`}}
            />
            <Stack.Screen
              name="Contacts"
              component={ContactsList}
              options={{headerTitle: (prop) => <SearchPanel {...prop} />}}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    );
  } else {
    return (
      <Text>
        Пожалуйста дайте права приложинию
        (настройки=>права=>'Контакты','Локация','Сообщения')
      </Text>
    );
  }
};

const mapStateToProps = (state) => {
  return {
    iwalkTimer: state.iwalkTimer,
    permissionsGranted: state.permissionsGranted,
  };
};

const mapDispatchToProps = {setPermissionsGranted};

export default connect(mapStateToProps, mapDispatchToProps)(App);
