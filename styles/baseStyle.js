import {
  colorBlue900,
  colorGray900,
  colorGreen500,
  colorWhite,
  fontFamilyBase,
  fontSizeBase,
  fontSizeLg,
  fontSizeXl,
  fontSizeXxl,
} from 'bpk-tokens/tokens/base.es6';

import {
  baseGradient,
  codeBlockFont,
  desktopMediaQuery,
  mobileMediaQuery,
  tabletMediaQuery,
} from './constants';

import nightOwl from 'prism-react-renderer/themes/nightOwl';
nightOwl.plain.backgroundColor = 'transparent';
export const codeTheme = nightOwl;
export default {
  font: fontFamilyBase,
  monospace: codeBlockFont,
  colors: {
    text: colorWhite,
    link: colorBlue900,
    pre: colorGray900,
    preBackground: colorGreen500,
    code: colorGray900,
    codeBackground: colorGreen500,
  },
  css: {
    background: baseGradient,
    textAlign: 'center',
    fontSize: fontSizeBase,
    [desktopMediaQuery]: {
      fontSize: fontSizeXxl,
    },
    [tabletMediaQuery]: {
      fontSize: fontSizeXl,
    },
    [mobileMediaQuery]: {
      fontSize: fontSizeLg,
    },
    button: {
      display: 'none',
    },
    li: {
      textAlign: 'left',
    },
    '& .Slide > div': {
      minWidth: '80vw',
      minHeight: '60vh',
    },
  },
};
