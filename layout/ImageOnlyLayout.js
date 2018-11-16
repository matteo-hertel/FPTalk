import React from 'react';
import {Flex, Box} from '@rebass/grid';

const ImageOnly = ({children}) => (
  <Flex
    style={{
      width: '100vw',
      height: '100vh',
    }}>
    <Box m="auto>" width={1}>
      {children}
    </Box>
  </Flex>
);

export default ImageOnly;
