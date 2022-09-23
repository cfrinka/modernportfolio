import React from 'react'
import { motion } from 'framer-motion'
import { Experiences } from '../typings'
import { urlFor } from '../sanity'

type Props = {
    experience: Experiences
}

function ExperienceCard({ experience }: Props) {
    return (
        <article className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] lg:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden'>
            <motion.img
                initial={{ y: -100, opacity: 0 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2 }}
                viewport={{ once: true }}
                className='w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center'
                src={urlFor(experience?.companyImage).url()}
                alt="logo"
            />
            <div className='px-0 md:px-10'>
                <h4 className='text-4xl font-light'>
                    {experience.jobTitle}
                </h4>
                <p className='mt-1 text-2xl font-bold'>
                    {experience.company}
                </p>
                <div className='flex my-2 space-x-2'>
                    {experience.technologies.map((tech) => (
                        <img
                            key={tech._id}
                            className='w-10 h-10 rounded-full'
                            src={urlFor(tech.image).url()}
                            alt='tech image' />
                    ))}
                </div>
                <p className='py-5 text-gray-300 uppercase'>
                    <>
                        {new Date(experience.dateStarted).toDateString()} - {" "}
                        {experience.isCurrentlyWorkingHere
                            ? "Present"
                            : new Date(experience.dateEnded).toDateString}
                    </>
                </p>
                <ul className='ml-5 space-y-4 text-lg list-disc'>
                    {experience.points.map(point => (
                        <li key={experience._id}>{point}</li>
                    ))}
                </ul>
            </div>
        </article>

    )
}

export default ExperienceCard