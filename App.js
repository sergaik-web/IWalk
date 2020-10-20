import {Provider} from 'react-redux';
import MainPage from './Components/MainPage/MainPage';
import ContactsList from './Components/ContactsList/ContactsList';
import SearchPanel from './Components/SearchPanel/SearchPanel';
import store from './Components/Store/store';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const App = () => {
  const Stack = createStackNavigator();

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={MainPage}
            options={{title: 'Главная'}}
          />
          <Stack.Screen
            name="Contacts"
            component={ContactsList}
            options={{headerTitle: (props) => <SearchPanel {...props} />}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
