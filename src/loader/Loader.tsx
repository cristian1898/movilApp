import { ActivityIndicator, Text, View } from 'react-native';
import styles from './styles';

const Loader = () => {
  return (
    <View style={styles.loader}>
      <ActivityIndicator
        size="large"
        color="#0000ff"
        style={styles.indicator}
      />
      <Text style={styles.textLoader}>Cargando datos...</Text>
    </View>
  );
};

export default Loader;
