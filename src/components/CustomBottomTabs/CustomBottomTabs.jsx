import { StyleSheet, View, TouchableOpacity, Animated } from "react-native";
import React, { useRef } from "react";

const CustomBottomTabs = ({ state, navigation, insets, descriptors }) => {
  const tab1Value = useRef(new Animated.Value(0)).current;
  const tab2Value = useRef(new Animated.Value(0)).current;
  const tab3Value = useRef(new Animated.Value(0)).current;
  const tab4Value = useRef(new Animated.Value(0)).current;
  const tab5Value = useRef(new Animated.Value(0)).current;

  const scaleAnimated = (value, animatedValue) =>
    Animated.timing(animatedValue, {
      useNativeDriver: true,
      toValue: value,
      duration: 150,
    });

  const animatedValue = {
    0: tab1Value,
    1: tab2Value,
    2: tab3Value,
    3: tab4Value,
    4: tab5Value,
  };

  return (
    <View style={[styles.bottomTabsWrapper]}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label = route.name;
        const isFocused = state.index === index;
        const animatedOf = animatedValue[index];

        const iconFlag = (bool) => {
          switch (label) {
            case "Home":
              return bool ? home_on : home;
            case "Search":
              return bool ? search_on : search;
            case "Add":
              return add;
            case "Chatting": // chatting 으로 구성
              return bool ? chat_on : chat;
            case "Person":
              return bool ? person_on : person;
          }
        };
        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
          scaleAnimated(1, animatedOf).start(({ finished }) => {
            if (finished) {
              scaleAnimated(0, animatedOf).start();
            }
          });
        };

        return (
          <TouchableOpacity
            style={styles.bottomTab}
            activeOpacity={0.7}
            key={index}
            onPress={onPress}
          >
            <Animated.Image
              source={iconFlag(isFocused)}
              style={[
                styles.icon,
                {
                  transform: [
                    {
                      scale: animatedOf.interpolate({
                        inputRange: [0, 1],
                        outputRange: [1, 0.9],
                      }),
                    },
                  ],
                },
              ]}
            />
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default CustomBottomTabs;

//icons
import home_on from "../../assets/icons/bottomTab/home_on.png";
import home from "../../assets/icons/bottomTab/home.png";
import search from "../../assets/icons/bottomTab/search.png";
import search_on from "../../assets/icons/bottomTab/search_on.png";
import add from "../../assets/icons/bottomTab/add_circle.png";
import chat from "../../assets/icons/bottomTab/chat.png";
import chat_on from "../../assets/icons/bottomTab/chat_on.png";
import person from "../../assets/icons/bottomTab/person.png";
import person_on from "../../assets/icons/bottomTab/person_on.png";

const styles = StyleSheet.create({
  bottomTabsWrapper: {
    backgroundColor: "#fff",
    width: "100%",
    flexDirection: "row",
    position: "absolute",
    bottom: 0,
    justifyContent: "space-between",
    borderTopWidth: 0.5,
    borderLeftWidth: 0.5,
    borderRightWidth: 0.5,
    borderStyle: "solid",
    borderColor: "#eee",
    paddingTop: 10,
    zIndex: 10,
    paddingBottom: 10,
  },
  bottomTab: {
    flex: 1,
    alignItems: "center",
  },
  icon: {
    width: 24,
    height: 24,
  },
});
