import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';
import lily from './lily.jpg';

class MateriFlexBox extends Component {
    render() {
        return (
            <View>
                <View style={{
                    flexDirection: 'row',
                    backgroundColor: 'grey',
                    alignItems: 'center',
                    justifyContent: 'space-between'
                }}>
                    <View style={{ backgroundColor: 'red', width: 50, height: 50 }} />
                    <View style={{ backgroundColor: 'yellow', width: 50, height: 50 }} />
                    <View style={{ backgroundColor: 'blue', width: 50, height: 50 }} />
                    <View style={{ backgroundColor: 'purple', width: 50, height: 50 }} />
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                    <Text>Beranda</Text>
                    <Text>Video</Text>
                    <Text>Playlist</Text>
                    <Text>Komunitas</Text>
                    <Text>Channel</Text>
                    <Text>Tentang</Text>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Image source={lily} style={{ width: 100, height: 100, borderRadius: 50, margin: 20 }} />
                    <View >
                        <Text style={{ fontWeight: 'bold', fontSize: 20 }}>Rian Mupti Jauhari</Text>
                        <Text>Sang Pemalas</Text>
                    </View>
                </View>
            </View>
        )
    }
}

export default MateriFlexBox;