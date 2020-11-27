import Layout from '../components/Layout'

const About = ({ title, description, ...props }) => {
  return (
    <>
      <Layout pageTitle={`${title} | About`}>

        <h1 className="title">Hi! I'm Randy. </h1>

        <p>
          I'm a software engineer building open-source projects and
          writing about programming.
        </p>

      </Layout>
    </>
  )
}

export default About
