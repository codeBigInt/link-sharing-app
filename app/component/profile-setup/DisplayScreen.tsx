import useLinksManager from '@/app/customHookes/useLinkManager'
import Link from 'next/link'
import bg from '../../assets/preview-section.png'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'



const DisplayScreen = () => {
    const { phoneLink, links } = useLinksManager()
    return (
        <div className='lg:w-[38.89%] relative hidden lg:flex justify-center items-center shadow-sm rounded-md p-6 w-full min-h-[834px] bg-white'>
            <div className='w-[80%]'>
            {
                links.map((addLink) => (
                    <li className='p-4 bg-red rounded-lg shadow-md' key={addLink.platform}>
                        {addLink.platform}
                    </li>
                ))
            }
            <Image src={bg} alt="/" />
            </div>
        </div>
    )
}

export default DisplayScreen
