import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  h1: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#ffffff'
  },
  container: {
    position: 'relative',
    width: '100%'

  },
  banner: {
    width: '100%',
    height: 200,
    borderRadius: 5
  },
  textContainer: {
    position: 'absolute',
    height: 200,
    width: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
    justifyContent: 'center',
    alignContent: 'center'
  },
  header: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center'
  }
})
