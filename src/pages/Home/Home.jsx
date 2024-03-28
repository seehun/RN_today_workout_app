import { View, SafeAreaView, FlatList, Dimensions } from "react-native";
import React, { useState } from "react";
import styles from "./HomeStyle";

import CommentModal from "../../components/CommentModal/CommentModal";
import FeedItem from "./FeedRender";

const { width, height } = Dimensions.get("window");

const renderFeeds = ({ item, index }) => {
  return <FeedItem item={item} index={index} />;
};

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.wrapper}>
        {/* feed */}
        <FlatList
          horizontal
          data={dummy_feed}
          renderItem={renderFeeds}
          keyExtractor={(item) => item.id}
          removeClippedSubviews
          showsHorizontalScrollIndicator={false}
          snapToInterval={width}
          snapToAlignment="start"
          decelerationRate={"fast"}
        />
        {/* <CommentModal isVisible={isVisible} setIsVisible={setIsVisible} /> */}
      </View>
    </SafeAreaView>
  );
};

export default Home;

import dummy_feed from "../../static/dummy_feed";
