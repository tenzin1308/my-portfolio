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
            desc="This is my LinkedIn Profile. Connect with me here to any professional or personal queries."
            linkTo="https://www.linkedin.com/in/tenz-tashi/"
          />
          <SocialMediaSectionItem
            icon={<FaGithubAlt />}
            title="Github"
            desc="Find all my projects' source code. I am always open to new projects."
            linkTo="https://github.com/tenzin1308"
          />
          <SocialMediaSectionItem
            icon={<FaInstagram />}
            title="Instagram"
            desc="Follow me on IG to get to know me better."
            linkTo="https://www.instagram.com/tz.1308/"
          />
        </div>
      </div>
    </SocialMediaSectionStyle>
  );
}
