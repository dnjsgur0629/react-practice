import Layout from '../../components/Layout'
import {getAllPostIds, getPostData} from "../../lib/posts";
import Head from 'next/head'
import utilStyles from '../../styles/utils.module.css'
import {useRouter} from "next/router";
import {useEffect} from "react";
import Date from "../../components/Date";

//동적 라우팅을 위해 paths를 받아와서 getStaticPaths에서 리턴
export async function getStaticPaths() {
  const paths = getAllPostIds()
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id)
  return {
    props: {
      postData
    }
  }
}

// export async function getServerSideProps({params, req}) {
//   console.log(`req.cookies: ${JSON.stringify(req.cookies)}`);
//   const postData = await getPostData(params.id);
//   return {
//     props: {
//       postData,
//     },
//   };
// }

export default function Post({postData}) {
  const router = useRouter();

  useEffect(() => {
    const getText = async () => {
      const res = await fetch("/api/hello");
      const data = await res.json()

      alert(data.text);
    };
    getText();
  }, []);

  if (router.isFallback) {
    return <div>Loading...</div>
  }

  return (
      <Layout>
        <Head>
          <title>{postData.title}</title>
        </Head>
        <article>
          <h1 className={utilStyles.headingXl}>{postData.title}</h1>
          <div className={utilStyles.lightText}>
            <Date dateString={postData.date}/>
          </div>
          <div dangerouslySetInnerHTML={{__html: postData.contentHtml}}/>
        </article>
      </Layout>
  )
}