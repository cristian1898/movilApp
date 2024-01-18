import { Image, Modal, Text, TouchableOpacity, View } from 'react-native';
import { Button, Divider } from 'react-native-paper';
import styles from './styles';
import { ItemModalInfo } from '../../interfaces/tableInterface';
import { BookInterface } from '../../interfaces/book';
import { AuthorInterface } from '../../interfaces/author';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useAppContext } from '../../context/AppContext';
import { ACTIONS, ValidPrintForm } from '../../interfaces/globalInterface';
const ModalDetailComponent = ({
  closePreview,
  previewVisible,
  item,
  listValues,
  type,
}: {
  closePreview: any;
  previewVisible: boolean;
  item: AuthorInterface | BookInterface;
  listValues: ItemModalInfo[];
  type?: string;
}) => {
  const { dispatch } = useAppContext();
  const handleDetailClick = (value: any) => {
    if (type === ValidPrintForm.AUTHOR) {
      dispatch({
        type: 'SET_AUTHOR',
        payload: { ...value },
      });
    } else {
      dispatch({
        type: 'SET_BOOK',
        payload: { ...value },
      });
    }

    dispatch({
      type: 'SET_VIEW',
      payload: { type: ACTIONS.VIEW },
    });
  };
  function handleLinkPress() {
    dispatch({
      type: 'SET_ALERT',
      payload: { action: 'info', message: 'Link copiado al portapapeles' },
    });
  }
  return (
    <Modal
      visible={previewVisible}
      transparent={true}
      animationType="slide"
      onRequestClose={closePreview}>
      <View style={styles.modalContainer}>
        {/* Vista previa de la tarjeta */}
        <View style={styles.cardContainer}>
          <View style={styles.preview}>
            <Text style={styles.previewText}>Vista Previa</Text>
            <TouchableOpacity onPress={handleLinkPress}>
              <Icon name="resistor-nodes" size={30} color="#007BFF" />
            </TouchableOpacity>

            {/* Agrega tu contenido de vista previa aquí */}
          </View>
          <Divider style={styles.divider} />
          {item &&
            listValues.map((i, index: number) =>
              i.name === 'img' ? (
                <Image
                  key={index}
                  source={require('../../../assets/images/pizza_portuguesa.jpg')}
                  style={styles.cardImage}
                />
              ) : (
                <Text
                  key={index}
                  style={styles.cardText}
                  numberOfLines={1}
                  ellipsizeMode="tail">
                  {i && i.displayName
                    ? `${i.displayName}: ${item[`${i.name}`]}`
                    : ''}
                </Text>
              ),
            )}
          <Divider style={styles.divider} />
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              onPress={() => handleDetailClick(item)}
              style={styles.detailButton}>
              <Button mode="text" style={styles.detailButtonText}>
                Detalle
              </Button>
            </TouchableOpacity>
            <TouchableOpacity onPress={closePreview} style={styles.closeButton}>
              <Button mode="contained-tonal">Cerrar</Button>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default ModalDetailComponent;
