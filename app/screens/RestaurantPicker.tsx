import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native'
import RestaurantSwiper from '../components/RestaurantSwiper';

function RestaurantPicker() {
    return (
        <View style={styles.container}>
            <RestaurantSwiper
                onSwipedAll={() => console.log("swiped all... loading more")}
                onSwipeRight={() => console.log("Liked foooooood")}
                onSwipeBottom={() => console.log("Saved for later")}
                onSwipeLeft={() => console.log("no thanks")}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})

export default RestaurantPicker;