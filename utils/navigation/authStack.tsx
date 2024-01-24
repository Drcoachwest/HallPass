import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import WelcomeScreen from '../../screens/Welcome';
import SignInScreen from '../../screens/SignInScreen';
import SignOutScreen from '../../screens/SignUpScreen'
// import ScannedQRCode from '../../screens/ScannedQrCode';


const Stack = createStackNavigator();

export default function AuthStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="Sign In" component={SignInScreen} />
        <Stack.Screen name="Sign Up" component={SignOutScreen} />
        {/* <Stack.Screen name="Scan QR Code" component={ScannedQRCode} /> */}
        {/* <Stack.Screen name="ScanQRCodeTest" component={ScannedQRCode} options={{ headerShown: false }} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}