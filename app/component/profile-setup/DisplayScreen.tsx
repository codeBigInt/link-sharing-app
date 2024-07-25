import useLinksManager from '@/app/customHookes/useLinkManager'
import Link from 'next/link'
import bg from '../../assets/preview-section.png'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { FaArrowRight } from 'react-icons/fa'

type Link = {
    platform: string;
    link: string;
}

const DisplayScreen = () => {
    const { phoneLink } = useLinksManager()
    const [showLinks, setShowLinks] = useState<Link[]>([])


    return (
        <div className='lg:w-[38.89%] relative hidden lg:flex justify-center items-center shadow-sm rounded-md p-6 w-full min-h-[834px] bg-white'>
            <div className='w-[80%]'>
                <div className="relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[600px] w-[300px]">
                    <div className="h-[32px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -left-[17px] top-[72px] rounded-l-lg"></div>
                    <div className="h-[46px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -left-[17px] top-[124px] rounded-l-lg"></div>
                    <div className="h-[46px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -left-[17px] top-[178px] rounded-l-lg"></div>
                    <div className="h-[64px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -right-[17px] top-[142px] rounded-r-lg"></div>
                    <div style={{}} className="rounded-[2rem] overflow-hidden w-[272px] h-[572px] bg-white">
                        {
                            showLinks.map((addLink) => (
                                <Link href={addLink.link} key={addLink.platform}>
                                    <span>
                                        <span></span>
                                        <span>{addLink.platform}</span>
                                    </span>
                                    <span><FaArrowRight /></span>
                                </Link>
                            ))
                        }
                    </div>
                    </div>
                </div>
            </div>
            );
}

            export default DisplayScreen;
