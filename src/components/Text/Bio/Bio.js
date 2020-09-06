import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import AuthorPhoto from './AuthorPhoto/AuthorPhoto';

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
        </React.Fragment>
    );
};

export default Bio;