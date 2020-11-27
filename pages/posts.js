import Layout from '../components/Layout'

const BlogIndex = ({ posts, title, description, ...props }) => {
  return (
    <>
      <Layout pageTitle={`${title}` + "Blog"} description={description}>
        <h1 className="title">Posts</h1>

        <p className="description">
          Posts, tutorials, snippets, musings, and everything else.
        </p>

        <main>
          <h1>Card posts here...</h1>
          {/* <PostList posts={posts} /> */}
        </main>
      </Layout>

    </>
  )
}

export default BlogIndex