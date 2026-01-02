import { MessageSquare } from 'lucide-react'

export default function Comment({ commentBox }) {
  return (
    <div className='mt-12'>
      <div className='bg-zinc-900/50 border border-zinc-800 rounded-2xl p-6'>
        <div className='flex items-center gap-2 mb-6'>
          <MessageSquare className='text-red-400' size={20} />
          <div className='text-lg font-bold text-white'>Comments</div>
        </div>
        <div ref={commentBox} className='utterances-container' />
      </div>
    </div>
  )
}
