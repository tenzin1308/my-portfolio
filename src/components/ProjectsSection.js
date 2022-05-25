import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import SwiperCore, { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import sanityClient from '../client';
import ProjectItem from './ProjectItem';
import SectionTitle from './SectionTitle';

SwiperCore.use([Navigation]);

const ProjectsSectionStyle = styled.div`
  padding: 10rem 0;
  .projects__allItems {
    display: flex;
    gap: 3rem;
    margin-top: 5rem;
  }
  .swiper-container {
    padding-top: 8rem;
    max-width: 100%;
  }
  .swiper-button-prev,
  .swiper-button-next {
    position: absolute;
    height: 50px;
    width: 50px;
    background-color: var(--deep-dark);
    z-index: 10;
    right: 60;
    left: auto;
    top: 0;
    transform: translateY(50%);
    color: var(--gray-1);
    border-radius: 8px;
  }
  .swiper-button-next {
    right: 0;
  }
  .swiper-button-prev::after,
  .swiper-button-next::after {
    font-size: 2rem;
  }
  @media only screen and (max-width: 768px) {
    .projects__allItems {
      flex-direction: column;
      max-width: 400px;
      margin: 0 auto;
      margin-top: 7rem;
      gap: 5rem;
    }
  }
`;

export default function ProjectsSection() {
  const [projects, setProjects] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "post"]{
                title,
                slug,
                mainImage{
                    asset->{
                        _id,
                        url
                    },
                    alt
                },
                body
            }`
      )
      .then((data) => {
        console.log('data in projects section => ', data);
        setProjects(data);
      })
      .catch(console.error);
  }, []);

  return (
    <ProjectsSectionStyle>
      <div className="container">
        <SectionTitle
          heading="Projects"
          subheading="Here are some of my projects"
        />
        <div className="projects__allItems">
          <Swiper
            spaceBetween={30}
            slidesPerView={1}
            navigation
            breakpoints={{
              // when window width is >= 640px
              640: {
                slidesPerView: 1,
              },
              // when window width is >= 768px
              768: {
                slidesPerView: 2,
              },
              // when window width is >= 1024px
              1024: {
                slidesPerView: 3,
              },
            }}
          >
            {projects &&
              projects.map((project, index) => {
                if (index >= 5) return;
                return (
                  <SwiperSlide key={project.slug.current}>
                    <ProjectItem
                      title={project.title}
                      img={project.mainImage.asset.url}
                      desc={project.body}
                    />
                  </SwiperSlide>
                );
              })}
          </Swiper>
        </div>
      </div>
    </ProjectsSectionStyle>
  );
}
