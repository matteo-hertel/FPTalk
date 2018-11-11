import React from 'react';
import {Image} from 'mdx-deck';

import CodemotionStyle, {
  topHalfStyle,
  bottomHalfStyle,
} from './../styles/CodemotionStyle';

const TopScreen = ({children}) => (
  <div
    style={{
      ...topHalfStyle,
      marginBottom: '10px',
      flexDirection: 'column',
    }}>
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
      }}>
      <p>Berlin | November 20 - 21, 2018</p>
      <img
        src="./../assets/codemotionLogo.png"
        style={{
          paddingTop: '10px',
          width: '616px',
          height: '110px',
        }}
      />
    </div>
    <div
      style={{
        textAlign: 'left',
      }}>
      {children}
    </div>
  </div>
);

const BottomScreen = ({children}) => (
  <div
    style={{
      justifyContent: 'flex-start',
      ...bottomHalfStyle,
    }}>
    <img
      style={{
        alignSelf: 'flex-end',
        height: '75%',
        width: '75%',
      }}
      src="./../assets/CodemotionASCII.png"
    />
    <img
      style={{
        alignSelf: 'flex-end',
        height: '39px',
        width: '164px',
      }}
      src="./../assets/ccLogo.png"
    />
  </div>
);
const CodemotionLayout = ({children}) => (
  <div style={CodemotionStyle}>
    <TopScreen>{children}</TopScreen>
    <BottomScreen />
  </div>
);

export default CodemotionLayout;
