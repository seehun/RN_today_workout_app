import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#828282",
  },
  wrapper: {
    flex: 1,
    marginBottom: 32,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
  },
  logo: {
    width: 88,
    height: 21,
  },
  icons: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  icon: {
    width: 32,
    height: 32,
  },
  personProfile: {
    alignItems: "center",
  },
  personImage: {
    width: 52,
    height: 52,
    marginBottom: 2,
  },
  PersonText: {
    maxWidth: 52,
    fontSize: 16,
    color: "#fff",
  },
  //feed
  feedContainer: {
    backgroundColor: "#828282",
    paddingVertical: 24,
    flex: 1,
    // marginBottom: 40,
    // paddingBottom: 50,
  },
  feedHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 16,
    marginBottom: 8,
  },
  feedHeaderProfile: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  feedProfileImage: {
    width: 32,
    height: 32,
    borderRadius: 16,
  },
  //   feedDetail
  feedDetail: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    marginVertical: 20,
  },
  feedDetailCategoryText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 14,
  },
  feedDetailCategory: {
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 4,
    backgroundColor: "#000",
  },
  feedDetailInfoGroup: {
    flexDirection: "row",
    gap: 4,
  },
  feedDetailInfo: {
    flexDirection: "row",
    gap: 2,
  },

  //
  feedContents: {
    marginHorizontal: 16,
    paddingBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#fff",
  },
  contentsText: {
    fontSize: 16,
    maxWidth: width - 32,
    color: "#fff",
  },
  feedFeature: {
    marginHorizontal: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 16,
  },
  feedTime: {
    color: "#828282",
  },
  feedImage: {
    width: width,
    height: width,
    marginBottom: 8,
    backgroundColor: "#000",
  },
  feedFeatureIconGroup: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  feedFeatureHeart: {
    width: 26,
    height: 26,
  },
  feedFeatureIcon: {
    width: 40,
    height: 40,
  },
  infoText: {
    color: "#fff",
  },
});

export default styles;
