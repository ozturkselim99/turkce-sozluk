import {SafeAreaView} from 'react-native';
import React, {useState, useEffect, useContext} from 'react';
import {Box} from '../components/shared';
import FocusAwareStatusBar from '../components/focus-aware-status-bar';
import theme from '../utils/theme';
import SuggestionCard from '../components/suggestions-card';
import HomeSearch from '../components/home-search';

import historyContext from '../context/history';
import homeContext from '../context/home';
import searchContext from '../context/search';
import SearchSuggestionList from '../components/search-suggestion-list';
import SimpleItemList from '../components/simple-item-list';

function SearchView({navigation}) {
  const searchData = useContext(searchContext);
  const homeData = useContext(homeContext);
  const historyData = useContext(historyContext);
  const [isSearchFocus, setSearchFocus] = useState(false);

  useEffect(() => {
    homeData.setData();
    return () => {
      searchData.setKeyword('');
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Box
      as={SafeAreaView}
      bg={isSearchFocus ? theme.colors.softBlue : theme.colors.blue}
      flex={1}>
      <FocusAwareStatusBar
        barStyle={'light-content'}
        backgroundColor={
          isSearchFocus ? theme.colors.softBlue : theme.colors.blue
        }
      />
      <HomeSearch
        isSearchFocus={isSearchFocus}
        onSearchFocus={setSearchFocus}
      />
      <Box flex={1} bg={theme.colors.softBlue} pt={isSearchFocus ? 0 : 26}>
        {isSearchFocus ? (
          <Box flex={1}>
            {searchData.keyword.length >= 3 ? (
              <SearchSuggestionList
                onPress={k =>
                  navigation.navigate('Detail', {
                    keyword: k,
                  })
                }
                keyword={searchData.keyword}
                data={searchData.suggestions}
              />
            ) : (
              <SimpleItemList
                onPress={k => navigation.navigate('Detail', {keyword: k})}
                data={historyData.history}
              />
            )}
          </Box>
        ) : (
          <Box px={16} py={40} flex={1}>
            <SuggestionCard
              data={homeData.data?.kelime}
              title="Bir Kelime"
              onPress={() =>
                navigation.navigate('Detail', {
                  keyword: homeData.data?.kelime?.madde,
                })
              }
            />
            <SuggestionCard
              mt={40}
              data={homeData.data?.atasoz}
              title="Bir Deyim - Atasözü"
              onPress={() =>
                navigation.navigate('Detail', {
                  keyword: homeData.data?.atasoz?.madde,
                })
              }
            />
          </Box>
        )}
      </Box>
    </Box>
  );
}

export default SearchView;
