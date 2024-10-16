import Image from 'next/image'

export default function HeroSection() {
  return (
    <section className='w-full mx-auto mb-10 py-16'>
      <div className='flex flex-col md:flex-row items-center justify-center'>
        <div className='w-full md:w-1/2 lg:w-2/5 mb-8 md:mb-0 text-center md:text-left md:pr-8'>
          <h1 className='font-bebas-neue uppercase text-5xl sm:text-6xl lg:text-7xl font-black flex flex-col leading-none text-white'>
            Hi! I'm
            <span className='text-4xl sm:text-5xl lg:text-6xl text-accentColor'>
              Randy
            </span>
          </h1>
          <p className='text-base sm:text-xl text-white mt-4'>
            A Costa Rican <strong>Software Engineer</strong> writing these posts
            about things I am familiar with and learning.
          </p>
        </div>
        <div className='w-full md:w-1/2 lg:w-2/5 flex justify-center'>
          <Image
            src='/images/profile.jpg'
            className='object-cover object-center animate-profile'
            alt='site author photo'
            width={300}
            height={300}
          />
        </div>
      </div>
    </section>
  )
}
