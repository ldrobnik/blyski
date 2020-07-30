import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import {Link} from "react-router-dom";
import moment from 'moment';
import 'moment/locale/pl';
import IssueTitle from './IssueTitle/IssueTitle';
import HoverableButton from '../../UI/HoverableButton/HoverableButton';
import {WEBSITE_TEXT} from "../../../data/constants";

/* STYLED COMPONENTS */
const IssueWrapper = styled.div`
 border: 2px solid ${props => props.theme.themeColor};
 box-shadow: 20px 20px ${props => props.theme.themeColor};
 text-align: center;
 margin: 30px;
 padding: 40px;
 width: 50%;
 
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

const AuthorName = styled.div`
  padding-top: 20px;
  font-size: 3em;
  font-weight: bold;
  color: ${props => props.theme.darkColor};
  
 
  @media all and (max-width: 700px) {
  font-size: 2.5em;
  }
  
  @media all and (max-width: 552px) {
      font-size: 2em;
    }

  @media all and (max-width: 350px) {
      font-size: 1.5em;
    }
    
   @media all and (max-width: 250px) {
      font-size: 1em;
    }
  
`;

const Texts = styled.div`
  padding: 20px 0;
`;

const IssuePanel = props => {

    return (
        <IssueWrapper>
            <IssueTitle
                issue={props.issue}
                date={moment(props.date).locale('pl').format('MMMM YYYY')}
            />
                <AuthorName>{props.author}</AuthorName>
                <Texts>
                    {props.texts.map((text) => {
                            return (
                                <HoverableButton
                                    key={text.title}
                                    path={`${props.issue}/${text.slug}`}
                                    message={text.title}
                                />
                            )
                        }
                    )}
                </Texts>
                <HoverableButton
                    path={`${props.issue}/bio`}
                    message={WEBSITE_TEXT.issueList.bio}
                />
        </IssueWrapper>
    );
};

export default IssuePanel;