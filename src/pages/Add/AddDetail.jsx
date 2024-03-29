import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Image,
  Dimensions,
  TextInput,
} from "react-native";
import React, { useState } from "react";

const { width: SCREEN_WIDTH } = Dimensions.get("window");

const AddDetail = ({ navigation, route }) => {
  const [keyword, setKeyword] = useState("");
  //   console.log(route.params.selectedImage);
  const imageData = route.params.selectedImage;
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#000" }}>
      {/* 헤더 */}
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image source={leftArrow} style={styles.icon} />
          </TouchableOpacity>
          <Text style={styles.headerText}>새 게시물</Text>
        </View>
      </View>
      {/* 사진 */}
      <View style={styles.imageContainer}>
        <Image source={{ uri: imageData.uri }} style={styles.image} />
      </View>
      {/* 텍스트 */}
      <View>
        <TextInput
          returnKeyType="search"
          spellCheck={false}
          autoCorrect={false}
          autoCapitalize="none"
          value={keyword}
          onChangeText={(text) => setKeyword(text)}
          allowFontScaling={false}
          style={styles.inputStyle}
          onSubmitEditing={() => console.log(1)}
          placeholder="오늘의 운동정보를 알려주세요..!"
          placeholderTextColor={"#f2f2f2"}
          multiline
        />
      </View>
      {/* submit */}
      <View style={styles.submitWrapper}>
        <TouchableOpacity
          style={styles.submitBtn}
          onPress={() => navigation.navigate("MainTab")}
        >
          <Text style={styles.submitText}>공유</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default AddDetail;

import leftArrow from "../../assets/icons/leftArrow.png";

const styles = StyleSheet.create({
  // header
  header: {
    flexDirection: "row",
    marginHorizontal: 12,
    marginVertical: 16,
    justifyContent: "space-between",
  },
  headerLeft: {
    flexDirection: "row",
    gap: 32,
    alignItems: "center",
  },
  headerRight: {
    justifyContent: "center",
  },
  headerText: {
    fontWeight: "bold",
    fontSize: 24,
    color: "#fff",
  },
  icon: {
    width: 48,
    height: 48,
  },
  nextBtn: {
    fontWeight: "bold",
    color: "#6297FF",
    fontSize: 18,
  },
  //image
  imageContainer: {
    alignItems: "center",
    marginHorizontal: 32,
    marginBottom: 12,
  },
  image: {
    width: SCREEN_WIDTH / 1.3,
    height: SCREEN_WIDTH / 1.3,
  },
  //text
  inputStyle: {
    color: "#f2f2f2",
    paddingHorizontal: 8,
    paddingVertical: 12,
    fontSize: 14,
    fontWeight: "400",
  },
  //submit
  submitWrapper: {
    position: "absolute",
    bottom: 0,
    zIndex: 10,
  },
  submitBtn: {
    width: SCREEN_WIDTH - 12,
    backgroundColor: "gray",
    borderRadius: 8,
    paddingVertical: 16,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 12,
  },
  submitText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
