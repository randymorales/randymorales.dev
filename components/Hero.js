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
    <section id='hero' className='relative min-h-screen flex items-center justify-center overflow-hidden pt-16'>
      {/* Decorative background circles */}
      <div className='absolute top-1/4 -left-48 w-96 h-96 bg-red-600/10 rounded-full blur-3xl'></div>
      <div className='absolute bottom-1/4 -right-48 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl'></div>

      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
          {/* Content */}
          <div className='space-y-6'>
            <h1 className='text-5xl md:text-6xl lg:text-7xl font-bold'>
              <span className='block text-white mb-2'>Hi, I'm</span>
              <span className='block bg-gradient-to-r from-red-500 to-orange-400 bg-clip-text text-transparent'>
                Randy Morales
              </span>
            </h1>

            <p className='text-xl md:text-2xl text-zinc-400'>
              Software Engineer
            </p>

            <p className='text-lg text-zinc-300 max-w-xl leading-relaxed'>
              Passionate software engineer with 6+ years of experience building scalable systems,
              REST APIs, and microservices. Specialized in Golang, Python, and cloud technologies.
            </p>

            <div className='flex flex-col sm:flex-row gap-4 pt-4'>
              <button
                onClick={scrollToProjects}
                className='px-8 py-3 bg-red-600 hover:bg-red-700 text-white font-medium rounded-lg transition-colors'
              >
                View Projects
              </button>
              <SocialIcons className='justify-center sm:justify-start' />
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
                className='relative rounded-full grayscale hover:grayscale-0 transition-all duration-500 object-cover'
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
