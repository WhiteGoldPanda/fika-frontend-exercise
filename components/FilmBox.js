import React from 'react';
import { View, Text } from 'react-native';

const FilmBox = ({ item }) => {
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
    <View style={box.colo}>
      <Text>{item.id}</Text>
    </View>
  );
};

export default FilmBox;
