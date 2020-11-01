import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import moment from 'moment';
import 'moment/locale/pl';
import IssueTitle from './IssueTitle/IssueTitle';
import AuthorCredits from './AuthorCredits/AuthorCredits';
import HoverableButton from '../../UI/HoverableButton/HoverableButton';
import Separator from '../../UI/Separator/Separator';
import {WEBSITE_TEXT} from "../../../data/constants";

/* STYLED COMPONENTS */
const IssueWrapper = styled.div`
 border: 10px solid ${props => props.theme.themeColor};
 text-align: center;
 width: 85%;
 padding: 15px;
 margin: 20px 0;
 max-width: 800px;
 
 *::selection {
        color: ${props => props.theme.lightColor};
        background-color: ${props => props.theme.themeColor};
     }
 
 @media all and (min-width: ${props => props.theme.smallScr}) {
  width: 90%;
  padding:30px 15px;
  margin: 20px 0;
 } 
 
  
 @media all and (min-width: ${props => props.theme.mediumScr}) {
  width: 70%;
  padding: 20px;
  margin: 30px 10px;
 } 
 
 @media all and (min-width: ${props => props.theme.largeScr}) {
  width: 60%;
  padding:30px;
  margin: 30px;
 } 
 
 @media all and (min-width: ${props => props.theme.extraLargeScr}) {
  width: 50%;
  padding:40px;
  margin: 30px;
 } 
`;

const Texts = styled.div`
  padding: 12px 0;
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
                <Separator/>
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
                <Separator/>
                <HoverableButton
                    path={`/${props.issue}/bio`}
                    message={WEBSITE_TEXT.issueList.bio}
                />
        </IssueWrapper>
    );
};

export default IssuePanel;