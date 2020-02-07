/* create global styles for application */
import { createGlobalStyle } from 'styled-components';

import 'react-toastify/dist/ReactToastify.css';
import background from '../assets/images/backBackground.svg';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Open+Sans&display=swap');

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    background: #7159c1 url(${background}) no-repeat center top;
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font: 14px sans-serif;
  }

  #root{
    max-width: 1020px;
    margin: 0 auto;
    /* 0 top, 20 left and rigth, 50 botton */
    padding: 0 20px 50px;

    @media (max-width: 930px) {
      max-width: 720px;
  }
  @media (max-width: 635px) {
      width: 500px;
  }


  button {
    cursor: pointer;
  }


`;
