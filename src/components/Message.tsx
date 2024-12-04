import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import type { Message as MessageType } from '../stores/chatStore';

interface MessageProps {
  message: MessageType;
}

export const Message: React.FC<MessageProps> = ({ message }) => {
  const isUser = message.sender === 'user';

  return (
    <View style={[
      styles.container,
      isUser ? styles.userContainer : styles.aiContainer
    ]}>
      <Text style={[
        styles.text,
        isUser ? styles.userText : styles.aiText
      ]}>
        {message.content}
      </Text>
      <Text style={styles.timestamp}>
        {message.timestamp.toLocaleTimeString()}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    maxWidth: '80%',
    padding: 10,
    borderRadius: 10,
    marginVertical: 5,
  },
  userContainer: {
    alignSelf: 'flex-end',
    backgroundColor: '#007AFF',
  },
  aiContainer: {
    alignSelf: 'flex-start',
    backgroundColor: '#E9ECEF',
  },
  text: {
    fontSize: 16,
  },
  userText: {
    color: '#FFFFFF',
  },
  aiText: {
    color: '#000000',
  },
  timestamp: {
    fontSize: 12,
    color: '#666666',
    marginTop: 4,
  },
});