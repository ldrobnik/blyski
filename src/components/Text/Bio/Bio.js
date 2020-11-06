import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import AuthorPhoto from './AuthorPhoto/AuthorPhoto';
import AuthorLinks from './SocialLinks/AuthorLinks';
import AuthorWorks from './SelectedWorks/AuthorWorks';
import Separator from '../../UI/Separator/Separator';
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
  font-family: ${props => props.theme.serif};
`;

const Heading = styled.div`
  text-align: center;
  padding: 5px;
  font-family: ${props => props.theme.serif};
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
            <Separator/>
            <Heading>{WEBSITE_TEXT.text.bio.moreInfo}</Heading>
            <AuthorLinks
                links={AUTHOR_LINKS[props.issueNumber - 1].links}
            />
            <Separator/>
            <Heading>{WEBSITE_TEXT.text.bio.selectedWorks}</Heading>
            <AuthorWorks
                works={AUTHOR_LINKS[props.issueNumber - 1].works}
            />
            <Separator/>
        </React.Fragment>
    );
};

export default Bio;