import React from 'react';
import {Text, Button, Box} from '../shared';
import theme from '../../utils/theme';

export function CardContainer({children, ...props}) {
  return (
    <Button
      py={16}
      px={12}
      bg="white"
      borderRadius={theme.radii.normal}
      {...props}>
      <Box
        flex={1}
        borderLeftWidth={3}
        borderLeftColor={theme.colors.light}
        pl={12}>
        {children}
      </Box>
    </Button>
  );
}

export function CardTitle({children}) {
  return (
    <Text fontSize={18} fontWeigth="bold">
      {children}
    </Text>
  );
}

export function CardSummary({children}) {
  return (
    <Text fontSize={14} mt={8}>
      {children}
    </Text>
  );
}
