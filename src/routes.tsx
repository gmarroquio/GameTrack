import React from "react";
import "react-native-gesture-handler";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { NavigationContainer } from "@react-navigation/native";

const Tab = createMaterialTopTabNavigator();

import Home from "./pages/Home";
import Genres from "./pages/Genres";
import Trending from "./pages/Trending";
import Header from "./components/Header";

const Routes: React.FC = () => {
  return (
    <>
      <NavigationContainer>
        <Header />
        <Tab.Navigator
          initialRouteName="Home"
          sceneContainerStyle={{ backgroundColor: "#333" }}
          tabBarOptions={{
            indicatorStyle: { backgroundColor: "white" },
            activeTintColor: "#fff",
            style: { backgroundColor: "#17182e" },
          }}
        >
          <Tab.Screen name="Genres" component={Genres} />
          <Tab.Screen name="Home" component={Home} />
          <Tab.Screen name="Trending" component={Trending} />
        </Tab.Navigator>
      </NavigationContainer>
    </>
  );
};

export default Routes;
