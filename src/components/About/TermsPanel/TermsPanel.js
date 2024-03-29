import React from 'react';
import Logo from '../../UI/Logo/Logo';
import Separator from '../../UI/Separator/Separator';
import CopyrightNote from '../AboutPanel/CopyrightNote/CopyrightNote';
import {
    AboutBox,
    AboutTitle,
    AboutJournalName,
    AboutJournalSubtitle,
    AboutMainContent,
    AboutSecondaryContent
} from '../../../styled';
import {WEBSITE_TEXT, GLIDER_FRAME} from '../../../data/constants';

const TermsPanel = props => {

    return (
        <AboutBox>
            <AboutTitle>
                <Logo
                    logoFrame={GLIDER_FRAME}
                    inverted={true}/>
                <div>
                    <AboutJournalName>
                        {WEBSITE_TEXT.about.title}
                    </AboutJournalName>
                    <AboutJournalSubtitle>
                        {WEBSITE_TEXT.pubTerms.subtitle}
                    </AboutJournalSubtitle>
                </div>
            </AboutTitle>
            <AboutMainContent>
                {WEBSITE_TEXT.pubTerms.content}
            </AboutMainContent>
            <Separator inverted={true}/>
            <AboutMainContent>
                {WEBSITE_TEXT.pubTerms.deal}
            </AboutMainContent>
            <Separator inverted={true}/>
            <AboutSecondaryContent>
                <p>{WEBSITE_TEXT.pubTerms.contact}</p>
            </AboutSecondaryContent>
            <CopyrightNote/>
        </AboutBox>
    );
};

export default TermsPanel;