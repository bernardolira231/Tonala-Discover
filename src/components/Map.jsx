import React from 'react'
import { View } from 'react-native'
import MapView, { Polygon } from 'react-native-maps'
import { region, tonalaCoordinates, tonalaCenter, marketCoordinates } from '../constants/mapConst'
import { styles } from '../styles/StyledMap'
import MyMarker from './ModernMarker.jsx'

const TonalaMap = () => {
  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={region}
      >
        <MyMarker coordinate={marketCoordinates} title='Handicraft Market' description='Handicraft Market asdasdasdasds' />
        <MyMarker coordinate={tonalaCenter} title='Center of Tonalá' description='Center of Tonalá asdasdasdasds' />
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
