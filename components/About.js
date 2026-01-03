import { Code, GraduationCap, Award, ExternalLink } from 'lucide-react'
import { SKILLS_DATA, EDUCATION_DATA, CERTIFICATES_DATA } from '@/lib/constants'

export default function About() {
  return (
    <section id='about' className='py-20 bg-zinc-950'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Header */}
        <div className='text-center mb-16'>
          <h2 className='text-3xl md:text-4xl font-bold text-white mb-4'>
            About Me
          </h2>
          <div className='w-20 h-1 bg-red-600 mx-auto rounded-full'></div>
        </div>

        {/* Three Columns Grid */}
        <div className='grid grid-cols-1 md:grid-cols-3 gap-12'>
          {/* Skills Column */}
          <div className='bg-zinc-900/50 border border-zinc-800 rounded-2xl p-8'>
            <div className='flex items-center gap-3 mb-6'>
              <div className='p-3 bg-red-900/30 rounded-lg flex items-center justify-center'>
                <Code className='text-red-400' size={24} aria-hidden='true' />
              </div>
              <h3 className='text-xl font-bold text-white'>Skills</h3>
            </div>

            <div className='flex flex-wrap gap-2'>
              {SKILLS_DATA.map((skill) => (
                <span
                  key={skill}
                  className='px-3 py-1.5 bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 hover:border-red-500/50 text-zinc-300 text-xs rounded-lg transition-colors cursor-default'
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Education Column */}
          <div className='bg-zinc-900/50 border border-zinc-800 rounded-2xl p-8'>
            <div className='flex items-center gap-3 mb-6'>
              <div className='p-3 bg-red-900/30 rounded-lg flex items-center justify-center'>
                <GraduationCap className='text-red-400' size={24} aria-hidden='true' />
              </div>
              <h3 className='text-xl font-bold text-white'>Education</h3>
            </div>

            <div className='space-y-6'>
              {EDUCATION_DATA.map((edu) => (
                <div key={edu.id} className='relative pl-6 border-l-2 border-zinc-800'>
                  <div className='absolute -left-[5px] top-0 w-2.5 h-2.5 bg-red-600 rounded-full'></div>
                  <h4 className='text-white font-semibold text-sm mb-1'>{edu.degree}</h4>
                  <p className='text-zinc-400 text-xs mb-1'>{edu.institution}</p>
                  <p className='text-red-400 text-xs font-medium'>{edu.year}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Certificates Column */}
          <div className='bg-zinc-900/50 border border-zinc-800 rounded-2xl p-8'>
            <div className='flex items-center gap-3 mb-6'>
              <div className='p-3 bg-red-900/30 rounded-lg flex items-center justify-center'>
                <Award className='text-red-400' size={24} aria-hidden='true' />
              </div>
              <h3 className='text-xl font-bold text-white'>Certificates</h3>
            </div>

            <div className='space-y-5'>
              {CERTIFICATES_DATA.map((cert) => (
                <div key={cert.id} className='relative pl-6 border-l-2 border-zinc-800'>
                  <div className='absolute -left-[5px] top-0 w-2.5 h-2.5 bg-red-600 rounded-full'></div>
                  <h4 className='text-white font-semibold text-xs mb-1 leading-relaxed'>{cert.name}</h4>
                  <div className='flex items-center gap-2 text-xs flex-wrap'>
                    <p className='text-zinc-400'>{cert.issuer}</p>
                    <span className='text-zinc-600'>•</span>
                    <p className='text-red-400 font-medium'>{cert.year}</p>
                    <span className='text-zinc-600'>|</span>
                    <a
                      href={cert.link}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='inline-flex items-center gap-1 text-red-400 hover:text-red-300 transition-colors'
                    >
                      View certificate
                      <ExternalLink size={10} aria-hidden='true' />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}