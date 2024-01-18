import { Button } from 'react-native-paper';
import { Text, TouchableOpacity, View } from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/Ionicons';
import { useAppContext } from '../../context/AppContext';
import { useEffect, useState } from 'react';
import { ACTIONS } from '../../interfaces/globalInterface';
const HeaderView = () => {
  const { state, dispatch } = useAppContext();
  const [active, setActive] = useState<boolean>(false);
  const handleGoBack = () => {
    dispatch({
      type: 'SET_VIEW',
      payload: { type: ACTIONS.LIST },
    });
    dispatch({
      type: 'SET_AUTHOR',
      payload: { author: null },
    });
    dispatch({
      type: 'SET_BOOK',
      payload: { book: null },
    });
  };
  useEffect(() => {
    if (
      state.view?.type === ACTIONS.CREATE ||
      state.view?.type === ACTIONS?.VIEW
    ) {
      setActive(true);
    } else {
      setActive(false);
    }
  }, [state.view]);

  return (
    <View style={styles.header}>
      <Text style={styles.headerTitle}>MyBooks</Text>

      {/* Return home action   */}
      {active ? (
        <TouchableOpacity style={styles.goBackButton} onPress={handleGoBack}>
          <Icon name="arrow-back-outline" size={20} color="#ffffff" />
        </TouchableOpacity>
      ) : null}
    </View>
  );
};

export default HeaderView;
