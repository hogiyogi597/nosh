import React, { useRef, useState } from 'react';
import { Button, FlatList, ListRenderItemInfo, StyleSheet, Text, View } from 'react-native';
import Swiper from 'react-native-deck-swiper';
import RestaurantCard, { RestaurantCardProps } from './RestaurantCard'
import cardData from '../resources/cardData.test.json'

const data: RestaurantCardProps[] = cardData

function RestaurantSwiper() {
    const renderItem = (item: RestaurantCardProps, cardIndex: number) => {
        return <RestaurantCard {...item} />
    }

    return (
        <Swiper
            backgroundColor='transparent'
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

export default RestaurantSwiper;