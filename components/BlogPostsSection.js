import { PostsDirectory } from '@/lib/constants'
import PostCard from '@/components/PostCard'

export default function BlogPostsSection({ posts, title }) {
  return (
    <section className='py-8 flex flex-col items-center justify-center'>
      <div>
        <h2 className='text-white text-2xl font-bold mb-6'>{title}</h2>

        {/* grid-rows-2 */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16'>
          {posts.map(post => (
            <PostCard
              key={post.id}
              url={`${PostsDirectory}${post.id}`}
              title={post.title}
              description={post.description}
              date={post.date}
              tags={post.tags}
              image={post.image}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
