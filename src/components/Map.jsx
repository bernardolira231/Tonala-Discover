import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import MapView, { Marker, Polygon, Callout } from 'react-native-maps'

const TonalaMap = () => {
  const region = {
    latitude: 20.6231,
    longitude: -103.2436,
    latitudeDelta: 0.05,
    longitudeDelta: 0.05
  }

  const marketCoordinates = {
    latitude: 20.628486,
    longitude: -103.245580
  }

  const tonalaCenter = {
    latitude: 20.624327,
    longitude: -103.241176
  }

  const tonalaCoordinates = [
    { latitude: 20.641, longitude: -103.247 },
    { latitude: 20.630, longitude: -103.233 },
    { latitude: 20.618, longitude: -103.222 },
    { latitude: 20.609, longitude: -103.218 },
    { latitude: 20.599, longitude: -103.215 },
    { latitude: 20.589, longitude: -103.213 },
    { latitude: 20.580, longitude: -103.218 },
    { latitude: 20.572, longitude: -103.224 },
    { latitude: 20.563, longitude: -103.233 },
    { latitude: 20.559, longitude: -103.245 },
    { latitude: 20.565, longitude: -103.258 },
    { latitude: 20.576, longitude: -103.267 },
    { latitude: 20.587, longitude: -103.272 },
    { latitude: 20.598, longitude: -103.276 },
    { latitude: 20.611, longitude: -103.273 },
    { latitude: 20.622, longitude: -103.265 }
  ]

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={region}
      >
        <Marker coordinate={marketCoordinates}>
          <Callout
            style={{ width: 100, height: 50 }}
          >
            <View>
              <Text>Handicraft Market</Text>
            </View>
          </Callout>
        </Marker>
        <Marker coordinate={tonalaCenter}>
          <Callout
            style={{ width: 100, height: 50 }}
          >
            <View>
              <Text>Center of Tonalá</Text>
            </View>
          </Callout>
        </Marker>
        <Polygon
          coordinates={tonalaCoordinates}
          fillColor='rgba(255, 0, 0, 0.1)'
          strokeColor='rgba(0, 0, 0, 0.5)'
          strokeWidth={2}
        />
      </MapView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 400,
    borderRadius: 15,
    overflow: 'hidden'
  },
  map: {
    ...StyleSheet.absoluteFillObject
  }
})

export default TonalaMap
