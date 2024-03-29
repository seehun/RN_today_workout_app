import { View, SafeAreaView, FlatList, Dimensions } from "react-native";
import React, { useState } from "react";
import styles from "./HomeStyle";

import CommentModal from "../../components/CommentModal/CommentModal";
import FeedItem from "./FeedRender";

const { width, height } = Dimensions.get("window");

const Home = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [feedCommentId, setFeedCommentId] = useState();
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
  // console.log(feedCommentId);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.wrapper}>
        {/* feed */}
        <FlatList
          horizontal
          data={dummy_feed}
          renderItem={renderFeeds}
          keyExtractor={(item) => item.feed_id}
          removeClippedSubviews
          showsHorizontalScrollIndicator={false}
          snapToInterval={width}
          snapToAlignment="start"
          decelerationRate={"fast"}
        />
        <CommentModal
          isVisible={isVisible}
          setIsVisible={setIsVisible}
          feed_id={feedCommentId}
        />
      </View>
    </SafeAreaView>
  );
};

export default Home;

import dummy_feed from "../../static/dummy_feed";
