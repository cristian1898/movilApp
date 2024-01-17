import React from 'react';
import {
    TouchableOpacity,
    View
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './styles';
interface SocialInput {
  url:string
  }

const SocialItems : React.FC<SocialInput>= ({url}) => {
  const handleFacebookShare = () => {
    // Lógica para compartir en Facebook
    alert('Compartir en Facebook');
  };

  const handleTwitterShare = () => {
    // Lógica para compartir en Twitter
    alert('Compartir en Twitter');
  };

  const handleInstagramShare = () => {
    // Lógica para compartir en Instagram
    alert('Compartir en Instagram');
  };
return (<View style={styles.socialButtonsContainer}>
        <TouchableOpacity
          onPress={handleFacebookShare}
          style={styles.socialButton}>
          <Icon name="facebook" size={30} color="#4267B2" />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={handleTwitterShare}
          style={styles.socialButton}>
          <Icon name="twitter" size={30} color="#1DA1F2" />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={handleInstagramShare}
          style={styles.socialButton}>
          <Icon name="instagram" size={30} color="#E4405F" />
        </TouchableOpacity>
      </View>
)}

export default SocialItems;
