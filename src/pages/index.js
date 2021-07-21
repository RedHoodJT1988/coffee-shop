import React from 'react';
import { Link } from 'gatsby';
import { graphql, useStaticQuery } from 'gatsby';
import BlogList from '../components/BlogList';
import Layout from '../components/Layout';
import styles from './index.module.css';

export default function IndexPage() {
  const data = useStaticQuery(graphql`
  {
    site {
      siteMetadata {
        title
      }
    }
  }
`);

  return (
    <Layout>
      <div id={styles.hero}>
        <h1><Link to="/">{data.site.siteMetadata.title}</Link></h1>
      </div>
      <BlogList />
    </Layout>
  );
}

