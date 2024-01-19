import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  View,
  Image,
  Text,
  ScrollView,
  TouchableOpacity,
  Modal,
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
interface DetailComponentProps {
  url: string;
}

const DetailComponentAuthor: React.FC<DetailComponentProps> = ({ url }) => {
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);
  const { state, dispatch } = useAppContext();
  const [author, setAuthor] = useState<AuthorInterface>();
  const image = StaticsResponses.IMG;
  useEffect(() => {
    state.author && setAuthor(state.author);
  }, [state.author]);
  const handleEdit = () => {
    dispatch({
      type: 'SET_VIEW',
      payload: { type: ACTIONS.CREATE },
    });
  };

  const handleDelete = () => {
    setShowDeleteConfirmation(true);
  };
  const handleCancelDelete = () => {
    setShowDeleteConfirmation(false);
  };
  const handleConfirmDelete = async () => {
    setShowDeleteConfirmation(false);
    const response = await HttpService.deleteData(
      `${url}${author?.id}`,
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

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image
        source={{
          uri: author?.img ? author.img : image,
        }}
        style={styles.image}
      />
      <View style={styles.contentContainer}>
        <Text style={styles.title}>
          {author?.firstName} {author?.lastName}
        </Text>

        {/* Breadcrumb para la Descripción */}
        <View style={styles.breadcrumbContainer}>
          <View style={styles.breadcrumb} />
          <Text style={styles.breadcrumbText}>Descripción</Text>
        </View>

        {/* Sección de Descripción */}
        <View style={styles.sectionContainer}>
          <Text style={styles.description}>{author?.biographyInformation}</Text>
        </View>

        {/* Sección de Fecha de Publicación */}
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Fecha de ingreso:</Text>
          <Text style={styles.details}>2022</Text>

          {/* Reemplaza con la fecha real */}
        </View>

        {/* Sección de Detalles del Autor */}
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Detalles del Autor:</Text>
          <Text style={styles.details}>Email: {author?.email}</Text>
          <Text style={styles.details}>Username: {author?.name}</Text>
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
      />
      <SocialItems url={'id'} />
    </ScrollView>
  );
};

export default DetailComponentAuthor;
