import { Button } from "react-native-paper"
import { Text, View } from "react-native"
import styles from "./styles"
const HeaderView = () => {

  return (
     <View  style={styles.header}>
      <Text style={styles.headerTitle}>Name</Text>
      
      <Button
        mode="contained"
        icon="plus"
        buttonColor="#EEF5FF"
        textColor ="#0F1035"
        labelStyle={styles.buttomHeader}         >
     
      </Button>
    </View>
  );
   
}

export default HeaderView;
