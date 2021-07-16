import React from 'react';
import HoverableButton from '../../UI/HoverableButton/HoverableButton';
import InactiveButton from '../../UI/InactiveButton/InactiveButton';
import IssueButton from '../IssueButton/IssueButton';
import {TextNavTitleWrapper, TextNavTitle, TextNavWrapper, TextNav} from '../../../styled';
import {WEBSITE_TEXT, formatIssueNumber} from '../../../data/constants';

const TextNavbar = props => {

    return (
        <React.Fragment>
            <TextNavTitleWrapper>
                <TextNavTitle>
                    <IssueButton
                        path={`/${props.issueNumber}`}
                        message={formatIssueNumber(props.issueNumber)}/>
                </TextNavTitle>
            </TextNavTitleWrapper>
            <TextNavWrapper>
                <TextNav>
                    {WEBSITE_TEXT.text.navbar.textNumbers.map((navlink, index) => {
                        return (
                            <React.Fragment key={index}>
                                {(index === props.textID) ?

                                    <InactiveButton
                                        message={navlink}
                                    />
                                    :
                                    <HoverableButton
                                        path={`/${props.issueNumber}/${props.texts[index].slug}`}
                                        message={navlink}
                                    />}
                            </React.Fragment>
                        )
                    })}
                    {(props.textID === -2) ?

                        <InactiveButton
                            message={WEBSITE_TEXT.text.navbar.bio}
                        />
                        :
                        <HoverableButton
                            path={`/${props.issueNumber}/bio`}
                            message={WEBSITE_TEXT.text.navbar.bio}
                        />}
                    <HoverableButton
                        path="/"
                        message={WEBSITE_TEXT.text.navbar.home}
                    />
                </TextNav>
            </TextNavWrapper>
        </React.Fragment>
    );
};

export default TextNavbar;