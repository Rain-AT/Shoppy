import { injectGlobal } from 'styled-components';

import { gradientBg } from 'style-utils.js';

// Fonts import
import FuturaBookEOT    from 'fonts/sfufuturabook-webfont.eot';
import FuturaBookWOFF   from 'fonts/sfufuturabook-webfont.woff';
import FuturaBookWOFF2  from 'fonts/sfufuturabook-webfont.woff2';
import FuturaBookTTF    from 'fonts/sfufuturabook-webfont.ttf';
import FuturaBookSVG    from 'fonts/sfufuturabook-webfont.svg';

import FuturaBoldEOT    from 'fonts/sfufuturabold-webfont.eot';
import FuturaBoldWOFF   from 'fonts/sfufuturabold-webfont.woff';
import FuturaBoldWOFF2  from 'fonts/sfufuturabold-webfont.woff2';
import FuturaBoldTTF    from 'fonts/sfufuturabold-webfont.ttf';
import FuturaBoldSVG    from 'fonts/sfufuturabold-webfont.svg';

import FuturaLightEOT    from 'fonts/sfufuturalight-webfont.eot';
import FuturaLightWOFF   from 'fonts/sfufuturalight-webfont.woff';
import FuturaLightWOFF2  from 'fonts/sfufuturalight-webfont.woff2';
import FuturaLightTTF    from 'fonts/sfufuturalight-webfont.ttf';
import FuturaLightSVG    from 'fonts/sfufuturalight-webfont.svg';

/* eslint no-unused-expressions: 0 */
injectGlobal`
  @font-face {
    font-family: 'sfu_futura_book';
    src: url(${FuturaBookEOT});
    src: url(${FuturaBookEOT}) format('embedded-opentype'),
         url(${FuturaBookWOFF2}) format('woff2'),
         url(${FuturaBookWOFF}) format('woff'),
         url(${FuturaBookTTF}) format('truetype'),
         url(${FuturaBookSVG}) format('svg');
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: 'sfu_futurabold';
    src: url(${FuturaBoldEOT});
    src: url(${FuturaBoldEOT}) format('embedded-opentype'),
         url(${FuturaBoldWOFF2}) format('woff2'),
         url(${FuturaBoldWOFF}) format('woff'),
         url(${FuturaBoldTTF}) format('truetype'),
         url(${FuturaBoldSVG}) format('svg');
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: 'sfu_futuralight';
    src: url(${FuturaLightEOT});
    src: url(${FuturaLightEOT}) format('embedded-opentype'),
         url(${FuturaLightWOFF2}) format('woff2'),
         url(${FuturaLightWOFF}) format('woff'),
         url(${FuturaLightTTF}) format('truetype'),
         url(${FuturaLightSVG}) format('svg');
    font-weight: normal;
    font-style: normal;
  }

  html,
  body {
    height: 100%;
    width: 100%;
  }

  body {
    font-family: 'sfu_futura_book', Helvetica, Arial, sans-serif;
  }

  body.fontLoaded {
    font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  #app {
    min-height: 100%;
    min-width: 100%;
    ${ gradientBg() };
  }

  p,
  label {
    font-family: Georgia, Times, 'Times New Roman', serif;
    line-height: 1.5em;
  }
`;
