import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import lily from '../../assets/images/lily.jpg';

const Story = (props) => {
    return (
        <View style={{ alignItems: 'center', marginRight: 20 }}>
            <Image
                source={lily} style={{ width: 70, height: 70, borderRadius: 70 / 2 }}
            />
            <Text style={{ maxWidth: 50, textAlign: 'center' }}>{props.title}</Text>
        </View>
    )
}

const PropsDinamis = () => {
    return (
        <View >
            <Text>Props Dinamis</Text>
            <View style={{ flexDirection: 'row' }}>
                <ScrollView horizontal>
                    <Story title="Rian Mupti Jauhari" />
                    <Story title="Telkomsel" />
                    <Story title="Telkomsel" />
                    <Story title="Telkomsel" />
                    <Story title="Telkomsel" />
                    <Story title="Telkomsel" />
                </ScrollView>
            </View>
        </View>
    )
}

export default PropsDinamis;

const styles = StyleSheet.create({})
