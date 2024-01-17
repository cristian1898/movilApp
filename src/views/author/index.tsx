import { SafeAreaView, Text, View } from 'react-native';
import Table from '../../components/table/TableComponent';
import styles from './styles';
import CreateUpdateComponente from '../../components/form/crud/CreateUpdateAction';
import DetailComponent from '../../components/detail/Detail';

const AuthorView = () => {
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
  return (
    <View style={styles.container}>
      <Table url={'author'} filter={filter} column={columns} />
      {/*  <Table />       <CreateUpdateComponente />
<SafeAreaView style={{ flex: 0 }}>
      <DetailComponent
        title="Título del Detalle"
        description=""
      />
        </SafeAreaView>*/}
    </View>
  );
};

export default AuthorView;
