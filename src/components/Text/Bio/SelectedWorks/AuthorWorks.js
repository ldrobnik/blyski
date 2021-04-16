import React from 'react';
import styled from 'styled-components';
import AuthorLink from './TextLink/AuthorLink';

const ListWrapper = styled.div`
  text-align: center;
`;

const LinkList = styled.div`
  margin: 5px;
  padding: 10px;
`;

const Heading = styled.div`
  text-align: center;
  font-style: italic;
  padding: 5px;
  font-family: ${props => props.theme.serif};
`;

const AuthorWorks = props => {

    return (
        <ListWrapper>
            <LinkList>
                {props.works.map((selection) => {
                    return (
                        <div key={selection.heading + '_key'}>
                            {selection.heading && <Heading>{selection.heading}</Heading>}
                            <div>
                                {selection.links.map((link) => {
                                return (
                                <AuthorLink
                                key={link.url}
                                url={link.url}
                                title={link.title}
                                />
                                );
                            })}
                            </div>

                        </div>
                    )
                })}
                    </LinkList>
                    </ListWrapper>
                    );
                };

                    export default AuthorWorks;