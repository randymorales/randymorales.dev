import { Briefcase, Download } from 'lucide-react'
import { EXPERIENCE_DATA } from '@/lib/constants'

export default function Experience() {
  return (
    <section id='experience' className='py-20 bg-zinc-900'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Header */}
        <div className='text-center mb-16'>
          <h2 className='text-4xl md:text-5xl font-bold text-white mb-4'>
            Experience
          </h2>
          <p className='text-zinc-400 text-lg max-w-2xl mx-auto'>
            My professional journey in software engineering
          </p>
        </div>

        {/* Timeline */}
        <div className='relative'>
          {/* Vertical line - hidden on mobile, visible on desktop */}
          <div className='hidden md:block absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-zinc-800'></div>

          <div className='space-y-12'>
            {EXPERIENCE_DATA.map((exp, index) => (
              <div
                key={exp.id}
                className={`relative grid grid-cols-1 md:grid-cols-2 gap-8 ${
                  index % 2 === 0 ? 'md:text-right' : 'md:text-left'
                }`}
              >
                {/* Content Card */}
                <div
                  className={`${
                    index % 2 === 0
                      ? 'md:col-start-1 md:pr-12'
                      : 'md:col-start-2 md:pl-12'
                  }`}
                >
                  <div className='bg-zinc-800/50 border border-zinc-700 rounded-lg p-6 hover:border-red-500/50 transition-colors'>
                    {/* Icon */}
                    <div
                      className={`inline-flex items-center justify-center w-12 h-12 bg-red-600/20 rounded-lg mb-4 ${
                        index % 2 === 0 ? 'md:float-right md:ml-4' : 'md:float-left md:mr-4'
                      }`}
                    >
                      <Briefcase className='text-red-500' size={24} />
                    </div>

                    {/* Date */}
                    <p className='text-red-400 font-medium mb-2'>{exp.date}</p>

                    {/* Role & Company */}
                    <h3 className='text-2xl font-bold text-white mb-1'>
                      {exp.role}
                    </h3>
                    <p className='text-zinc-300 font-medium mb-4'>{exp.company}</p>

                    {/* Description */}
                    <p className='text-zinc-400 leading-relaxed'>{exp.description}</p>
                  </div>
                </div>

                {/* Center dot - hidden on mobile */}
                <div className='hidden md:block absolute left-1/2 top-6 transform -translate-x-1/2'>
                  <div className='w-4 h-4 bg-red-600 rounded-full border-4 border-zinc-900'></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Download CV Button */}
        <div className='text-center mt-16'>
          <a
            href='/Randy_Morales_CV.pdf'
            download
            className='inline-flex items-center gap-2 px-8 py-3 bg-zinc-800 hover:bg-zinc-700 text-white font-medium rounded-lg transition-colors border border-zinc-700 hover:border-red-500/50'
          >
            <Download size={20} />
            Download CV
          </a>
        </div>
      </div>
    </section>
  )
}