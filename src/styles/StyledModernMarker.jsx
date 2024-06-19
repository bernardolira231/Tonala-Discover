import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  callout: {
    width: 200,
    padding: 5,
    borderRadius: 10,
    backgroundColor: 'white'
  },
  calloutContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  calloutImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10
  },
  calloutTextContainer: {
    flex: 1
  },
  calloutTitle: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 5
  },
  calloutDescription: {
    fontSize: 12,
    color: 'gray'
  }
})
