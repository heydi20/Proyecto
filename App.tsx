import 'react-native-gesture-handler';
import React from 'react'
import { StackNavigator } from './src/navegator/StackNavigator';
import { NavigationContainer } from '@react-navigation/native';

export const App = () => {
  return (
    <NavigationContainer>
      <StackNavigator/>
    </NavigationContainer>
  )
}

export default App;