import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import React, { useState } from "react";
import BasicHeader from "../BasicHeader/BasicHeader";
import FeedItem from "../../pages/Home/FeedRender";
import CommentModal from "../../components/CommentModal/CommentModal";

const FeedDetail = (route) => {
  console.log(route.route.params.item);

  const [isVisible, setIsVisible] = useState(false);
  const [feedInfo, setFeedInto] = useState(route.route.params.item);
  const [feedCommentId, setFeedCommentId] = useState();
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <BasicHeader title={feedInfo.name} />
      <FeedItem
        item={feedInfo}
        isVisible={isVisible}
        setIsVisible={setIsVisible}
        setFeedCommentId={setFeedCommentId}
      />
      <CommentModal
        isVisible={isVisible}
        setIsVisible={setIsVisible}
        feed_id={feedCommentId}
      />
    </SafeAreaView>
  );
};

export default FeedDetail;

const styles = StyleSheet.create({});
