import React, {useState, useEffect} from 'react';
import styled from 'styled-components';

import {WP_URL_FRAGMENT} from '../../data/constants';

const List = styled.div`

`;

const IssueList = (props) => {

    //Wordpress API URL
    const WP_API_URL = process.env.REACT_APP_WP_API_URL;

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
            const content = texts[i].content.rendered;

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

    useEffect(() => {

        //fetches texts from the Worpdress blog
        async function loadTexts() {
            fetch(WP_API_URL + WP_URL_FRAGMENT).then(response => {
                return response.json();
            }).then(texts => {
                console.log(processTexts(texts));
            }).catch(err => {
            });
        }

        loadTexts();
    }, [WP_API_URL]);

    return (
        <List>
            Issues
        </List>
    );
};

export default IssueList;