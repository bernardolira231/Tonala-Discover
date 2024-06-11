import { StyleSheet } from 'react-native'
import theme from './theme'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 40
  },
  header: {
    textAlign: 'center'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: theme.colors.textPrimary,
    marginBottom: 8
  },
  description: {
    fontSize: 16,
    paddingVertical: 8,
    color: theme.colors.textSecondary,
    paddingLeft: 8
  },
  subtitle: {
    fontSize: 20,
    fontWeight: '600',
    color: theme.colors.textPrimary,
    marginBottom: 12
  },
  ingredients: {
    fontSize: 16,
    color: theme.colors.textSecondary,
    marginBottom: 4,
    paddingLeft: 8
  },
  imageContainer: {
    marginBottom: 16
  },
  image: {
    width: '800',
    height: 300
  },
  firstpart: {
    marginBottom: 16
  },
  secondpart: {
    marginBottom: 16
  }
})
