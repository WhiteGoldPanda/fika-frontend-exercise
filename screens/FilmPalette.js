import React from 'react';
import {
  SafeAreaView,
  FlatList,
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';
import FilmBox from '../components/FilmBox';
const IMAGE_DOMAIN_URL = 'https://image.tmdb.org/t/p/w500/';
const FilmPalette = ({ route }) => {
  const {
    id,
    item,
    backdrop_path,
    title,
    overview,
    original_language,
  } = route.params;
  return (
    //<SafeAreaView style={styles.safeArea}>
    <FlatList
      style={styles.container}
      data={item}
      keyExtractor={(item, key) => key}
      renderItem={({ item }) => <FilmBox item={item} />}
      ListHeaderComponent={
        <View style={{ flexDirection: 'column', margin: 10 }}>
          <Image
            style={{ height: 100, width: 100 }}
            source={{ uri: IMAGE_DOMAIN_URL + backdrop_path }}
          />
          <View>
            <Text style={{ marginTop: 20 }}>{title}</Text>
            <Text style={{ marginTop: 10 }}>{overview}</Text>
            <Text style={{ marginTop: 10 }}>Lang:{original_language}</Text>
          </View>
        </View>
      }
    />
    //</SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    // alignItems: 'center',
    // justifyContent: 'center',
    flex: 1,
    backgroundColor: 'white',
  },
  safeArea: {
    flex: 2,
  },
  block: {
    marginTop: 10,
    paddingHorizontal: 150,
    paddingVertical: 50,
    backgroundColor: 'red',
  },
});

export default FilmPalette;
