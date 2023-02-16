import HomeStack from "./Stacks/HomeStack";
import { LogBox } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";
import React from "react";
import { store } from "./Redux/store.js";

LogBox.ignoreLogs(["Setting a timer"]);

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <HomeStack />
      </NavigationContainer>
    </Provider>
  );
}
