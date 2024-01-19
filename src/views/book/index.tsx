import { SafeAreaView, Text, View } from 'react-native';
import InitialComponentAppTable from '../../components/table/TableComponent';
import styles from './styles';
import CreateUpdateComponente from '../../components/form/crud/CreateUpdateAction';
import DetailComponentAuthor from '../../components/detail/DetailAuthor';
import { useAppContext } from '../../context/AppContext';
import { ACTIONS } from '../../interfaces/globalInterface';
import { useEffect } from 'react';
import DetailComponentBook from '../../components/detail/DetailBook';

const BookView = () => {
  const { state, dispatch } = useAppContext();
  const columns = [
    {
      name: 'title',
      displayName: 'titulo',
    },
    {
      name: 'genere',
      displayName: 'Genero',
    },
    {
      name: 'img',
      displayName: 'Preview',
    },
  ];
  const filter = { name: 'author', displayName: 'Autor' };
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
          url={'book'}
          filter={filter}
          column={columns}
        />
      ) : null}
      {state.view?.type && state.view?.type === ACTIONS.VIEW ? (
        <SafeAreaView style={{ flex: 0 }}>
          <DetailComponentBook url={'/book/'} />
        </SafeAreaView>
      ) : null}
      {state.view?.type && state.view?.type === ACTIONS.CREATE ? (
        <CreateUpdateComponente type={'book'} />
      ) : null}
    </View>
  );
};

export default BookView;
