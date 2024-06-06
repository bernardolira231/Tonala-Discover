import { StyleSheet } from 'react-native'
import theme from '@styles/theme'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16
  },
  header: {
    backgroundColor: theme.colors.primary,
    borderRadius: 20,
    padding: 16,
    textAlign: 'center'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: theme.colors.textPrimary
  },
  description: {
    fontSize: 14,
    paddingVertical: 8,
    color: theme.colors.textSecondary
  },
  subtitle: {
    fontSize: 18,
    fontWeight: '600',
    color: theme.colors.textPrimary
  },
  ingredients: {
    fontSize: 14,
    color: theme.colors.textSecondary
  },
  imageContainer: {
    flex: 1,
    marginVertical: 16
  },
  image: {
    width: '100%',
    height: 300,
    borderRadius: 100
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: 16,
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4
  },
  iconButton: {
    padding: 8
  },
  icon: {
    width: 24,
    height: 24,
    tintColor: '#666'
  },
  iconActive: {
    width: 24,
    height: 24,
    tintColor: '#FF6347'
  }
})
