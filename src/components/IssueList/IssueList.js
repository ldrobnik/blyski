import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import styled from 'styled-components';
import moment from 'moment';
import 'moment/locale/pl';

import MainNavbar from './MainNavbar/MainNavbar';
import IssuePanel from './IssuePanel/IssuePanel';
import About from '../About/About';
import {WEBSITE_TEXT, AnimatedContent} from "../../data/constants";

const List = styled.div`
 display: flex;
 align-items: center;
 justify-content: center;
 flex-direction: column;
 
`;

const IssueList = (props) => {

    //specifies whether the content should be shown
    const [contentVisible, setContentVisible] = useState(false);

    useEffect(() => {
        //Scroll to top
        window.scrollTo(0, 0);

        //update document title
        document.title = WEBSITE_TEXT.title.main;

    }, []);

    useEffect(() => {
        if (props.pageLoaded) {
          setTimeout(() => setContentVisible(true), 1000);
        }
    }, [props.pageLoaded]);

    return (
        <AnimatedContent
            pose={contentVisible ? 'visible' : 'hidden'}>
            {props.pageLoaded && <MainNavbar />}
            <List>
                {
                    props.pageLoaded &&
                    [...props.issues].reverse().map((issue) => {
                        return (
                            <IssuePanel
                                key={issue.issue}
                                issue={issue.issue}
                                author={issue.author}
                                date={issue.date}
                                texts={issue.texts}
                            />
                        )
                    })
                }
            </List>
        </AnimatedContent>
    );
};

const mapStateToProps = state => {
    return {
        pageLoaded: state.pageLoaded,
        error: state.error,
        issues: state.issues
    }
};

export default connect(mapStateToProps)(IssueList);