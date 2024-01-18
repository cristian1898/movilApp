import { Modal, Text, View } from 'react-native';
import { Button } from 'react-native-paper';
import styles from './styles';
interface DeleteConfirmationModalProps {
  visible: boolean;
  onCancel: () => void;
  onConfirm: () => void;
  type?: string;
}
const DeleteConfirmationModal: React.FC<DeleteConfirmationModalProps> = ({
  visible,
  onCancel,
  onConfirm,
  type,
}) => (
  <Modal visible={visible} animationType="slide" transparent>
    <View style={styles.modalContainerDelete}>
      <View style={styles.modalContent}>
        <Text style={styles.modalText}>
          ¿Deseas eliminar este {!type ? 'Autor' : 'Libro'}?
        </Text>
        <View style={styles.modalButtonContainer}>
          <Button
            buttonColor="#0074e4"
            mode="elevated"
            textColor="#ffffff"
            onPress={onConfirm}>
            Confirmar
          </Button>
          <Button
            buttonColor="#ff3b30"
            mode="elevated"
            textColor="#ffffff"
            onPress={onCancel}>
            Cancelar
          </Button>
        </View>
      </View>
    </View>
  </Modal>
);

export default DeleteConfirmationModal;
