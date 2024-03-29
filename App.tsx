import React, { useEffect } from "react";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import Router from "./src/router";
import { setInitialFeeds, setInitialComments } from "./src/utils";

function App(): React.JSX.Element {
  useEffect(() => {
    // 앱 실행 시 초기 피드를 들고온다
    setInitialFeeds();
    setInitialComments();
  }, []);

  return (
    <NavigationContainer>
      <Router />
    </NavigationContainer>
  );
}

export default App;
