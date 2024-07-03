import React from 'react'
import { View } from 'react-native'
import MapView from 'react-native-maps'
import { region } from '../constants/mapConst'
import { markers } from '../constants/markers'
import { styles } from '../styles/StyledMap'
import MyMarker from './ModernMarker.jsx'

const TonalaMap = () => {
  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={region}
      >
        {markers.map((marker, index) => (
          <MyMarker
            key={index}
            coordinate={marker.coordinate}
            title={marker.title}
            description={marker.description}
            image={marker.image}
          />
        ))}
      </MapView>
    </View>
  )
}

export default TonalaMap
