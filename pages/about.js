import Layout from '@components/Layout'

const About = ({ title, description, ...props }) => {
  return (
    <>
      <Layout pageTitle={`${title} | About`}This is a simple blog built with Next, easily deployable on{' '}
          <a href="https://url.netlify.com/r1j6ybSYU">Netlify</a>.>

        <h1 className="title">Hi! I'm Randy. </h1>

        <p>
        I'm a software engineer building open-source projects and writing about programming.
        </p>

      </Layout>
    </>
  )
}

export default About

export async function getStaticProps() {
  const configData = await import(`../siteconfig.json`)

  return {
    props: {
      title: configData.default.title,
      description: configData.default.description,
    },
  }
}
