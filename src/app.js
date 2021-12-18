import 'react-native-gesture-handler';
import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {ThemeProvider} from 'styled-components';

import {HistoryProvider} from './context/history';
import {HomeProvider} from './context/home';
import {SearchProvider} from './context/search';

import theme from './utils/theme';

import Navigation from './navigation';
import {ResultsProvider} from './context/results';
import {FavoriteProvider} from './context/favorite';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaProvider>
        <FavoriteProvider>
          <HistoryProvider>
            <HomeProvider>
              <SearchProvider>
                <ResultsProvider>
                  <Navigation />
                </ResultsProvider>
              </SearchProvider>
            </HomeProvider>
          </HistoryProvider>
        </FavoriteProvider>
      </SafeAreaProvider>
    </ThemeProvider>
  );
};

export default App;
