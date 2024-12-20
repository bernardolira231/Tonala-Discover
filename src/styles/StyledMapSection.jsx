import { StyleSheet } from 'react-native'
import theme from './theme'

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
    color: theme.colors.textPrimary
  },
  button: {
    backgroundColor: '#BFA377',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 5
  },
  infoContainer: {
    flex: 1,
    padding: 10
  }
})
