import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Snackbar } from 'react-native-paper';
import { useAppContext } from '../../context/AppContext';
import { IAppContextAlert } from '../../interfaces/globalInterface';
import styles from './styles';

const NotificationComponentApp = () => {
  const { state } = useAppContext();
  const [alertObject, setAlerObject] = useState<IAppContextAlert | null>(null);
  const [visible, setVisible] = useState(false);

  const showSnackbar = () => {
    setVisible(true);
  };

  const hideSnackbar = () => {
    setAlerObject(null);
    setVisible(false);
  };
  useEffect(() => {
    if (state.alert) {
      setAlerObject(state.alert);
      showSnackbar();
    }
  }, [state.alert]);
  return (
    <View style={{ flex: 0, justifyContent: 'center', alignItems: 'center' }}>
      {alertObject && (
        <Snackbar
          visible={visible}
          onDismiss={hideSnackbar}
          style={[
            alertObject.action ? styles[`${alertObject.action}`] : styles.info,
            { elevation: 10000 },
          ]}
          action={{
            label: 'Cerrar',
            onPress: () => {
              hideSnackbar();
            },
          }}>
          {alertObject.message}
        </Snackbar>
      )}
    </View>
  );
};

export default NotificationComponentApp;
