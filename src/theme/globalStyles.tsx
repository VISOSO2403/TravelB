import {Platform, StyleSheet} from 'react-native';

export const globalStyles = StyleSheet.create({
  goBackButton: {
    position: 'absolute',
    top: 20,
    left: 20,
  },
  buttons: {
    borderRadius: 20,
    padding: 10,
    marginTop: 10,
  },
  fabPosition: {
    ...Platform.select({
      ios: {
        top: 60,
        left: 16,
      },
      android: {
        top: 20,
        left: 16,
      },
    }),
  },
  titlesContainer: {
    alignItems: 'center',
  },
  shadow: {
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.17,
    shadowRadius: 3.05,
    elevation: 4,
  },
});
