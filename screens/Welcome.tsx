import React from 'react';
import { StyleSheet, Text, View,  } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { Button } from 'react-native-elements';
import Header from './Header';

import { useNavigation } from '@react-navigation/native';


const WelcomeScreen: React.FC<StackScreenProps<any>> = ({ navigation }) => {
 
 
  return (
    <View style={styles.container}>
      <Header></Header>
      

      <View style={styles.buttons}>
        <Button title="Sign in" 
        buttonStyle={styles.button} 
        titleStyle={styles.buttonText}
        onPress={() => navigation.navigate('Sign In')} />

        <Button title="Sign up" type="outline" buttonStyle={styles.button} onPress={() => navigation.navigate('Sign Up')} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    backgroundColor: "#FECD64",
    alignItems: 'center',
    justifyContent: 'center',
  },

  buttons: {
    flex: 1,
  },

  button: {
    marginTop: 10,
     backgroundColor: "#6D161C" ,
  },
  buttonText: {
    color: 'yellow'
  }
});

export default WelcomeScreen;