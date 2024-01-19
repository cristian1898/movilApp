import { SafeAreaView, Text, View } from 'react-native';
import InitialComponentAppTable from '../../components/table/TableComponent';
import styles from './styles';
import CreateUpdateComponente from '../../components/form/crud/CreateUpdateAction';
import DetailComponentAuthor from '../../components/detail/DetailAuthor';
import { useAppContext } from '../../context/AppContext';
import { ACTIONS } from '../../interfaces/globalInterface';
import { useEffect } from 'react';

const AuthorView = () => {
  const { state, dispatch } = useAppContext();

  //columnas que va amostrar en la vista
  const columns = [
    {
      name: 'firstName',
      displayName: 'Nombre',
    },
    {
      name: 'lastName',
      displayName: 'Apellido',
    },
    {
      name: 'email',
      displayName: 'Correo',
    },
    {
      name: 'img',
      displayName: 'Preview',
    },
  ];
  const filter = { name: 'name', displayName: 'Nombre' };
  useEffect(() => {
    dispatch({
      type: 'SET_VIEW',
      payload: { type: ACTIONS.LIST },
    });
  }, []);
  return (
    <View style={styles.container}>
      {!state.view?.type || state.view?.type === ACTIONS.LIST ? (
        <InitialComponentAppTable
          url={'author'}
          filter={filter}
          column={columns}
        />
      ) : null}
      {state.view?.type && state.view?.type === ACTIONS.VIEW ? (
        <SafeAreaView style={{ flex: 0 }}>
          <DetailComponentAuthor url={'/author/'} />
        </SafeAreaView>
      ) : null}
      {state.view?.type && state.view?.type === ACTIONS.CREATE ? (
        <CreateUpdateComponente type={'author'} />
      ) : null}
    </View>
  );
};

export default AuthorView;
