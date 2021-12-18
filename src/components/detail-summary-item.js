import React from 'react';

import Box from './shared/box';
import Text from './shared/text';
import theme from '../utils/theme';

export default function DetailSummaryItem({data, children, border, ...props}) {
  const type = (data?.ozelliklerListe &&
    data.ozelliklerListe.map(_ => _.tam_adi)) || ['isim'];
  return (
    <Box position="relative" bg="white" px={28} py={20} {...props}>
      {border && (
        <Box
          position="absolute"
          left={12}
          right={12}
          top={0}
          height={1}
          bg="light"
        />
      )}
      {data ? (
        <Box>
          <Box flexDirection="row">
            <Text color={theme.colors.light} ml={-14} mr={8}>
              {data.anlam_sira}
            </Text>
            <Text color={theme.colors.blue}>{type.join(', ')}</Text>
          </Box>
          <Box mt={8}>
            <Text fontWeight="600">{data.anlam}</Text>
            {data.orneklerListe &&
              data.orneklerListe.map(ornek => (
                <Box key={ornek.ornek_id}>
                  <Text
                    ml={10}
                    mt={12}
                    color={theme.colors.textLight}
                    fontWeight="500">
                    {ornek.ornek}{' '}
                    <Text fontWeight="700" color="textLight">
                      {ornek.yazar_id !== '0' && `- ${ornek.yazar[0].tam_adi}`}
                    </Text>
                  </Text>
                </Box>
              ))}
          </Box>
        </Box>
      ) : (
        children
      )}
    </Box>
  );
}
