import { StyleSheet, Dimensions } from "react-native";

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get("window");

export const styles = StyleSheet.create({
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
    height: "100%",
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
  submitIcon: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 28,
  },
});

export const commentStyles = StyleSheet.create({
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

export const emptyStyle = StyleSheet.create({
  container: {
    flex: 1,
    // height: "100%",
    justifyContent: "center",
    alignItems: "center",
    height: SCREEN_HEIGHT / 2,
  },
  wrapper: {
    alignItems: "center",
  },
  text: {
    color: "#828282",
  },
});
