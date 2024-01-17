import { Picker } from '@react-native-picker/picker';
import React, { useEffect, useState } from 'react';
import { Text, TextInput, View } from 'react-native';
import { useAppContext } from '../../context/AppContext';
import { AuthorInterface } from '../../interfaces/author';
import { BookInterface } from '../../interfaces/book';
import { ItemModalInfo } from '../../interfaces/tableInterface';
import HttpService from '../../services/http/service';
import { searchField } from '../../utils/filter';
import ChipHistory from './history/Chip';
import ItemTableComponent from './item/Item';
import styles from './styles';

const Table: React.FC<{
  filter: ItemModalInfo;
  column: ItemModalInfo[];
  url: string;
}> = ({ filter, url, column }) => {
  const { dispatch } = useAppContext();
  const [search, setSearch] = useState('');
  const [filterColumn, setFilterColumn] = useState<string>('');
  const [filterValue, setFilterValue] = useState<string>('');
  const [listHistory, setListHistory] = useState<string[]>([]);
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
    if (result) setDataList(result.details?.list || []);

    console.log(result);
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <View style={styles.container}>
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
      <ItemTableComponent filteredData={filteredData} column={column} />

      {/* Chips history filter  */}

      {listHistory.length ? <ChipHistory listHistory={listHistory} /> : null}
    </View>
  );
};

export default Table;
