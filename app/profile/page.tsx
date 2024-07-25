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
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from '../firebase/config'
import { useRouter } from 'next/navigation'



const ProfileSetupPage = () => {
  const [linkCompisDisplayed, setLinkCompisDisplayed] = React.useState(true)
  const { links } = useLinksManager()
  const router = useRouter()
  const [user] = useAuthState(auth)
  const userSession = localStorage.getItem('user')
  // const email = JSON.parse(userSession)

  // if (!user && !userSession) {
  //   router.push('/')
  // }

  console.log(user);


  return (
    <div className='bg-[#fafafa] min-h-screen md:p-6 flex flex-col items-center'>
      <Navbar setLinkCompisDisplayed={setLinkCompisDisplayed} linkCompisDisplayed={linkCompisDisplayed} />
      <div className='w-full mt-6 rounded-md flex flex-col lg:flex-row gap-10'>
        <div className='lg:w-[38.89%] relative hidden lg:flex justify-center items-center shadow-sm rounded-md p-6 w-full min-h-[834px] bg-white'>
          <div className='w-[80%]'>
            <div className="relative mx-auto border-gray bg-gray border-[14px] rounded-[2.5rem] h-[600px] w-[300px]">
              <div className="h-[32px] w-[3px]  bg-gray absolute -left-[17px] top-[72px] rounded-l-lg"></div>
              <div className="h-[46px] w-[3px]  bg-gray absolute -left-[17px] top-[124px] rounded-l-lg"></div>
              <div className="h-[46px] w-[3px]  bg-gray absolute -left-[17px] top-[178px] rounded-l-lg"></div>
              <div className="h-[64px] w-[3px]  bg-gray absolute -right-[17px] top-[142px] rounded-r-lg"></div>
              <div className="w-[60%] h-[24px]  bg-gray absolute right-[20%] top-[0] rounded-b-lg"></div>
              <div style={{}} className="rounded-[2rem] py-6 flex flex-col justify-center items-center no-scrollbar overflow-hidden overflow-y-scroll w-[272px] h-[572px] bg-white">
                {links.length > 0 ? '' : <div className='w-full flex flex-col gap-6 items-center pt-[80px]'>
                  <div className='w-full flex flex-col items-center justify-center gap-2'>
                    <div className='w-[96px] h-[96px] rounded-full bg-gray'></div>
                    <h3 className='p-4 w-[80%] rounded-xl bg-gray'></h3>
                    <p className='p-2 w-[50%] rounded-xl bg-gray'></p>
                  </div>
                  <div className='w-full flex flex-col gap-2 items-center'>
                    <p className='p-6 w-[80%] rounded-xl bg-gray'></p>
                    <p className='p-6 w-[80%] rounded-xl bg-gray'></p>
                    <p className='p-6 w-[80%] rounded-xl bg-gray'></p>
                    <p className='p-6 w-[80%] rounded-xl bg-gray'></p>
                </div>
                </div>
                }
                {/* <p className='mt-30'>{user?.email}</p> */}
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