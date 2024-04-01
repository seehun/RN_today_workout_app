import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
  TextInput,
  Keyboard,
} from "react-native";
import React, { useState, useRef, useEffect } from "react";

import storage from "../../storage";

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
      <TouchableOpacity>
        <Image source={deleteIcon} style={recentSearchItemStyles.deleteIcon} />
      </TouchableOpacity>
    </View>
  );
};

const SearchList = ({ route, navigation }) => {
  const [keyword, setKeyword] = useState("");
  const [feeds, setFeeds] = useState();

  const getFeedData = () => {
    storage
      .load({
        key: "feeds",
      })
      .then((res) => setFeeds(res))
      .catch((err) => {
        console.warn(err.message);
      });
  };

  useEffect(() => {
    getFeedData();
  }, []);

  const inputRef = useRef();

  const handleCancelButton = () => {
    setKeyword("");
    Keyboard.dismiss();
    inputRef.current.focus();
  };

  const handleSearch = () => {
    const data = feeds.filter((e) => e.category === keyword);
    navigation.navigate("Search", { searchedFeeds: data });
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      {/* search */}
      <View style={styles.searchMenuWrapper}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={leftArrow} style={styles.leftArrowIcon} />
        </TouchableOpacity>
        {/* 검색창 */}
        <View style={styles.searchWrapper}>
          <TouchableOpacity
            style={styles.touchIconStyle}
            onPress={handleSearch}
          >
            <Image source={searchIcon} style={styles.SearchIcon} />
          </TouchableOpacity>
          <TextInput
            returnKeyType="search"
            spellCheck={false}
            autoCorrect={false}
            autoCapitalize="none"
            value={keyword}
            onChangeText={(text) => setKeyword(text)}
            allowFontScaling={false}
            style={styles.inputStyle}
            autoFocus
            ref={inputRef}
            onSubmitEditing={() => console.log(1)}
          />
          {/* 취소버튼 */}
          {keyword && (
            <TouchableOpacity onPress={handleCancelButton}>
              <Image source={deleteIcon} style={styles.inputDeleteIcon} />
            </TouchableOpacity>
          )}
        </View>
      </View>
      {/* 검색어들 */}
      <View>
        <View style={styles.SearchTextWrapper}>
          <Text style={styles.searchText}>최근 검색</Text>
          <TouchableOpacity>
            <Text style={[styles.searchText, styles.allDeleteLabel]}>
              전체삭제
            </Text>
          </TouchableOpacity>
        </View>
        {/* 최근검색어목록 */}
        <View>
          <RecentSearchItem />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SearchList;

import leftArrow from "../../assets/icons/leftArrow.png";
import searchIcon from "../../assets/icons/search.png";
import deleteIcon from "../../assets/icons/delete.png";

const styles = StyleSheet.create({
  searchMenuWrapper: {
    height: 68,
    backgroundColor: "#fff",
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#f2f2f2",
  },
  searchWrapper: {
    flex: 1,
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: "#f2f2f2",
    marginRight: 12,
    marginLeft: 16,
    marginVertical: 12,
    borderRadius: 12,
    paddingRight: 12,
  },
  leftArrowIcon: {
    width: 40,
    height: 40,
  },
  SearchIcon: {
    width: 24,
    height: 24,
  },
  inputDeleteIcon: {
    width: 14,
    height: 14,
  },
  touchIconStyle: {
    marginLeft: 16,
    marginRight: 3,
  },
  inputStyle: {
    flex: 1,
    paddingVertical: 12,
    paddingRight: 12,
    color: "#828282",
    fontSize: 16,
    fontWeight: "400",
    alignItems: "center",
  },
  cancel: {
    color: "#2F80ED",
    fontWeight: "600",
    fontSize: 16,
    marginRight: 16,
  },
  //text
  SearchTextWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: 16,
    marginVertical: 24,
  },
  searchText: {
    fontSize: 16,
    fontWeight: "500",
  },
  allDeleteLabel: {
    color: "#828282",
  },
});

const recentSearchItemStyles = StyleSheet.create({
  itemWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: 16,
    marginBottom: 20,
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
});
