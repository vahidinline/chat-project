import { BaseNavigationContainer } from '@react-navigation/core';
import * as React from "react";
import { stackNavigatorFactory } from "react-nativescript-navigation";
import { LoginScreen } from "./screens/LoginScreen";
import { ChatScreen } from "./screens/ChatScreen";
import { useAuthStore } from "../stores/authStore";

const StackNavigator = stackNavigatorFactory();

export const MainStack = () => {
    const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
    const initialize = useAuthStore((state) => state.initialize);

    React.useEffect(() => {
        initialize();
    }, []);

    return (
        <BaseNavigationContainer>
            <StackNavigator.Navigator
                initialRouteName={isAuthenticated ? "Chat" : "Login"}
                screenOptions={{
                    headerShown: true,
                }}
            >
                <StackNavigator.Screen
                    name="Login"
                    component={LoginScreen}
                    options={{ headerShown: false }}
                />
                <StackNavigator.Screen
                    name="Chat"
                    component={ChatScreen}
                    options={{ headerTitle: "AI Chat" }}
                />
            </StackNavigator.Navigator>
        </BaseNavigationContainer>
    );
};