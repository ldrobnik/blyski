import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
const List = styled.div`

`;

const IssueList = (props) => {

    const [issues, updateIssues] = useState();
    return (
        <List>
            Issues
        </List>
    );
};

export default IssueList;