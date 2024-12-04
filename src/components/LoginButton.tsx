import * as React from 'react';
import { StyleSheet } from 'react-nativescript';

interface LoginButtonProps {
    onTap: () => void;
}

export function LoginButton({ onTap }: LoginButtonProps) {
    return (
        <button
            className="bg-blue-500 text-white p-4 rounded-lg"
            onTap={onTap}
        >
            Sign in with Google
        </button>
    );
}