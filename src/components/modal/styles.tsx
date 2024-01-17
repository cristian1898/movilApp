import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  divider: {
    marginBottom: 5,
    marginTop: 5,
  },
  titleModal: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#720455',
    paddingBottom: 5,
    paddingTop: 5,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  cardContainer: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    width: '95%',
    alignSelf: 'center',
  },
  cardImage: {
    width: '100%',
    height: 200,
    borderRadius: 8,
    marginTop: 10,
    marginBottom: 10,
  },
  cardText: {
    fontSize: 16,
    fontWeight: 'bold',

    marginBottom: 10,
  },
  closeButton: {
    alignItems: 'flex-end',
    alignSelf: 'flex-end',
    padding: 0,
    borderRadius: 5,
  },

  detailButton: {
    marginRight: 5,
  },
  closeButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },

  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    paddingBottom: 0,
  },
  detailButtonText: {
    color: '#030637',
  },
  preview: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  previewText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#720455',
  },
});

export default styles;
