import { Code, GraduationCap, Award, ExternalLink } from 'lucide-react'
import { SKILLS_DATA, EDUCATION_DATA, CERTIFICATES_DATA } from '@/lib/constants'

export default function About() {
  return (
    <section id='about' className='py-20 bg-zinc-950'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Header */}
        <div className='text-center mb-16'>
          <h2 className='text-4xl md:text-5xl font-bold text-white mb-4'>
            About Me
          </h2>
          <p className='text-zinc-400 text-lg max-w-2xl mx-auto'>
            My skills, education, and certifications
          </p>
        </div>

        {/* Three Columns Grid */}
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
          {/* Skills Column */}
          <div className='bg-zinc-900 border border-zinc-800 rounded-lg p-6'>
            <div className='flex items-center gap-3 mb-6'>
              <div className='w-12 h-12 bg-red-600/20 rounded-lg flex items-center justify-center'>
                <Code className='text-red-500' size={24} />
              </div>
              <h3 className='text-2xl font-bold text-white'>Skills</h3>
            </div>

            <div className='flex flex-wrap gap-2'>
              {SKILLS_DATA.map((skill) => (
                <span
                  key={skill}
                  className='px-3 py-2 bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 hover:border-red-500/50 text-zinc-300 text-sm rounded-lg transition-colors cursor-default'
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Education Column */}
          <div className='bg-zinc-900 border border-zinc-800 rounded-lg p-6'>
            <div className='flex items-center gap-3 mb-6'>
              <div className='w-12 h-12 bg-red-600/20 rounded-lg flex items-center justify-center'>
                <GraduationCap className='text-red-500' size={24} />
              </div>
              <h3 className='text-2xl font-bold text-white'>Education</h3>
            </div>

            <div className='space-y-6'>
              {EDUCATION_DATA.map((edu) => (
                <div key={edu.id} className='relative pl-6 border-l-2 border-red-600'>
                  <div className='absolute -left-[9px] top-0 w-4 h-4 bg-red-600 rounded-full'></div>
                  <p className='text-red-400 text-sm font-medium mb-1'>{edu.year}</p>
                  <h4 className='text-white font-semibold mb-1'>{edu.degree}</h4>
                  <p className='text-zinc-400 text-sm'>{edu.institution}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Certificates Column */}
          <div className='bg-zinc-900 border border-zinc-800 rounded-lg p-6'>
            <div className='flex items-center gap-3 mb-6'>
              <div className='w-12 h-12 bg-red-600/20 rounded-lg flex items-center justify-center'>
                <Award className='text-red-500' size={24} />
              </div>
              <h3 className='text-2xl font-bold text-white'>Certificates</h3>
            </div>

            <div className='space-y-6'>
              {CERTIFICATES_DATA.map((cert) => (
                <div key={cert.id} className='relative pl-6 border-l-2 border-red-600'>
                  <div className='absolute -left-[9px] top-0 w-4 h-4 bg-red-600 rounded-full'></div>
                  <p className='text-red-400 text-sm font-medium mb-1'>{cert.year}</p>
                  <h4 className='text-white font-semibold mb-1'>{cert.name}</h4>
                  <p className='text-zinc-400 text-sm mb-2'>{cert.issuer}</p>
                  <a
                    href={cert.link}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='inline-flex items-center gap-1 text-red-400 hover:text-red-300 text-sm transition-colors'
                  >
                    View certificate
                    <ExternalLink size={14} />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}