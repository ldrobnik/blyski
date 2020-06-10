import React, {useState, useEffect} from 'react';
import {bindActionCreators} from "redux";
import {Route, Switch, withRouter} from 'react-router-dom';
import {Redirect} from 'react-router';
import {connect} from 'react-redux';
import {createGlobalStyle} from 'styled-components';

import IssueList from '../IssueList/IssueList';

/* STYLED COMPONENTS */
const GlobalStyle = createGlobalStyle`
    body {
        font-family: ${props => props.theme.sansSerif};
        color: ${props => props.theme.darkColor};
        background: linear-gradient(145deg, ${props => props.theme.color1}, ${props => props.theme.color2});
        min-height: 100vh;
        }
        
    a {
        text-decoration: none;
        color: ${props => props.theme.darkColor};

    }
     
     ::selection {
        color: ${props => props.theme.color1};
        background-color: ${props => props.theme.darkColor};
     }
`;

const Home = (props) => {

    return (
        <React.Fragment>
            <GlobalStyle />
            <IssueList />
        </React.Fragment>
    );
};

export default Home;