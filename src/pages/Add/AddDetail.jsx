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
import React, { useEffect, useState } from "react";
import storage from "../../storage";
import Toast from "../../components/Toast/Toast";
import DropDownPicker from "react-native-dropdown-picker";

const { width: SCREEN_WIDTH } = Dimensions.get("window");

const AddDetail = ({ navigation, route }) => {
  const [keyword, setKeyword] = useState("");
  const [toastVisible, setToastVisible] = useState(false);
  const imageData = route.params.selectedImage;

  //category
  const [open, setOpen] = useState(false);
  const [category, setCategory] = useState("헬스");
  const [items, setItems] = useState([
    { label: "헬스", value: "헬스" },
    { label: "러닝", value: "러닝" },
  ]);
  //feed 정보 들고와서 추가해주기 -> 비효율적
  const [feedData, setFeedData] = useState();
  const [feedNum, setFeedNum] = useState();
  const getFeedData = () => {
    storage
      .load({
        key: "feeds",
      })
      .then((res) => setFeedData(res));
    storage
      .load({
        key: "feedNumber",
      })
      .then((res) => setFeedNum(res));
  };

  useEffect(() => {
    getFeedData();
  }, []);

  const handleSubmit = async () => {
    const newFeed = {
      feed_id: feedNum + 1,
      user_id: my_data.user_id,
      name: my_data.name,
      profileImage: my_data.profileImage,
      feedContent: [imageData.uri],
      category: category,
      feed_type: "image",
      contents: keyword,
      like: 0,
      myLike: false,
      comments: 0,
      likeUsers: [],
    };

    const newFeedData = [{ ...newFeed }, ...feedData];

    //storage update
    storage.save({
      key: "feeds",
      data: newFeedData,
      expires: 1000 * 3600,
    });
    storage.save({
      key: "comments",
      id: `${feedNum}`, //feed_id
      data: [],
      expires: 1000 * 3600,
    });
    storage.save({
      key: "feedNumber",
      data: feedNum + 1,
      expires: 1000 * 3600,
    });
    //TODO
    setToastVisible(!toastVisible);
    //TODO
    setTimeout(() => {
      navigation.navigate("MainTab");
    }, 1000);
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#828282" }}>
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
      {/* 카테고리 */}
      <View style={styles.selectCategory}>
        <DropDownPicker
          open={open}
          value={category}
          items={items}
          setOpen={setOpen}
          setValue={setCategory}
          setItems={setItems}
        />
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
        <TouchableOpacity style={styles.submitBtn} onPress={handleSubmit}>
          <Text style={styles.submitText}>공유</Text>
        </TouchableOpacity>
      </View>
      <Toast
        content={"업로드 되었습니다"}
        visible={toastVisible}
        handleCancel={() => setToastVisible(!toastVisible)}
      />
    </SafeAreaView>
  );
};

export default AddDetail;

import leftArrow from "../../assets/icons/leftArrow.png";
import my_data from "../../static/my_data";

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
    width: 28,
    height: 28,
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
  //category
  selectCategory: {
    zIndex: 2,
  },
  //text
  inputStyle: {
    color: "#f2f2f2",
    paddingHorizontal: 8,
    paddingVertical: 12,
    fontSize: 16,
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
