import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from "redux";
import {Route, Switch, withRouter} from 'react-router-dom';
import {Redirect} from 'react-router';
import {createGlobalStyle} from 'styled-components';

import IssueList from '../IssueList/IssueList';
import Text from '../Text/Text';
import About from '../About/About';
import Spinner from '../UI/Spinner/Spinner';

import {WP_URL_FRAGMENT} from '../../data/constants';
import {setPageLoaded, setError, setIssues} from '../../actions/index';

/* STYLED COMPONENTS */
const GlobalStyle = createGlobalStyle`
    body {
        font-family: ${props => props.theme.sansSerif};
        color: ${props => props.theme.darkColor};
        background-color: ${props => props.theme.lightColor};
        min-height: 100vh;
        }
        
    a {
        text-decoration: none;
        color: ${props => props.theme.darkColor};

    }
    
    ::selection {
        color: ${props => props.theme.lightColor};
        background-color: ${props => props.theme.themeColor};
     }
`;

const Home = (props) => {

    //Wordpress API URL
    const WP_API_URL = process.env.REACT_APP_WP_API_URL;

    //updates store with the fetched issues
    const updateIssues = (issues) => {
        props.setIssues(issues);
    };

    //updates loading status as loaded
    const setAsLoaded = () => {
        setTimeout(() => props.setPageLoaded(true), 400);
    };

    //updates loading status as not loaded, then changes it back to loaded
    const setTempAsNotLoaded = () => {
        props.setPageLoaded(false);
        setTimeout(() => props.setPageLoaded(true), 400);
    };

    //updates error status to true
    const setError = () => {
        props.setError(true);
    };

    //Compiles an object containing all issue data based on an array of data of individual texts
    const compileIssue = (issueNo, date, issueTexts) => {

        //Retrieve author's name from the title of the last text of an issue,
        //which always contains the author bio
        const author = issueTexts[issueTexts.length - 1].title;

        //Retrieve author bio from the the last text of the previous issue
        const bio = issueTexts[issueTexts.length - 1];

        //Retrieve issue texts by removing the last item (bio)
        const textsWithoutBio = issueTexts.slice(0, -1);

        //Add issue data (issue number, publication date, author name, texts & author bio)
        //to the issue array
        return {
            issue: issueNo.toString(),
            date: date,
            author: author,
            texts: textsWithoutBio,
            bio: bio
        };
    };

    //Adds missing attributes to links so that they open in a new tab
    const addLinkAttributes = (str) => {
        return str.replace(new RegExp('\">', 'g'), '\" target=\"_blank\" rel=\"noopener noreferrer\">');
        return str.replace('">', '" target="_blank" rel="noopener noreferrer">');
    };
    //Processes fetched Wordpress data into an array containing texts devided into issues
    const processTexts = (texts) => {

        //reverse the array so that the oldest texts are first
        texts.reverse();

        //variable to temporarily hold texts
        let temporaryTexts = [];

        //variable to hold texts divided into issues
        let issues = [];

        //variable specifying the current issue while looping through texts
        let currentIssue = 1;

        //loop through the text array and retrieve necessary data and content
        for (let i = 0; i < texts.length; i++) {
            // Split the Wordpress post title which has the format:
            // X_Some text, at "_" and retrieve
            // the issue number (X) and text title (Some text)
            const [issue, title] = texts[i].title.rendered.split("_");

            //content of the text
            const content = addLinkAttributes(texts[i].content.rendered);

            //slug pointing to the text
            const slug = texts[i].slug;


            //if the current text belongs to a new issue
            if (Number(issue) > currentIssue) {

                //retrive date of publication from the last text belonging to the previous issue
                const date = texts[i - 1].date;

                //Add issue data (issue number, publication date, author name, texts & author bio)
                //to the issue array
                issues.push(compileIssue(currentIssue, date, temporaryTexts));


                //replace the content temporary text array with the last item (containing the text from the new issue
                temporaryTexts = [];

                //update the issue counter with the next issue number
                currentIssue = issue;
            }

            //add the text title, content, slug and date to the temporary text list
            temporaryTexts.push(
                {
                    title,
                    content,
                    slug
                }
            );

            //if this is the last of the fetched texts,
            // update the issue template with the issue data
            if (i === texts.length - 1) {
                //date of publication
                const date = texts[i].date;

                issues.push(compileIssue(currentIssue, date, temporaryTexts));
            }
        }

        return issues;

    };

    //fetches texts from the Wordpress blog
    const loadTexts = () => {
        fetch(WP_API_URL + WP_URL_FRAGMENT).then(response => {
            return response.json();
        }).then(texts => {
            //process the data to organise texts into issues
            const issueData = processTexts(texts);

            //update the store with the organised issue data
            updateIssues(issueData);

            //set the page as loaded to turn off spinner
            setAsLoaded();
        }).catch(err => {
            //Change error status in the Redux store
            setError();

            //set the page as loaded to turn off spinner
            setAsLoaded();
        });
    };

    useEffect(() => {
        //load texts from Wordpress blog
        loadTexts();
    }, [WP_API_URL]);

    useEffect(() => {
        //once texts are loaded, show spinner temporarily when URL changes
        if (props.issues.length > 1) setTempAsNotLoaded();
    }, [props.match.params]);

    return (
        <React.Fragment>
            <GlobalStyle />
            <Switch>
                <Route path="/" exact component={IssueList} key="home"/>
                <Route path="/info" exact component={IssueList} key="about"/>
                <Route path="/:issue/:slug" exact component={Text} key="text"/>
                <Route render={() => (<Redirect to="/"/>)} key="default"/>
            </Switch>
            {!props.pageLoaded && <Spinner />}
        </React.Fragment>
    );
};

const mapStateToProps = state => {
    return {
        pageLoaded: state.pageLoaded,
        issues: state.issues
    }
};

const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        setPageLoaded,
        setError,
        setIssues
    }, dispatch);
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Home));