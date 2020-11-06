import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import {WEBSITE_TEXT} from "../../../data/constants";

/* STYLED COMPONENTS */
const TextTitle = styled.div`
 color: ${props => props.theme.themeColor};
 font-size: 1.8em;
 font-weight: bold;
 padding: 5px 0;
`;

const Author = styled.div`
 font-size: 1.2em;
 font-weight: bold;
`;

const TranslatedBy = styled.div`
 font-style: italic;
 font-size: 0.8em;
`;

const TextBody = styled.div`
font-family: ${props => props.theme.serif};
`;
const Story = props => {

    return (
        <React.Fragment>
            <Author>{props.author}</Author>
            <TextTitle>{props.textTitle}</TextTitle>
            <TranslatedBy>{WEBSITE_TEXT.issueList.translator}</TranslatedBy>
            <TextBody dangerouslySetInnerHTML={{__html: props.textContent}}/>
        </React.Fragment>
    );
};

export default Story;