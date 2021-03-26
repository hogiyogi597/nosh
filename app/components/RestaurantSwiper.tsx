import React, { useRef, useState } from 'react';
import { Button, FlatList, Image, ListRenderItemInfo, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Swiper from 'react-native-deck-swiper';
import RestaurantCard, { RestaurantCardProps } from './RestaurantCard'
import cardData from '../resources/cardData.test.json'

const data: RestaurantCardProps[] = cardData

type Props = {
    onSwipeRight: () => void
    onSwipeLeft: () => void
    onSwipeBottom: () => void
    onSwipedAll: () => void
}

const RestaurantSwiper: React.FC<Props> = ({ onSwipedAll, onSwipeRight, onSwipeBottom, onSwipeLeft }) => {
    const swiper: React.LegacyRef<Swiper<RestaurantCardProps>> = useRef(null)

    const renderItem = (item: RestaurantCardProps, cardIndex: number) => {
        return <RestaurantCard {...item} />
    }

    return (
        <View style={styles.container}>
            <View style={{ flex: 1 }}>
                <Swiper
                    ref={swiper}
                    backgroundColor={styles.swiper.backgroundColor}
                    cards={data}
                    renderCard={renderItem}
                    infinite
                    onSwipedAll={onSwipedAll}
                    onSwipedRight={onSwipeRight}
                    onSwipedLeft={onSwipeLeft}
                    onSwipedBottom={onSwipeBottom}
                    disableTopSwipe
                >
                </Swiper>
            </View>
            <View style={styles.buttonBar}>
                <PickerButton backgroundColor='lightcoral' imageSource={require('../assets/decline.png')} onPress={() => swiper.current?.swipeLeft()} />
                <PickerButton backgroundColor='cornflowerblue' imageSource={require('../assets/star.png')} onPress={() => swiper.current?.swipeBottom()} />
                <PickerButton backgroundColor='lightgreen' imageSource={require('../assets/accept.png')} onPress={() => swiper.current?.swipeRight()} />
            </View>
        </View>
    );
}

type PickerButtonProps = {
    imageSource: string | any,
    onPress: () => void,
    backgroundColor?: string
}

const PickerButton: React.FC<PickerButtonProps> = ({ imageSource, onPress, backgroundColor }) => {
    const pickerButtonStyles = Object.assign({}, styles.iconContainer, { backgroundColor: backgroundColor })

    return (
        <TouchableOpacity activeOpacity={0.75} touchSoundDisabled style={pickerButtonStyles} onPress={onPress}>
            <Image style={styles.icon} resizeMode="center" source={imageSource} />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-around'
    },
    swiper: {
        backgroundColor: 'transparent'
    },
    buttonBar: {
        backgroundColor: 'white',
        borderTopColor: 'black',
        borderTopWidth: 2,
        paddingTop: 15,
        paddingBottom: 15,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },
    iconContainer: {
        width: 75,
        height: 75,
        backgroundColor: 'red',
        borderRadius: 50,
        padding: 10
    },
    icon: {
        width: 50,
        height: 50
    }
})

export default RestaurantSwiper;