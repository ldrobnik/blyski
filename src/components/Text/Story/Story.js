import React from 'react';
import Markdown from 'markdown-to-jsx/dist/index.js';
import {WEBSITE_TEXT} from '../../../data/constants';
import {StoryTextTitle, StoryAuthor, StoryTranslatedBy, StoryTextBody} from '../../../styled';

const Story = props => {

    return (
        <React.Fragment>
            <StoryAuthor>{props.author}</StoryAuthor>
            <StoryTextTitle>{props.textTitle}</StoryTextTitle>
            <StoryTranslatedBy>{WEBSITE_TEXT.issueList.translator}</StoryTranslatedBy>
            <StoryTextBody dangerouslySetInnerHTML={{__html: props.textContent}}/>
        </React.Fragment>
    );
};

export default Story;