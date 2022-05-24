import React from 'react';
import { FaGithubAlt, FaInstagram, FaLinkedin } from 'react-icons/fa';
import styled from 'styled-components';
import SectionTitle from './SectionTitle';
import SocialMediaSectionItem from './SocialMediaSectionItem';

const SocialMediaSectionStyle = styled.div`
  padding: 10rem 0;
  .socialMedia__allItems {
    display: flex;
    gap: 10rem;
    justify-content: space-between;
    margin-top: 5rem;
  }
  @media only screen and (max-width: 768px) {
    .socialMedia__allItems {
      flex-direction: column;
      max-width: 350px;
      margin: 0 auto;
      margin-top: 5rem;
      gap: 5rem;
    }
  }
`;
export default function SocialMediaSection() {
  return (
    <SocialMediaSectionStyle>
      <div className="container">
        <SectionTitle heading="Social Media" subheading="lets connect" />
        <div className="socialMedia__allItems">
          <SocialMediaSectionItem
            icon={<FaLinkedin />}
            title="LinkedIn"
            desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          />
          <SocialMediaSectionItem
            icon={<FaGithubAlt />}
            title="Github"
            desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          />
          <SocialMediaSectionItem
            icon={<FaInstagram />}
            title="Instagram"
            desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          />
        </div>
      </div>
    </SocialMediaSectionStyle>
  );
}
