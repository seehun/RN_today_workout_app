import { StyleSheet, Text, View, Image, Dimensions } from "react-native";
import React, { useEffect } from "react";
import { login } from "../../utils/api";

const Splash = ({ navigation }) => {
  useEffect(() => {
    login();
    setTimeout(() => {
      navigation.replace("MainTab"); //이러면 스택에서 제거되서 다시 화면이 나오지 않음
    }, 1000);
  }, []);
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#828282",
      }}
    >
      <Image source={logo} style={styles.image} />
    </View>
  );
};

import logo from "../../assets/icons/workout.png";

const styles = StyleSheet.create({
  image: {
    width: 48,
    height: 48,
  },
});

export default Splash;
