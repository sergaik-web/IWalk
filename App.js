import { Provider } from "react-redux";
import MainPage from "./Components/MainPage/MainPage";
import store from "./Components/Store/store";
import React from "react";

const App = () => {
  return (
    <Provider store={store}>
      <MainPage />
    </Provider>
  );
};

export default App;
