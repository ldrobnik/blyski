import React, {useState, useEffect} from 'react';
import 'moment/locale/pl';
import MainNavbar from './MainNavbar/MainNavbar';
import IssuePanel from './IssuePanel/IssuePanel';
import HoverableButton from '../UI/HoverableButton/HoverableButton';
import {ListOfIssues} from '../../styled';
import {AnimatedContent} from '../../posed';
import {WEBSITE_TEXT, ISSUES, fadeTimeout} from '../../data/constants';
import Spinner from '../UI/Spinner/Spinner';

const IssueList = props => {

    //specifies whether the content should be shown
    const [contentVisible, setContentVisible] = useState(false);

    //specifies whether the spinner should be visible
    const [spinnerVisible, setSpinnerVisible] = useState(true);

    useEffect(() => {
        //Scroll to top
        window.scrollTo(0, 0);

        //update document title
        document.title = WEBSITE_TEXT.title.main;

    }, []);

    useEffect(() => {
        //when page loads, trigger fade-in animation and hide spinner
        setTimeout(() => setContentVisible(true), fadeTimeout);
        setTimeout(() => setSpinnerVisible(false), fadeTimeout);

    });

    /*The code below displays a list of all issues is the route is '/'
    * and only a specific issue if the route is '/:issueNumber'.
    * If there is more than one issue, a homepage button is displayed
    * so that the user can go back to the list of all issues.
    * The button is not showing if there is only one issue.
    */

    return (
        <React.Fragment>
            <AnimatedContent
                pose={contentVisible ? 'visible' : 'hidden'}>
                <MainNavbar/>
                <ListOfIssues>
                    {
                        ISSUES.map((issue, k) => {
                            return (
                                issue.published && <IssuePanel
                                    key={k}
                                    issue={k + 1}
                                    author={issue.author}
                                    date={issue.date}
                                    texts={issue.texts}
                                />
                            )
                        })
                    }
                    {props.match.params.issue &&
                    <IssuePanel
                        key={props.issues[props.match.params.issue - 1].issue}
                        issue={props.issues[props.match.params.issue - 1].issue}
                        author={props.issues[props.match.params.issue - 1].author}
                        date={props.issues[props.match.params.issue - 1].date}
                        texts={props.issues[props.match.params.issue - 1].texts}
                    />
                    }
                    {
                        props.match.params.issue &&
                        (ISSUES.length > 1)
                        && <HoverableButton
                            path='/'
                            message={WEBSITE_TEXT.issueList.homeButton}
                        />
                    }
                </ListOfIssues>
            </AnimatedContent>
            {spinnerVisible && <Spinner/>}
        </React.Fragment>
    );
};

export default IssueList;