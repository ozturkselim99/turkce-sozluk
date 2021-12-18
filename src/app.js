import 'react-native-gesture-handler';
import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {ThemeProvider} from 'styled-components';

import {HistoryProvider} from './context/history';
import {HomeProvider} from './context/home';
import {SearchProvider} from './context/search';

import theme from './utils/theme';

import Navigation from './navigation';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaProvider>
        <HistoryProvider>
          <HomeProvider>
            <SearchProvider>
              <Navigation />
            </SearchProvider>
          </HomeProvider>
        </HistoryProvider>
      </SafeAreaProvider>
    </ThemeProvider>
  );
};

export default App;
