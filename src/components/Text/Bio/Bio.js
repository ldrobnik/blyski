import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import AuthorPhoto from './AuthorPhoto/AuthorPhoto';
import {WEBSITE_TEXT, AUTHOR_LINKS} from "../../../data/constants";

/* STYLED COMPONENTS */
const Author = styled.div`
 text-align: center;
 color: ${props => props.theme.themeColor};
 font-size: 1.8em;
 font-weight: bold;
 padding: 5px 0;
`;

const TextBody = styled.div`
  text-align: center;
`;

const Heading = styled.div`
  text-align: center;
  padding: 5px;
`;

const Bio = (props) => {

    return (
        <React.Fragment>
            <Author>{props.author}</Author>
            <AuthorPhoto
                issueNumber={props.issueNumber}
            />
            <TextBody
                dangerouslySetInnerHTML={{__html: props.textContent}}
            />
            <Heading>{WEBSITE_TEXT.text.bio.moreInfo}</Heading>
            <Heading>{WEBSITE_TEXT.text.bio.selectedWorks}</Heading>
        </React.Fragment>
    );
};

export default Bio;