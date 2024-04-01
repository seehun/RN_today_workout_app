import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from "react-native";
import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import BasicHeader from "../../components/BasicHeader/BasicHeader";

const RecentSearchItem = () => {
  return (
    <View style={recentSearchItemStyles.itemWrapper}>
      <TouchableOpacity style={recentSearchItemStyles.profileWrapper}>
        <Image
          source={{ uri: "https://picsum.photos/130/130" }}
          style={recentSearchItemStyles.image}
        />
        <Text>asdf</Text>
      </TouchableOpacity>
      <TouchableOpacity style={recentSearchItemStyles.cancleBtn}>
        <Text style={recentSearchItemStyles.cancelText}>팔로우 취소</Text>
      </TouchableOpacity>
    </View>
  );
};

const Tab = createMaterialTopTabNavigator();

const FollowerTab = () => {
  return (
    <View style={{ flex: 1, backgroundColor: "#828282" }}>
      <Text style={styles.title}>Following</Text>
      <RecentSearchItem />
      <RecentSearchItem />
      <RecentSearchItem />
    </View>
  );
};

const FollowingTab = () => {
  return (
    <View style={{ flex: 1, backgroundColor: "#828282" }}>
      <Text style={styles.title}>Following</Text>
      <RecentSearchItem />
      <RecentSearchItem />
      <RecentSearchItem />
    </View>
  );
};

const Follower = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#828282" }}>
      <BasicHeader title={"sehun"} />
      <Tab.Navigator
        screenOptions={{
          tabBarInactiveTintColor: "#fff",
          tabBarActiveTintColor: "#fff",
          tabBarIndicatorStyle: {
            backgroundColor: "fff",
            width: 120,
            height: 1,
            marginLeft: 40,
          },
          tabBarStyle: { backgroundColor: "#828282" },
        }}
      >
        <Tab.Screen name="100 팔로워" component={FollowerTab} />
        <Tab.Screen name="100 팔로잉" component={FollowingTab} />
      </Tab.Navigator>
    </SafeAreaView>
  );
};

export default Follower;

const styles = StyleSheet.create({
  title: {
    fontWeight: "bold",
    fontSize: 20,
    marginTop: 12,
    marginHorizontal: 16,
  },
});

const recentSearchItemStyles = StyleSheet.create({
  itemWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: 16,
    marginBottom: 20,
    marginVertical: 20,
  },
  profileWrapper: {
    flexDirection: "row",
    alignItems: "center",
    gap: 11,
  },
  image: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  deleteIcon: {
    width: 16,
    height: 16,
  },
  cancleBtn: {
    borderWidth: 1,
    borderColor: "#e0e0e0",
    padding: 8,
    borderRadius: 4,
  },
  cancelText: {
    color: "#333",
  },
});
