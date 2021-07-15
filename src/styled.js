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

/* AuthorWorks */

export const WorksListWrapper = styled.div`
  text-align: center;
`;

export const WorksLinkWrapper = styled.div`
  margin: 5px;
  padding: 10px;
`;

export const WorksLinkList = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const WorksHeading = styled.div`
  text-align: center;
  font-style: italic;
  padding: 5px;
  font-family: ${props => props.theme.serif};
  margin-top: 0.5em;
`;

/* AuthorLink.js */

export const AuthorStyledLink = styled.a`
font-weight: bold;
font-size: 1em;
text-align: center;
color: ${props => props.theme.themeColor};
display: inline-block;
position: relative;
padding: 6px 10px;
margin: 3px 0;
overflow: hidden;
cursor: pointer;
transition: all 0.2s ease-in;
z-index: 50;

&:hover {
color: ${props => props.theme.lightColor};
}

&:before {
  content: '';
  background-color: ${props => props.theme.themeColor};
  position: absolute;
  width: 120%;
  height: 120%;
  left: 0;
  top: 0;
  z-index: -20;
  transform: translateY(100%);
  transition: all 0.2s ease-in;
}

  &:hover:before {
  transform: translateY(-2px);
  }

  @media all and (max-width: ${props => props.theme.mediumScr}) {
  font-size: 1em;
  }
  
  @media all and (max-width: ${props => props.theme.smallScr}) {
      font-size: 0.8em;
    }

`;

/* AuthorLinks.js */

export const AuthorMenuWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const AuthorSocialIcons = styled.div`
  margin: 5px;
  padding: 10px;
  display: inline-block;
  
  div, a {
  max-height: 30px;
  }
`;

/* IssueButton.js */

export const IssueButtonWrapper = styled.div`
  font-weight: bold;
  font-size: 1.5em;
  color: ${props => props.theme.themeColor};
  display: inline-block;
  position: relative;
  margin: 1px 0;
  padding: 2px 5px;
  overflow: hidden;
  cursor: pointer;
  transition: all 0.2s ease-in;
  z-index: 50;

  &:hover {
    color: ${props => props.theme.lightColor};
  }

  &:before {
    content: '';
    background-color: ${props => props.theme.themeColor};
    position: absolute;
    width: 120%;
    height: 120%;
    left: 0;
    top: 0;
    z-index: -20;
    transform: translateY(100%);
    transition: all 0.2s ease-in;
  }

  &:hover:before {
    transform: translateY(-2px);
  }
`;

export const IssueInvertedButtonWrapper = styled.div`
  font-weight: bold;
  font-size: 1.5em;
  color: ${props => props.theme.lightColor};
  display: inline-block;
  position: relative;
  margin: 1px 0;
  padding: 2px 5px;
  overflow: hidden;
  cursor: pointer;
  transition: all 0.2s ease-in;
  z-index: 50;

  &:hover {
    color: ${props => props.theme.themeColor};
  }

  &:before {
    content: '';
    background-color: ${props => props.theme.lightColor};
    position: absolute;
    width: 120%;
    height: 120%;
    left: 0;
    top: 0;
    z-index: -20;
    transform: translateY(100%);
    transition: all 0.2s ease-in;
  }

  &:hover:before {
    transform: translateY(-2px);
  }

`;

/* Story.js */

export const StoryTextTitle = styled.div`
 color: ${props => props.theme.themeColor};
 font-size: 2.5em;
 font-weight: bold;
 padding: 10px 0;
  line-height: 1em;
  
  @media all and (max-width: ${props => props.theme.smallScr}) {
    font-size: 1.8em;
 }
  
`;

export const StoryAuthor = styled.div`
 font-size: 1.2em;
 font-weight: bold;
`;

export const StoryTranslatedBy = styled.div`
 font-style: italic;
 font-size: 0.8em;
`;

export const StoryTextBody = styled.div`
  font-family: ${props => props.theme.serif};
  font-size: 1.1em;
`;

/* TextButton */

export const TextButtonWrapper = styled.div`
  text-align: center;
`;

/* TextNavBar */

export const TextNavTitleWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  user-select: none;
`;

export const TextNavTitle = styled.div`
  border-bottom: solid 10px ${props => props.theme.themeColor};
  padding-bottom: 5px;
`;

export const TextNavWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  user-select: none;
`;

export const TextNav = styled.div`
  margin: 5px;
  padding: 10px;
  display: flex;
  
  div, a {
  max-height: 30px;
  }
`;

/* ErrorMessage.js */

export const ErrorMessageWrapper = styled.div`
  text-align: center;

`;

export const ErrorMessageContent = styled.div`
  display: inline-block;
  padding: 10px 15px;
  margin-bottom: 30px;
  border: 6px solid ${props => props.theme.themeColor};
  color: ${props => props.theme.themeColor};
  font-weight: bold;
  
  @media all and (max-width: ${props => props.theme.mediumScr}) {
    margin: 0 20px;
    font-size: 0.8em;
    
  }
`;

/* HoverableButton */

