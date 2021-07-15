/* STYLED-COMPONENTS */

import styled from 'styled-components';

/* About.js */

export const AboutPanelWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;

  top: 0;
  left: 0;
  
   *::selection {
        color: ${props => props.theme.themeColor};
        background-color: ${props => props.theme.lightColor};
     }
`;

export const Backdrop = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  background: ${props => props.theme.themeColor};
`;