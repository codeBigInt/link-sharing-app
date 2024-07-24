'use client'
import Navbar from '../component/navbar/Navbar'
import React, { useState } from 'react'
import Link from '../component/profile-setup/LinkComp'
import LinkManager from '../component/profile-setup/ProfileDetail'
import DisplayScreen from '../component/profile-setup/DisplayScreen'
import ProfileDetail from '../component/profile-setup/ProfileDetail'

interface Link {
  platform: string,
  link: string
}

const ProfileSetupPage = () => {
  const [links, setLinks] = useState<Link[]>([])
  const [linkCompisDisplayed, setLinkCompisDisplayed] = React.useState(true)

  return (
    <div className='bg-[#fafafa] min-h-screen md:p-6 flex flex-col items-center'>
      <Navbar setLinkCompisDisplayed={setLinkCompisDisplayed} linkCompisDisplayed={linkCompisDisplayed} />
      <div className='w-full mt-6 rounded-md flex flex-col lg:flex-row gap-10'>
        <DisplayScreen />
        <div className='lg:w-[60.11%] w-full relative bg-transparent rounded-lg lg:bg-white p-4 flex flex-col text-dark-light gap-12'>
          {linkCompisDisplayed ? <Link /> : <ProfileDetail />}
        </div>
      </div>
    </div>
  )
}

export default ProfileSetupPage