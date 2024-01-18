import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  textLoader: {
    marginTop: 20,
    fontSize: 20,
  },
  indicator: {
    transform: [{ scale: 2 }],
  },
  loader: {
    flex: 0,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 20,
  },
});

export default styles;
