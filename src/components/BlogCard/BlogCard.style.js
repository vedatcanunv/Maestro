import {StyleSheet, Dimensions} from 'react-native';
import theme from '../../constants/theme';

const windowWidth = Dimensions.get('window').width;
const bannerWidth = windowWidth - 50;

export default StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    margin: 10,
    padding: 5,
  },
  bodyContainer: {
    flex: 1,
    padding: 5,
  },
  banner: {
    flex: 1,
    marginHorizontal: 20,
    marginVertical: 10,
    aspectRatio: 1.5,
    width: bannerWidth,
    height: bannerWidth / 1.5,
    resizeMode: 'stretch',
  },
  title: {
    flex: 1,
    fontSize: 25,
    fontWeight: 'bold',
    color: theme.COLORS.mainTextColor,
    textAlign: 'center',
    marginHorizontal: 10,
  },
  summary: {
    flex: 1,
    fontSize: 15,
    color: theme.COLORS.summaryTextColor,
    padding: 5,
    margin: 5,
  },
  totalReadingTime: {
    flex: 1,
    textAlign: 'right',
    fontStyle: 'italic',
    fontSize: 10,
    color: theme.COLORS.totalReadingTimeTextColor,
    padding: 5,
    margin: 5,
  },
});
