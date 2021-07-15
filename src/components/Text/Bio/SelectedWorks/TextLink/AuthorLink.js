import React from 'react';

import {AuthorStyledLink} from "../../../../../styled";

const AuthorLink = props => {

    return (
        <AuthorStyledLink
                    href={props.url}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    {props.title}
        </AuthorStyledLink>
    );
};

export default AuthorLink;