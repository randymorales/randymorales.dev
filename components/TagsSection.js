import Tag from '@/components/Tag'

export default function TagsSection({ tags }) {
  const sortedTags = tags.sort((a, b) => a.localeCompare(b))
  return (
    <section className='border border-gray-700 p-8 rounded-lg w-full mx-auto sticky top-4'>
      <div className='flex flex-col items-center'>
        <h2 className='text-xl lg:text-3xl font-bold text-white mb-8'>Tags</h2>
        <div className='flex flex-wrap gap-6'>
          {sortedTags.map((tag, index) => (
            <Tag key={index} tag={tag} />
          ))}
        </div>
      </div>
    </section>
  )
}
