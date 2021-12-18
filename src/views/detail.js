import React, {useState, useCallback, useEffect, useContext} from 'react';
import {StatusBar, ScrollView} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useFocusEffect} from '@react-navigation/native';

import throttle from 'lodash/throttle';

import {Box, Text} from '../components/shared';
import {
  Hand,
  Favorite,
  FavoriteSolid,
  Right,
} from '../components/icons';

import DetailFocusBar from '../components/detail-focus-bar';
import ActionButton from '../components/action-button';
import DetailSummaryItem from '../components/detail-summary-item';
import SimpleCard from '../components/simple-card';

const tabs = [
  {
    id: 'anlamlar',
    title: 'Açıklama',
  },
  {
    id: 'atasozu',
    title: ' Atasözleri & Deyimler',
  },
  {
    id: 'birlesikler',
    title: 'Birleşik Kelimeler',
  },
];

import theme from '../utils/theme';
import resultsContext from '../context/results';
import historyContext from '../context/history';
import favoriteContext from '../context/favorite';

function DetailView({route, navigation}) {
  const keyword = route.params?.keyword;
  const resultsData = useContext(resultsContext);
  const history = useContext(historyContext);
  const favorites = useContext(favoriteContext);
  const isFavorited = favorites.favorites.find(f => f.title === keyword);
  const [selectedTab, setSelectedTab] = useState(tabs[0].id);

  useFocusEffect(
    useCallback(() => {
      StatusBar.setBarStyle('light-content');
      return function () {
        resultsData.clearResults();
      };
    }, []),
  );

  useFocusEffect(
    useCallback(() => {
      resultsData.getResults(keyword);
      return () => {
        resultsData.clearResults();
      };
    }, [keyword]),
  );

  useEffect(() => {
    history.addToHistory(keyword);
    setSelectedTab(tabs[0].id);
  }, [keyword]);

  return (
    <Box as={SafeAreaView} forceInset={{top: 'never'}} flex={1} p={16}>
      <DetailFocusBar
        onPress={id => setSelectedTab(id)}
        tabs={tabs}
        selected={selectedTab}
      />
      <Box as={ScrollView} p={16} mt={0}>
        <Box>
          <Text fontSize={32} fontWeight="bold">
            {keyword}
          </Text>
          <Text color="#758291" mt={6}>
            {resultsData.data?.telaffuz ? resultsData.data?.telaffuz + ' ' : ''}
            {resultsData.data?.lisan ?? ''}
          </Text>
        </Box>
        <Box flexDirection="row" mt={24}>
          <ActionButton
            onPress={throttle(() => {
              if (isFavorited) {
                favorites.removeFromFavorites(keyword);
              } else {
                favorites.addToFavorites(keyword);
              }
            }, 500)}>
            {isFavorited ? (
              <FavoriteSolid width={24} height={24} color={theme.colors.blue} />
            ) : (
              <Favorite width={24} height={24} color={theme.colors.blue} />
            )}
          </ActionButton>
          <ActionButton
            disabled={keyword ? false : true}
            ml="auto"
            onPress={throttle(() => {
              resultsData.signsheet
                ? resultsData.closeSignSheet()
                : resultsData.openSignSheet(keyword);
            }, 500)}>
            <Hand
              width={24}
              height={24}
              color={
                resultsData.signsheet
                  ? theme.colors.softBlue
                  : '#758291'
              }
            />
            <ActionButton.Title
              color={resultsData.signsheet ? 'softBlue' : '#758291'}>
              İşaret Dili
            </ActionButton.Title>
          </ActionButton>
        </Box>
        {selectedTab === tabs[0].id && (
          <Box mt={32} flex={1}>
            {(resultsData.data?.anlamlar ?? [1, 2, 3]).map(item => (
              <DetailSummaryItem
                key={item?.id ?? item}
                data={typeof item === 'number' ? undefined : item}
                border={(item.anlam_sira ?? item) !== '1'}
              />
            ))}
            <Box height={40} />
          </Box>
        )}
        {selectedTab === tabs[1].id && (
          <Box mt={32 - 6} flex={1}>
            {(resultsData.data?.atasozu ?? []).map(item => (
              <Box key={item.id} py={6}>
                <SimpleCard
                  onPress={() => {
                    navigation.navigate('Detail', {keyword: item.title});
                  }}>
                  <SimpleCard.Title pr={32}>{item.title}</SimpleCard.Title>
                  <Right
                    marginLeft="auto"
                    height={18}
                    width={18}
                    color={theme.colors.blue}
                  />
                </SimpleCard>
              </Box>
            ))}
            <Box height={40} />
          </Box>
        )}
        {selectedTab === tabs[2].id && (
          <Box mt={32 - 6} flex={1}>
            {(resultsData.data?.birlesikler ?? []).map(item => (
              <Box key={item.id} py={6}>
                <SimpleCard
                  onPress={() => {
                    navigation.navigate('Detail', {keyword: item.title});
                  }}>
                  <SimpleCard.Title pr={32}>{item.title}</SimpleCard.Title>
                  <Right
                    marginLeft="auto"
                    height={18}
                    width={18}
                    color={theme.colors.blue}
                  />
                </SimpleCard>
              </Box>
            ))}
            <Box height={40} />
          </Box>
        )}
      </Box>
    </Box>
  );
}

export default DetailView;
