import React, {useState, useEffect} from 'react';
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
                            <h2>{issue.author}</h2>
                            <h4>{moment(issue.date).locale('pl').format('MMMM YYYY')}</h4>
                            <div>
                                {issue.texts.map((text) => {
                                    return(
                                        <div key={text.title}>
                                            <h3>{text.title}</h3>
                                            <div
                                                dangerouslySetInnerHTML={{__html: text.content}}
                                            />
                                        </div>
                                    )
                                    }

                                )}
                            </div>
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