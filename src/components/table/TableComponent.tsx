import { Picker } from '@react-native-picker/picker';
import React, { useEffect, useState } from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useAppContext } from '../../context/AppContext';
import { AuthorInterface } from '../../interfaces/author';
import { BookInterface } from '../../interfaces/book';
import { ItemModalInfo } from '../../interfaces/tableInterface';
import Loader from '../../loader/Loader';
import HttpService from '../../services/http/service';
import { searchField } from '../../utils/filter';
import ChipHistory from './history/Chip';
import ItemTableComponent from './item/Item';
import styles from './styles';
import Icon from 'react-native-vector-icons/Ionicons';
import { ACTIONS } from '../../interfaces/globalInterface';

const InitialComponentAppTable: React.FC<{
  filter: ItemModalInfo;
  column: ItemModalInfo[];
  url: string;
}> = ({ filter, url, column }) => {
  const { dispatch } = useAppContext();
  const [search, setSearch] = useState('');
  const [filterColumn, setFilterColumn] = useState<string>('');
  const [filterValue, setFilterValue] = useState<string>('');
  const [listHistory, setListHistory] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [dataList, setDataList] = useState<BookInterface[] | AuthorInterface[]>(
    [],
  );

  const filteredData = dataList.filter(
    (item: BookInterface | AuthorInterface) => {
      const searchMatches = searchField(item, search);
      const columnFilterMatches = searchField(item, filterValue);

      return searchMatches && columnFilterMatches;
    },
  );

  const getData = async () => {
    const result = await HttpService.listData(url, dispatch);
    if (result) {
      const { details } = result;
      details.listAuthors &&
        dispatch({
          type: 'SET_LIST_AUTHORS',
          payload: details.listAuthors,
        });
      setDataList(details?.list || []);
    }
    setTimeout(() => {
      if (result) setLoading(false);
    }, 1000);
  };
  useEffect(() => {
    setDataList([]);
    getData();
  }, []);
  const handleAddNew = () => {
    dispatch({
      type: 'SET_VIEW',
      payload: { type: ACTIONS.CREATE, url: url },
    });
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.floatingButton} onPress={handleAddNew}>
        <Icon name="add-circle-outline" size={50} color="#fff" />
      </TouchableOpacity>
      {/* Barra de búsqueda */}
      <TextInput
        style={styles.input}
        placeholder="Buscar..."
        value={search}
        onChangeText={text => setSearch(text)}
      />

      {/* Pickers para filtro */}

      <View style={styles.filterContainer}>
        <Text style={styles.filterLabel}>Filtrar :</Text>
        <Picker
          mode="dropdown"
          style={styles.picker}
          selectedValue={filterValue}
          onValueChange={(itemValue: string) => {
            setFilterValue(itemValue),
              itemValue && setListHistory([...listHistory, itemValue]);
          }}>
          <Picker.Item
            style={styles.pickerTitle}
            label={` por ${filter.name}`}
            value=""
          />
          {Array.from(
            new Set(dataList.map(item => item[`${filter.name}`])),
          ).map((value, index) => (
            <Picker.Item key={index} label={value} value={value} />
          ))}
        </Picker>
      </View>
      {/* Columnas de la tabla  */}

      {loading ? (
        <Loader />
      ) : (
        <ItemTableComponent
          filteredData={filteredData}
          column={column}
          type={url}
        />
      )}

      {/* Chips history filter  */}

      {listHistory.length ? <ChipHistory listHistory={listHistory} /> : null}
    </View>
  );
};

export default InitialComponentAppTable;
