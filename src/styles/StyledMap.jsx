import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 300,
    borderRadius: 15,
    overflow: 'hidden',
    marginTop: 30
  },
  map: {
    ...StyleSheet.absoluteFillObject
  }
})
