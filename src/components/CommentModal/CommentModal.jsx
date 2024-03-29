import {
  Text,
  View,
  TextInput,
  KeyboardAvoidingView,
  TouchableOpacity,
  FlatList,
  Image,
  Keyboard,
} from "react-native";
import React, { useState, useCallback, useEffect } from "react";
import Modal from "react-native-modal";

import storage from "../../storage";

// comment item
const CommentItem = ({ item, index }) => {
  return (
    <View style={commentStyles.container}>
      <View style={commentStyles.profile}>
        <Image
          source={{ uri: item.profileImage }}
          style={{ width: 40, height: 40, borderRadius: 16 }}
        />
        <View>
          <View style={{ flexDirection: "row", gap: 8 }}>
            <Text>{item.name}</Text>
            <Text>23시간</Text>
          </View>
          <Text style={{ fontSize: 15, color: "#333" }}>{item.contents}</Text>
        </View>
      </View>
      <TouchableOpacity>
        <Image source={more} style={{ width: 20, height: 20 }}></Image>
      </TouchableOpacity>
    </View>
  );
};

// if empty
const EmptyComment = () => {
  return (
    <View style={emptyStyle.container}>
      <View style={emptyStyle.wrapper}>
        <Text style={emptyStyle.text}>아직 아무도 댓글을 달지 않았어요.</Text>
        <Text style={emptyStyle.text}>처음으로 응원을 남겨주세요.</Text>
      </View>
    </View>
  );
};

const CommentModal = ({ isVisible, setIsVisible, feed_id }) => {
  // feed_id에 따른 댓글 데이터 들고오기

  const [commentData, setCommentData] = useState(); // feed_id에 맞는 commentData

  const getCommentsData = () => {
    storage
      .load({
        key: "comments",
        id: feed_id,
      })
      .then((res) => setCommentData(res))
      .catch((err) => {
        // console.warn(err.message);
      });
  };

  useEffect(() => {
    // feed에 comment 데이터 넣어주기
    getCommentsData();
    // console.log(feed_id);
  }, [feed_id]);

  //댓글 쓰기
  const [commentText, setCommentText] = useState(""); // 댓글 텍스트
  const [currentCommentId, setCurrentCommentId] = useState(); //댓글 아이디

  const handleCommentText = (text) => {
    setCommentText(text);
  };

  const handleSubmit = (text) => {
    const newComment = {
      id: currentCommentId,
      name: "me",
      user_id: 100,
      contents: text,
      profileImage: "https://avatar.iran.liara.run/public",
    };

    // 들어갈 댓글 데이터
    const newCommentData = [...commentData, { ...newComment }];
    //storage에 넣어주기
    storage.save({
      key: "comments",
      id: feed_id,
      data: newCommentData,
      expires: 1000 * 3600,
    });
    setCommentData(newCommentData);
    setCurrentCommentId(currentCommentId + 1);
    setCommentText("");
  };

  // console.log(commentData);
  const renderComments = useCallback(({ item, index }) => (
    <CommentItem item={item} index={index} />
  ));
  const backButtonPress = () => {
    Keyboard.dismiss();
    setIsVisible(!isVisible);
  };
  return (
    <Modal
      useNativeDriver
      isVisible={isVisible}
      animationIn={"slideInUp"}
      animationOut={"slideOutDown"}
      backdropColor="#000"
      backdropOpacity={0.4}
      style={styles.modalContainer}
      onBackdropPress={backButtonPress} //ios
      onBackButtonPress={backButtonPress} //andorid
      hideModalContentWhileAnimating
    >
      <KeyboardAvoidingView
        keyboardVerticalOffset={8}
        style={{ width: "100%" }}
      >
        <View style={styles.contents}>
          <View style={styles.barWrapper}>
            <View style={styles.bar}></View>
          </View>
          {/* comments */}
          <View style={styles.comments}>
            <Text style={{ marginBottom: 8 }}>댓글</Text>
            <FlatList
              showsVerticalScrollIndicator={false}
              data={commentData}
              renderItem={renderComments}
              keyExtractor={(item) => item.id}
              ListEmptyComponent={<EmptyComment />}
              ItemSeparatorComponent={<View style={{ height: 30 }} />}
              style={styles.commentList}
            />
          </View>
          {/* input */}
          <View style={styles.inputContainer}>
            <View style={styles.inputWrapper}>
              <TextInput
                style={styles.input}
                maxLength={200}
                multiline
                placeholder="comments"
                autoCapitalize="none"
                spellCheck={false}
                autoCorrect={false}
                value={commentText}
                onChangeText={handleCommentText}
              />
            </View>
            <TouchableOpacity
              style={styles.submitIcon}
              onPress={() => handleSubmit(commentText)}
            >
              <Image source={add} style={styles.submit} />
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    </Modal>
  );
};

export default CommentModal;

import dummy_comments from "../../static/dummy_comments";

import more from "../../assets/icons/more.png";
import add from "../../assets/icons/bottomTab/add_circle.png";

import { styles, commentStyles, emptyStyle } from "./CommentModalStyle";
