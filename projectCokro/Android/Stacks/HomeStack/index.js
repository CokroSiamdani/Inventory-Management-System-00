import CategoryScreen from "../../Screens/CategoryScreen";
import HomeScreen from "../../Screens/HomeScreen";
import LoginScreen from "../../Screens/LoginScreen";
import MenuScreen from "../../Screens/MenuScreen";
import React from "react";
import StockScreen from "../../Screens/StockScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const HomeStack = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="MenuScreen" component={MenuScreen} />
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="StockScreen" component={StockScreen} />
      <Stack.Screen name="CategoryScreen" component={CategoryScreen} />
    </Stack.Navigator>
  );
};

export default HomeStack;
