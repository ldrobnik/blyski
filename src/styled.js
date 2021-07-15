/* STYLED-COMPONENTS */

import styled from 'styled-components';
import posed from "react-pose";

/* General */

export const AnimatedContent = posed.div({
    visible: {
        opacity: 1,
        transition: {
            ease: 'easeIn',
            duration: 500
        }
    },
    hidden: {
        opacity: 0
    }
});

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

export const AboutBackdrop = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  background: ${props => props.theme.themeColor};
`;

/* AboutPanel.js */

export const AboutBox = styled.div`
  z-index: 50;
  margin: 0;
  padding: 15px;
  width: 95%;
  max-width: 800px;
  border: 10px solid ${props => props.theme.lightColor};
  color: ${props => props.theme.lightColor};
  text-align: center;
    a {
    color: ${props => props.theme.lightColor};
    transition: all 0.2s ease-in;
    
    &:link {
      color: ${props => props.theme.lightColor};
    }
    
    &:visited {
      color: ${props => props.theme.lightColor};
    }
    
    &:hover {
      color: ${props => props.theme.themeColor};
    }
    
    &:active {
      color: ${props => props.theme.themeColor}};
    }
  }
  
 @media all and (min-width: ${props => props.theme.smallScr}) {
  width: 90%;
  padding:30px 15px;
  margin: 10px;
 } 
 
  
 @media all and (min-width: ${props => props.theme.mediumScr}) {
  width: 70%;
  padding: 30px;
  margin: 20px;
 } 
 
 @media all and (min-width: ${props => props.theme.largeScr}) {
  width: 60%;
  padding:30px;
  margin: 30px;
 } 
 
 @media all and (min-width: ${props => props.theme.extraLargeScr}) {
  width: 50%;
  padding:40px;
  margin: 30px;
 } 
  
`;

export const AboutTitle = styled.div`

width: 100%;
padding: 10px;
display: flex;
align-items: center;
justify-content: center;

@media all and (max-width: ${props => props.theme.smallScr}) {
      padding: 5px;
      display: block;
    }
`;

export const AboutJournalName = styled.div`
  font-size: 6em;
  font-weight: bold;
  padding-left: 10px;
  transform: translateY(-8px);
  
  @media all and (max-width: ${props => props.theme.largeScr}) {
  font-size: 4em;
  padding-left: 8px;
  }
  
  @media all and (max-width: ${props => props.theme.mediumScr}) {
  font-size: 3.5em;
  padding-left: 6px;
  }
  
  @media all and (max-width: ${props => props.theme.smallScr}) {
      font-size: 3.5em;
      padding-left: 4px;
    }
    
  @media all and (max-width: ${props => props.theme.extraSmallScr}) {
      font-size: 3.5em;
      padding-left: 4px;
    }
    
  @media all and (max-width: ${props => props.theme.tinyScr}) {
      font-size: 3em;
      padding-left: 4px;
    }
    
        
  @media all and (max-width: ${props => props.theme.veryTinyScr}) {
      font-size: 2.5em;
      padding-left: 4px;
    }
`;

export const AboutJournalSubtitle = styled.div`
  text-align: center;
font-weight: bold;
  padding: 12px;
  font-size: 1em;
  transform: translateY(-20px);
  
  @media all and (max-width: ${props => props.theme.mediumScr}) {
  font-size: 1em;
  }
  
  @media all and (max-width: ${props => props.theme.smallScr}) {
      font-size: 0.8em;
    }
    
  @media all and (max-width: ${props => props.theme.tinyScr}) {
      font-size: 0.7em;
    }
  
`;

export const AboutMainContent = styled.div`

font-size: 1.3em;

@media all and (max-width: ${props => props.theme.mediumScr}) {
  font-size: 1.2em;
  }
  
  @media all and (max-width: ${props => props.theme.smallScr}) {
      font-size: 1.1em;
    }

`;

export const AboutSecondaryContent = styled.div`

font-size: 1em;

@media all and (max-width: ${props => props.theme.mediumScr}) {
  font-size: 0.9em;
  }
  
  @media all and (max-width: ${props => props.theme.smallScr}) {
      font-size: 0.8em;
    }
`;

export const AboutTernaryContent = styled.div`

font-size: 0.8em;

@media all and (max-width: ${props => props.theme.mediumScr}) {
  font-size: 0.7em;
  }

`;