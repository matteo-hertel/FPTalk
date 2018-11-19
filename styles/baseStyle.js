import {
  colorBlue300,
  colorBlue900,
  colorGray300,
  colorRed300,
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
    link: colorBlue300,
    code: colorRed300,
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
