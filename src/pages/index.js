import React from 'react';
import Header from '../components/Header';
import { StaticQuery, graphql } from 'gatsby';

export default () => (
  <StaticQuery
    query={graphql`
      query HeadingQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Header />
        <h1>{data.site.siteMetadata.title}</h1>
      </>
    )}
  />
);
