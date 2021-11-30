import { createGlobalStyle } from 'styled-components';
 
const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  };
  body {
    overflow-x: hidden;
  }
  li {
      list-style-type : none;
  };

  a{
    text-decoration : none;
    color : #fff;
  }
`;
 
export default GlobalStyle;