import * as React from 'react';
import {View, Text} from 'react-native';
import {BottomNavigation} from 'react-native-paper';
import AuthorView from '../../views/author';

const BookRoute = () => (
  <View>
    <Text>Albums</Text>
  </View>
);

const MenuComponent = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {
      key: 'author',
      title: 'Autores',
      focusedIcon: 'heart',
      unfocusedIcon: 'account-settings',
    },
    {key: 'book', title: 'Libros', focusedIcon: 'book'},
  ]);

  const renderScene = BottomNavigation.SceneMap({
    author: () => <AuthorView />,
    book: BookRoute,
  });

  return (
    <BottomNavigation
      navigationState={{index, routes}}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
  );
};

export default MenuComponent;
