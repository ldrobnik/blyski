import React from 'react';

import {CreditsWrapper, AuthorName, TranslatorName} from "../../../../styled";
import {WEBSITE_TEXT} from "../../../../data/constants";


const AuthorCredits = (props) => {

    return (
        <CreditsWrapper>
            <AuthorName>{props.author}</AuthorName>
            <TranslatorName>{WEBSITE_TEXT.issueList.translator}</TranslatorName>
        </CreditsWrapper>
    );
};

export default AuthorCredits;