import {StyleSheet} from 'react-native';
import theme from '../../constants/theme';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    textAlign: 'center',
    color: theme.COLORS.mainTextColor,
    fontSize: 30,
  },
  desc: {
    textAlign: 'center',
    color: theme.COLORS.mainTextColor,
    fontSize: 15,
  },
  scrollView: {
    flex: 1,
    marginBottom: 10,
  },
});
