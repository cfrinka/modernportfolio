import React from 'react'
import { motion } from 'framer-motion'
import { Project } from '../typings';
import { urlFor } from '../sanity';

type Props = {
    projects: Project[]
}

function Projects({ projects }: Props) {
    return (
        <div className='relative z-0 flex flex-col items-center h-screen max-w-full mx-auto overflow-hidden text-left md:flex-row justify-evenly'>
            <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
                Projects
            </h3>
            <div className='relative z-20 flex w-full overflow-x-scroll overflow-y-hidden snap-x snap-mandatory scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#f7ab0a]/80'>
                {projects?.map((project, index) => {
                    return (
                        <div key={index} className='flex flex-col items-center justify-center flex-shrink-0 w-screen h-screen p-20 space-y-5 snap-center md:p-44'>
                            <motion.img
                                initial={{ y: -300 }}
                                transition={{ duration: 1 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className='w-[666px] h-[375px]'
                                src={urlFor(project?.image).url()}
                                alt="project cover image"
                            />
                            <div className='max-w-6xl px-0 space-y-10 md:px-10'>
                                <h4 className='text-4xl font-semibold text-center'>
                                    <span className='underline decoration-[#f7ab0a]/50'>Case Study {index + 1} of {projects.length}:</span>
                                    {project?.title}
                                </h4>
                                <div className='flex items-center justify-center space-x-2'>

                                    {project.technologies.map(tech => (
                                        <img
                                            className='w-10 h-10 rounded-full'
                                            key={tech._id}
                                            src={urlFor(tech.image).url()}
                                            alt={tech.title}
                                        />
                                    ))}
                                </div>
                                <p className='text-lg text-center md:text-left'>
                                    {project?.summary}
                                </p>
                            </div>
                        </div>
                    )
                })}
            </div>
            <div className=' w-full absolute top-[30%] bg-[#f7ab0a]/10 left-0 h-[500px] -skew-y-12'>

            </div>
        </div>
    )
}

export default Projects