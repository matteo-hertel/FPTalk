import React from 'react';
import {Flex, Box} from '@rebass/grid';

import SkyscannerStyle from './../styles/SkyscannerStyle';

const SkyscannerLayout = ({children}) => (
  <Flex style={SkyscannerStyle}>
    <Flex flexDirection="column" m="auto">
      <Box width={1}>
        <img
          src="./../assets/skyscanner.svg"
          style={{
            maxHeight: '100%',
            maxWidth: '100%',
          }}
        />
      </Box>
      {children}
    </Flex>
  </Flex>
);

export default SkyscannerLayout;
