// import { CameraView, useCameraPermissions } from 'expo-camera'
// import { useState } from 'react'
// import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
// import { useNavigation } from '@react-navigation/native'
// import { Ionicons } from '@expo/vector-icons'

// export default function App () {
//   const navigation = useNavigation()
//   const [facing, setFacing] = useState('back')
//   const [permission, requestPermission] = useCameraPermissions()

//   if (!permission) {
//     // Camera permissions are still loading.
//     return <View />
//   }

//   if (!permission.granted) {
//     // Camera permissions are not granted yet.
//     return (
//       <View style={styles.container}>
//         <Text style={{ textAlign: 'center' }}>
//           We need your permission to show the camera
//         </Text>
//         <TouchableOpacity
//           onPress={requestPermission}
//           style={styles.permissionButton}
//         >
//           <Text style={styles.permissionText}>Grant Permission</Text>
//         </TouchableOpacity>
//       </View>
//     )
//   }

//   function toggleCameraFacing () {
//     setFacing((current) => (current === 'back' ? 'front' : 'back'))
//   }

//   return (
//     <View style={styles.container}>
//       <CameraView style={styles.camera} facing={facing}>
//         <View style={styles.topContainer}>
//           <TouchableOpacity
//             style={styles.backButton}
//             onPress={() => navigation.navigate('Home')}
//           >
//             <Ionicons name='arrow-back' size={24} color='white' />
//           </TouchableOpacity>
//         </View>
//         <View style={styles.bottomContainer}>
//           <TouchableOpacity style={styles.captureButton}>
//             <Ionicons name='camera' size={36} color='white' />
//           </TouchableOpacity>
//           <TouchableOpacity
//             style={styles.flipButton}
//             onPress={toggleCameraFacing}
//           >
//             <Ionicons name='camera-reverse' size={36} color='white' />
//           </TouchableOpacity>
//         </View>
//       </CameraView>
//     </View>
//   )
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center'
//   },
//   camera: {
//     flex: 1
//   },
//   topContainer: {
//     flex: 1,
//     flexDirection: 'row',
//     justifyContent: 'flex-start',
//     alignItems: 'flex-start',
//     padding: 20,
//     paddingTop: 50, // Lower the back button a bit
//     backgroundColor: 'rgba(0, 0, 0, 0.2)' // Add some background color to make it look more like the iPhone camera
//   },
//   backButton: {
//     backgroundColor: 'rgba(0, 0, 0, 0.5)',
//     borderRadius: 20,
//     padding: 10
//   },
//   bottomContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-evenly',
//     alignItems: 'center',
//     padding: 20,
//     backgroundColor: 'rgba(0, 0, 0, 0.2)' // Add some background color to make it look more like the iPhone camera
//   },
//   captureButton: {
//     backgroundColor: 'rgba(255, 0, 0, 0.7)',
//     borderRadius: 40,
//     padding: 20
//   },
//   flipButton: {
//     backgroundColor: 'rgba(0, 0, 0, 0.5)',
//     borderRadius: 40,
//     padding: 10
//   },
//   permissionButton: {
//     backgroundColor: 'blue',
//     borderRadius: 5,
//     padding: 10,
//     marginTop: 20
//   },
//   permissionText: {
//     color: 'white',
//     fontSize: 18,
//     textAlign: 'center'
//   }
// })

import React, { useState, useEffect } from 'react'
import { Text, View, StyleSheet, Button, Alert } from 'react-native'
import { CameraView, Camera } from 'expo-camera'

export default function App () {
  const [hasPermission, setHasPermission] = useState(null)
  const [scanned, setScanned] = useState(false)

  useEffect(() => {
    const getCameraPermissions = async () => {
      const { status } = await Camera.requestCameraPermissionsAsync()
      setHasPermission(status === 'granted')
    }

    getCameraPermissions()
  }, [])

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true)
    Alert.alert(`Bar code with type ${type} and data ${data} has been scanned!`)
  }

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>
  }

  return (
    <View style={styles.container}>
      <CameraView
        onBarcodeScanned={scanned ? undefined : handleBarCodeScanned}
        barcodeScannerSettings={{
          barcodeTypes: ['qr', 'pdf417']
        }}
        style={StyleSheet.absoluteFillObject}
      />
      {scanned && (
        <Button title='Tap to Scan Again' onPress={() => setScanned(false)} />
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center'
  }
})
