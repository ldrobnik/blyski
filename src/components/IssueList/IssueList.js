import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import styled from 'styled-components';
import 'moment/locale/pl';

import MainNavbar from './MainNavbar/MainNavbar';
import IssuePanel from './IssuePanel/IssuePanel';
import ErrorMessage from '../UI/ErrorMessage/ErrorMessage';
import {WEBSITE_TEXT, AnimatedContent, fadeTimeout} from "../../data/constants";

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
        //when page loads, trigger fade-in animation after a while
        if (props.pageLoaded) {
            setTimeout(() => setContentVisible(true), fadeTimeout);
        }
    });

    return (
        <AnimatedContent
            pose={contentVisible ? 'visible' : 'hidden'}>
            {props.pageLoaded && <MainNavbar/>}
            <List>
                {
                    props.pageLoaded
                    && !props.issues[props.match.params.issue - 1]
                    && [...props.issues].reverse().map((issue) => {
                        return (
                            issue && <IssuePanel
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
            <List>
                {
                    props.pageLoaded
                    && props.match.params.issue
                    && props.issues[props.match.params.issue - 1]
                    && <IssuePanel
                        key={props.issues[props.match.params.issue - 1].issue}
                        issue={props.issues[props.match.params.issue - 1].issue}
                        author={props.issues[props.match.params.issue - 1].author}
                        date={props.issues[props.match.params.issue - 1].date}
                        texts={props.issues[props.match.params.issue - 1].texts}
                    />
                }
            </List>
            <ErrorMessage/>
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