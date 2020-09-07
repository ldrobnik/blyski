import React from 'react';
import styled from 'styled-components';
import TextLink from './TextLink/TextLink';

const ListWrapper = styled.div`
  text-align: center;
`;

const LinkList = styled.div`
  margin: 5px;
  padding: 10px;
`;

const SocialLinks = props => {

    return (
        <ListWrapper>
            <LinkList>
                {props.works.map((work) => {
                    return (
                        <div>
                            <TextLink
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

export default SocialLinks;