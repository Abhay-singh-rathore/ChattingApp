import React from 'react';
import { View, Button } from 'react-native';
import { CometChatMessages } from '@cometchat/chat-uikit-react-native';

const Messages = ({ user, group, onBack }) => {
  return (
    <View style={{ flex: 1 }}>
      <Button title="← Back" onPress={onBack} />
      <CometChatMessages user={user} group={group} showBackButton={false} />
    </View>
  );
};

export default Messages;
