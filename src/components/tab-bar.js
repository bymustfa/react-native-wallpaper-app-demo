import React from 'react';
import Button from './button';
import {Search, Bookmark, Home} from './icons';
import Box from './box';
import {useTheme} from 'styled-components';

function TabBar({state, descriptors, navigation, ...props}) {
  const focusedOptions = descriptors[state.routes[state.index].key].options;

  if (focusedOptions.tabBarVisible === false) {
    return null;
  }

  const theme = useTheme();

  return (
    <Box
      flexDirection={'row'}
      bg={'bg'}
      pb={5}
      position={'absolute'}
      left={0}
      bottom={-5}>
      <Box
        position={'absolute'}
        left={0}
        bottom={0}
        width={'100%'}
        height={44}
        bg={'white'}
      />
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];

        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };
        if (label !== 'Detail') {
          return label === 'Search' ? (
            <Box mt={-15} bg={'bg'} p={15} borderRadius="full" key={label}>
              <Button
                onPress={onPress}
                boxShadow="2px 2px 2px red"
                borderRadius="full"
                size={40}
                bg={'activeTab'}>
                <Search color="white" />
              </Button>
            </Box>
          ) : (
            <Button
              borderTopRightRadius={label === 'Home' ? 15 : 0}
              borderTopLeftRadius={label === 'Home' ? 0 : 15}
              key={label}
              height={'100%'}
              bottom={0}
              flex={1}
              bg={'white'}
              onPress={onPress}>
              {label === 'Home' ? (
                <Home
                  color={
                    isFocused ? theme.colors.activeTab : theme.colors.passiveTab
                  }
                />
              ) : (
                <Bookmark
                  color={
                    isFocused ? theme.colors.activeTab : theme.colors.passiveTab
                  }
                />
              )}
            </Button>
          );
        }
      })}
    </Box>
  );
}

export default TabBar;
