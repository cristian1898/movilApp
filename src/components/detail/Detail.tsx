import React from 'react';
import {
  StyleSheet,
  View,
  Image,
  Text,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {Title, Button, Caption} from 'react-native-paper';

import styles from './styles';
import SocialItems from '../socila/SocialItems';

interface DetailComponentProps {
  title: string;
  description: string;
  imageUrl: string;
}

const DetailComponent: React.FC<DetailComponentProps> = ({
  title,
  description,
  imageUrl,
}) => {
  const handleShare = () => {
    // Lógica para compartir (puedes implementar según tus necesidades)
    alert('¡Compartir!');
  };
  
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={{uri: imageUrl}} style={styles.image} />
      <View style={styles.textContainer}>
        <Title style={styles.title}>{title}</Title>
        <Caption style={styles.description}>{description}</Caption>
      </View>
      <Button
        icon="share"
        mode="contained"
        onPress={handleShare}
        style={styles.shareButton}>
        Compartir
      </Button>
      <SocialItems url={"id"}/>
    </ScrollView>
  );
};



export default DetailComponent;
