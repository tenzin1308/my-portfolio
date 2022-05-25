import BlockContent from '@sanity/block-content-to-react';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import styled from 'styled-components';
import sanityClient from '../client';
import SectionTitle from '../components/SectionTitle';

const SinglePostStyle = styled.div`
  padding: 10rem 0;
  .singlePost__allItems {
    min-height: 100vh;
    padding: 3rem;
  }
  .container {
    box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1),
      0 4px 6px -4px rgb(0 0 0 / 0.1);
    background-color: var(--deep-dark);
    border-radius: 0.5rem;
  }
  .singlePost__header {
    position: relative;
  }
  .singlePost__header__title {
    position: absolute;
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .singlePost__header__text {
    background-color: var(--deep-dark);
    opacity: 0.8;
    border-radius: 0.5rem;
  }
  .singlePost__header img {
    width: 100%;
    object-fit: cover;
    border-radius-top: 0.5rem;
  }
  .singlePost__body {
    padding-left: 12rem;
    padding-right: 12rem;
    padding-top: 5rem;
    padding-bottom: 5rem;
    font-size: 1.6rem;
    line-height: 3rem;
  }
  @media only screen and (max-width: 768px) {
    .singlePost__body {
      padding-left: 4rem;
      padding-right: 4rem;
      padding-top: 2rem;
      padding-bottom: 2rem;
      font-size: 1.4rem;
    }
  }
`;

export default function SinglePost() {
  const [singlePost, setSinglePost] = useState(null);
  const [author, setAuthor] = useState(null);
  const { slug } = useParams();

  useEffect(() => {
    // fetch blog data
    sanityClient
      .fetch(
        `*[slug.current == "${slug}"]{
                title,
                _id,
                slug,
                mainImage{
                    asset->{
                        _id,
                        url
                    }
                },
                body,
                "name": auther->name,
                "autherImage": auther->image
            }`
      )
      .then((data) => setSinglePost(data[0]))
      .catch(console.error);
    //  fetch author data
    sanityClient
      .fetch(
        `*[_type == "author"]{
                name,
                bio,
                "authorImage": image.asset->url
            }`
      )
      .then((data) => setAuthor(data))
      .catch(console.error);
  }, [slug]);

  if (!singlePost || !author) return <div>Loading...</div>;

  return (
    <SinglePostStyle>
      <div className="singlePost__allItems">
        <div className="container">
          <div className="singlePost__header">
            <div className="singlePost__header__title">
              <div className="singlePost__header__text">
                <SectionTitle
                  heading={singlePost.title}
                  subheading={'@' + author[0].name}
                />
              </div>
            </div>
            <img
              src={singlePost.mainImage.asset.url}
              alt={singlePost.title}
              style={{ height: '400px' }}
            />
          </div>
          <div className="singlePost__body">
            <BlockContent
              blocks={singlePost.body}
              projectId="10drkjrr"
              dataset="production"
            />
          </div>
        </div>
      </div>
    </SinglePostStyle>
  );
}
