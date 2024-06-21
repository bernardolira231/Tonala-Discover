import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFEDD5',
    marginTop: 20,
    shadowColor: '#171717',
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3
  },
  h1: {
    fontSize: 20,
    fontWeight: '700',
    marginVertical: 10,
    color: '#000'
  },
  sectionInfo: {
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  iconSection: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10
  },
  icon: {
    marginRight: 10
  }
})
