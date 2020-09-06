import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import {Link} from "react-router-dom";
import moment from 'moment';
import 'moment/locale/pl';
import IssueTitle from './IssueTitle/IssueTitle';
import AuthorCredits from './AuthorCredits/AuthorCredits';
import HoverableButton from '../../UI/HoverableButton/HoverableButton';
import {WEBSITE_TEXT} from "../../../data/constants";

/* STYLED COMPONENTS */
const IssueWrapper = styled.div`
 border: 10px solid ${props => props.theme.themeColor};
 text-align: center;
 margin: 30px;
 padding: 40px;
 width: 50%;
 
 *::selection {
        color: ${props => props.theme.lightColor};
        background-color: ${props => props.theme.themeColor};
     }
 
 @media all and (max-width: 552px) {
      width: 95%;
      padding: 15px;
    }
 
 @media all and (max-width: 1000px) {
  width: 80%;
  padding:30px;
 } 
 
 @media all and (max-width: 1600px) {
  width: 60%;
  padding:30px;
 } 
`;

const Texts = styled.div`
  padding: 25px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

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
                <Texts>
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
                </Texts>
                <HoverableButton
                    path={`/${props.issue}/bio`}
                    message={WEBSITE_TEXT.issueList.bio}
                />
        </IssueWrapper>
    );
};

export default IssuePanel;