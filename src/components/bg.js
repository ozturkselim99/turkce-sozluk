import * as React from 'react';
import {Box} from './shared';

const Bg = ({children, ...props}) => {
  return (
    <Box bg={'blue'} style={{width: '100%', height: '100%'}} {...props}>
      {children}
    </Box>
  );
};

export default Bg;
