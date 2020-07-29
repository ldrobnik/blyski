import React, {useState, useEffect} from 'react';
import {useHistory, Link} from 'react-router-dom';
import {connect} from 'react-redux';
import styled from 'styled-components';

const TextWrapper = styled.div`
  border: 2px solid ${props => props.theme.themeColor};
  box-shadow: 20px 20px ${props => props.theme.themeColor};
`;

const Text = (props) => {

    let history = useHistory();

    //based on the url, checks which text from which issue should be displayed
    const checkTextID = (issue, slug) => {

        //if slug is 'bio', return '-2'
        if (slug === 'bio') return -2;

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

    //if issue number doesn't exceed array length get text id based on url parameters
    let textID = (issueNumber <= props.issues.length) ? checkTextID(issueNumber, props.match.params.slug) : -1;

    useEffect(() => {


        if (props.pageLoaded) {

            //if the issue and slug don't match fetched data, redirect to home page
            if (textID === -1) {
                history.push('/');
            }
        }
    });

    return (
        <TextWrapper>
            {(props.pageLoaded && (textID !== -1) && (textID !== -2)) &&
            <React.Fragment>
                <h3>{props.issues[issueNumber - 1].texts[textID].title}</h3>
                <div
                    dangerouslySetInnerHTML={{__html: props.issues[issueNumber - 1].texts[textID].content}}
                />
                <Link to='/'><strong>strona główna</strong></Link>
            </React.Fragment>}
            {(props.pageLoaded && (textID === -2)) &&
            <React.Fragment>
                <h3>{props.issues[issueNumber - 1].bio.title}</h3>
                <div
                    dangerouslySetInnerHTML={{__html: props.issues[issueNumber - 1].bio.content}}
                />
                <Link to='/'><strong>strona główna</strong></Link>
            </React.Fragment>}
        </TextWrapper>
    );
};

const mapStateToProps = state => {
    return {
        pageLoaded: state.pageLoaded,
        issues: state.issues
    }
};

export default connect(mapStateToProps)(Text);