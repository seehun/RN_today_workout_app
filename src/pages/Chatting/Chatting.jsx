import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
  Image,
  FlatList,
} from "react-native";
import React from "react";

import dummy_profile from "../../static/dummy_profile_data";
import dummy_chatting from "../../static/dummy_chatting";

const HomeScreen = ({ navigation }) => {
  const renderItem = ({ item }) => {
    let lastMessage = "";
    const getLastMessage = () => {
      const chatData = dummy_chatting.filter(
        (e, i) => e.user_id === item.user_id
      );
      const chatDataLength = chatData[0].chat_data.length;
      if (chatDataLength !== 0) {
        return chatData[0].chat_data[chatDataLength - 1].content;
      }
    };
    lastMessage = getLastMessage();

    return (
      <TouchableOpacity
        onPress={() => navigation.navigate("ChattingDetail", { params: item })}
        style={styles.chatItemWrapper}
      >
        <Image
          source={{ uri: item.profileImage }}
          style={styles.profileImage}
        />
        <View style={{ gap: 4 }}>
          <Text style={{ fontSize: 14, color: "#fff" }}>{item.name}</Text>
          <Text style={{ fontSize: 13, color: "#fff" }}>{lastMessage}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  const renderListHeader = () => {
    return (
      <View
        style={{
          marginVertical: 16,
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <Text style={{ fontWeight: "400", color: "#fff" }}>친구 </Text>
        <Text style={{ fontSize: 14, color: "#fff" }}>
          {dummy_profile.length}명
        </Text>
      </View>
    );
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#828282" }}>
      <View style={{ flex: 1 }}>
        <View style={{ marginHorizontal: 16, flex: 1 }}>
          <FlatList
            data={dummy_profile}
            renderItem={renderItem}
            keyExtractor={(item) => item.user_id}
            ListHeaderComponent={renderListHeader}
            showsVerticalScrollIndicator={false}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  chatItemWrapper: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    marginBottom: 16,
    marginRight: 16,
  },
});
