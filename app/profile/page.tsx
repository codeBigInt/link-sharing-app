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
import { auth, db } from '../firebase/config'
import { useRouter } from 'next/navigation'
import { collection, getDocs } from "firebase/firestore";



const ProfileSetupPage = () => {
  const [linkCompisDisplayed, setLinkCompisDisplayed] = React.useState(true)
  const { fetchedLinks } = useLinksManager()
  const router = useRouter()
  const [user] = useAuthState(auth)
  const userSession = localStorage.getItem('user')

  if (!user && !userSession) {
    router.push('/')
  }

  console.log(user);
  // useEffect(() => {

  //   const fetchLinks = async () => {
  //     const querySnapshot = await getDocs(collection(db, "users"));
  //     querySnapshot.forEach((doc) => {
  //       console.log(`${doc.id} => ${doc.data()}`);
  //     })
  //   }

  //   fetchLinks();

  // }, [links])

  return (
    <div className='bg-[#fafafa] min-h-screen md:p-6 flex flex-col items-center'>
      <Navbar setLinkCompisDisplayed={setLinkCompisDisplayed} linkCompisDisplayed={linkCompisDisplayed} />
      <div className='w-full mt-6 rounded-md flex flex-col lg:flex-row gap-10'>
        <div className='lg:w-[38.89%] relative hidden lg:flex justify-center items-center shadow-sm rounded-md p-6 w-full min-h-[834px] bg-white'>
          <div className='w-[75%] relative bg-transparent rounded-[40px] border-dark-light flex items-center justify-center border h-[600px] p-2'>
            <div className='h-[100%] relative w-full border-dark-light bg-white border-[1px] rounded-[40px]'>
              {fetchedLinks.length < 0 ? '' : <div className='w-full flex flex-col gap-6 items-center pt-[80px]'>
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
              {
                fetchedLinks.map(link => (
                  <Link key={link.id} href={link.link}>
                    <span>{link.platform}</span>
                    <span><FaArrowRight /></span>
                  </Link>
                ))
              }
            </div>
            <div className='p-4 border-b-[1px] absolute border-dark-light border-r-[1px] w-[60%] top-2 bg-white border-l-[1px] rounded-b-[25px]'></div>
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