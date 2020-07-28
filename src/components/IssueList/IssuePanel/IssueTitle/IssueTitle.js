import React, {useState, useEffect} from 'react';
import styled from 'styled-components';

const Heading = styled.div`

`;

const IssueTitle = (props) => {

    //adds 0 for issue numbers below 10
    const formatIssueNumber = (issueNumber) => {
      if (issueNumber < 10) {
          return "0" + issueNumber;
      }  else {
          return issueNumber;
      }
    };

    return (
        <Heading>

        </Heading>
    );
};

export default IssueTitle;