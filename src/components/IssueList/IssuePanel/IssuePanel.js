import React from 'react';
import moment from 'moment';
import 'moment/locale/pl';

import IssueTitle from './IssueTitle/IssueTitle';
import AuthorCredits from './AuthorCredits/AuthorCredits';
import HoverableButton from '../../UI/HoverableButton/HoverableButton';
import Separator from '../../UI/Separator/Separator';

import {IssueWrapper, IssueTexts} from "../../../styled";
import {WEBSITE_TEXT} from "../../../data/constants";

const IssuePanel = props => {

    return (
        <IssueWrapper>
            <IssueTitle
                issue={props.issue}
                date={moment(props.date).locale('pl').format('MMMM YYYY')}
            />
                <AuthorCredits
                    author={props.author}
                />
                <Separator/>
                <IssueTexts>
                    {props.texts.map((text) => {
                            return (
                                <HoverableButton
                                    key={text.title}
                                    path={`/${props.issue}/${text.slug}`}
                                    message={text.title}
                                />
                            )
                        }
                    )}
                </IssueTexts>
                <Separator/>
                <HoverableButton
                    path={`/${props.issue}/bio`}
                    message={WEBSITE_TEXT.issueList.bio}
                />
        </IssueWrapper>
    );
};

export default IssuePanel;