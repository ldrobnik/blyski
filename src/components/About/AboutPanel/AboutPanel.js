import React from 'react';
import HoverableButton from '../../UI/HoverableButton/HoverableButton';
import Logo from '../../UI/Logo/Logo';
import Separator from '../../UI/Separator/Separator';
import CopyrightNote from './CopyrightNote/CopyrightNote';
import {
    AboutBox,
    AboutTitle,
    AboutJournalName,
    AboutJournalSubtitle,
    AboutMainContent,
    AboutSecondaryContent,
    AboutTernaryContent
} from '../../../styled';
import {WEBSITE_TEXT} from '../../../data/constants';

const AboutPanel = props => {

    return (
        <AboutBox>
            <AboutTitle>
                <Logo
                    logoFrame={0}
                    inverted={true}/>
                <div>
                    <AboutJournalName>
                        {WEBSITE_TEXT.about.title}
                    </AboutJournalName>
                    <AboutJournalSubtitle>
                        {WEBSITE_TEXT.about.subtitle}
                    </AboutJournalSubtitle>
                </div>
            </AboutTitle>
            <AboutMainContent>
                {WEBSITE_TEXT.about.content}
            </AboutMainContent>
            <Separator inverted={true}/>
            <AboutSecondaryContent>
                <p>{WEBSITE_TEXT.about.contact}</p>
            </AboutSecondaryContent>
            <AboutTernaryContent>
                <p>{WEBSITE_TEXT.about.disclaimer}</p>
            </AboutTernaryContent>
            <Separator inverted={true}/>
            <AboutSecondaryContent>
                <p>{WEBSITE_TEXT.about.credits}</p>
            </AboutSecondaryContent>
            <AboutTernaryContent>
                <p>{WEBSITE_TEXT.about.footnote}</p>
            </AboutTernaryContent>
            <CopyrightNote/>
            <Separator inverted={true}/>
            <HoverableButton
                path="/"
                message={WEBSITE_TEXT.about.button}
                inverted={true}
            />
        </AboutBox>
    );
};

export default AboutPanel;