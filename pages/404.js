import Link from 'next/link'
import { Home, ArrowLeft } from 'lucide-react'
import { NotFoundErrorCode } from '@/lib/constants'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function Error404() {
  return (
    <div className='min-h-screen bg-zinc-900 flex flex-col'>
      <Header />

      <main className='flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8'>
        <div className='text-center'>
          {/* Error Code */}
          <h1 className='text-[20vh] font-bold text-white leading-none mb-4 animate-pulse'>
            {NotFoundErrorCode}
          </h1>

          {/* Description */}
          <p className='text-3xl text-zinc-400 mb-8'>Page Not Found</p>

          {/* Message */}
          <p className='text-zinc-500 mb-12 max-w-md mx-auto'>
            The page you're looking for doesn't exist or has been moved.
          </p>

          {/* Action Buttons */}
          <div className='flex flex-col sm:flex-row gap-4 justify-center'>
            <Link
              href='/'
              className='inline-flex items-center gap-2 px-6 py-3 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors'
            >
              <Home size={20} />
              <span>Go Home</span>
            </Link>
            <button
              onClick={() => window.history.back()}
              className='inline-flex items-center gap-2 px-6 py-3 bg-zinc-800 hover:bg-zinc-700 text-white rounded-lg transition-colors'
            >
              <ArrowLeft size={20} />
              <span>Go Back</span>
            </button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
