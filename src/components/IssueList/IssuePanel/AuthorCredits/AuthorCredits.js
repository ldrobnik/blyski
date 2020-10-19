import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import {WEBSITE_TEXT} from "../../../../data/constants";

const CreditsWrapper = styled.div`
  padding-top: 20px;
  margin-bottom: 15px;
`;

const AuthorName = styled.div`
  font-size: 3.2em;
  font-weight: bold;
  color: ${props => props.theme.themeColor};
  
  @media all and (max-width: ${props => props.theme.mediumScr}) {
  font-size: 2.5em;
  }
  
  @media all and (max-width: ${props => props.theme.smallScr}) {
      font-size: 2em;
    }

  @media all and (max-width: ${props => props.theme.tinyScr}) {
      font-size: 1.5em;
    }
    
   @media all and (max-width: ${props => props.veryTinyScr}) {
      font-size: 1em;
    }
  
`;

const TranslatorName = styled.div`
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

const AuthorCredits = (props) => {

    return (
        <CreditsWrapper>
            <AuthorName>{props.author}</AuthorName>
            <TranslatorName>{WEBSITE_TEXT.issueList.translator}</TranslatorName>
        </CreditsWrapper>
    );
};

export default AuthorCredits;