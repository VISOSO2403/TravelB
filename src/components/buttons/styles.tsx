import {StyleSheet} from 'react-native';

export const stylesButton = StyleSheet.create({
  primaryButton: {
    alignItems: 'center',
    borderRadius: 20,
    padding: 10,
    marginVertical: 10,
    backgroundColor: '#491eb4',
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
