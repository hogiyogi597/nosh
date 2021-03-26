import React, { ReactChild, ReactNode, ReactPropTypes } from 'react';
import { Image, Text, View, StyleSheet, Dimensions } from 'react-native';

export type RestaurantCardProps = {
    imageUrl: string,
    name: string,
    rating: number
}

function RestaurantCard({ imageUrl, name, rating }: RestaurantCardProps) {
    const { width } = Dimensions.get('window')
    return (
        <View style={styles.card}>
            <Image resizeMode="cover" source={
                {
                    height: width,
                    width: width,
                    uri: imageUrl
                }
            }/>
            <View style={styles.cardDetails}>
                <CardDetailText>{name}</CardDetailText>
                <CardDetailText>{rating}</CardDetailText>
            </View>
        </View>
    );
}

const CardDetailText: React.FC = ({children}) => {
    return <Text style={styles.text}>{children}</Text>
}

const Rating = (rating: number) => {
    
    for(let i = 0; i < rating; i++) {
        
    }
    return <Image source={} />
}

const styles = StyleSheet.create({
    card: {
        overflow: 'hidden',
        borderRadius: 20
    },
    cardDetails: {

        backgroundColor: 'red',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    text: {
        fontSize: 25
    }
})

export default RestaurantCard;