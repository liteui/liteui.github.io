import { StyleSheet } from 'react-native'

const containerPadding = 20

export const colors = {
  primary: '#28a745',
  primaryLight: '#c2e1c9',
  secondary: '#ddd',
  tint: '#fff'  
}

export const styles = StyleSheet.create({
  screen: {
    flex: 1
  },
  container: {
    flexGrow: 1,
    padding: containerPadding
  },
  centeredContent: {
    justifyContent: 'center'
  },
  headerButton: {
    borderRadius: 24,
    width: 48,
    height: 48,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 4
  },
  formButton: {
    marginTop: 18
  },
  input: {
    minHeight: 50,
    borderColor: colors.input,
    borderWidth: 1,
    borderRadius: 6,
    paddingHorizontal: 10,
    paddingVertical: 8,
    justifyContent: 'center'
  },
  button: {
    backgroundColor: colors.primary,    
    minHeight: 50,
    borderRadius: 6,
    paddingHorizontal: 10,
    paddingVertical: 8,
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    textTransform: 'uppercase'
  },
  title: {
    fontSize: 22,
    marginBottom: 24
  },
  quizItem: {
    borderColor: colors.secondary,
    borderRadius: 6,
    borderWidth: 1,
    marginTop: 12,
    padding: 12
  },
  detailsAuthor: {
    fontSize: 18,
    fontStyle: 'italic',
    marginBottom: 12
  },
  detailsDate: {
    fontSize: 18,
    marginBottom: 12
  },
  detailsText: {
    fontSize: 16
  },
  drawerHeader: {
    alignItems: 'center',
    borderBottomColor: colors.primary,
    borderBottomWidth: 1,
    marginBottom: 18,
    padding: containerPadding
  },
  drawerTitle: {
    color: colors.primary,
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 12,
    textAlign: 'center'
  }
})
