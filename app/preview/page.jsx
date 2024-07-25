'use client'
import React from 'react'
import DisplayScreen from '../component/profile-setup/DisplayScreen'
import Image from 'next/image'
import { PiLinkBold } from "react-icons/pi";
import user from '../assets/user.png'
import Link from 'next/link'
import { FaArrowLeft, FaArrowRight, FaGithub, FaLinkedin, FaYoutube } from 'react-icons/fa'
import { RiLinkUnlink } from 'react-icons/ri'

const page = () => {
    return (
        <div className='min-h-screen flex flex-col'>
            <div className='w-full bg-white md:bg-primary rounded-bl-[32px] rounded-br-[32px] md:min-h-[400px] md:p-8'>
                <div className='p-4 bg-white w-full flex justify-between gap-8 items-center rounded-lg'>
                    <button className='md:py-2 py-4 w-[50%] md:w-max rounded-lg px-6 border border-primary'>Back</button>
                    <button className='md:py-2 py-4 px-6 md:w-max w-[50%] rounded-lg border text-white border-primary bg-primary'>Share Link</button>
                </div>
            </div>
            <div className='bg-transparent w-full mt-[60px] md:mt-0'>
                <div className='z-20 md:translate-y-[-30%] bg-transparent w-full flex justify-center'>
                    <div className="rounded-[2rem] shadow-2xl gap-[20px] p-8 flex flex-col items-center overflow-hidden w-[80%] md:w-[60%] lg:w-[30%]   h-[572px] bg-white">
                        <Image src={user} alt='' />
                        <div className='text-center w-full'>
                            <h3 className='text-heading-m font-bold text-dark'>Ben Wright</h3>
                            <p>ben@example.com</p>
                        </div>
                        <div className='md:w-[70%] w-full flex flex-col gap-4'>
                            <Link className='flex items-center bg-dark p-4 w-full rounded-lg justify-between text-white' href='/'>
                                <span className='flex items-center gap-2'>
                                    <span><FaGithub /></span>
                                    <span>Github</span>
                                </span>
                                <span><FaArrowRight /></span>
                            </Link>b
                            <Link className='flex items-center bg-red p-4 w-full rounded-lg justify-between text-white' href='/'>
                                <span className='flex items-center gap-2'>
                                    <span><FaYoutube/></span>
                                    <span>Youtube</span>
                                </span>
                                <span><FaArrowRight /></span>
                            </Link>
                            <Link className='flex items-center bg-[#2D68FF] p-4 w-full rounded-lg justify-between text-white' href='/'>
                                <span className='flex items-center gap-2'>
                                    <span><FaLinkedin /></span>
                                    <span>LinkedIn</span>
                                </span>
                                <span><FaArrowRight /></span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <span className='bg-dark p-2 mt-[50px] text-[12px] md:text-[16px] md:mt-0 text-white flex gap-2 items-center justify-center rounded-lg  w-[80%] md:w-[60%] lg:w-[30%]  self-center mb-[30px]'>
                <span><PiLinkBold /></span>
                <span>The link has been copied to your clipboard</span>
            </span>
        </div>
    )
}

export default page
