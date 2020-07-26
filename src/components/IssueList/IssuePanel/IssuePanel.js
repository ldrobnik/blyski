import React, {useState, useEffect} from 'react';
import styled from 'styled-components';

/* STYLED COMPONENTS */
const IssueWrapper = styled.div`
 border: 1px solid ${props => props.theme.themeColor};
 display: flex;
 align-items: center;
 justify-content: center;
`;

const IssuePanel = props => {

    return (
        <IssueWrapper>

        </IssueWrapper>
    );
};

export default IssuePanel;