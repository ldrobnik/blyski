import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import styled from 'styled-components';
import moment from 'moment';
import 'moment/locale/pl';

const List = styled.div`

`;

const IssueList = (props) => {

    return (
        <List>
            {
                props.pageLoaded &&
                props.issues.map((issue) => {
                    return (
                        <div key={issue.issue}>
                            <h1>Numer {issue.issue}</h1>
                            <h4>{moment(issue.date).locale('pl').format('MMMM YYYY')}</h4>
                            <h2>{issue.author}</h2>
                            <div>
                                {issue.texts.map((text) => {
                                        return (
                                            <p key={text.title}>
                                                <Link to={`${issue.issue}/${text.slug}`}>
                                                    {text.title}
                                                </Link>
                                            </p>
                                        )
                                    }
                                )}
                            </div>
                            <Link to={`${issue.issue}/bio`}>bio</Link>
                        </div>
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