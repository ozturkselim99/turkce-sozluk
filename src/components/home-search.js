import {Animated} from 'react-native';
import Bg from './bg';
import Box from './shared/box';
import Logo from './icons/Logo';
import Search from './search';
import * as React from 'react';

function HomeSearch({isSearchFocus, onSearchFocus}) {
  const heroHeight = React.useRef(new Animated.Value(285)).current;

  React.useEffect(() => {
    if (isSearchFocus) {
      Animated.timing(heroHeight, {
        toValue: 52 + 32,
        duration: 320,
      }).start();
    } else {
      Animated.timing(heroHeight, {
        toValue: 285,
        duration: 320,
      }).start();
    }
  }, [heroHeight, isSearchFocus]);
  return (
    <Box as={Animated.View} position="relative" zIndex={1} height={heroHeight}>
      {!isSearchFocus && (
        <Bg>
          <Box flex={1} alignItems="center" justifyContent="center">
            <Logo width={120} color="white" />
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
