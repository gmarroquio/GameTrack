import React from "react";
import "react-native-gesture-handler";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

const Stack = createStackNavigator();

import Home from "./pages/Home";
import Game from "./pages/Game";
import Header from "./components/Header";

const Routes: React.FC = () => {
  return (
    <>
      <NavigationContainer>
        <Header />
        <Stack.Navigator headerMode="none">
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Game" component={Game} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default Routes;
