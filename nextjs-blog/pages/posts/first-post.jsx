import React, {useEffect} from 'react';
import Link from 'next/link'
import Head from 'next/head'
import Layout from "../../components/Layout";
import {useRouter} from "next/router";

function FirstPost(props) {
  const router = useRouter();

  useEffect(() => {
    router.push("/posts/first-post/?counter=10", undefined, {shallow: true});
  }, [])

  useEffect(() => {
    alert(router.query.counter)
  })

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
        <h3>
          Some modified
        </h3>
      </Layout>
  );
}

export default FirstPost;