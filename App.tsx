// App.js
import React, { useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";

import {
  CometChatUIKit,
  UIKitSettings,
} from "@cometchat/chat-uikit-react-native";
import { CometChat } from "@cometchat/chat-sdk-react-native";

const App = () => {
  useEffect(() => {
    const uikitSettings = {
      appId: "YOUR_APP_ID", // 🔁 Replace this with your App ID
      authKey: "YOUR_AUTH_KEY", // 🔁 Replace this with your Auth Key
      region: "YOUR_REGION", // 🔁 Replace this with your Region (e.g., "us", "in", "eu")
      subscriptionType:
        CometChat.AppSettings
          .SUBSCRIPTION_TYPE_ALL_USERS,
    };

    CometChatUIKit.init(uikitSettings)
      .then(() => {
        console.log("✅ CometChat UIKit successfully initialized");
      })
      .catch((error) => {
        console.log("❌ Initialization failed with exception:", error);
      });
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>🚀 CometChat Initialized Successfully</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5F5F5",
  },
  text: {
    fontSize: 18,
    fontWeight: "600",
    color: "#333",
  },
});

export default App;
