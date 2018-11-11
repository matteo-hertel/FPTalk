import {
  spacingBase,
  spacingLg,
  spacingXxl,
  colorWhite,
} from 'bpk-tokens/tokens/base.es6';

export const topColor = '#F25D23';
export const bottomColor = '#001236';

export const topHalfStyle = {
  paddingTop: spacingBase,
  paddingBottom: spacingBase,
  paddingLeft: spacingLg,
  paddingRight: spacingLg,
  display: 'flex',
  flex: 1,
  backgroundColor: topColor,
};
export const bottomHalfStyle = {
  paddingTop: spacingBase,
  paddingBottom: spacingXxl,
  paddingLeft: spacingLg,
  paddingRight: spacingLg,
  justifyContent: 'space-between',
  display: 'flex',
  flex: 1,
  backgroundColor: bottomColor,
};

export default {
  width: '100vw',
  height: '100vh',
  display: 'flex',
  backgroundColor: colorWhite,
  flexDirection: 'column',
};
