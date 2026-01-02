import PostCard from '@/components/PostCard'

export default function BlogPostsSection({ posts }) {
  return (
    <section className='space-y-8'>
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </section>
  )
}
