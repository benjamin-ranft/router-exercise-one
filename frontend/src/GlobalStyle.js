import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  
  html, body {
    margin: 0;
    font-size: 112.5%;
    font-family: sans-serif;
    background: rgb(2,0,36);
background: linear-gradient(343deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 28%, rgba(0,212,255,1) 100%);
  }
   
   button, input {
     font-size: 1em;
   }
   
`;
