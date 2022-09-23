import React from 'react'
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from '@heroicons/react/24/solid';
import { useForm, SubmitHandler } from 'react-hook-form';
import { PageInfo } from '../typings';

type Inputs = {
    name: string,
    email: string,
    subject: string,
    message: string
}

type Props = {
    pageInfo: PageInfo
}
const talk = `Let's Talk`

function Contact({ pageInfo }: Props) {
    const { register, handleSubmit } = useForm<Inputs>();

    const onSubmit: SubmitHandler<Inputs> = (formData) => {
        window.location.href = `mailto: neto@carlosnetodev?subject=${formData.subject}$body=Hi, my name is ${formData.name}. ${formData.message} (${formData.email})`;
    }

    return (
        <div className='relative flex flex-col items-center h-screen mx-auto text-center md:text-left md:flex-row max-w-7xl justify-evenly'>
            <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
                Contact
            </h3>
            <div className='flex flex-col mt-10 space-y-10'>
                <h4 className='text-4xl font-semibold text-center'>
                    I have just what you need <span className='underline decoration-[#f7ab0a]/50'>{talk}</span>
                </h4>
                <div className='space-y-10'>
                    <div className='flex items-center justify-center space-x-5'>
                        <PhoneIcon className='text-[#f7ab0a] h-7 w-7 animate-pulse' />
                        <p>{pageInfo?.phoneNumber}</p>
                    </div>
                    <div className='flex items-center justify-center space-x-5'>
                        <MapPinIcon className='text-[#f7ab0a] h-7 w-7 animate-pulse' />
                        <p>{pageInfo?.address}e</p>
                    </div>
                    <div className='flex items-center justify-center space-x-5'>
                        <EnvelopeIcon className='text-[#f7ab0a] h-7 w-7 animate-pulse' />
                        <p>{pageInfo?.email}</p>
                    </div>
                </div>
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className='flex flex-col mx-auto space-y-2 w-fit'
                >
                    <div className='flex space-x-2'>
                        <input
                            {...register('name')}
                            placeholder='Name'
                            type='text'
                            className='contactInput'
                        />
                        <input
                            {...register('email')}
                            placeholder='Email'
                            type='email'
                            className='contactInput'
                        />
                    </div>
                    <input
                        {...register('subject')}
                        placeholder='Subject'
                        className='contactInput'
                        type="text" />
                    <textarea
                        {...register('message')}
                        placeholder='Message'
                        className='contactInput' />
                    <button
                        type='submit'
                        className='bg-[#f7ab0a] py-5 px-10 rounded-md text-black font-bold text-lg'
                    >
                        Submit
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Contact