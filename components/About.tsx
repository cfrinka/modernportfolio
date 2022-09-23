import React from 'react'
import { motion } from 'framer-motion'
import { PageInfo } from '../typings'
import { urlFor } from '../sanity'

type Props = {
    pageInfo: PageInfo
}

function About({ pageInfo }: Props) {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className='relative flex flex-col items-center h-screen px-10 mx-auto text-center md:text-left md:flex-row max-w-7xl justify-evenly'>
            <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
                About
            </h3>
            <motion.img
                src={urlFor(pageInfo?.profilePic).url()}
                initial={{ x: -200, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ durantion: 1.2 }}
                className='flex-shrink-0 object-cover w-56 h-56 -mb-20 rounded-full  md:mb-0 md:rounded-large md:w-64 md:h-96 xl:w-[500px] xl:h-[600px]'
            />
            <div className='px-0 space-y-10 md:px-10'>
                <h4 className='text-4xl font-semibold'>
                    Here is a <span className='underline decoration-[#f7ab0a]/50'>little</span> background
                </h4>
                <p className='text-sm'>
                    {pageInfo?.backgroundInformation}
                </p>
            </div>
        </motion.div>
    )
}

export default About