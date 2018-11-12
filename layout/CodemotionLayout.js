import React from 'react';
import {Flex, Box} from '@rebass/grid';

import CodemotionStyle, {
  asciiStyle,
  bottomHalfStyle,
  ccLogoStyle,
  topHalfStyle,
} from './../styles/CodemotionStyle';

const TopScreen = ({children}) => (
  <Flex flexDirection="column" style={{...topHalfStyle}}>
    <Flex justifyContent="space-between">
      <Box>
        <p>Berlin | November 20 - 21, 2018</p>
      </Box>
      <Box>
        <img
          src="./../assets/codemotionLogo.png"
          style={{
            paddingTop: '10px',
            maxWidth: '100%',
            maxHeight: '100%',
          }}
        />
      </Box>
    </Flex>
    <Flex
      style={{
        textAlign: 'left',
      }}>
      {children}
    </Flex>
  </Flex>
);

const BottomScreen = ({children}) => (
  <Flex style={{...bottomHalfStyle}}>
    <Box width={1} style={asciiStyle}>
      <img
        style={{
          maxHeight: '100%',
          maxWidth: '100%',
        }}
        src="./../assets/CodemotionASCII.png"
      />
    </Box>
    <Box width={1 / 4} style={ccLogoStyle}>
      <img
        style={{
          height: '50%',
          width: '60%',
        }}
        src="./../assets/ccLogo.png"
      />
    </Box>
  </Flex>
);
const CodemotionLayout = ({children}) => (
  <Flex flexDirection="column" style={CodemotionStyle}>
    <TopScreen>{children}</TopScreen>
    <BottomScreen />
  </Flex>
);

export default CodemotionLayout;
