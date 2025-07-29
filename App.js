import React, { useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native';
import {
  CometChatUIKit,
  UIKitSettingsBuilder,
  CometChatConversations,
  CometChatThemeProvider,
  CometChatUiKitConstants,
} from '@cometchat/chat-uikit-react-native';
import { CometChat } from '@cometchat/chat-sdk-react-native';
import Messages from './src/components/Messages';

// Replace with your CometChat credentials
const APP_ID = 'YOUR_APP_ID';
const REGION = 'YOUR_REGION';
const AUTH_KEY = 'YOUR_AUTH_KEY';
const DEMO_UID = 'YOUR_USER_UID';

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [messageUser, setMessageUser] = useState(null);
  const [messageGroup, setMessageGroup] = useState(null);

  useEffect(() => {
    const initCometChat = async () => {
      try {
        const settings = new UIKitSettingsBuilder()
          .setAppId(APP_ID)
          .setRegion(REGION)
          .setAuthKey(AUTH_KEY)
          .subscribePresenceForAllUsers()
          .build();

        await CometChatUIKit.init(settings);
        console.log('✅ CometChat initialized');

        await CometChatUIKit.login(DEMO_UID);
        console.log('✅ CometChat user logged in');

        setLoggedIn(true);
      } catch (error) {
        console.error('❌ CometChat init/login error:', error);
      }
    };

    initCometChat();
  }, []);

  const handleBack = () => {
    setMessageUser(null);
    setMessageGroup(null);
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <CometChatThemeProvider>
        {loggedIn && (
          <>
            {!messageUser && !messageGroup && (
              <CometChatConversations
                onItemPress={(conversation) => {
                  const type = conversation.getConversationType();
                  const target = conversation.getConversationWith();

                  if (
                    type === CometChatUiKitConstants.ConversationTypeConstants.user
                  ) {
                    setMessageUser(target);
                  } else {
                    setMessageGroup(target);
                  }
                }}
              />
            )}

            {(messageUser || messageGroup) && (
              <Messages
                user={messageUser}
                group={messageGroup}
                onBack={handleBack}
              />
            )}
          </>
        )}
      </CometChatThemeProvider>
    </SafeAreaView>
  );
};

export default App;
