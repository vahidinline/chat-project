import * as React from 'react';
import { StyleSheet } from 'react-nativescript';
import { Message, useChatStore } from '../../stores/chatStore';
import { sendMessage } from '../../services/api';

export function ChatScreen() {
  const [inputText, setInputText] = React.useState('');
  const { messages, addMessage, isLoading, setLoading } = useChatStore();

  const handleSend = async () => {
    if (!inputText.trim()) return;

    const userMessage: Omit<Message, 'id' | 'timestamp'> = {
      content: inputText,
      sender: 'user',
    };

    addMessage(userMessage);
    setInputText('');
    setLoading(true);

    try {
      const response = await sendMessage(inputText);
      addMessage({
        content: response.message,
        sender: 'ai',
      });
    } catch (error) {
      console.error('Failed to send message:', error);
      // Show error dialog
    } finally {
      setLoading(false);
    }
  };

  return (
    <flexboxLayout style={styles.container}>
      <scrollView style={styles.messagesContainer}>
        {messages.map((message) => (
          <flexboxLayout
            key={message.id}
            style={[
              styles.messageContainer,
              message.sender === 'user' ? styles.userMessage : styles.aiMessage,
            ]}
          >
            <label className="text-base">{message.content}</label>
            <label className="text-xs text-gray-500">
              {message.timestamp.toLocaleTimeString()}
            </label>
          </flexboxLayout>
        ))}
        {isLoading && (
          <label className="text-center text-gray-500">AI is typing...</label>
        )}
      </scrollView>
      <flexboxLayout style={styles.inputContainer}>
        <textField
          style={styles.input}
          hint="Type a message..."
          text={inputText}
          onTextChange={(e) => setInputText(e.value)}
        />
        <button
          style={styles.sendButton}
          onTap={handleSend}
          isEnabled={!isLoading && inputText.trim().length > 0}
        >
          Send
        </button>
      </flexboxLayout>
    </flexboxLayout>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    flexDirection: 'column',
  },
  messagesContainer: {
    flex: 1,
    padding: 10,
  },
  messageContainer: {
    padding: 10,
    marginVertical: 5,
    maxWidth: '80%',
    borderRadius: 10,
  },
  userMessage: {
    alignSelf: 'flex-end',
    backgroundColor: '#007AFF',
  },
  aiMessage: {
    alignSelf: 'flex-start',
    backgroundColor: '#E9ECEF',
  },
  inputContainer: {
    flexDirection: 'row',
    padding: 10,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#E9ECEF',
  },
  input: {
    flex: 1,
    marginRight: 10,
    padding: 10,
    backgroundColor: '#F8F9FA',
    borderRadius: 20,
  },
  sendButton: {
    backgroundColor: '#007AFF',
    padding: 10,
    borderRadius: 20,
    color: '#fff',
  },
});