import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 0,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },

  textContainer: {
    alignItems: 'center',
    marginBottom: 16,
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    borderRadius: 10,
  },
  contentContainer: {
    width: 300,
    paddingBottom: 10,
    paddingTop: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 14,
    borderBottomWidth: 1,
    paddingBottom: 5,
  },
  breadcrumbContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
    width: 280,
  },
  breadcrumb: {
    width: 20,
    height: 2,
    backgroundColor: '#0074e4', // Color azul de Tesla
    marginRight: 8,
  },
  breadcrumbText: {
    fontSize: 16,
    color: '#0074e4',
    fontWeight: 'bold',
  },
  sectionContainer: {
    marginBottom: 16,
    width: 280,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#333',
  },
  description: {
    fontSize: 16,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    color: '#555',
  },
  details: {
    fontSize: 16,
    color: '#333',
  },
  shareButton: {
    marginTop: 16,
  },
  actionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 16,
  },
  outlinedButton: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: '#0074e4',
    borderRadius: 12,
    paddingVertical: 4,
    paddingHorizontal: 0,
    marginRight: 4,
  },
  actionButtonText: {
    marginLeft: 8,
    color: '#0074e4',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default styles;
