import React from 'react';
import { StyleSheet, Text, View , TextInput , Image } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text style={{ color: 'red' }}>Shake your phone to open the developer menu.</Text>
        <TextInput placeholder="This is a string" />
        <Image style={styles.images} source={require('./assets/mask.png')}></Image>
        <Text>This is the mask</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  images: {
    width: 250,
    height: 250,
    resizeMode: 'contain'
  }
});
