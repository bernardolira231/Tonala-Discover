import React from 'react'
import { View, Text, Image } from 'react-native'
import { Marker, Callout } from 'react-native-maps'
import { styles } from '../styles/StyledModernMarker'

const ModernMarker = ({ coordinate, title, description, image }) => {
  return (
    <Marker coordinate={coordinate}>
      <Callout style={styles.callout}>
        <View style={styles.calloutContainer}>
          <Image
            source={{ uri: 'https://example.com/image.jpg' }}
            style={styles.calloutImage}
          />
          <View style={styles.calloutTextContainer}>
            <Text style={styles.calloutTitle}>{title}</Text>
            <Text style={styles.calloutDescription}>
              {description}
            </Text>
          </View>
        </View>
      </Callout>
    </Marker>
  )
}

export default ModernMarker
