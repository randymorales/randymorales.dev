import Image from 'next/image'
import SocialIcons from './SocialIcons'

export default function Hero() {
  const scrollToProjects = () => {
    const element = document.getElementById('projects')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id='hero' className='relative min-h-screen flex items-center justify-center overflow-hidden pt-32 pb-20 lg:pt-48 lg:pb-32'>
      {/* Decorative background circles */}
      <div className='absolute top-1/4 -right-48 w-96 h-96 bg-red-600/10 rounded-full blur-3xl'></div>
      <div className='absolute bottom-1/4 -left-48 w-96 h-96 bg-orange-600/10 rounded-full blur-3xl'></div>

      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
          {/* Content */}
          <div className='space-y-6 text-center lg:text-left'>
            <p className='text-sm font-semibold uppercase tracking-wide text-red-400'>
              Software Engineer
            </p>

            <h1 className='text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight pb-2'>
              <span className='block text-white mb-2'>Hi, I'm</span>
              <span className='block bg-gradient-to-r from-red-500 to-orange-400 bg-clip-text text-transparent pb-1'>
                Randy Morales
              </span>
            </h1>

            <p className='text-lg text-zinc-300 max-w-xl leading-relaxed mx-auto lg:mx-0'>
              Passionate software engineer with 6+ years of experience building scalable systems,
              REST APIs, and microservices. Specialized in Golang, Python, and cloud technologies.
            </p>

            <div className='flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6 pt-4'>
              <button
                type='button'
                onClick={scrollToProjects}
                className='px-8 py-3 bg-red-600 hover:bg-red-700 text-white font-medium rounded-lg transition-colors'
                aria-label='Scroll to projects section'
              >
                View Projects
              </button>
              <SocialIcons />
            </div>
          </div>

          {/* Image */}
          <div className='relative order-first lg:order-last'>
            <div className='relative w-full max-w-md mx-auto aspect-square'>
              <div className='absolute inset-0 bg-gradient-to-br from-red-600/20 to-orange-500/20 rounded-full blur-2xl'></div>
              <Image
                src='/images/profile.jpg'
                alt='Randy Morales'
                width={500}
                height={500}
                className='relative rounded-full border-4 border-zinc-800 shadow-2xl object-cover'
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
