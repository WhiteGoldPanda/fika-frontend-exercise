import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  Image,
} from 'react-native';
const IMAGE_DOMAIN_URL = 'https://image.tmdb.org/t/p/w500/';
const FilmPreview = ({ item, handlePress }) => {
  const box = {
    colo: {
      marginTop: 4,
      paddingHorizontal: 150,
      paddingVertical: 20,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.3,
      shadowRadius: 1,
    },
  };

  return (
    <TouchableOpacity onPress={handlePress}>
      <Text style={styles.text}>{item.title}</Text>
      <FlatList
        horizontal={true}
        data={item}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <View style={[styles.box]} />}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  text: {
    fontWeight: 'bold',
    fontSize: 19,
    marginBottom: 10,
  },
  box: {
    height: 30,
    width: 30,
    marginRight: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 1,
  },
  list: {
    marginBottom: 20,
  },
});

export default FilmPreview;
