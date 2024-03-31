import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Splash from "./pages/Splash/Splash";
import Home from "./pages/Home/Home";
import Search from "./pages/Search/Search";
import SearchList from "./pages/Search/SearchList";
import Add from "./pages/Add/Add";
import AddDetail from "./pages/Add/AddDetail";
import Chatting from "./pages/Chatting/Chatting";
import ChattingDetail from "./pages/Chatting/ChattingDetail";
import Person from "./pages/Person/Person";

import CustomBottomTabs from "./components/CustomBottomTabs/CustomBottomTabs";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const SearchTab = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        gestureEnabled: false,
      }}
    >
      <Stack.Screen name="Search" component={Search} />
      <Stack.Screen name="SearchList" component={SearchList} />
    </Stack.Navigator>
  );
};

const ChatTab = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        gestureEnabled: false,
      }}
    >
      <Stack.Screen name="Chatting" component={Chatting} />
      <Stack.Screen name="ChattingDetail" component={ChattingDetail} />
    </Stack.Navigator>
  );
};

const renderTabBar = (props) => <CustomBottomTabs {...props} />;

const MainTab = () => {
  return (
    <Tab.Navigator
      screenOptions={{ headerShown: false, gestureEnabled: false }}
      tabBar={renderTabBar}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="SearchTab" component={SearchTab} />
      <Tab.Screen name="Add" component={Add} />
      <Tab.Screen name="ChatTab" component={ChatTab} />
      <Tab.Screen name="Person" component={Person} />
    </Tab.Navigator>
  );
};

const Router = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Splash" component={Splash} />
      <Stack.Screen name="MainTab" component={MainTab} />
      <Stack.Screen name="AddDetail" component={AddDetail} />
    </Stack.Navigator>
  );
};

export default Router;
