import React, { useState, useEffect } from 'react'
import { Text, View, StyleSheet, TouchableOpacity, Alert } from 'react-native'
import { CameraView, Camera } from 'expo-camera'
import { useNavigation, useFocusEffect } from '@react-navigation/native'
import { Ionicons } from '@expo/vector-icons'

export default function App () {
  const navigation = useNavigation()
  const [hasPermission, setHasPermission] = useState(null)
  const [scanned, setScanned] = useState(false)
  const [cameraKey, setCameraKey] = useState(0) // Agrega un key para forzar la re-renderización

  useEffect(() => {
    const getCameraPermissions = async () => {
      const { status } = await Camera.requestCameraPermissionsAsync()
      setHasPermission(status === 'granted')
    }
    getCameraPermissions()
  }, [])

  // 🔄 Reiniciar la cámara cuando la pantalla es enfocada
  useFocusEffect(
    React.useCallback(() => {
      setScanned(false) // Reiniciar escaneo
      setCameraKey((prevKey) => prevKey + 1) // Forzar re-render
    }, [])
  )

  const handleBarCodeScanned = ({ data }) => {
    if (scanned) return
    setScanned(true)
    try {
      const params = JSON.parse(data)
      if (params.id && params.name && params.description && params.image && params.ingredients) {
        navigation.navigate('DishDetails', {
          id: params.id,
          name: params.name,
          description: params.description,
          image: params.image,
          ingredients: params.ingredients
        })
      } else {
        throw new Error('Invalid structure')
      }
    } catch (error) {
      Alert.alert('Invalid QR Code', 'The scanned QR code does not contain the required data structure.')
    }
  }

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>
  }

  return (
    <View style={styles.container}>
      {/* 🔄 Usa key para forzar re-render en iOS */}
      <CameraView
        key={cameraKey}
        onBarcodeScanned={scanned ? undefined : handleBarCodeScanned}
        barcodeScannerSettings={{
          barcodeTypes: ['qr', 'pdf417']
        }}
        style={StyleSheet.absoluteFillObject}
      >
        <View style={styles.topContainer}>
          <TouchableOpacity style={styles.backButton} onPress={() => navigation.navigate('Home')}>
            <Ionicons name='arrow-back' size={24} color='white' />
          </TouchableOpacity>
        </View>
        <View style={styles.bottomContainer}>
          {scanned && (
            <TouchableOpacity style={styles.captureButton} onPress={() => setScanned(false)}>
              <Ionicons name='refresh-circle-outline' size={36} color='white' />
              <Text style={{ color: 'white' }}>Tap to Scan Again</Text>
            </TouchableOpacity>
          )}
        </View>
      </CameraView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  },
  camera: {
    flex: 1
  },
  topContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    padding: 20,
    paddingTop: 50,
    backgroundColor: 'rgba(0, 0, 0, 0.2)'
  },
  backButton: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    borderRadius: 20,
    padding: 10
  },
  bottomContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    padding: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.2)'
  },
  captureButton: {
    backgroundColor: 'rgba(255, 0, 0, 0.7)',
    borderRadius: 40,
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 14
  },
  permissionButton: {
    backgroundColor: 'blue',
    borderRadius: 5,
    padding: 10,
    marginTop: 20
  },
  permissionText: {
    color: 'white',
    fontSize: 18,
    textAlign: 'center'
  }
})
