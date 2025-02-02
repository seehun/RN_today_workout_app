import {
  View,
  SafeAreaView,
  FlatList,
  Dimensions,
  TouchableOpacity,
  Text,
  ActivityIndicator,
} from "react-native";
import React, { useEffect, useState } from "react";
import styles from "./HomeStyle";
import axios from "axios";

import CommentModal from "../../components/CommentModal/CommentModal";
import FeedItem from "./FeedRender";

import storage from "../../storage";

const { width } = Dimensions.get("window");

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [feedCommentId, setFeedCommentId] = useState();
  const [feeds, setFeeds] = useState([]);
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

  const getData = async () => {
    const feed = await axios.get(
      "http://54.180.90.124:8080/feed?page=0&pageSize=10"
    );
    console.log(feed);
  };

  useEffect(() => {
    getData();
    getFeedData();
  }, []);

  const renderFeeds = ({ item, index }) => {
    return (
      <FeedItem
        item={item}
        index={index}
        isVisible={isVisible}
        setIsVisible={setIsVisible}
        setFeedCommentId={setFeedCommentId}
      />
    );
  };

  const reload = () => {
    getFeedData();
    setRefresh(!refresh);
  };

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity onPress={reload}>
        <Text style={{ color: "#fff" }}>reload</Text>
      </TouchableOpacity>
      {refresh ? (
        <ActivityIndicator size="large" />
      ) : (
        <View style={styles.wrapper}>
          <FlatList
            horizontal
            data={feeds}
            renderItem={renderFeeds}
            keyExtractor={(item) => item.feed_id}
            removeClippedSubviews
            showsHorizontalScrollIndicator={false}
            snapToInterval={width}
            snapToAlignment="start"
            decelerationRate={"fast"}
            extraData={refresh}
          />
          <CommentModal
            isVisible={isVisible}
            setIsVisible={setIsVisible}
            feed_id={feedCommentId}
          />
        </View>
      )}
    </SafeAreaView>
  );
};

export default Home;
