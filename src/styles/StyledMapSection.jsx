import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  heading: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10
  },

  container: {
    flex: 1,
    padding: 10
  },

  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between'
  },

  card: {
    backgroundColor: '#FAE3C6',
    borderRadius: 10,
    overflow: 'hidden',
    width: '48%',
    marginBottom: 10
  },
  swiper: {
    height: 120
  },
  image: {
    width: '100%',
    height: 120,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10
  },
  textContainer: {
    padding: 10
  },
  title: {
    fontWeight: 'bold',
    fontSize: 14
  },
  price: {
    fontSize: 12,
    color: '#E94F37'
  },
  stars: {
    fontSize: 12,
    color: '#000'
  },
  button: {
    padding: 10,
    backgroundColor: '#E94F37',
    borderRadius: 5,
    marginBottom: 10,
    alignItems: 'center'
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold'
  },
  dot: {
    backgroundColor: 'rgba(0,0,0,.2)',
    width: 6,
    height: 6,
    borderRadius: 3,
    margin: 3
  },
  activeDot: {
    backgroundColor: '#E94F37',
    width: 8,
    height: 8,
    borderRadius: 4,
    margin: 3
  }
})
