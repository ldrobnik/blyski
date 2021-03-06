import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import 'moment/locale/pl';
import MainNavbar from './MainNavbar/MainNavbar';
import IssuePanel from './IssuePanel/IssuePanel';
import HoverableButton from '../UI/HoverableButton/HoverableButton';
import ErrorMessage from '../UI/ErrorMessage/ErrorMessage';
import {ListOfIssues} from '../../styled';
import {AnimatedContent} from '../../posed';
import {WEBSITE_TEXT, fadeTimeout} from '../../data/constants';

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

    /*The code below displays a list of all issues is the route is '/'
    * and only a specific issue if the route is '/:issueNumber'.
    * If there is more than one issue, a homepage button is displayed
    * so that the user can go back to the list of all issues.
    * The button is not showing if there is only one issue.
    */

    return (
        <AnimatedContent
            pose={contentVisible ? 'visible' : 'hidden'}>
            {props.pageLoaded && <MainNavbar/>}
            <ListOfIssues>
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
                {
                    props.pageLoaded
                    && props.match.params.issue
                    && props.issues[props.match.params.issue - 1]
                    && (props.issues.length > 1)
                    && <HoverableButton
                        path='/'
                        message={WEBSITE_TEXT.issueList.homeButton}
                    />
                }
            </ListOfIssues>
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