import * as React from 'react';
import Text from '../components/shared/text';
import {SafeAreaView, ScrollView} from 'react-native';
import FocusAwareStatusBar from '../components/focus-aware-status-bar';
import Box from '../components/shared/box';
import theme from '../utils/theme';
import ActionButton, {ActionButtonTitle} from '../components/action-button';

import {
  SoundSolid as SoundIconSolid,
  Sound as SoundIcon,
  Hand,
  Favorite,
  FavoriteSolid,
  Right,
} from '../components/icons';

import LoaderText from '../components/loader-text';
import DetailSummaryItem from '../components/detail-summary-item';

function DetailView({route}) {
  const keyword = route.params?.title;
  const [data, setData] = React.useState(null);
  const getDetailData = async () => {
    const response = await fetch('https://sozluk.gov.tr/gts?ara=' + keyword);
    const data = await response.json();
    setData(data[0]);
  };
  React.useEffect(() => {
    getDetailData();
  }, []);
  return (
    <Box as={SafeAreaView} flex={1} bg={theme.colors.softRed} p={16}>
      <FocusAwareStatusBar
        barStyle="dark-content"
        backgroundColor={theme.colors.softRed}
      />
      <Box as={ScrollView} p={16}>
        <Box>
          <Text fontSize={32} fontWeight={'bold'}>
            {keyword}
          </Text>
          {data?.telaffuz || data?.lisan ? (
            <Text color={'textLight'} mt={6}>
              {data?.tellafuz && data?.telaffuz} {data?.lisan}
            </Text>
          ) : null}
        </Box>
        <Box flexDirection={'row'} mt={24}>
          <ActionButton disabled={!data}>
            <SoundIcon color={theme.colors.textLight} />
          </ActionButton>
          <ActionButton disabled={!data} ml={12}>
            <Favorite color={theme.colors.textLight} />
          </ActionButton>
          <ActionButton ml={'auto'} disabled={!data}>
            <Hand color={theme.colors.textLight} />
            <ActionButtonTitle>Türk İşaret Dili</ActionButtonTitle>
          </ActionButton>
        </Box>
        <Box mt={32}>
          {data
            ? data.anlamlarListe.map(item => (
                <DetailSummaryItem
                  key={item.anlam_sira}
                  data={item}
                  border={item.anlam_sira !== '1'}
                />
              ))
            : [1, 2, 3].map(index => (
                <DetailSummaryItem border={index !== 1}>
                  <LoaderText />
                  <LoaderText width={200} mt={10} />
                </DetailSummaryItem>
              ))}
        </Box>
      </Box>
    </Box>
  );
}

export default DetailView;
