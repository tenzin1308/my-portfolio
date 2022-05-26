import React from 'react';
import styled from 'styled-components';
import AboutImg from '../assets/images/about-page-img.jpg';
import AboutInfoItem from '../components/AboutInfoItem';
import Button from '../components/Button';
import ContactBanner from '../components/ContactBanner';
import PText from '../components/PText';

const AboutPageStyle = styled.div`
  padding: 20rem 0 10rem 0;
  .top-section {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
  }
  .left {
    flex: 3;
  }
  .right {
    flex: 2;
  }
  .about__subheading {
    font-size: 2.2rem;
    margin-bottom: 2rem;
    span {
      background-color: var(--deep-dark);
      padding: 0.5rem;
      border-radius: 8px;
    }
  }
  .about__heading {
    font-size: 3.6rem;
    margin-bottom: 3rem;
  }
  .about__info {
    margin-bottom: 4rem;
    .para {
      max-width: 100%;
    }
  }
  .right {
    img {
      border: 2px solid var(--gray-1);
    }
  }
  .about__info__items {
    margin-top: 15rem;
  }
  .about__info__item {
    margin-top: 10rem;
  }
  .about__info__heading {
    font-size: 3.6rem;
    text-transform: uppercase;
  }
  @media only screen and (max-width: 768px) {
    padding: 10rem 0;
    .top-section {
      flex-direction: column;
      gap: 5rem;
    }
    .about__subheading {
      font-size: 1.8rem;
    }
    .about__heading {
      font-size: 2.8rem;
    }
    .about__info__heading {
      font-size: 3rem;
    }
  }
`;
export default function About() {
  return (
    <AboutPageStyle>
      <div className="container">
        <div className="top-section">
          <div className="left">
            <p className="about__subheading">
              Hi i am <span>Tenzin Tashi</span>
            </p>
            <h2 className="about__heading">Software Engineer</h2>
            <div className="about__info">
              <PText>
                I am currently a senior at City College of New York getting my
                bachelor’s degree in computer science, my interests lie in the
                field of programming. Hence, during my journey I have worked on
                many projects in additional to the class project. Also, last
                summer I did 6 months long internship as software engineer in a
                financial company where I gained lots of hands-on experience and
                get a chance to put my knowledge to practice.
                <br /> <br />
                Software engineering is a field where there’s always room to
                learn and grow, and I am a person who’s always had an eager to
                learn more and learn new things. What I also find exciting about
                the field is the proactivity that it requires, the fast pace of
                change and the problem solving. With the wave of technology
                there are always new thing coming out and I find that thrilling.
                <br /> <br />
                My career goal is to start as a software engineer, later with
                the experience and knowledge I gain I’d become a senior/staff
                engineer.
                <br /> <br />
              </PText>
            </div>
            {/* Link the resume here */}
            <Button
              btnText="Download CV"
              btnLink="https://www.dropbox.com/s/dly25hckv0emcuy/Tenzin%20Tashi%20.pdf?dl=0"
              download
            />
          </div>
          <div className="right">
            <img src={AboutImg} alt="Tenzin Tashi" />
          </div>
        </div>
        <div className="about__info__items">
          {/* Education */}
          <div className="about__info__item">
            <h1 className="about__info__heading">Education</h1>
            <AboutInfoItem
              title="School"
              items={['City College of New York (CCNY)']}
            />
            <AboutInfoItem title="Major" items={['Computer Science']} />
            <AboutInfoItem title="GPA" items={['3.847']} />
            <AboutInfoItem title="Graduation Year" items={['June 2022']} />
          </div>
          {/* Experience */}
          <div className="about__info__item">
            <h1 className="about__info__heading">Experience</h1>
            <AboutInfoItem
              title="Software Engineer"
              items={['American Express', 'Aug 2022 - Present']}
            />
            <AboutInfoItem
              title="Software Engineer (Intern)"
              items={['Numeraxial LLC', 'Jun 2021 - Dec 2021']}
            />
            <AboutInfoItem
              title="Student Technology Mentor"
              items={['LaGuardia Community College', 'July 2019 - Jun 2022']}
            />
            <AboutInfoItem
              title="Academic Peer Instructor"
              items={['LaGuardia Community College', 'March 2019 - Jun 2019']}
            />
          </div>
          {/* Hackathons */}
          <div className="about__info__item">
            <h1 className="about__info__heading">Hackathons</h1>
            <AboutInfoItem
              title="CUNY Hackathon 2019"
              items={['Budget-It', 'Java Desktop Application']}
            />
          </div>
          {/* Skill */}
          <div className="about__info__item">
            <h1 className="about__info__heading">My Skill</h1>
            <AboutInfoItem
              title="Programming Languages"
              items={['Java', 'Python', 'C++', 'React']}
            />
            <AboutInfoItem
              title="Tools"
              items={['NetBeans', 'XCode', 'VSCode', 'PyCharm']}
            />
          </div>
        </div>
      </div>
      <ContactBanner />
    </AboutPageStyle>
  );
}
