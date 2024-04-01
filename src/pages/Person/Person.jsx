import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from "react-native";
import React from "react";

import settingIcon from "../../assets/icons/setting.png";
import my_data from "../../static/my_data";

const Person = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <View style={styles.profileWrapper}>
        <Text style={styles.profileName}>sehun</Text>
        <TouchableOpacity>
          <Image source={settingIcon} style={styles.icon} />
        </TouchableOpacity>
      </View>
      <View style={styles.profileDetail}>
        <View style={{ alignItems: "center" }}>
          <Image
            source={{ uri: my_data.profileImage }}
            style={styles.profileImage}
          />
          <Text style={{ fontSize: 13 }}>{my_data.name}</Text>
        </View>
        <View style={styles.profileDetailNumber}>
          <TouchableOpacity style={styles.profileDetailBtn}>
            <Text>게시물</Text>
            <Text>{my_data.uploaded_item_num}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.profileDetailBtn}
            onPress={() => navigation.navigate("Follower")}
          >
            <Text>팔로워</Text>
            <Text>{my_data.follower}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.profileDetailBtn}
            onPress={() => navigation.navigate("Follower")}
          >
            <Text>팔로잉</Text>
            <Text>{my_data.following}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Person;

const styles = StyleSheet.create({
  profileWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: 16,
    marginVertical: 16,
  },
  profileName: { fontSize: 16, fontWeight: "500" },
  icon: {
    width: 32,
    height: 32,
  },
  profileImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  profileDetail: {
    marginHorizontal: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  profileDetailNumber: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  profileDetailBtn: {
    alignItems: "center",
  },
});
