import {Animated} from 'react-native';
import Bg from './bg';
import Box from './shared/box';
import Search from './search';
import * as React from 'react';
import {Text} from './shared';

function HomeSearch({isSearchFocus, onSearchFocus}) {
  const heroHeight = React.useRef(new Animated.Value(200)).current;

  React.useEffect(() => {
    if (isSearchFocus) {
      Animated.timing(heroHeight, {
        toValue: 52 + 32,
        duration: 235,
        useNativeDriver: false,
      }).start();
    } else {
      Animated.timing(heroHeight, {
        toValue: 200,
        duration: 235,
        useNativeDriver: false,
      }).start();
    }
  }, [heroHeight, isSearchFocus]);
  return (
    <Box as={Animated.View} position="relative" zIndex={1} height={heroHeight}>
      {!isSearchFocus && (
        <Bg>
          <Box flex={1} alignItems="center" justifyContent="center">
            <Text color={'white'} fontSize={30} fontWeight={'bold'}>Türkçe Sözlük</Text>
          </Box>
        </Bg>
      )}
      <Box
        position="absolute"
        left={0}
        bottom={isSearchFocus ? 0 : -42}
        p={16}
        width="100%">
        <Search onChangeFocus={status => onSearchFocus(status)} />
      </Box>
    </Box>
  );
}
export default HomeSearch;
