import React, {useState, useEffect} from 'react';
import styled from 'styled-components';

import { WP_URL_FRAGMENT } from '../../data/constants';

const List = styled.div`

`;

const IssueList = (props) => {

    //Wordpress API URL
    const WP_API_URL = process.env.REACT_APP_WP_API_URL;



    useEffect(() => {

        //fetches texts from the Worpdress blog
        async function loadTexts() {
            fetch(WP_API_URL + WP_URL_FRAGMENT).then(response => {
                return response.json();
            }).then(issues => {
                console.log(issues);
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