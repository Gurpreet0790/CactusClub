import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  StatusBar,
  FlatList,
  View,
  Text,
} from 'react-native';

const Locations = () => {
  const [dataSource, setDataSource] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch('https://randomuser.me/api/?results=5');
    const data = await response.json();
    setDataSource(data);
    setLoading(false);
  };

  const Item = ({item}) => {
    return (
      <View style={styles.item}>
        <Text style={styles.title}>
          {item.name.title + ' ' + item.name.first + ' ' + item.name.last}
        </Text>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      {loading === false || dataSource.length > 0 ? (
        <FlatList
          data={dataSource.results}
          renderItem={({item}) => <Item item={item} />}
          keyExtractor={item => item.id}
        />
      ) : null}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});

export default Locations;
