import { StyleSheet } from 'react-native'
import theme from '@styles/theme'

export const styles = StyleSheet.create({
  h1: {
    fontSize: 24,
    fontWeight: '700',
    textAlign: 'center',
    paddingHorizontal: 20,
    marginVertical: 10,
    color: theme.colors.textPrimary
  }
})
