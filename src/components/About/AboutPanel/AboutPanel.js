import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import HoverableButton from '../../UI/HoverableButton/HoverableButton';
import Logo from '../../UI/Logo/Logo';
import Separator from '../../UI/Separator/Separator';
import CopyrightNote from './CopyrightNote/CopyrightNote';
import {WEBSITE_TEXT} from "../../../data/constants";

/* STYLED COMPONENTS */
const AboutBox = styled.div`
  z-index: 50;
  margin: 30px;
  padding: 40px;
  width: 50%;
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
  
  @media all and (max-width: ${props => props.theme.smallScr}) {
     width: 98%;
      padding: 15px;
      margin: 2px 30px;
    }

 
 @media all and (max-width: ${props => props.theme.mediumScr}) {
  width: 90%;
  padding:30px 15px;
 } 
 
  
 @media all and (max-width: ${props => props.theme.largeScr}) {
  width: 70%;
  padding:30px;
  margin: 10px 30px;
 } 
 
 @media all and (max-width: ${props => props.theme.extraLargeScr}) {
  width: 60%;
  padding:30px;
 } 
  
`;

const Title = styled.div`

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

const JournalName = styled.div`
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

const JournalSubtitle = styled.div`
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

const MainContent = styled.div`

font-size: 1.3em;

@media all and (max-width: ${props => props.theme.mediumScr}) {
  font-size: 1.2em;
  }
  
  @media all and (max-width: ${props => props.theme.smallScr}) {
      font-size: 1.1em;
    }

`;

const SecondaryContent = styled.div`

font-size: 1em;

@media all and (max-width: ${props => props.theme.mediumScr}) {
  font-size: 0.9em;
  }
  
  @media all and (max-width: ${props => props.theme.smallScr}) {
      font-size: 0.8em;
    }
`;

const TernaryContent = styled.div`

font-size: 0.8em;

@media all and (max-width: ${props => props.theme.mediumScr}) {
  font-size: 0.7em;
  }

`;

const AboutPanel = props => {

    return (
        <AboutBox>
            <Title>
                <Logo
                    logoFrame={0}
                    inverted={true}/>
                <div>
                    <JournalName>
                        {WEBSITE_TEXT.about.title}
                    </JournalName>
                    <JournalSubtitle>
                        {WEBSITE_TEXT.about.subtitle}
                    </JournalSubtitle>
                </div>
            </Title>
            <MainContent>
                {WEBSITE_TEXT.about.content}
            </MainContent>
            <Separator inverted={true}/>
            <SecondaryContent>
                <p>{WEBSITE_TEXT.about.contact}</p>
            </SecondaryContent>
            <TernaryContent>
                <p>{WEBSITE_TEXT.about.desclaimer}</p>
            </TernaryContent>
            <Separator inverted={true}/>
            <SecondaryContent>
                <p>{WEBSITE_TEXT.about.credits}</p>
            </SecondaryContent>
            <TernaryContent>
                <p>{WEBSITE_TEXT.about.footnote}</p>
            </TernaryContent>
            <CopyrightNote/>
            <Separator inverted={true}/>
            <HoverableButton
                path="/"
                message={WEBSITE_TEXT.about.button}
                inverted={true}
            />
        </AboutBox>
    );
};

export default AboutPanel;