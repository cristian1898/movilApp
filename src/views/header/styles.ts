import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  headerTitle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '700',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  buttomHeader: {
    marginLeft: 8,

    fontSize: 18,
  },
  goBackButton: {
    marginRight: 8,

    borderRadius: 50,
    padding: 8,
  },
});

export default styles;
