import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  View,
  Image,
  Text,
  ScrollView,
  TouchableOpacity,
  Modal,
  Linking,
} from 'react-native';
import { Title, Caption, Button } from 'react-native-paper';

import styles from './styles';
import SocialItems from '../socila/SocialItems';
import HttpService from '../../services/http/service';
import { useAppContext } from '../../context/AppContext';
import { AuthorInterface } from '../../interfaces/author';
import Icon from 'react-native-vector-icons/Ionicons';
import DeleteConfirmationModal from '../modal/ModalAction';
import { ACTIONS, StaticsResponses } from '../../interfaces/globalInterface';
import { BookInterface } from '../../interfaces/book';
interface DetailComponentProps {
  url: string;
}

const DetailComponentBook: React.FC<DetailComponentProps> = ({ url }) => {
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);
  const { state, dispatch } = useAppContext();
  const [book, setBook] = useState<BookInterface>();
  const image = StaticsResponses.IMG;
  useEffect(() => {
    state.book && setBook(state.book);
  }, [state.book]);
  const handleEdit = () => {
    dispatch({
      type: 'SET_VIEW',
      payload: { type: ACTIONS.CREATE },
    });
  };

  const handleDelete = () => {
    // Lógica para eliminar la noticia

    setShowDeleteConfirmation(true);
  };
  const handleCancelDelete = () => {
    setShowDeleteConfirmation(false);
  };
  const handleConfirmDelete = async () => {
    setShowDeleteConfirmation(false);
    const response = await HttpService.deleteData(
      `${url}${book?.id}`,
      dispatch,
    );
    if (response?.status && response?.status <= 400) {
      dispatch({
        type: 'SET_AUTHOR',
        payload: { author: null },
      });
      dispatch({
        type: 'SET_BOOK',
        payload: { book: null },
      });
      dispatch({
        type: 'SET_VIEW',
        payload: { type: ACTIONS.LIST },
      });
    }
  };
  const handleShare = () => { };
  const handleLinkPress = (url: string) => {
    Linking.openURL(url);
  };
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image
        source={{
          uri: book?.img ? book.img : image,
        }}
        style={styles.image}
      />
      <View style={styles.contentContainer}>
        <Text style={styles.title}>{book?.title}</Text>

        {/* Breadcrumb para la Descripción */}
        <View style={styles.breadcrumbContainer}>
          <View style={styles.breadcrumb} />
          <Text style={styles.breadcrumbText}>Descripción</Text>
        </View>

        {/* Sección de Descripción */}
        <View style={styles.sectionContainer}>
          <Text style={styles.description}>{book?.description}</Text>
        </View>

        {/* Sección de Fecha de Publicación */}
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Fecha de alta:</Text>
          <Text style={styles.details}>{book?.publicationYear}</Text>
        </View>
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Detalles del libro:</Text>
          <Text style={styles.details}>Genero:{book?.genere}</Text>
          <Text style={styles.details}>Lenguaje:{book?.genere}</Text>

          <Text
            style={styles.details}
            style={{ color: 'blue' }}
            onPress={() => handleLinkPress(book?.url || '')}>
            Url: link
          </Text>

          <Text style={styles.details}>Precio : ${book?.price}</Text>
        </View>

        {/* Sección de Detalles */}
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Detalles del Autor:</Text>
          <Text style={styles.details}>Name: {book?.author}</Text>
        </View>
      </View>
      {/* Botones de Acción */}
      <View style={styles.actionContainer}>
        <TouchableOpacity style={styles.outlinedButton} onPress={handleEdit}>
          <Icon name="pencil-outline" size={20} color="#030637" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.outlinedButton} onPress={handleDelete}>
          <Icon name="trash-outline" size={20} color="#910A67" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.outlinedButton} onPress={handleShare}>
          <Icon name="share-social-outline" size={20} color="#0074e4" />
        </TouchableOpacity>
      </View>
      {/* Modal de Confirmación de Eliminación */}
      <DeleteConfirmationModal
        visible={showDeleteConfirmation}
        onCancel={handleCancelDelete}
        onConfirm={handleConfirmDelete}
        type={'book'}
      />
      <SocialItems url={'id'} />
    </ScrollView>
  );
};

export default DetailComponentBook;
