import React from 'react';
import { Dimensions, Platform, SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native';
import RestaurantPicker from './app/screens/RestaurantPicker';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <RestaurantPicker />

      {/* Nav Bar */}
      <View style={styles.navBar}>
        <Text>NavBar</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  navBar: {
    backgroundColor: 'cyan',
    height: Math.min(Dimensions.get("screen").height * .1, 100)
  }
});
