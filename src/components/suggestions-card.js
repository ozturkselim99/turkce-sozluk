import Box from './shared/box';
import Text from './shared/text';
import theme from '../utils/theme';
import {CardContainer, CardSummary, CardTitle} from './shared/card';
import * as React from 'react';
import LoaderText from './loader-text';

function SuggestionCard({title, onPress, data, ...props}) {
  return (
    <Box {...props}>
      <Text color={theme.colors.textLight}>{title}</Text>
      <CardContainer mt={10} onPress={onPress}>
        {data ? (
          <>
            <CardTitle>{data.madde}</CardTitle>
            <CardSummary>{data.anlam}</CardSummary>
          </>
        ) : (
          <Box>
            <LoaderText />
            <LoaderText width={200} mt={10} />
          </Box>
        )}
      </CardContainer>
    </Box>
  );
}

export default SuggestionCard;
