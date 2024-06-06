import { StyleSheet } from 'react-native'
import theme from './theme.js'

export const styles = StyleSheet.create({
  container: {
    borderRadius: 20,
    overflow: 'hidden',
    marginVertical: 10,
    marginHorizontal: 15
  },
  image: {
    width: 200,
    height: 300,
    justifyContent: 'flex-end'
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.3)'
  },
  textContainer: {
    padding: 15
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10
  },
  button: {
    backgroundColor: '#FF6347',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 5,
    alignSelf: 'flex-start'
  },
  buttonText: {
    color: '#fff',
    fontSize: 14
  }
})
