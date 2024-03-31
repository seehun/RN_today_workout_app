import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
  TextInput,
  FlatList,
  Dimensions,
} from "react-native";
import React, { useEffect, useState } from "react";

import BasicHeader from "../../components/BasicHeader/BasicHeader";
import LeftBubble from "../../components/ChatBubble/LeftBubble";
import RightBubble from "../../components/ChatBubble/RightBubble";

const { width } = Dimensions.get("window");

const ChatScreen = ({ navigation, route }) => {
  const { user_id, name, profileImage } = route.params.params;
  const [chatData, setChatData] = useState([]);
  useEffect(() => {
    const chatting = dummy_chatting.filter((e, i) => e.user_id === user_id);
    if (chatting) {
      setChatData(chatting[0].chat_data);
    }
  }, []);

  return (
    <SafeAreaView style={styles.SafeAreaContainer}>
      <View style={styles.mainContainer}>
        <BasicHeader title={name} />
        <View style={styles.chattingScreen}>
          <FlatList
            data={chatData}
            renderItem={({ item, index }) =>
              item.position === "left" ? (
                <LeftBubble
                  data={item}
                  profileImage={profileImage}
                  name={name}
                />
              ) : (
                <RightBubble data={item} nextData={dummy_chatting[index + 1]} />
              )
            }
            keyExtractor={(item) => item.id}
            showsVerticalScrollIndicator={false}
            ListHeaderComponent={() => (
              <View style={styles.chatDayWrapper}>
                <Text style={styles.chatDay}>2024년 3월 28일</Text>
              </View>
            )}
          />
        </View>
      </View>
      <View style={styles.inputWrapper}>
        <TouchableOpacity
          style={styles.plusBorder}
          onPress={() => setModalVisible(true)}
        >
          <Image source={plus} style={styles.plusIcon} />
        </TouchableOpacity>
        <TextInput style={styles.input} placeholder={"메세지 입력하기"} />
      </View>
    </SafeAreaView>
  );
};

export default ChatScreen;

import plus from "../../assets/icons/chatIcon/plus.png";

import dummy_chatting from "../../static/dummy_chatting";

const styles = StyleSheet.create({
  SafeAreaContainer: {
    flex: 1,
    backgroundColor: "#fff",
  },
  mainContainer: {
    flex: 1,
  },
  headerWrapper: {
    backgroundColor: "#fff",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingVertical: 18,
    borderBottomWidth: 1,
    borderBottomColor: "#eaeaea",
  },
  backButton: {
    width: 18,
    height: 18,
  },
  headerTitle: {
    fontSize: 16,
    fontWeight: "bold",
    lineHeight: 20,
    textAlign: "center",
    color: "#000",
  },
  chattingScreen: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    paddingHorizontal: 16,
  },
  chatDayWrapper: {
    marginTop: 16,
    marginBottom: 16,
  },
  chatDay: {
    fontSize: 14,
    fontWeight: 500,
    lineHeight: 17.47,
    color: "#828282",
    textAlign: "center",
  },
  rightChatRowWrapper: {
    flexDirection: "row",
    // justifyContent: 'flex-end',
    marginLeft: "auto",
    marginBottom: 8,
  },
  //
  leftChatRowWrapper: {
    flexDirection: "row",
    marginBottom: 16,
  },

  chat: {
    color: "#000",
    fontSize: 15,
    fontWeight: 500,
    lineHeight: 22.5,
  },
  profileImg: {
    width: 40,
    height: 40,
  },
  bubbleContainer: {
    marginTop: 4,
    flexDirection: "row",
  },
  leftBubbleTriangle: {
    width: 8,
    height: 8,
    marginTop: 5,
  },
  leftBubbleWrapper: {
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 8,
  },
  chatTimeWrapper: {
    marginLeft: 4,
    justifyContent: "flex-end",
  },

  chatTime: {
    fontSize: 10,
    fontWeight: 500,
    color: "#737373",
    lineHeight: 15,
  },
  //
  rightBubbleWrapper: {
    backgroundColor: "#6297FF",
    borderRadius: 8,
    padding: 8,
    maxWidth: 232,
  },
  myChat: {
    color: "#fff",
    fontSize: 15,
    fontWeight: 500,
    lineHeight: 22.5,
  },
  microBar: {
    width: 1,
    height: 4,
    backgroundColor: "#D5D5D5",
  },
  chatInfoWrapper: {
    flexDirection: "row",
    marginTop: "auto",
    alignItems: "center",
    gap: 4,
    marginRight: 4,
  },
  inputWrapper: {
    paddingVertical: 12,
    paddingHorizontal: 16,
    flexDirection: "row",
    gap: 8,
    marginBottom: 40,
  },
  plusBorder: {
    width: 40,
    height: 40,
    borderWidth: 1,
    borderColor: "#efefef",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  plusIcon: {
    width: 12,
    height: 12,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderRadius: 20,
    borderColor: "#efefef",
    paddingHorizontal: 12,
  },
});

const modalStyles = StyleSheet.create({
  container: {
    margin: 0,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  wrapper: {
    width: width,
    paddingTop: 8,
    backgroundColor: "#fff",
    height: 176,
  },
  icon: {
    transform: [{ rotate: "45deg" }],
  },
  btn: {
    alignItems: "center",
    gap: 4,
  },
  btnText: {
    color: "#828282",
    fontWeight: 400,
  },
  btnIcon: {
    width: 48,
    height: 48,
  },
});
