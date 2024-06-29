import React from 'react'
import { View } from 'react-native'
import MapView from 'react-native-maps'
import { region, tonalaCenter, marketCoordinates } from '../constants/mapConst'
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
      </MapView>
    </View>
  )
}

export default TonalaMap
