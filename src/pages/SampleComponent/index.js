import React, { Component } from 'react';
import { View, Text, TextInput, Image } from 'react-native';

const SampleComponent = () => {
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

export default SampleComponent;