import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import styled from 'styled-components';
import moment from 'moment';
import 'moment/locale/pl';

import IssuePanel from './IssuePanel/IssuePanel';

const List = styled.div`
 display: flex;
 align-items: center;
 justify-content: center;
 flex-direction: column;
 
`;

const IssueList = (props) => {

    return (
        <List>
            {
                props.pageLoaded &&
                props.issues.map((issue) => {
                    return (
                        <IssuePanel
                            key={issue.issue}
                            issue={issue.issue}
                            author={issue.author}
                            date={issue.date}
                            texts={issue.texts}
                        />
                    )
                })
            }
        </List>
    );
};

const mapStateToProps = state => {
    return {
        pageLoaded: state.pageLoaded,
        error: state.error,
        issues: state.issues
    }
};

export default connect(mapStateToProps)(IssueList);