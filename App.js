import { Provider } from "react-redux";
import MainPage from "./Components/MainPage/MainPage";
import ContactsList from "./Components/ContactsList/ContactsList";
import store from "./Components/Store/store";
import React from "react";
import { AppLoading } from "expo";
import * as Font from "expo-font";
import { Ionicons } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isReady: false,
    };
  }

  async componentDidMount() {
    await Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      ...Ionicons.font,
    });
    this.setState({ isReady: true });
  }

  render() {
    const Stack = createStackNavigator();
    if (!this.state.isReady) {
      return <AppLoading />;
    }

    return (
      <Provider store={store}>
          <NavigationContainer>
            <Stack.Navigator>
              <Stack.Screen
                name="Home"
                component={MainPage}
                options={{ title: 'Главная' }}
              />
              <Stack.Screen
                name="Contacts"
                component={ContactsList}
                options={{ title: 'Контакты' }}
              />
            </Stack.Navigator>
          </NavigationContainer>
      </Provider>
    );
  }
}
