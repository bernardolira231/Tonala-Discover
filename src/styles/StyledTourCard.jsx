import { StyleSheet } from 'react-native'
import theme from './theme.js'

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
    color: '#A0522D'
  },
  description: {
    color: '#A0522D'
  },
  sectionInfo: {
    flexDirection: 'row',
    justifyContent: 'flex-start'
  },
  iconSection: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    marginRight: 15
  },
  icon: {
    marginRight: 5
  },
  icontext: {
    color: '#A0522D'
  },
  button: {
    backgroundColor: theme.colors.primary,
    paddingVertical: 8,
    marginTop: 16,
    paddingHorizontal: 12,
    borderRadius: 5,
    alignSelf: 'flex-start'
  },
  buttonText: {
    color: '#fff',
    fontSize: 14
  }
})
