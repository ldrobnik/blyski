import React, {useState, useEffect} from 'react';
import styled from 'styled-components';

import { WP_URL_FRAGMENT } from '../../data/constants';

const List = styled.div`

`;

const IssueList = (props) => {

    //Wordpress API URL
    const WP_API_URL = process.env.REACT_APP_WP_API_URL;

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
        for (let i = 0; i <= texts.length; i++) {
            // Split the Wordpress post title which has the format:
            // X_Some text, at "_" and retrieve
            // the issue number (X) and text title (Some text)
            const [issue, title] = texts[i].title.rendered.split("_");

            //content of the text
            const content = texts[i].content.rendered;

            //date of publication
            const date = texts[i].date;

            //slug pointing to the text
            const slug = texts[i].slug;


            //if the current text belongs to a new issue or if this is the last of the fetched texts,
            // update the issue template with the previous issue data
            if (issue > currentIssue) {
                //Retrieve issue publication date from the publication date of the first text
                const issueDate = temporaryTexts[0].date;

                //Retrieve author's name from the title of the last text of an issue,
                //which always contains the author bio
                const author = temporaryTexts[temporaryTexts.length - 1].title;

                //Retrieve author bio from the the last text of the previous issue
                const bio = temporaryTexts[temporaryTexts.length - 1];

                //Add issue data (issue number, publication date, author name, texts & author bio)
                //to the issue array
                issues.push(
                    {
                        issue: issue,
                        date: issueDate,
                        author: author,
                        texts: temporaryTexts,
                        bio: bio
                    }
                );
                //replace the content temporary text array with the last item (containing the text from the new issue

                temporaryTexts = [];

                //update the issue counter with the next issue number
                currentIssue = issue;
            }

            temporaryTexts.push(
                {
                    title,
                    content,
                    slug,
                    date
                }
            );
        }

        //add the text title, content, slug and date to the temporary text list

      console.log(issues);
    };

    useEffect(() => {

        //fetches texts from the Worpdress blog
        async function loadTexts() {
            fetch(WP_API_URL + WP_URL_FRAGMENT).then(response => {
                return response.json();
            }).then(texts => {
                processTexts(texts);
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