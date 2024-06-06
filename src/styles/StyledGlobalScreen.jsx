import { StyleSheet } from 'react-native'
import theme from './theme'

export const globalStyles = StyleSheet.create({
  bgColor: {
    backgroundColor: theme.colors.bgColor,
    color: theme.colors.textPrimary
  }
})
