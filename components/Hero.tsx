import Link from 'next/link';
import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import { urlFor } from '../sanity';
import { PageInfo } from '../typings';
import BackgroundCircles from './BackgroundCircles';

type Props = {
    pageInfo: PageInfo
}

function Hero({ pageInfo }: Props) {
    const [text] = useTypewriter({
        words: [
            `Hi, My name is ${pageInfo?.name}`,
            "Guy-who-loves-coffe.tsx",
            "<ButLovesToCodeMore />"
        ],
        loop: true,
        delaySpeed: 2000,
    });
    return (
        <div className='flex flex-col items-center justify-center h-screen space-y-8 overflow-hidden text-center'>
            <BackgroundCircles />
            <img
                className='relative w-32 h-32 rounded-full max-auto'
                src={urlFor(pageInfo?.heroImage).url()}
                alt='profile image'
            />
            <div className='z-20'>
                <h2 className='text-sm uppercase text-gray-500 pb-2 tracking-[15px]'>
                    {pageInfo.role}
                </h2>
                <h1 className='px-10 text-5xl font-semibold lg:text-6xl'>
                    <span className='mr-3'>{text}</span>
                    <Cursor cursorColor='#F7AB0A' />
                </h1>
                <div className='pt-5'>
                    <Link href="#about">
                        <button className='heroButton'>About</button>
                    </Link>
                    <Link href="#experience">
                        <button className='heroButton'>Experience</button>
                    </Link>
                    <Link href="#skills">
                        <button className='heroButton'>Skills</button>
                    </Link>
                    <Link href="#projects">
                        <button className='heroButton'>Projects</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Hero