import React from 'react';
import { Image, Text, TextInput, View } from 'react-native';

const App = () => {
  return (
    <View>
      <View style={{
        width: 80,
        height: 80,
        backgroundColor: 'aqua'
      }}
      />

      <Text>Hello World</Text>
      <Moon />
      <Text>I Hate You</Text>
      <Photo />
      <TextInput style={{ borderWidth: 1 }} />
    </View>
  )
};

const Moon = () => {
  return <Text>Different World, different life</Text>
}

const Photo = () => {
  return <Image source={{ uri: 'https://placeimg.com/100/100/tech' }}
    style={{
      width: 100,
      height: 100
    }}
  />
}

export default App;