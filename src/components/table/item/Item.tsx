import React, { useState } from 'react';
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import styles from '../styles';

import { ItemModalInfo } from '../../../interfaces/tableInterface';
import ModalDetailComponent from '../../modal/Modal';
import { AuthorInterface } from '../../../interfaces/author';
import { BookInterface } from '../../../interfaces/book';
import { StaticsResponses } from '../../../interfaces/globalInterface';

const ItemTableComponent = ({
  filteredData,
  column,
  type,
}: {
  filteredData: AuthorInterface[] | BookInterface[];
  column: ItemModalInfo[];
  type: string;
}) => {
  const image = StaticsResponses.IMG;
  const [previewVisible, setPreviewVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState<
    AuthorInterface | BookInterface
  >();

  const handlePreviewClick = (item: AuthorInterface | BookInterface) => {
    setSelectedItem(item);
    setPreviewVisible(true);
  };

  const closePreview = () => {
    setPreviewVisible(false);
    setSelectedItem(undefined);
  };

  return (
    <View style={styles.tableContainer}>
      {/* Encabezado de la tabla */}
      <View style={styles.tableHeader}>
        {column.map((item, index) => (
          <Text key={index} style={styles.tableHeaderText}>
            {item.displayName}
          </Text>
        ))}
      </View>
      <View style={styles.flexContainer}>
        {/* Filas de la tabla */}
        <ScrollView
          style={styles.tableScrollView}
          showsVerticalScrollIndicator={true}>
          {filteredData && filteredData.length
            ? filteredData.map((item, index) => (
              <TouchableOpacity
                key={index}
                style={styles.row}
                onPress={() => handlePreviewClick(item)}>
                {column.map((e, i) => (
                  <View key={i} style={styles.column}>
                    {e.name !== 'img' ? (
                      <Text
                        style={styles.tableHeaderText}
                        numberOfLines={1}
                        ellipsizeMode="tail">
                        {item[`${e.name}`]}
                      </Text>
                    ) : (
                      <View style={styles.imageContainer}>
                        <Image
                          source={{
                            uri: item?.img ? item.img : image,
                          }}
                          style={styles.icon}
                        />
                      </View>
                    )}
                  </View>
                ))}
              </TouchableOpacity>
            ))
            : null}
        </ScrollView>
      </View>
      {/* Modal preview  */}
      {selectedItem ? (
        <ModalDetailComponent
          closePreview={closePreview}
          previewVisible={previewVisible}
          item={selectedItem}
          listValues={column}
          type={type}
        />
      ) : null}
    </View>
  );
};

export default ItemTableComponent;
