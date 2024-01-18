import { Dimensions, StyleSheet } from 'react-native';
const { width, height } = Dimensions.get('screen');
const styles = StyleSheet.create({
  containerForm: {
    flexDirection: 'column',
    marginBottom: 10,
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 5,
  },
  container: {
    flexGrow: 1,
    justifyContent: 'space-between',
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  titleText: {
    fontSize: 24,
    marginBottom: 10,
  },
});

export default styles;
