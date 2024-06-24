import {StyleSheet} from 'react-native';

export const stylesButton = StyleSheet.create({
  primaryButton: {
    alignItems: 'center',
    borderRadius: 20,
    padding: 10,
    marginVertical: 10,
    backgroundColor: '#05bfd5',
  },
  fabButton: {
    backgroundColor: 'white',
    width: 40,
    aspectRatio: 1 / 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100,
    zIndex: 100,
    position: 'absolute',
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
