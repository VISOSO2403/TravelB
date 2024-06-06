import {StyleSheet} from 'react-native';

export const stylesContainers = StyleSheet.create({
  screen: {
    flex: 1,
    paddingHorizontal: 16,
  },
  section: {
    paddingVertical: 10,
  },
  rowCenter: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  rowSpace: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
