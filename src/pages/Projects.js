import React, { useEffect, useState } from 'react';
import { MdSearch } from 'react-icons/md';
import styled from 'styled-components';
import sanityClient from '../client';
import ProjectItem from '../components/ProjectItem';
import SectionTitle from '../components/SectionTitle';

const ProjectsStyle = styled.div`
  padding: 10rem 0;
  .projects__allItems {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 5rem;
    margin-top: 5rem;
  }
  .projects__searchBar {
    position: relative;
    width: 300px;
    margin-top: 5rem;
  }
  .projects__searchBar input {
    width: 100%;
    font-size: 2rem;
    padding: 0.8rem;
    color: var(--black);
    border-radius: 6px;
    outline: none;
    border: none;
  }
  .projects__searchBar .searchIcon {
    position: absolute;
    width: 2rem;
    right: 1rem;
  }
  .projects__searchBar .searchIcon path {
    color: var(--deep-dark);
  }
  @media only screen and (max-width: 768px) {
    .projects__searchBar,
    .projects__searchBar form,
    .projects__searchBar input {
      width: 100%;
    }
  }
`;

export default function Projects() {
  const [postData, setPostData] = useState(null);
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
        setPostData(data);
        setProjectData(data);
      })
      .catch(console.error);
  }, []);
  // useState hook for project search
  const [projectData, setProjectData] = React.useState(null);
  // live search
  const [searchText, setSearchText] = React.useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    setSearchText(e.target.value);
    if (!e.target.value.length > 0) {
      setProjectData(postData);
    }
  };

  React.useEffect(() => {
    if (searchText === '') return;
    setProjectData(() =>
      postData.filter((item) =>
        item.title.toLowerCase().match(searchText.toLowerCase())
      )
    );
  }, [searchText]);

  return (
    <ProjectsStyle>
      <div className="container">
        <SectionTitle heading="Projects" subheading="some of my works" />
        {/* Live Searchbar */}
        <div className="projects__searchBar">
          <form>
            <input
              type="text"
              placeholder="Project Name"
              value={searchText}
              onChange={handleSearch}
            />
            <MdSearch className="searchIcon" />
          </form>
        </div>
        {/* Projects */}
        <div className="projects__allItems">
          {projectData ? (
            projectData.map((project) => (
              <ProjectItem
                key={project.slug.current}
                img={project.mainImage.asset.url}
                title={project.title}
                desc={project.body}
                slug={project.slug.current}
              />
            ))
          ) : (
            <>loading...</>
          )}
        </div>
      </div>
    </ProjectsStyle>
  );
}
