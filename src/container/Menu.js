import * as React from 'react';
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  SafeAreaView,
  FlatList,
} from 'react-native';
import clubMenuList from '../data/clubMenu.json';
export default function Menu() {
  const Item = ({item}) => {
    return (
      <View style={styles.item}>
        <Text style={styles.header}>{item.dishName}</Text>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      {console.log('clubMenuList method', clubMenuList.menu)}
      {console.log('rendering method')}
      <FlatList
        data={clubMenuList.menu}
        renderItem={({item}) => <Item item={item} />}
        keyExtractor={item => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  header: {
    fontSize: 24,
    padding: 10,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
});
