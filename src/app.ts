import * as React from 'react';
import * as ReactNativeScript from 'react-nativescript';
import { MainStack } from './navigation/MainStack';

// Controls react-nativescript log verbosity.
Object.defineProperty(global, '__DEV__', { value: false });

ReactNativeScript.start(React.createElement(MainStack, {}, null));