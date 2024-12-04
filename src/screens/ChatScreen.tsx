import React from 'react';
import { View, StyleSheet, ActivityIndicator } from 'react-native';
import { MessageList } from '../components/MessageList';
import { ChatInput } from '../components/ChatInput';
import { useChatStore } from '../stores/chatStore';
import { sendMessage } from '../services/api';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../types/navigation';

type Props = NativeStackScreenProps<RootStackParamList, 'Chat'>;

export default function ChatScreen({ navigation }: Props) {
  const { addMessage, isLoading, setLoading } = useChatStore();

  const handleSendMessage = async (text: string) => {
    addMessage({
      content: text,
      sender: 'user',
    });

    setLoading(true);
    try {
      const response = await sendMessage(text);
      addMessage({
        content: response.message,
        sender: 'ai',
      });
    } catch (error) {
      console.error('Failed to send message:', error);
      // Handle error (show alert, etc.)
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <MessageList />
      {isLoading && (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="small" color="#007AFF" />
        </View>
      )}
      <ChatInput onSend={handleSendMessage} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  loadingContainer: {
    padding: 10,
    alignItems: 'center',
  },
});