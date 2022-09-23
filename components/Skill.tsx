import React from 'react'
import { motion } from 'framer-motion'
import { Skill } from '../typings';
import { urlFor } from '../sanity';

type Props = {
    directionLeft?: boolean;
    skill: Skill
}

function Skill({ directionLeft, skill }: Props) {
    return (
        <div className='relative flex cursor-pointer group'>
            <motion.img
                initial={{
                    x: directionLeft ? -200 : 200
                }}
                transition={{ duration: 1 }}
                whileInView={{ opacity: 1, x: 0 }}
                className='object-cover w-24 h-24 transition duration-300 ease-in-out border border-gray-500 rounded-full xl:w-32 xl:h-32 filter group-hover:grayscale'
                src={urlFor(skill?.image).url()}
                alt="skill logo"
            />
            <div className='absolute z-0 w-24 h-24 transition duration-300 ease-in-out rounded-full opacity-0 group-hover:opacity-80 group-hover:bg-white xl:w-32 xl:h-32'>
                <div className='flex items-center justify-center h-full'>
                    <p className='text-3xl font-bold text-black opacity-100'>
                        {skill.progress}%
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Skill