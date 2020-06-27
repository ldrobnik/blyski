import React, {useState, useEffect} from 'react';
import { useHistory } from 'react-router-dom';
import {connect} from 'react-redux';
import styled from 'styled-components';


const Text = (props) => {

    let history = useHistory();



    //based on the url, checks which text from which issue should be displayed
    const checkTextID = (issue, slug) => {

        //loop through the text of a given issue and return its idea if there's a match
        for (let i = 0; i < props.issues[issue - 1].texts.length; i++) {
            if (props.issues[issue - 1].texts[i].slug === slug) {
                return i;
            }
        }

        //if there's no match, return '-1'
        return -1;
    };

    //get issue number based on url parameter
    let issueNumber = props.match.params.issue;

    //get text id based on url parameters
    let textID = checkTextID(issueNumber, props.match.params.slug);

    useEffect(() => {

        console.log(issueNumber, textID);

        //if the issue and slug don't match fetched data, redirect to home page
        if (textID === -1 && props.pageLoaded) {
         history.push('/');
        }

    });

    return (
        <React.Fragment>
            {props.pageLoaded &&
            <div>
                <h3>{props.issues[issueNumber - 1].texts[textID].title}</h3>
                <div
                    dangerouslySetInnerHTML={{__html: props.issues[issueNumber - 1].texts[textID].content}}
                />
            </div>}
        </React.Fragment>
    );
};

const mapStateToProps = state => {
    return {
        pageLoaded: state.pageLoaded,
        issues: state.issues
    }
};

export default connect(mapStateToProps)(Text);