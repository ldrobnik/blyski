import React, {useState, useEffect} from 'react';
import 'moment/locale/pl';
import MainNavbar from './MainNavbar/MainNavbar';
import IssuePanel from './IssuePanel/IssuePanel';
import HoverableButton from '../UI/HoverableButton/HoverableButton';
import {ListOfIssues} from '../../styled';
import {AnimatedContent} from '../../posed';
import {WEBSITE_TEXT, ISSUES, fadeTimeout, getRandomRotationClass} from '../../data/constants';
import Spinner from '../UI/Spinner/Spinner';
import {useHistory} from 'react-router-dom';

const IssueList = props => {

    //specifies whether the content should be shown
    const [contentVisible, setContentVisible] = useState(false);

    //specifies whether the spinner should be visible
    const [spinnerVisible, setSpinnerVisible] = useState(true);

    //class specifying spinner orientation
    const spinnerClass = getRandomRotationClass();

    let history = useHistory();

    //Array containing only published issues
    const publishedIssues = ISSUES.filter(issue => issue.published);

    useEffect(() => {
        //Scroll to top
        window.scrollTo(0, 0);

        //update document title
        document.title = WEBSITE_TEXT.title.main;

    }, []);

    useEffect(() => {
        if (props.match.params.issue) {
            //issue number present in the path converted into a number
            const issueNumber = Number(props.match.params.issue);

            console.log(issueNumber, publishedIssues);

            //if path leads to a non-existing issue, go to the main page
            if (issueNumber > publishedIssues.length || Number.isNaN(issueNumber)) {

                history.push('/');

            }
        }
    });

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
                    {!props.match.params.issue &&
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
                    {props.match.params.issue && ISSUES.length < Number(props.match.params.issue) &&
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
                    {props.match.params.issue && ISSUES.length >= Number(props.match.params.issue) && !ISSUES[props.match.params.issue - 1].published &&
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
                    {props.match.params.issue && ISSUES.length >= Number(props.match.params.issue) && ISSUES[props.match.params.issue - 1].published &&
                    <IssuePanel
                        issue={props.match.params.issue}
                        author={ISSUES[props.match.params.issue - 1].author}
                        date={ISSUES[props.match.params.issue - 1].date}
                        texts={ISSUES[props.match.params.issue - 1].texts}
                    />
                    }
                    {
                        props.match.params.issue && ISSUES.length >= Number(props.match.params.issue) && ISSUES[props.match.params.issue - 1].published &&
                        (ISSUES.length > 1)
                        && <HoverableButton
                            path='/'
                            message={WEBSITE_TEXT.issueList.homeButton}
                        />
                    }
                </ListOfIssues>
            </AnimatedContent>
            {spinnerVisible && <Spinner spinnerClass={spinnerClass}/>}
        </React.Fragment>
    );
};

export default IssueList;