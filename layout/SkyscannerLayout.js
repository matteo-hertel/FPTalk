import React from 'react';
import {Flex, Box} from '@rebass/grid';

import SkyscannerStyle from './../styles/SkyscannerStyle';

const SkyscannerLayout = ({children}) => (
  <Flex style={SkyscannerStyle}>
    <Flex flexDirection="column" m="auto" p={24}>
      <Box width={1}>
        <img
          src="./../assets/skyscanner.svg"
          style={{
            minWidth: '1200px',
            maxHeight: '80%',
            maxWidth: '80%',
          }}
        />
      </Box>
      <Box pt={100}>{children}</Box>
    </Flex>
  </Flex>
);

export default SkyscannerLayout;
