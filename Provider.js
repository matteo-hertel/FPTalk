import React from 'react';
import {colorWhite, fontSizeLg, spacingSm} from 'bpk-tokens/tokens/base.es6';
import ThemeProvider from 'mdx-deck/dist/Provider';

const Provider = ({children, mode, notes}) => {
  return (
    <ThemeProvider mode notes>
      {children}
      {mode !== 'PRESENTER' && (
        <div
          style={{
            color: colorWhite,
            fontSize: fontSizeLg,
            position: 'absolute',
            bottom: spacingSm,
            right: spacingSm,
          }}>
          @MHDev91
        </div>
      )}
    </ThemeProvider>
  );
};

export default Provider;
