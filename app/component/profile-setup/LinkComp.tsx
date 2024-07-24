'use client'
import Card from '@/app/UI/Card'
import React, { ChangeEvent, useState } from 'react'
import hand from '.././../assets/Group 273.png'
import Image from 'next/image'
import LinkManager from './linkManager/LinkManager';
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { FaX } from 'react-icons/fa6'
import useLinksManager from '@/app/customHookes/useLinkManager'



const LinkComp = () => {
    const { links, handleInputChange, handlePlatformChange, removeLink, addLink, saveLinks } = useLinksManager()

    const content =
        links.length > 0 ?
            (
                <LinkManager
                    links={links}
                    handleInputChange={handleInputChange}
                    handlePlatformChange={handlePlatformChange}
                    removeLink={removeLink}
                />
            )
            : (
                <div className='w-full rounded-md bg-primary-lighter md:mb-0 px-4 py-8 flex flex-col gap-4 justify-center items-center flex-1'>
                    <Image className='md:mt-[40px] mt-[20px] w-[124.77px] h-[80px]' src={hand} alt='/' />
                    <div className='flex justify-center flex-col gap-2 items-center md:w-[70%] w-full'>
                        <h3 className='md:text-heading-m text-[24px] font-bold text-center text-dark'>Lets get you started</h3>
                        <p className='p-4 text-center'>Use the “Add new link” button to get started. Once you have more than one link, you can reorder and edit them.
                            We’re here to help you share your profiles with everyone!
                        </p>
                    </div>
                </div>
            )
    return (
        <div className='bg-white w-full rounded-lg'>
            <Card className='w-full shadow-md lg:shadow-none'>
                <div className='flex flex-col gap-2'>
                    <h3 className='md:text-heading-m text-[24px] font-bold text-dark'>Customize your links</h3>
                    <p>Add/edit/remove links below and then share all your profiles with the world!</p>
                </div>
                <div className='flex flex-col gap-4 mt-10'>
                    <button onClick={addLink} className='p-2 w-full border border-primary rounded-md font-semibold text-primary'>+ Add new link</button>
                    {content}
                </div>
                <div className='border-t-[1px] left-0 bg-white bottom-0 self-center mt-[30px] md:absolute w-full border-primary-light md:p-8 p-4 flex justify-end'>
                    <button
                        onClick={saveLinks}
                        disabled={links.length > 0 ? false : true}
                        className={`py-2 px-6 rounded-md bg-primary ${links.length > 0 ? '' : 'opacity-50'}  text-white`}>Save</button>
                </div>
            </Card>
        </div>
    )
}

export default LinkComp
