import * as React from 'react';
import {SafeAreaProvider} from "react-native-safe-area-context"
import { Gesture } from 'react-native-gesture-handler';
import AppNavigationContainer from './navigation/AppNavigationContainer';

const App = () => {
  return (
    <SafeAreaProvider>
        <AppNavigationContainer/>
    </SafeAreaProvider>
  );
};

export default App;

