import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import Logo from '../../../UI/Logo/Logo';
import {WEBSITE_TEXT} from "../../../../data/constants";

const Title = styled.div`

width: 100%;
padding: 10px;
display: flex;
align-items: center;
justify-content: center;

@media all and (max-width: 552px) {
      padding: 5px;
    }
`;

const IssueName = styled.div`
  font-size: 6em;
  font-weight: bold;
  color: ${props => props.theme.themeColor};
  padding-left: 10px;
  transform: translateY(-8px);
  
  @media all and (max-width: 1000px) {
  font-size: 4em;
  padding-left: 8px;
  }
  
  @media all and (max-width: 700px) {
  font-size: 3em;
  padding-left: 6px;
  }
  
  @media all and (max-width: 552px) {
      font-size: 2em;
      padding-left: 4px;
    }
    
  @media all and (max-width: 380px) {
      font-size: 1.5em;
      padding-left: 4px;
    }
    
  @media all and (max-width: 350px) {
      font-size: 1em;
      padding-left: 4px;
    }
`;

const IssueDate = styled.div`
  text-align: right;
  padding-right: 12px;
  font-size: 1em;
  font-weight: bold;
  color: ${props => props.theme.themeColor};
  transform: translateY(-20px);
  
  @media all and (max-width: 700px) {
  font-size: 0.8em;
  transform: translateY(-10px);
  }
  
  @media all and (max-width: 552px) {
      font-size: 0.6em;
      transform: translateY(-10px);
    }
    
  @media all and (max-width: 350px) {
      font-size: 0.5em;
      transform: translateY(-10px);
    }
  
`;
const IssueTitle = (props) => {

    //adds 0 for issue numbers below 10
    const formatIssueNumber = (issueNumber) => {
        let issueName = WEBSITE_TEXT.issueList.magazineName + " ";
        if (issueNumber < 10) {
            return issueName + "0" + issueNumber;
        } else {
            return issueName + issueNumber;
        }
    };

    return (
        <React.Fragment>
            <Title>
                <Logo
                    position={(props.issue - 1) % 4}
                />
                <div>
                    <IssueName>
                        {formatIssueNumber(props.issue)}
                    </IssueName>
                    <IssueDate>
                        {props.date}
                    </IssueDate>
                </div>
            </Title>
        </React.Fragment>
    );
};

export default IssueTitle;