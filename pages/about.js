import Head from "next/head";

import { FullName } from "@/lib/constants";
import Layout from "@/components/Layout";
import useTranslation from "@/i18n/useTranslation";

const About = ({ title, description, ...props }) => {
  const { t } = useTranslation();

  return (
    <>
      <Layout pageTitle={`${title} | About`}>
        <Head>
          <title>
            {FullName} | {t("about")}
          </title>
        </Head>
        <h1 className="title">{t("greeting")} Randy. </h1>

        <p>{t("about-description")}</p>
      </Layout>
    </>
  );
};

export default About;
