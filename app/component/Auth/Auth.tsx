'use client'
import React from 'react'
import SignupForm from './SignupForm'
import Image from 'next/image'
import Login from './LoginForm'
import devlink from '../../assets/logo.png'


const Auth = () => {
    const [loginFormIsDisplayed, setLoginFormIsDisplayed] = React.useState(true)
    return (
        <div className='w-screen md:p-8 p-4 md:gap-[51px] gap-30px flex flex-col md:items-center md:justify-center '>
            <div className="flex md:justify-center justify-start">
                <Image
                    src={devlink}
                    alt="Logo"
                    className='relative'
                />
            </div>
            {
                loginFormIsDisplayed ? (
                    <Login setloginFormIsDisplayed={setLoginFormIsDisplayed} />
                ) : (
                    <SignupForm setloginFormIsDisplayed={setLoginFormIsDisplayed} />
                )
            }
        </div>
    )
}

export default Auth
