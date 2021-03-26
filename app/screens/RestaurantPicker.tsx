import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native'
import RestaurantSwiper from '../components/RestaurantSwiper';

function RestaurantPicker() {
    return (
        <View style={styles.container}>
            <RestaurantSwiper />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        backgroundColor: 'yellow'
    }
})

export default RestaurantPicker;