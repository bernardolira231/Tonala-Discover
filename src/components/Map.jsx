import React from 'react'
import { View, Text } from 'react-native'
import MapView, { Marker, Polygon, Callout } from 'react-native-maps'
import { region, tonalaCoordinates, tonalaCenter, marketCoordinates } from '../constants/mapConst'
import { styles } from '../styles/StyledMap'

const TonalaMap = () => {
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

export default TonalaMap
