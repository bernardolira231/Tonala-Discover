import React from 'react'
import { TouchableOpacity } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'
import { styles } from '../styles/StyledCameraButton'
import { useNavigation } from '@react-navigation/native'

const CameraButton = () => {
  const navigation = useNavigation()
  return (
    <TouchableOpacity
      style={styles.floatingButton}
      onPress={() => navigation.navigate('Camera')}
    >
      <MaterialIcons name='camera-alt' size={30} color='white' />
    </TouchableOpacity>
  )
}

export default CameraButton
