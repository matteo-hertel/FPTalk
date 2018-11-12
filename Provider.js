import React from 'react';
import {colorWhite, fontSizeLg, spacingSm} from 'bpk-tokens/tokens/base.es6';
import ThemeProvider from 'mdx-deck/dist/Provider';
import {FaTwitter} from 'react-icons/fa';

const Provider = ({children, mode, notes}) => {
  return (
    <ThemeProvider mode notes>
      {children}
      <div
        style={{
          color: colorWhite,
          fontSize: fontSizeLg,
          position: 'absolute',
          bottom: spacingSm,
          right: spacingSm,
        }}>
        <FaTwitter style={{marginBottom: '-3px'}} />
        @MHDev91
      </div>
    </ThemeProvider>
  );
};

export default Provider;
