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
            } />
            <View style={styles.cardDetails}>
                <CardDetailText>{name}</CardDetailText>
                <Rating rating={rating} />
            </View>
        </View>
    );
}

const CardDetailText: React.FC = ({ children }) => {
    return <Text style={styles.h1}>{children}</Text>
}

const Rating: React.FC<{ rating: number }> = ({ rating }) => {
    return <Text style={styles.h2}>{rating}</Text>
}

const styles = StyleSheet.create({
    card: {
        shadowColor: "black",
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.51,
        shadowRadius: 13.16,

        elevation: 20,
        overflow: 'hidden',
        borderRadius: 20,
        backgroundColor: 'white'
    },
    cardDetails: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        marginLeft: 5,
        paddingBottom: 10,
    },
    h1: {
        fontSize: 25
    },
    h2: {
        fontSize: 20
    }
})

export default RestaurantCard;