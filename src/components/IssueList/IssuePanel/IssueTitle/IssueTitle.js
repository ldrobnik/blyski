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

`;

const IssueName = styled.div`
  font-size: 6em;
  font-weight: bold;
  color: ${props => props.theme.themeColor};
  padding-left: 20px;
  transform: translateY(-8px);
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
                    position={props.issue % 4}
                />
                <IssueName>
                    {formatIssueNumber(props.issue)}
                </IssueName>
            </Title>
        </React.Fragment>
    );
};

export default IssueTitle;