import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Home from './screens/Home';
import { createStackNavigator } from '@react-navigation/stack';
import FilmPalette from './screens/FilmPalette';
import FilmPaletteModal from './screens/FilmPlaletteModal';

const RootStack = createStackNavigator();
const MainStack = createStackNavigator();

const MainStackScreen = () => {
  return (
    <MainStack.Navigator>
      <MainStack.Screen name="Home" component={Home} />
      <MainStack.Screen
        name="FilmPalette"
        component={FilmPalette}
        options={({ route }) => ({ title: route.params.paletteName })}
      />
    </MainStack.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator mode="modal">
        <RootStack.Screen
          name="Main"
          component={MainStackScreen}
          options={{ headerShown: false }}
        />
        <RootStack.Screen
          name="FilmPaletteModal"
          component={FilmPaletteModal}
          options={{ headerShown: true }}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default App;
