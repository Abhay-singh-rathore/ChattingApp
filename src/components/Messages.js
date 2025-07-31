import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { CometChatMessages } from '@cometchat/chat-uikit-react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const Messages = ({ user, group, onBack }) => {
  const chatTarget = user || group;
  const name = chatTarget?.name || chatTarget?.getName?.() || 'Chat';
  const avatar = chatTarget?.avatar || chatTarget?.getAvatar?.();

  return (
    <View style={{ flex: 1 }}>
      {/* Custom Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={onBack}>
          <Icon name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>

        {avatar ? (
          <Image source={{ uri: avatar }} style={styles.avatar} />
        ) : (
          <View style={styles.placeholderAvatar} />
        )}

        <Text style={styles.title}>{name}</Text>
      </View>

      {/* CometChatMessages View */}
      <CometChatMessages
        user={user}
        group={group}
        showBackButton={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    backgroundColor: '#f2f2f2',
    elevation: 3,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    marginLeft: 10,
    color: '#333',
  },
  avatar: {
    width: 36,
    height: 36,
    borderRadius: 18,
    marginLeft: 10,
  },
  placeholderAvatar: {
    width: 36,
    height: 36,
    borderRadius: 18,
    marginLeft: 10,
    backgroundColor: '#ccc',
  },
});

export default Messages;
