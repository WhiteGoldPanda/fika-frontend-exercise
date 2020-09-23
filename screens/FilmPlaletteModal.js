/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useCallback } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Alert,
  Switch,
  FlatList,
} from 'react-native';

const FilmPaletteModal = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Tst</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
    marginBottom: 20,
  },
  container: {
    padding: 10,
    backgroundColor: 'white',
    flex: 1,
  },
});

export default FilmPaletteModal;

//fa3032a1fed6e2cabd60f5fd0bccceac Ключ API (v3 auth)
//https://api.themoviedb.org/3/movie/550?api_key=fa3032a1fed6e2cabd60f5fd0bccceac  Пример API-запроса
//eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmYTMwMzJhMWZlZDZlMmNhYmQ2MGY1ZmQwYmNjY2VhYyIsInN1YiI6IjVmNmI5NTljZTYyNzE5MDAzODA1ZjViYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.QkJ_SWDWQJLZHxQLNxBiimaSzIqUUrS1AKsvdxwpbzo Ключ доступа к API (v4 auth)
