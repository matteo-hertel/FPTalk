import React from 'react';

import SkyscannerStyle from './../styles/SkyscannerStyle';

const SkyscannerLayout = ({children}) => (
  <div style={SkyscannerStyle}>
    <img
      src="./../assets/skyscanner.svg"
      style={{
        minWidth: '55%',
        minHeight: '55%',
        maxWidth: '65%',
        maxHeight: '65%',
      }}
    />
    {children}
  </div>
);

export default SkyscannerLayout;
