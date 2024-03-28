import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Splash from "./pages/Splash/Splash";
import Home from "./pages/Home/Home";
import Search from "./pages/Search/Search";
import Add from "./pages/Add/Add";
import Chatting from "./pages/Chatting/Chatting";
import Person from "./pages/Person/Person";

import CustomBottomTabs from "./components/CustomBottomTabs/CustomBottomTabs";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const renderTabBar = (props) => <CustomBottomTabs {...props} />;

const MainTab = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }} tabBar={renderTabBar}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Search" component={Search} />
      <Tab.Screen name="Add" component={Add} />
      <Tab.Screen name="Chatting" component={Chatting} />
      <Tab.Screen name="Person" component={Person} />
    </Tab.Navigator>
  );
};

const Router = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        gestureEnabled: false,
      }}
    >
      <Stack.Screen name="Splash" component={Splash} />
      <Stack.Screen name="MainTab" component={MainTab} />
    </Stack.Navigator>
  );
};

export default Router;
