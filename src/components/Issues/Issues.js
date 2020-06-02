import React, {useState, useEffect} from 'react';
import styled from 'styled-components';

import { WP_URL_FRAGMENT } from '../../data/constants';

const IssueList = styled.div`

`;

const Issues = (props) => {

    //Wordpress API URL
    const WP_API_URL = process.env.REACT_APP_WP_API_URL;

    useEffect(() => {

        //loads blog posts
        async function loadPosts() {
            fetch(WP_API_URL + WP_URL_FRAGMENT).then(response => {
                return response.json();
            }).then(issues => {
                console.log(issues);
            }).catch(err => {
            });
        }

        loadPosts();
    }, [WP_API_URL]);

    return (
        <IssueList>
            Issues
        </IssueList>
    );
};

export default Issues;