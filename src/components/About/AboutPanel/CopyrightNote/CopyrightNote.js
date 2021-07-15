import React from 'react';

import {CopyrightNoteWrapper} from '../../../../styled';
import {WEBSITE_TEXT} from "../../../../data/constants";

const CopyrightNote = (props) => {

    return (
        <CopyrightNoteWrapper>
            {WEBSITE_TEXT.about.copyright}
        </CopyrightNoteWrapper>
    );
};

export default CopyrightNote;