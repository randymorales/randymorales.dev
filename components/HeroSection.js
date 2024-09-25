import Image from 'next/image'

export default function HeroSection() {
  return (
    <section className='px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto'>
      <div className='flex flex-col md:flex-row items-center justify-center md:py-16 lg:py-20'>
        <div className='w-full md:w-1/2 lg:w-2/5 mb-8 md:mb-0 text-center md:text-left md:pr-8'>
          <h1 className='font-bebas-neue uppercase text-5xl sm:text-6xl lg:text-7xl font-black flex flex-col leading-none text-white'>
            Hi! I'm
            <span className='text-4xl sm:text-5xl lg:text-6xl text-secondaryColor'>
              Randy
            </span>
          </h1>
          <p className='text-base sm:text-lg text-white mt-4'>
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
