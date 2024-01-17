import React, { useState } from 'react';
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import styles from '../styles';

import { ItemModalInfo } from '../../../interfaces/tableInterface';
import ModalDeatilComponent from '../../modal/Modal';

const ItemTableComponent = ({
  filteredData,
  column,
}: {
  filteredData: ItemModalInfo[];
  column: ItemModalInfo[];
}) => {
  const [previewVisible, setPreviewVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState<ItemModalInfo | null>(null);

  const handlePreviewClick = (item: ItemModalInfo) => {
    setSelectedItem(item);
    setPreviewVisible(true);
  };

  const closePreview = () => {
    setPreviewVisible(false);
    setSelectedItem(null);
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
                          source={require('../../../../assets/images/pizza_portuguesa.jpg')}
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
      <ModalDeatilComponent
        closePreview={closePreview}
        previewVisible={previewVisible}
        item={selectedItem}
        listValues={column}
      />
    </View>
  );
};

export default ItemTableComponent;
