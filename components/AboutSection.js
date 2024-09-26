import Image from 'next/image'
import SocialIcons from '@/components/SocialIcons'
import { useState } from 'react'

const AboutSection = ({ tabData }) => {
  const [activeTab, setActiveTab] = useState('skills')

  const TabButton = ({ tab }) => (
    <button
      onClick={() => setActiveTab(tab)}
      className={`px-6 py-2 font-semibold ${
        activeTab === tab
          ? 'text-white border-b-2 border-secondaryColor'
          : 'text-gray-400 hover:text-white'
      }`}
    >
      {tab.charAt(0).toUpperCase() + tab.slice(1)}
    </button>
  )

  const renderTabContent = () => {
    return (
      <div
        className={`grid ${
          activeTab === 'skills' ? 'grid-cols-1 sm:grid-cols-2' : 'grid-cols-1'
        } gap-2`}
      >
        {tabData[activeTab].map((item, index) => (
          <div key={index} className='flex items-start'>
            <div className='w-2 h-2 mt-2 bg-secondaryColor rounded-full mr-2 flex-shrink-0'></div>
            <span className='text-lg'>{item}</span>
          </div>
        ))}
      </div>
    )
  }

  return (
    <section className='w-full text-white py-16'>
      <div className='container mx-auto px-4 md:px-6'>
        <div className='flex flex-col items-center lg:flex-row lg:items-center lg:justify-between'>
          <div className='lg:w-1/2 mb-8 lg:mb-0 lg:pr-8 flex justify-center'>
            <div className='w-full max-w-md aspect-square relative overflow-hidden rounded-lg'>
              <Image
                src='/images/England.jpeg'
                alt='Profile Photo'
                width={400}
                height={400}
                className='rounded-lg w-full h-full object-cover'
              />
            </div>
          </div>
          <div className='lg:w-1/2 text-center lg:text-left'>
            <h2 className='text-3xl text-secondaryColor font-bold mb-4'>
              About Me
            </h2>
            <p className='text-xl mb-6'>
              I am a Software Engineer with a strong passion for designing and
              maintaining advanced systems. My experience includes working with
              Golang, Python, NGINX, and Git. As a fast learner, I am always
              eager to expand my knowledge and skills. I thrive in collaborative
              environments and look forward to contributing to innovative
              applications alongside talented teams.
            </p>
            <SocialIcons className='lg:hidden' />
            <div className='my-8 flex justify-center lg:justify-start'>
              <TabButton tab='skills' />
              <TabButton tab='education' />
              <TabButton tab='certificates' />
            </div>
            <div className='text-lg text-center lg:text-left pl-20 lg:pl-0'>
              {renderTabContent()}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
