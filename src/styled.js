/* STYLED-COMPONENTS */

import styled, {createGlobalStyle} from 'styled-components';

/* Global */

export const GlobalStyle = createGlobalStyle`
    body {
        font-family: ${props => props.theme.sansSerif};
        color: ${props => props.theme.darkColor};
        background-color: ${props => props.theme.lightColor};
        min-height: 100vh;
        }
        
    a {
        text-decoration: none;

    }
    
`;

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

/* CopyrightNote.js */

export const CopyrightNoteWrapper = styled.div`
  padding-top: 10px;
  padding-bottom: 20px;
font-size: 10px;

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
      color: ${props => props.theme.lightColor} !important;
    }
    
    &:active {
      color: ${props => props.theme.lightColor}} !important;
    }
`;

/* IssueList.js */

export const ListOfIssues = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding-bottom: 20px;

`;

/* IssuePanel.js */

export const IssueWrapper = styled.div`
 border: 10px solid ${props => props.theme.themeColor};
 text-align: center;
 width: 85%;
 padding: 15px;
 margin: 10px 0;
 max-width: 800px;
 
 *::selection {
        color: ${props => props.theme.lightColor};
        background-color: ${props => props.theme.themeColor};
     }
 
 @media all and (min-width: ${props => props.theme.smallScr}) {
  width: 90%;
  padding:30px 15px;
  margin: 10px 0;
 } 
 
  
 @media all and (min-width: ${props => props.theme.mediumScr}) {
  width: 70%;
  padding: 20px;
  margin: 30px 10px;
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

export const IssueTexts = styled.div`
  padding: 12px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

/* AuthorCredits.js */

export const CreditsWrapper = styled.div`
  padding-top: 20px;
  margin-bottom: 15px;
`;

export const AuthorName = styled.div`
  font-size: 3.2em;
  font-weight: bold;
  color: ${props => props.theme.themeColor};
  
  @media all and (max-width: ${props => props.theme.mediumScr}) {
  font-size: 2.7em;
  }
  
  @media all and (max-width: ${props => props.theme.smallScr}) {
      font-size: 2em;
    }

  @media all and (max-width: ${props => props.theme.tinyScr}) {
      font-size: 1.7em;
    }
    
   @media all and (max-width: ${props => props.veryTinyScr}) {
      font-size: 1.2em;
    }
  
`;

export const TranslatorName = styled.div`
  color: ${props => props.theme.themeColor};
  font-size: 1em;
  font-weight: bold;
  
  @media all and (max-width: ${props => props.theme.mediumScr}) {
  font-size: 0.8em;
  }
  
  @media all and (max-width: ${props => props.theme.smallScr}) {
      font-size: 0.7em;
    }

  @media all and (max-width: ${props => props.theme.tinyScr}) {
      font-size: 0.6em;
    }

`;

/* IssueTitle.js */

export const TitleOfIssue = styled.div`

width: 100%;
padding: 10px;
align-items: center;
justify-content: center;
display: flex;

@media all and (max-width: ${props => props.theme.smallScr}) {
      padding: 5px;
      display: block;
    }
`;

export const IssueName = styled.div`
  font-size: 6em;
  font-weight: bold;
  color: ${props => props.theme.themeColor};
  padding-left: 10px;
  //transform: translateY(-4px);
  
  @media all and (max-width: ${props => props.theme.largeScr}) {
  font-size: 4em;
  padding-left: 8px;
  }
  
  @media all and (max-width: ${props => props.theme.mediumScr}) {
  font-size: 3em;
  padding-left: 6px;
  }
  
  @media all and (max-width: ${props => props.theme.smallScr}) {
      font-size: 3em;
      padding-left: 4px;
    }
    
  @media all and (max-width: ${props => props.theme.extraSmallScr}) {
      font-size: 2.5em;
      padding-left: 4px;
    }
    
  @media all and (max-width: ${props => props.theme.tinyScr}) {
      font-size: 2em;
      padding-left: 4px;
    }
    
    @media all and (max-width: ${props => props.theme.veryTinyScr}) {
      font-size: 1.5em;
      padding-left: 4px;
    }
`;

export const IssueDate = styled.div`
  text-align: right;
  padding-right: 12px;
  font-size: 1.2em;
  font-weight: bold;
  color: ${props => props.theme.themeColor};
  transform: translateY(-14px);
  
  @media all and (max-width: ${props => props.theme.mediumScr}) {
  font-size: 1em;
  transform: translateY(-10px);
  padding: 0;
  }
  
  @media all and (max-width: ${props => props.theme.smallScr}) {
      font-size: 0.8em;
      transform: translateY(-2px);
      text-align: center;
    }
    
  @media all and (max-width: ${props => props.theme.tinyScr}) {
      font-size: 0.7em;
      transform: translateY(-2px);
    }
  
`;

/* MainNavbar.js */

export const MainNavbarWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  user-select: none;
`;

export const MainNavbarBody = styled.div`
  margin: 5px;
  padding: 10px;
  display: inline-block;
  
  div, a {
  max-height: 30px;
  }
  
  @media all and (max-width: ${props => props.theme.mediumScr}) {
    padding: 0;
    margin: 2px;
  }
  
`;

/* Text.js */

export const TextContentWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const TextWrapper = styled.div`
  border: 10px solid ${props => props.theme.themeColor};
  padding: 20px 15px;
  font-size: 1em;
  line-height: 1.8em;
  width: 85%;
  max-width: 750px;

  p {
    margin: 1em 0;
  }

  *::selection {
    color: ${props => props.theme.lightColor};
    background-color: ${props => props.theme.themeColor};
  }

  @media all and (min-width: ${props => props.theme.smallScr}) {
    width: 90%;
    padding: 25px 45px;
  }


  @media all and (min-width: ${props => props.theme.mediumScr}) {
    width: 80%;
    padding: 40px 60px;
    font-size: 1.2em;
  }

  @media all and (min-width: ${props => props.theme.largeScr}) {
    width: 60%;
    padding: 45px 10vw;
    font-size: 1.2em;
  }

  @media all and (min-width: ${props => props.theme.extraLargeScr}) {
    width: 40%;
    padding: 45px 10vw;
    font-size: 1.2em;
  }

  @media all and (min-width: ${props => props.theme.hugeScr}) {
    width: 30vw;
    padding: 45px 10vw;
    font-size: 1.2em;
  }
`;

/* Bio.js */

export const BioAuthor = styled.div`
 text-align: center;
 color: ${props => props.theme.themeColor};
 font-size: 1.8em;
 font-weight: bold;
 padding: 5px 0;
`;

export const BioTextBody = styled.div`
  text-align: center;
  font-family: ${props => props.theme.serif};
`;

export const BioHeading = styled.div`
  text-align: center;
  padding: 5px;
  font-family: ${props => props.theme.serif};
`;

/* AuthorPhoto.js */

export const AuthorPhotoWrapper = styled.div`
  text-align: center;
  padding: 2em;
  position: relative; 
`;

export const AuthorPhotoContainer = styled.div`
  height: 420px;
  z-index: 60;
  
  img {
      height: 100%;
  }
  
  
  @media all and (max-width: ${props => props.theme.mediumScr}) {
   height: 300px;
  }
  
  @media all and (max-width: ${props => props.theme.smallScr}) {
      height: 240px;
    }
    
  @media all and (max-width: ${props => props.theme.extraSmallScr}) {
      height: 180px;
    }
  
`;