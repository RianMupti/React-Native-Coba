import React, { Component } from 'react';
import { Image, Text, TextInput, View, StyleSheet } from 'react-native';
import lily from './lily.jpg'

const App = () => {
  return (
    <StylingReactNativeComponent />
  )
};

const StylingReactNativeComponent = () => {
  return (
    <View>
      <Text style={style.text}>Styling Component</Text>
      <View
        style={{
          width: 100,
          height: 100,
          backgroundColor: 'skyblue',
          borderWidth: 2,
          borderColor: 'purple',
          marginTop: 20,
          marginLeft: 20
        }}
      />

      <View style={{
        width: 212,
        padding: 12,
        backgroundColor: 'lightgrey',
        borderRadius: 8,
        marginTop: 20,
        marginHorizontal: 100
      }}
      >
        <Image source={lily}
          style={{
            width: 188,
            height: 107,
            borderRadius: 8
          }}
        />

        <Text style={{
          fontSize: 14,
          fontWeight: 'bold',
          marginTop: 16
        }}>Bunga Lily</Text>

        <Text style={{
          fontSize: 12,
          fontWeight: '300',
          marginTop: 12,
          color: 'black'
        }}>Di Mimpi</Text>

        <Text style={{
          fontSize: 12,
          fontWeight: 'bold',
          color: 'orange',
          marginTop: 12
        }}>Hanya bisa dilihat</Text>

        <View style={{
          backgroundColor: 'lightgreen',
          paddingVertical: 7,
          borderRadius: 20,
          marginTop: 18,
        }}>
          <Text style={{
            fontSize: 14,
            fontWeight: 'bold',
            textAlign: 'center',
            color: '#d82b00'
          }}>Bangun boss</Text>
        </View>

      </View>
    </View>
  )
}

const style = StyleSheet.create({
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'darkred',
    marginLeft: 20,
    marginTop: 40
  },
})

const SampleComponet = () => {
  return (
    <View>
      <View style={{
        width: 80,
        height: 80,
        backgroundColor: 'aqua',
        borderWidth: 2,
        borderColor: 'black',
      }}
      />

      <Text>Hello World</Text>
      <Moon />
      <Text>I Hate You</Text>
      <Photo />
      <TextInput style={{ borderWidth: 1 }} />
      <BoxGreen />
      <Profile />
    </View>
  )
}

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

class BoxGreen extends Component {
  render() {
    return <Text>Who am I</Text>
  }
}

class Profile extends Component {
  render() {
    return (
      <View>
        <Image source={{ uri: 'https://placeimg.com/150/150/nature' }}
          style={{ width: 150, height: 150, borderRadius: 75 }}
        />
        <Text>Ini pohon Sakura</Text>
      </View>
    )
  }
}

export default App;