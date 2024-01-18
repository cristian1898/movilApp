import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 0,
    paddingTop: 10,
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  filterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 5,
  },
  filterLabel: {
    flex: 1,
    marginTop: 10,
  },
  picker: {
    flex: 2,
    height: 40,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    backgroundColor: '#fff',
    marginTop: -10,
  },
  tableContainer: {
    backgroundColor: '#fff',
    borderRadius: 5,
    overflow: 'hidden',
  },
  tableHeader: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    backgroundColor: '#f0f0f0',
    padding: 10,
  },
  tableHeaderText: {
    flex: 1,
    fontWeight: 'bold',
    justifyContent: 'flex-start',
  },
  column: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  table: {
    borderWidth: 1,
    borderColor: '#ddd',
  },
  row: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    padding: 10,
  },
  flexContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 10,
    flex: 0,
  },
  tableScrollView: {
    height: 330,
    flex: 1,
  },
  cell: {
    flex: 1,
  },
  icon: {
    height: 40,
    width: 40,
    borderRadius: 12,
    resizeMode: 'cover',
  },
  imageContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  pickerTitle: {
    borderBottomWidth: 1,
    color: '#720455',
  },
  addButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#3C0753',
    borderRadius: 8,
    paddingVertical: 12,
    marginTop: 16,
  },
  addButtonLabel: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 8,
  },

  floatingButton: {
    position: 'absolute',
    top: 0,
    right: 5,
    backgroundColor: '#3B3486',
    borderRadius: 50,
    padding: 4,
    elevation: 5,
    zIndex: 100,
  },
});

export default styles;
