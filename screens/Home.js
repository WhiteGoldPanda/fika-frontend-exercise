import React, { useState, useCallback, useEffect } from 'react';
import {
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Text,
  Alert,
} from 'react-native';
import FilmPreview from '../components/FilmPreview';

const Home = ({ navigation, route }) => {
  const [isRefreshing, setIsRefreshing] = useState(false);
  //Films
  const [filmsGenres, setFilmGenres] = useState([]);
  const [filmList, setFilmList] = useState([]);

  const fetchFilmGenres = useCallback(async () => {
    const result = await fetch(
      'https://api.themoviedb.org/3/genre/movie/list?api_key=fa3032a1fed6e2cabd60f5fd0bccceac&language=en-US',
    );
    if (result.ok) {
      const genres = await result.json();
      Alert.alert('got dfsdata');

      setFilmGenres(genres.genres);
      //  console.log(filmsGenres);
    }
  }, [filmsGenres]);
  const fetchMovies = useCallback(async () => {
    const movi = await fetch(
      'https://api.themoviedb.org/3/movie/now_playing?api_key=fa3032a1fed6e2cabd60f5fd0bccceac&language=en-US&page=1',
    );

    if (movi.ok) {
      const films = await movi.json();
      setFilmList(films.results);
      console.log(filmList[0]);
      //  console.log(filmsGenres);
    }
  }, []);

  useEffect(() => {
    fetchFilmGenres();
    fetchMovies();
  }, [fetchFilmGenres]);

  const handleRefresh = useCallback(async () => {
    setIsRefreshing(true);
    await fetchMovies();
    setTimeout(() => {
      setIsRefreshing(false);
    }, 1000);
  }, [fetchMovies]);

  return (
    <FlatList
      style={styles.list}
      data={filmList}
      keyExtractor={(item, key) => key}
      renderItem={({ item }) => (
        <FilmPreview
          handlePress={() => {
            navigation.navigate('FilmPalette', item);
          }}
          item={item}
        />
      )}
      refreshing={isRefreshing}
      onRefresh={handleRefresh}
      ListHeaderComponent={
        <TouchableOpacity onPress={() => {}}>
          <Text style={styles.buttonText}>Film List</Text>
        </TouchableOpacity>
      }
      //refreshControl={<RefreshControl refreshing={true} onRefresh={() => {}} />}
    />
  );
};

const styles = StyleSheet.create({
  list: {
    padding: 10,
    backgroundColor: 'white',
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'teal',
    marginBottom: 10,
  },
});

export default Home;
