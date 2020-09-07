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

const AuthorWorks = props => {

    return (
        <ListWrapper>
            <LinkList>
                {props.works.map((work) => {
                    return (
                        <div>
                            <AuthorLink
                                key={work.url}
                                url={work.url}
                                title={work.title}
                            />
                        </div>
                    )
                })}
            </LinkList>
        </ListWrapper>
    );
};

export default AuthorWorks;