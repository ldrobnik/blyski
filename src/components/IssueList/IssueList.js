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

        for (const text of texts) {
            //Retrieve issue number and text title from
            // Split the Wordpress post title which has the format:
            // X_Some text, at "_" and retrieve
            // the issue number (X) and text title (Some text)
            const [issueNo, title] = text.title.rendered.split("_");

            //content of the text
            const content = text.content.rendered;

            //date of publication
            const date = text.date;

            //slug pointing to the text
            const slug = text.slug;

            //add text data to the temporary text template
            temporaryTexts.push(
                {
                    title,
                    content,
                    slug
                }
            );
        }

      console.log(temporaryTexts);
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