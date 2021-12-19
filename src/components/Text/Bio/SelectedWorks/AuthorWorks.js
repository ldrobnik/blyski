import React from 'react';
import AuthorLink from './TextLink/AuthorLink';
import {WorksListWrapper, WorksLinkWrapper, WorksLinkList, WorksHeading, WorksFootnote} from '../../../../styled';

const AuthorWorks = props => {

    return (
        <WorksListWrapper>
            <WorksLinkWrapper>
                {props.works.map((selection) => {
                    return (
                        <div key={selection.heading + '_key'}>
                            {selection.heading && <WorksHeading>{selection.heading}</WorksHeading>}
                            <WorksLinkList>
                                {selection.links.map((link) => {
                                    return (
                                        <AuthorLink
                                            key={link.url}
                                            url={link.url}
                                            title={link.title}
                                        />
                                    );
                                })}
                            </WorksLinkList>
                            {selection.footnote &&
                                <WorksFootnote>{selection.footnote}</WorksFootnote>
                            }

                        </div>
                    )
                })}
            </WorksLinkWrapper>
        </WorksListWrapper>
    );
};

export default AuthorWorks;