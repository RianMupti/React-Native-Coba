import React from 'react';
import { Image, Text, View, StyleSheet } from 'react-native';
import lily from './lily.jpg';

const StylingReactNativeComponent = () => {
    return (
        <View>
            <Text style={style.text}>Styling Component Hadeh</Text>
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
                marginBottom: 30
                // marginHorizontal: 100
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

export default StylingReactNativeComponent;