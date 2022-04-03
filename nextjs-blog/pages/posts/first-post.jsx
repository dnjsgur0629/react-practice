import React from 'react';
import Link from 'next/link'
import Head from 'next/head'
import Layout from "../../components/Layout";

function FirstPost(props) {
  return (
      <Layout>
        <Head>
          <title>First Post</title>
        </Head>
        <h1>FirstPage</h1>
        <h2>
          <Link href="/">
            <a>return to home</a>
          </Link>
        </h2>
      </Layout>
  );
}

export default FirstPost;