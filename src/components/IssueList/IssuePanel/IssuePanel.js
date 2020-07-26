import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import {Link} from "react-router-dom";
import moment from 'moment';
import 'moment/locale/pl';

/* STYLED COMPONENTS */
const IssueWrapper = styled.div`
 border: 1px solid ${props => props.theme.themeColor};
 margin: 20px;
 padding: 20px;
 width: 80%;
`;

const IssuePanel = props => {

    return (
        <IssueWrapper>
                <h1>Numer {props.issue}</h1>
                <h4>{moment(props.date).locale('pl').format('MMMM YYYY')}</h4>
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