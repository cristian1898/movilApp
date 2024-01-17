import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import FooterView from './src/views/footer/FooterView';

import { AppContextProvider } from './src/context/AppContext';
import styles from './src/styles';
import HeaderView from './src/views/header/HeaderView';
import NotificationComponentApp from './src/components/notification/Notification';
function App(): React.JSX.Element {
  return (
    <SafeAreaProvider>
    <AppContextProvider>
      <View style={styles.sectionFlex}>
        <View style={styles.header}>
         <HeaderView/> 
        </View>
        <ScrollView
          style={styles.sectionFlex}
          contentContainerStyle={styles.sectionContanierScrollView}>

          <FooterView />
           < NotificationComponentApp/>
         </ScrollView>
      </View>
    </AppContextProvider>
    </SafeAreaProvider>
  
  );
}

export default App;
