import Head from "next/head";
import { useRouter } from "next/router";

import Layout from "@/components/Layout";
import Date from "@/components/Date";
import { getAllPostIds, getPostData } from "@/lib/posts";
import { FullName } from "@/lib/constants";

import utilStyles from "@/styles/utils.module.css";

export default function Post({ postData }) {
  const router = useRouter();
  const { locale } = router;

  return (
    <Layout>
      <Head>
        <title>
          {postData.title} | {FullName}
        </title>
      </Head>

      <article>
        <h1 className={utilStyles.headingXl}>{postData.title}</h1>

        <div className={utilStyles.lightText}>
          <Date dateString={postData.date} locale={locale} />
        </div>

        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
    </Layout>
  );
}

export async function getStaticPaths({ locales }) {
  // Return a list of posts by locale.
  const paths = getAllPostIds(locales);
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ locale, params }) {
  // Fetch a post data.
  const postData = await getPostData(params.id, locale);
  return {
    props: {
      postData,
    },
  };
}
