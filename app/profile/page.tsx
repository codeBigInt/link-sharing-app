'use client'
import Navbar from '../component/navbar/Navbar'
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import LinkManager from '../component/profile-setup/ProfileDetail'
import DisplayScreen from '../component/profile-setup/DisplayScreen'
import ProfileDetail from '../component/profile-setup/ProfileDetail'
import useLinksManager from '../customHookes/useLinkManager'
import { FaArrowRight } from 'react-icons/fa'
import LinkComp from '../component/profile-setup/LinkComp'



const ProfileSetupPage = () => {
  const [linkCompisDisplayed, setLinkCompisDisplayed] = React.useState(true)
  const {links} = useLinksManager()
  

  return (
    <div className='bg-[#fafafa] min-h-screen md:p-6 flex flex-col items-center'>
      <Navbar setLinkCompisDisplayed={setLinkCompisDisplayed} linkCompisDisplayed={linkCompisDisplayed} />
      <div className='w-full mt-6 rounded-md flex flex-col lg:flex-row gap-10'>
      <div className='lg:w-[38.89%] relative hidden lg:flex justify-center items-center shadow-sm rounded-md p-6 w-full min-h-[834px] bg-white'>
            <div className='w-[80%]'>
                <div className="relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[600px] w-[300px]">
                    <div className="h-[32px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -left-[17px] top-[72px] rounded-l-lg"></div>
                    <div className="h-[46px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -left-[17px] top-[124px] rounded-l-lg"></div>
                    <div className="h-[46px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -left-[17px] top-[178px] rounded-l-lg"></div>
                    <div className="h-[64px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -right-[17px] top-[142px] rounded-r-lg"></div>
                    <div style={{}} className="rounded-[2rem] overflow-hidden w-[272px] h-[572px] bg-white">
                        {
                            links.map((addLink) => (
                                <Link className='bg-red w-full p-4' href={addLink.link} key={addLink.platform}>
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
        <div className='lg:w-[60.11%] w-full relative bg-transparent rounded-lg lg:bg-white p-4 flex flex-col text-dark-light gap-12'>
          {linkCompisDisplayed ? <LinkComp /> : <ProfileDetail />}
        </div>
      </div>
    </div>
  )
}

export default ProfileSetupPage