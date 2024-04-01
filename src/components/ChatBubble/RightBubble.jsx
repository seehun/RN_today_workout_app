import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import rightBubbleTriangle from "../../assets/icons/chatIcon/rightChatArrow.png";

const RightBubble = ({ data, nextData }) => {
  return (
    <View style={styles.rightChatRowWrapper}>
      <View style={styles.bubbleContainer}>
        {nextData?.position !== data.position ? (
          data.isOpen === true ? (
            <View style={styles.chatInfoWrapper}>
              <Text style={styles.chatTime}>읽음</Text>
              <View style={styles.microBar} />
              <Text style={styles.chatTime}>{data.created_date}</Text>
            </View>
          ) : (
            <View style={styles.chatInfoWrapper}>
              <Text style={styles.chatTime}>{data.created_date}</Text>
            </View>
          )
        ) : (
          ""
        )}

        <View style={styles.rightBubbleWrapper}>
          <Text style={styles.myChat}>{data.content}</Text>
        </View>
        <Image source={rightBubbleTriangle} style={styles.leftBubbleTriangle} />
      </View>
    </View>
  );
};

export default RightBubble;
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
    color: "#fff",
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
    color: "#fff",
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
    paddingVertical: 16,
    paddingHorizontal: 16,
    flexDirection: "row",
    gap: 8,
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
