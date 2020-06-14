import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import styled from 'styled-components';

const List = styled.div`

`;

const IssueList = (props) => {

    return (
        <List>
            {
                !props.pageLoaded &&
                <div>Issues</div>
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