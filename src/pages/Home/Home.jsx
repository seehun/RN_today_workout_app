import { View, SafeAreaView, FlatList, Dimensions } from "react-native";
import React, { useEffect, useState } from "react";
import styles from "./HomeStyle";

import CommentModal from "../../components/CommentModal/CommentModal";
import FeedItem from "./FeedRender";

import storage from "../../storage";

const { width, height } = Dimensions.get("window");

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [feedCommentId, setFeedCommentId] = useState();
  const [feeds, setFeeds] = useState();

  useEffect(() => {
    storage
      .load({
        key: "feeds",
      })
      .then((res) => setFeeds(res))
      .catch((err) => {
        console.warn(err.message);
      });
  }, []);

  // console.log(feeds);

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
      {feeds && (
        <View style={styles.wrapper}>
          {/* feed */}
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
