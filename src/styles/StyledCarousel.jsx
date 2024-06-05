import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    paddingTop: 20
  },
  h1: {
    fontSize: 24,
    fontWeight: '700',
    textAlign: 'center',
    alignItems: 'flex-end',
    paddingHorizontal: 20,
    marginVertical: 10,
    color: '#202020'
  },
  carouselContainer: {
    paddingTop: -30
  },
  showMoreContainer: {
    width: 80,
    height: 300,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
    marginHorizontal: 15,
    paddingTop: 10
  },
  showMoreButton: {
    width: 60,
    height: 60,
    backgroundColor: '#FF6347',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30
  },
  showMoreText: {
    color: '#FF6347',
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 5
  }
})
