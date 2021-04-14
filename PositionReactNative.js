import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import lily from './lily.jpg';

const PositionReactNative = () => {
    return (
        <View style={styles.wrapper}>
            <Text style={{ fontSize: 18 }}>Materi Position</Text>
            <View style={styles.cardWrapper}>
                <Image source={lily} style={styles.iconCard} />
                <Text style={styles.notif}>10</Text>
            </View>
            <Text style={styles.text}>Pemandangan Alam</Text>
        </View>
    )
}

export default PositionReactNative;

const styles = StyleSheet.create({
    wrapper: {
        padding: 30,
        alignItems: 'center'
    },
    cardWrapper: {
        borderWidth: 1,
        borderColor: '#4398D1',
        width: 120,
        height: 120,
        borderRadius: 60,
        marginTop: 20,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative'
    },
    iconCard: { width: 70, height: 70 },
    text: {
        fontSize: 16,
        color: '#777',
        fontWeight: '700',
        marginTop: 9
    },
    notif: {
        fontSize: 14,
        color: 'white',
        backgroundColor: 'cyan',
        padding: 3,
        borderRadius: 20,
        position: 'absolute',
        top: 4,
        right: 9
    }
})
