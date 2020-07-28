import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import {Link} from "react-router-dom";
import moment from 'moment';
import 'moment/locale/pl';
import IssueTitle from './IssueTitle/IssueTitle';
import {WEBSITE_TEXT} from "../../../data/constants";

/* STYLED COMPONENTS */
const IssueWrapper = styled.div`
 border: 2px solid ${props => props.theme.themeColor};
 margin: 30px;
 padding: 40px;
 width: 50%;
 box-shadow: 20px 20px ${props => props.theme.themeColor};
 
 @media all and (max-width: 1000px) {
  width: 80%;
  padding:30px;
 } 
 
 @media all and (max-width: 1600px) {
  width: 60%;
  padding:30px;
 } 
`;

const IssuePanel = props => {

    return (
        <IssueWrapper>
            <IssueTitle
                issue={props.issue}
                date={moment(props.date).locale('pl').format('MMMM YYYY')}
            />
                <h2>{props.author}</h2>
                <div>
                    {props.texts.map((text) => {
                            return (
                                <p key={text.title}>
                                    <Link to={`${props.issue}/${text.slug}`}>
                                        {text.title}
                                    </Link>
                                </p>
                            )
                        }
                    )}
                </div>
                <Link to={`${props.issue}/bio`}>bio</Link>
        </IssueWrapper>
    );
};

export default IssuePanel;