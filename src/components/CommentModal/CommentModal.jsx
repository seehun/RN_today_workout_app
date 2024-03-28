import {
  StyleSheet,
  Text,
  View,
  TextInput,
  KeyboardAvoidingView,
  TouchableOpacity,
  Platform,
  Dimensions,
  FlatList,
  Image,
  Keyboard,
} from "react-native";
import React, { useState, useCallback } from "react";
import Modal from "react-native-modal";

import dummy_comments from "../../static/dummy_comments";

import more from "../../assets/icons/more.png";
import add from "../../assets/icons/bottomTab/add_circle.png";

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

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get("window");
const CommentModal = ({ isVisible, setIsVisible }) => {
  const [commentText, setCommentText] = useState("");
  const handleCommentText = (text) => {
    setCommentText(text);
  };
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
        // behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={8}
        style={{ width: "100%" }}
      >
        <View style={styles.contents}>
          <View style={styles.barWrapper}>
            <View style={styles.bar}></View>
          </View>
          <View style={styles.comments}>
            <Text style={{ marginBottom: 8 }}>댓글</Text>
            <FlatList
              showsVerticalScrollIndicator={false}
              data={dummy_comments}
              renderItem={renderComments}
              keyExtractor={(item) => item.id}
              //   ListEmptyComponent={}
              ItemSeparatorComponent={<View style={{ height: 30 }} />}
              style={styles.commentList}
            />
          </View>
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
              style={{
                justifyContent: "center",
                alignItems: "center",
                marginBottom: 28,
              }}
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

const styles = StyleSheet.create({
  modalContainer: {
    margin: 0,
    alignItems: "center",
    justifyContent: "flex-end",
  },
  contents: {
    paddingTop: 20,
    paddingHorizontal: 16,
    height: SCREEN_HEIGHT / 1.5,
    backgroundColor: "#fff",
    borderTopStartRadius: 16,
    borderTopEndRadius: 16,
  },
  barWrapper: {
    position: "absolute",
    top: 16,
    left: 0,
    right: 0,
    alignItems: "center",
  },
  bar: {
    width: 30,
    height: 3,
    borderRadius: 4,
    backgroundColor: "#eee",
  },
  comments: {
    flex: 1,
    // justifyContent: 'center',
    height: 30,
    alignItems: "center",
    marginTop: 12,
  },
  commentList: {
    flex: 1,
    width: "100%",
  },
  //   input
  inputContainer: {
    borderTopWidth: 1,
    borderTopColor: "#eee",
    flexDirection: "row",
    alignItems: "flex-end",
    gap: 8,
  },
  inputWrapper: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 12,
    marginTop: 16,
    marginBottom: 24,
    minHeight: 40,
    maxHeight: 130,
    borderRadius: 6,
    borderWidth: 2,
    borderColor: "#666",
  },
  input: {
    minHeight: 23,
    maxHeight: 60,
    paddingVertical: 0,
    fontSize: 15,
    lineHeight: 16,
  },
  submit: {
    width: 30,
    height: 30,
  },
});

const commentStyles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    columnGap: 6,
  },
  profile: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
});
