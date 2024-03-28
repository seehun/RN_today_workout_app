import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import React from "react";
import leftArrow from "../assets/icons/leftArrow.png";
import { useNavigation } from "@react-navigation/native";

const BasicHeader = ({ title }) => {
  const navigation = useNavigation();
  return (
    <View style={styles.headerWrapper}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Image source={leftArrow} style={styles.backButton} />
      </TouchableOpacity>
      <Text style={styles.headerTitle}>{title}</Text>
      <View style={styles.backButton}></View>
    </View>
  );
};

export default BasicHeader;

const styles = StyleSheet.create({
  headerWrapper: {
    backgroundColor: "#fff",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: "#eaeaea",
  },
  backButton: {
    width: 40,
    height: 40,
  },
  headerTitle: {
    fontSize: 16,
    fontWeight: "bold",
    lineHeight: 20,
    textAlign: "center",
    color: "#000",
  },
});
