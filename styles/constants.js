import {
  breakpointQueryAboveTablet,
  breakpointQueryMobile,
  breakpointQueryTablet,
} from 'bpk-tokens/tokens/base.es6';

export const baseGradient =
  'linear-gradient(150deg, rgba(37,33,50,1) 0%, rgba(35,76,98,1) 100%)';
export const codeBlockFont = '"IBM Plex Mono", monospace';
export const desktopMediaQuery = `@media screen and ${breakpointQueryAboveTablet}`;
export const mobileMediaQuery = `@media screen and ${breakpointQueryMobile}`;
export const tabletMediaQuery = `@media screen and ${breakpointQueryTablet}`;
