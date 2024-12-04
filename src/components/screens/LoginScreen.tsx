import * as React from 'react';
import { StyleSheet } from 'react-nativescript';
import { useAuthStore } from '../../stores/authStore';
import { loginWithGoogle } from '../../services/api';

export function LoginScreen({ navigation }) {
  const setToken = useAuthStore((state) => state.setToken);

  const handleGoogleLogin = async () => {
    try {
      // In a real app, implement proper Google Sign-In
      const response = await loginWithGoogle('dummy-google-token');
      await setToken(response.token);
      navigation.navigate('Chat');
    } catch (error) {
      console.error('Login failed:', error);
      // Show error dialog
    }
  };

  return (
    <flexboxLayout style={styles.container}>
      <label className="text-2xl mb-4 font-bold text-center">
        Welcome to AI Chat
      </label>
      <button
        className="bg-blue-500 text-white p-4 rounded-lg"
        onTap={handleGoogleLogin}
      >
        Sign in with Google
      </button>
    </flexboxLayout>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
});