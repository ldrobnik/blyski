import React from 'react';
import styled from 'styled-components';
import HoverableButton from '../../../UI/HoverableButton/HoverableButton';

const MenuWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SocialIcons = styled.div`
  margin: 5px;
  padding: 10px;
  display: inline-block;
  
  div, a {
  max-height: 30px;
  }
`;

const SocialLinks = props => {

    return (
        <MenuWrapper>
            <SocialIcons>
                {props.links.map((link) => {
                    return (
                        <HoverableButton
                            key={link.url}
                            path={link.url}
                            message={link.icon}
                        />
                    )
                })}
            </SocialIcons>
        </MenuWrapper>
    );
};

export default SocialLinks;