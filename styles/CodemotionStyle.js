import {
  spacingBase,
  spacingLg,
  spacingSm,
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
  backgroundColor: topColor,
};
export const bottomHalfStyle = {
  marginTop: spacingSm,
  paddingTop: spacingBase,
  paddingBottom: spacingXxl,
  paddingLeft: spacingLg,
  paddingRight: spacingLg,
  backgroundColor: bottomColor,
  flexGrow: 1,
};
export const asciiStyle = {
  alignSelf: 'flex-end',
  paddingBottom: spacingBase,
};
export const ccLogoStyle = {
  textAlign: 'right',
  alignSelf: 'flex-end',
  paddingBottom: spacingBase,
};
export default {
  width: '100vw',
  height: '100vh',
  backgroundColor: colorWhite,
};
