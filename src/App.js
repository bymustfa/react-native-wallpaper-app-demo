import React, {useState, useEffect, useLayoutEffect} from 'react';
import 'react-native-gesture-handler';
import {SafeAreaView, useColorScheme, Keyboard, StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import merge from 'lodash.merge';
import get from 'lodash.get';

import {ThemeProvider} from 'styled-components';

import baseTheme from './utils/theme';

import TabBar from './components/tab-bar';
import HomeScreen from './views/home';
import SelectedScreen from './views/selected';
import SearchScreen from './views/search';
import DetailScreen from './views/detail';
import Box from './components/box';

const Tab = createBottomTabNavigator();

const getTheme = (mode) => {
  return merge({}, baseTheme, {
    colors: get(baseTheme.colors.modes, mode, baseTheme.colors),
  });
};

const App = () => {
  const [tabShow, setTabShow] = useState(true);
  const deviceTheme = useColorScheme();
  const [mode, setMode] = useState(deviceTheme);
  const theme = getTheme(mode);

  useState(() => {
    Keyboard.addListener('keyboardDidShow', (e) => {
      setTabShow(false);
    });
    Keyboard.addListener('keyboardDidHide', (e) => {
      setTabShow(true);
    });
  });

  return (
    <ThemeProvider theme={theme}>
      <StatusBar
        hidden={false}
        barStyle={deviceTheme === 'light' ? 'light-content' : 'dark-content'}
        backgroundColor={theme.colors.barColor}
      />
      <Box flex={1} as={SafeAreaView}>
        <NavigationContainer>
          <Tab.Navigator tabBar={(props) => tabShow && <TabBar {...props} />}>
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Search" component={SearchScreen} />
            <Tab.Screen name="Selected" component={SelectedScreen} />
            <Tab.Screen
              options={{tabBarVisible: false}}
              name="Detail"
              component={DetailScreen}
            />
          </Tab.Navigator>
        </NavigationContainer>
      </Box>
    </ThemeProvider>
  );
};
export default App;
