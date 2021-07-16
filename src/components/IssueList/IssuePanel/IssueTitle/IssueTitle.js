import React from 'react';
import Logo from '../../../UI/Logo/Logo';
import {TitleOfIssue, IssueName, IssueDate} from '../../../../styled';
import {formatIssueNumber} from '../../../../data/constants';

const IssueTitle = (props) => {

    return (
        <React.Fragment>
            <TitleOfIssue>
                <Logo
                    logoFrame={(props.issue - 1) % 4}
                />
                <div>
                    <IssueName>
                        {formatIssueNumber(props.issue)}
                    </IssueName>
                    <IssueDate>
                        {props.date}
                    </IssueDate>
                </div>
            </TitleOfIssue>
        </React.Fragment>
    );
};

export default IssueTitle;