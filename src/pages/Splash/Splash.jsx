import { StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";

const Splash = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace("MainTab"); //이러면 스택에서 제거되서 다시 화면이 나오지 않음
    }, 1000);
  }, []);
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Splash</Text>
    </View>
  );
};

export default Splash;