export const HoverableButtonWrapper = styled.div`
font-weight: bold;
font-size: 1.2em;
color: ${props => props.theme.themeColor};
display: inline-block;
position: relative;
margin: 1px 0;
padding: 10px 20px;
overflow: hidden;
cursor: pointer;
transition: all 0.2s ease-in;
z-index: 50;

&:hover {
color: ${props => props.theme.lightColor};
}

&:before {
  content: '';
  background-color: ${props => props.theme.themeColor};
  position: absolute;
  width: 120%;
  height: 120%;
  left: 0;
  top: 0;
  z-index: -20;
  transform: translateY(100%);
  transition: all 0.2s ease-in;
}

  &:hover:before {
  transform: translateY(-2px);
  }

  @media all and (max-width: ${props => props.theme.mediumScr}) {
  font-size: 1.1em;
  padding: 10px 10px;
  }

    @media all and (max-width: ${props => props.theme.tinyScr}) {
      font-size: 0.9em;
      padding: 6px 10px;
    }
`;

export const InvertedHoverableButtonWrapper = styled.div`
font-weight: bold;
font-size: 1.2em;
color: ${props => props.theme.lightColor};
display: inline-block;
position: relative;
margin: 1px 0;
padding: 10px 20px;
overflow: hidden;
cursor: pointer;
transition: all 0.2s ease-in;
z-index: 50;

&:hover {
color: ${props => props.theme.themeColor};
}

&:before {
  content: '';
  background-color: ${props => props.theme.lightColor};
  position: absolute;
  width: 120%;
  height: 120%;
  left: 0;
  top: 0;
  z-index: -20;
  transform: translateY(100%);
  transition: all 0.2s ease-in;
}

  &:hover:before {
  transform: translateY(-2px);
  }


  @media all and (max-width: ${props => props.theme.mediumScr}) {
  font-size: 1.1em;
  padding: 10px 10px;
  }

  @media all and (max-width: ${props => props.theme.smallScr}) {
      font-size: 1em;
      padding: 10px 6px;
    }
    @media all and (max-width: ${props => props.theme.tinyScr}) {
      font-size: 0.9em;
      padding: 6px 4px;
    }

`;

/* InactiveButton.js */

export const InactiveButtonWrapper = styled.div`
font-weight: bold;
font-size: 1.2em;
color: ${props => props.theme.themeColor};
display: inline-block;
position: relative;
margin: 1px 0;
padding: 10px 20px;
overflow: hidden;
transition: all 0.2s ease-in;
z-index: 50;

color: ${props => props.theme.lightColor};

&:before {
  content: '';
  background-color: ${props => props.theme.themeColor};
  position: absolute;
  width: 120%;
  height: 120%;
  left: 0;
  top: 0;
  z-index: -20;
  transform: translateY(-2px);
  transition: all 0.2s ease-in;
}

 
  @media all and (max-width: ${props => props.theme.mediumScr}) {
  font-size: 1.1em;
  padding: 10px 10px;
  }

  @media all and (max-width: ${props => props.theme.smallScr}) {
      font-size: 1em;
      padding: 10px 6px;
    }
    @media all and (max-width: ${props => props.theme.tinyScr}) {
      font-size: 0.9em;
      padding: 6px 4px;
    }
`;

export const InvertedInactiveButtonWrapper = styled.div`
font-weight: bold;
font-size: 1.2em;
color: ${props => props.theme.themeColor};
display: inline-block;
position: relative;
margin: 1px 0;
padding: 10px 20px;
overflow: hidden;
transition: all 0.2s ease-in;
z-index: 50;

&:before {
  content: '';
  background-color: ${props => props.theme.lightColor};
  position: absolute;
  width: 120%;
  height: 120%;
  left: 0;
  top: 0;
  z-index: -20;
  transform: translateY(-2px);
  transition: all 0.2s ease-in;
}


  @media all and (max-width: ${props => props.theme.mediumScr}) {
  font-size: 1.1em;
  padding: 10px 10px;
  }

  @media all and (max-width: ${props => props.theme.smallScr}) {
      font-size: 1em;
      padding: 10px 6px;
    }
    @media all and (max-width: ${props => props.theme.tinyScr}) {
      font-size: 0.9em;
      padding: 6px 4px;
    }

`;

/* Logo.js */

export const LogoWrapper = styled.div`
  border: 10px solid ${props => props.theme.themeColor};
  padding: 12px;
  z-index: 160;
  user-select: none;
  
  @media all and (max-width: ${props => props.theme.smallScr}) {
      display: inline-block;
      margin-bottom: 24px;
    }
  
`;

export const InvertedLogoWrapper = styled.div`
  border: 10px solid ${props => props.theme.lightColor};
  padding: 12px;
  z-index: 160;
  
    
  @media all and (max-width: ${props => props.theme.smallScr}) {
      display: inline-block;
      margin-bottom: 24px;
    }
`;

/* Separator.js */

export const SeparatorWrapper = styled.div`
  text-align: center;
  padding: 12px 0;
`;

export const SeparatorContent = styled.div`
  display: inline-block;
  background-color: ${props => props.theme.themeColor};
  height: 6px;
  width: 20px;
`;

export const InvertedSeparatorContent = styled.div`
  display: inline-block;
  background-color: ${props => props.theme.lightColor};
  height: 6px;
  width: 20px;
`;