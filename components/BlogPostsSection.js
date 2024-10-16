import PostCard from '@/components/PostCard'

export default function BlogPostsSection({ posts }) {
  return (
    <section className='mb-16 space-y-8'>
      <ul className='divide-y divide-gray-700'>
        {posts.map((post, index) => (
          <li key={index} className='py-12'>
            <PostCard key={post.id} post={post} />
          </li>
        ))}
      </ul>
    </section>
  )
}
