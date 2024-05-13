import { createGlobalStyle } from "styled-components";
import Larken from "../fonts/Larken.otf";
import LarkenBlack from "../fonts/LarkenBlack.otf";
import Noyh from "../fonts/Noyh.otf";
import olivetta from "../fonts/olivetta.otf";

const GlobalStyle = createGlobalStyle`
  /* http://meyerweb.com/eric/tools/css/reset/ 
  v2.0 | 20110126
  License: none (public domain)
  */
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed, 
  figure, figcaption, footer, header, hgroup, 
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
  -webkit-tap-highlight-color: transparent;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure, 
  footer, header, hgroup, menu, nav, section {
  display: block;
  }
  body {
  line-height: 1;
  background-color: #ffffff;
  font-family: 'Lato', sans-serif;
  overflow-x: hidden;
  }
  ol, ul {
  list-style: none;
  }
  blockquote, q {
  quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
  content: '';
  content: none;
  }
  table {
  border-collapse: collapse;
  border-spacing: 0;
  }
  *{
  box-sizing: border-box;
  }

  @font-face {
    font-family: 'Larken';
    src: url(${Larken}) format('truetype');
    font-weight: 400;
    font-style: normal;
    font-display: auto;
  }

  @font-face {
    font-family: 'LarkenBlack';
    src: url(${LarkenBlack}) format('truetype');
    font-weight: 400;
    font-style: normal;
    font-display: auto;
  }

  @font-face {
    font-family: 'Noyh';
    src: url(${Noyh}) format('truetype');
    font-weight: 400;
    font-style: normal;
    font-display: auto;
  }

  @font-face {
    font-family: 'olivetta';
    src: url(${olivetta}) format('truetype');
    font-weight: 400;
    font-style: normal;
    font-display: auto;
  }

  -webkit-tap-highlight-color: transparent;

  ::-webkit-scrollbar {
    display: none;
}

::-webkit-scrollbar-track {
  display: none;
}

::-webkit-scrollbar-thumb {
  display: none;
}


`;

export default GlobalStyle;
