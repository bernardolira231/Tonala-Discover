import React from 'react'
import { View, StyleSheet } from 'react-native'
import MapView, { Marker } from 'react-native-maps'

const Map = () => {
  const region = {
    latitude: 20.6231,
    longitude: -103.2436,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421
  }

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={region}
      >
        <Marker coordinate={{ latitude: 20.6231, longitude: -103.2436 }} />
      </MapView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 160,
    borderRadius: 15,
    overflow: 'hidden'
  },
  map: {
    ...StyleSheet.absoluteFillObject
  }
})

export default Map
