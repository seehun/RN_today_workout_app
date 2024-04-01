import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  Image,
  FlatList,
  Dimensions,
} from "react-native";
import React, { useEffect, useState } from "react";

import storage from "../../storage";

const { width, height } = Dimensions.get("window");

const SearchEmpty = () => {
  return (
    <View style={emptyStyles.container}>
      <View style={emptyStyles.wrapper}>
        <Text style={emptyStyles.text}>검색결과가 없습니다.</Text>
      </View>
    </View>
  );
};

const Search = ({ navigation, route }) => {
  const [feeds, setFeeds] = useState();
  const [refresh, setRefresh] = useState(false);

  const getFeedData = () => {
    storage
      .load({
        key: "feeds",
      })
      .then((res) => setFeeds(res))
      .catch((err) => {
        // console.warn(err.message);
      });
  };

  useEffect(() => {
    getFeedData();
  }, []);

  useEffect(() => {
    if (route.params) {
      setFeeds(route.params.searchedFeeds);
    }
  }, [route.params]);

  const renderSearch = ({ item }) => {
    const handleSearchItemClick = () => {
      navigation.navigate("FeedDetail", { item });
    };
    return (
      <TouchableOpacity
        style={styles.searchItemWrapper}
        onPress={handleSearchItemClick}
      >
        {item.isMulti && <Image source={multi} style={styles.multiPhoto} />}
        <Image source={{ uri: item.feedImg[0] }} style={styles.searchItem} />
      </TouchableOpacity>
    );
  };
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#828282" }}>
      <View style={styles.container}>
        {/* searchWrapper */}
        <View style={{ height: 68, backgroundColor: "#828282" }}>
          <TouchableOpacity
            style={styles.searchWrapper}
            onPress={() => navigation.navigate("SearchList")}
          >
            <TouchableOpacity
              style={styles.touchIconStyle}
              onPress={() => navigation.navigate("SearchList")}
            >
              <Image source={searchIcon} style={styles.icon} />
            </TouchableOpacity>
            <Text style={styles.inputStyle}>검색</Text>
          </TouchableOpacity>
        </View>
        {/* imageList */}
        <FlatList
          data={feeds}
          renderItem={renderSearch}
          keyExtractor={(item) => item.feed_id}
          removeClippedSubviews
          showsVerticalScrollIndicator={false}
          numColumns={3}
          extraData={refresh}
          ListEmptyComponent={<SearchEmpty />}
        />
      </View>
    </SafeAreaView>
  );
};

export default Search;

import searchIcon from "../../assets/icons/search.png";
import multi from "../../assets/icons/multi.png";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  searchWrapper: {
    flex: 1,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
    backgroundColor: "#000",
    marginHorizontal: 16,
    marginVertical: 12,
    borderRadius: 4,
    // borderWidth: 1,
  },
  icon: {
    width: 24,
    height: 24,
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
  //search Item
  searchItemWrapper: {
    borderWidth: 1,
    borderColor: "#000",
  },
  searchItem: {
    width: width / 3 - 2,
    height: width / 3 - 2,
  },
  multiPhoto: {
    position: "absolute",
    width: 24,
    height: 24,
    top: 8,
    right: 8,
    zIndex: 4,
  },
});

const emptyStyles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    width: width,
    height: height / 1.5,
  },
  wrapper: { alignItems: "center" },
  text: {
    color: "#828282",
    fontSize: 14,
  },
});
