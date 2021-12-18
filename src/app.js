import React from 'react';
import Navigation from './navigation';
import {ThemeProvider} from 'styled-components';
import theme from './utils/theme';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {HistoryProvider} from './context/history';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaProvider>
        <HistoryProvider>
          <Navigation />
        </HistoryProvider>
      </SafeAreaProvider>
    </ThemeProvider>
  );
}

export default App;
