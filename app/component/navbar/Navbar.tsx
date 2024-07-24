'use client'
import React from 'react'
import { PiLinkBold } from "react-icons/pi";
import { PiUserCircleBold } from "react-icons/pi";
import logo from '../../assets/logo.png'
import minilogo from '../../assets/mini.png'
import Image from 'next/image'
import { BsEye } from 'react-icons/bs';


type NavbarProps = {
  linkCompisDisplayed: boolean
  setLinkCompisDisplayed: (arg0: boolean) => void
}

const Navbar = ({ setLinkCompisDisplayed, linkCompisDisplayed }: NavbarProps) => {
  return (
    <div className='w-full flex justify-between bg-white items-center md:py-2 py-4 px-4 rounded-md shadow-sm'>
      <Image className='h-8 w-[148px] hidden md:flex' src={logo} alt='/' />
      <Image className='flex md:hidden' src={minilogo} alt='/' />
      <div className='flex md:gap-6 flex-1 justify-center'>
        <button onClick={e => {
          e.preventDefault()
          setLinkCompisDisplayed(true)
        }} className={`py-3 px-6 flex ${linkCompisDisplayed ? 'bg-primary-lighter text-primary rounded-md' : ''} gap-2 items-center justify-center`}>
          <span><PiLinkBold /></span>
          <span className='hidden md:flex'>Links</span>
        </button>
        <button onClick={e => {
          e.preventDefault()
          setLinkCompisDisplayed(false)
        }} className={`py-3 px-6 flex ${linkCompisDisplayed === false ? 'bg-primary-lighter text-primary rounded-md' : ''} gap-2 items-center justify-center`}>
          <span><PiUserCircleBold /></span>
          <span className='hidden md:flex'>Profile Details</span>
        </button>
      </div>
      <button
        className='py-2 px-4 flex items-center  justify-center text-primary border border-primary rounded-md'
      >
        <span className='flex md:hidden'><BsEye /></span>
        <span className='hidden md:flex'>Preview</span>
      </button>
    </div>
  )
}

export default Navbar
