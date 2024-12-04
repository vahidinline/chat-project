import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { Message } from './Message';
import { useChatStore } from '../stores/chatStore';

export const MessageList = () => {
  const messages = useChatStore((state) => state.messages);
  const flatListRef = React.useRef(null);

  const scrollToBottom = () => {
    if (flatListRef.current && messages.length > 0) {
      flatListRef.current.scrollToEnd({ animated: true });
    }
  };

  React.useEffect(() => {
    scrollToBottom();
  }, [messages]);

  return (
    <FlatList
      ref={flatListRef}
      data={messages}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <Message message={item} />}
      contentContainerStyle={styles.container}
      onContentSizeChange={scrollToBottom}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    paddingBottom: 20,
  },
});