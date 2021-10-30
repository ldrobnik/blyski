import React, {useState, useEffect} from 'react';
import Markdown from 'markdown-to-jsx/dist/index.js';
import AuthorPhoto from './AuthorPhoto/AuthorPhoto';
import AuthorLinks from './SocialLinks/AuthorLinks';
import AuthorWorks from './SelectedWorks/AuthorWorks';
import Separator from '../../UI/Separator/Separator';
import {BioAuthor, BioTextBody, BioHeading} from '../../../styled';
import {WEBSITE_TEXT, AUTHOR_LINKS} from '../../../data/constants';

const Bio = props => {
    return (
        <React.Fragment>
            <BioAuthor>{props.author}</BioAuthor>
            <AuthorPhoto
                issueNumber={props.issueNumber}
                author={props.author}
            />
            <BioTextBody
                dangerouslySetInnerHTML={{__html: props.textContent}}
            />
            <Separator/>
            <BioHeading>{WEBSITE_TEXT.text.bio.moreInfo}</BioHeading>
            <AuthorLinks
                links={AUTHOR_LINKS[props.issueNumber - 1].links}
            />
            <Separator/>
            <BioHeading>{WEBSITE_TEXT.text.bio.selectedWorks}</BioHeading>
            <AuthorWorks
                works={AUTHOR_LINKS[props.issueNumber - 1].works}
            />
        </React.Fragment>
    );
};

export default Bio;