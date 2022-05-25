import React from 'react';
import { MdDesktopMac } from 'react-icons/md';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import PText from './PText';

const SocialMediaSectionItemStyle = styled.div`
  text-align: center;
  .socialMedia__icon {
    svg {
      width: 3rem;
    }
  }
  .socialMedia__title {
    font-size: 2.5rem;
    font-family: 'Montserrat SemiBold';
  }
  .para {
    margin-top: 2rem;
  }
`;

export default function SocialMediaSectionItem({
  icon = <MdDesktopMac />,
  title = 'This is title',
  desc = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  linkTo = '#',
}) {
  return (
    <SocialMediaSectionItemStyle>
      <Link to={{ pathname: linkTo }} target="_blank">
        <div className="socialMedia__icon">{icon}</div>
        <div className="socialMedia__title">{title}</div>
        <PText>{desc}</PText>
      </Link>
    </SocialMediaSectionItemStyle>
  );
}
