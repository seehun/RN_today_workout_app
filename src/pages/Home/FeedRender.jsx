import {
  Text,
  View,
  Image,
  TouchableOpacity,
  Dimensions,
  ScrollView,
} from "react-native";
import React, { useState, useEffect } from "react";
import styles from "./HomeStyle";

const { width, height } = Dimensions.get("window");

const FeedItem = ({
  item,
  index,
  isVisible,
  setIsVisible,
  setFeedCommentId,
}) => {
  // 좋아요
  const [heartNum, setHeartNum] = useState(item.like);
  const [heartClicked, setHeartClicked] = useState(item.myLike);
  const heartClickHandler = () => {
    if (!heartClicked) {
      setHeartNum(heartNum + 1);
    } else {
      setHeartNum(heartNum - 1);
    }
    setHeartClicked(!heartClicked);
  };

  //comment 모달 켜기
  const clickCommentIcon = () => {
    setIsVisible(!isVisible);
    // 피드가 렌더링 되는 순간 해당 피드에 맞는 댓글 데이터정보 업데이트
    setFeedCommentId(item.feed_id);
  };

  console.log(item.feed_type);

  return (
    <ScrollView
      style={styles.feedContainer}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ paddingBottom: 50 }}
    >
      <View style={styles.feedHeader}>
        <TouchableOpacity style={styles.feedHeaderProfile}>
          <Image
            source={{ uri: item.profileImage }}
            style={styles.feedProfileImage}
          />
          <Text style={styles.PersonText}>{item.name}</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={more} style={{ width: 24, height: 24 }} />
        </TouchableOpacity>
      </View>
      <Image
        source={{ uri: item.feedContent[0] }}
        style={styles.feedImage}
        resizeMode="contain"
      />
      {/* feedDetail */}
      <View style={styles.feedDetail}>
        <View style={styles.feedDetailCategory}>
          <Text style={styles.feedDetailCategoryText}>{item.category}</Text>
        </View>
        <View style={styles.feedDetailInfoGroup}>
          <TouchableOpacity style={styles.feedDetailInfo}>
            <Text style={styles.infoText}>좋아요</Text>
            <Text style={styles.infoText}>{heartNum}</Text>
          </TouchableOpacity>
          <Text style={styles.infoText}>·</Text>
          <TouchableOpacity style={styles.feedDetailInfo}>
            <Text style={styles.infoText}>댓글</Text>
            <Text style={styles.infoText}>{item.comments}</Text>
          </TouchableOpacity>
        </View>
      </View>
      {/* contents */}
      <View style={styles.feedContents}>
        <Text style={styles.contentsText}>{item.contents}</Text>
      </View>
      {/* 기능 */}
      <View style={styles.feedFeature}>
        <Text style={styles.feedTime}>35분전</Text>
        <View style={styles.feedFeatureIconGroup}>
          <TouchableOpacity onPress={heartClickHandler}>
            {heartClicked ? (
              <Image source={redHeart} style={styles.feedFeatureHeart} />
            ) : (
              <Image source={heart} style={styles.feedFeatureHeart} />
            )}
          </TouchableOpacity>
          <TouchableOpacity onPress={clickCommentIcon}>
            <Image source={comment} style={styles.feedFeatureIcon} />
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

//icon, data
import more from "../../assets/icons/more.png";
import heart from "../../assets/icons/heart.png";
import redHeart from "../../assets/icons/redHeart.png";
import comment from "../../assets/icons/comment.png";

export default FeedItem;
