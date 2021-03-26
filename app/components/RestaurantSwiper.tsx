import React, { useRef, useState } from 'react';
import { Button, FlatList, ListRenderItemInfo, StyleSheet, Text, View } from 'react-native';
import Swiper from 'react-native-deck-swiper';
import RestaurantCard, { RestaurantCardProps } from './RestaurantCard'

const data: RestaurantCardProps[] = [
    {
        imageUrl: "https://deltaco.com/images/food/category/combos.jpg?v=3.99",
        name: "Del Taco",
        rating: 1
    },
    {
        imageUrl: "https://cdn.sanity.io/images/czqk28jt/prod_bk/f4dc27eb7337f7cbd12d3ccd840e6a031fcba622-360x270.jpg",
        name: "Burger King",
        rating: 3
    },
    {
        imageUrl: "https://d1ralsognjng37.cloudfront.net/7e8d4508-aa00-47a3-92d6-4655d6f85164.jpeg",
        name: "Chipotle",
        rating: 4
    },
]

function RestaurantSwiper() {
    const renderItem = (item: RestaurantCardProps, cardIndex: number) => {
        return <RestaurantCard {...item} />
    }

    return (
        <Swiper
            cards={data}
            renderCard={renderItem}
            infinite
            onSwipedAll={() => console.log('Finished swiping, reload with next page')}
            onSwipedRight={() => console.log('Liked food.')}
            onSwipedLeft={() => console.log('No like food.')}
            onSwipedBottom={() => console.log('Saved restaurant for later?')}
            disableTopSwipe
        >
        </Swiper>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F5FCFF"
    },
    card: {
        flex: 1,
        borderRadius: 4,
        borderWidth: 2,
        borderColor: "#E8E8E8",
        justifyContent: "center",
        backgroundColor: "white"
    },
    text: {
        textAlign: "center",
        fontSize: 50,
        backgroundColor: "transparent"
    }
});

export default RestaurantSwiper;