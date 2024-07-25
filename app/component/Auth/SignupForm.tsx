'use client'
import { useForm } from "react-hook-form";
import { PiEnvelopeSimpleFill } from "react-icons/pi";
import { PiLockKeyFill } from "react-icons/pi";
// import {useCreateUserWithEmailAndPassword} from 'react-firebase-hooks/auth'
import { auth } from "@/app/firebase/config";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

type FormFields = {
    email: string;
    password: string;
    confirmPassword: string;
};
type FormChange = {
    setloginFormIsDisplayed: (value: boolean) => void;
}

const SignupForm = (props: FormChange) => {
    //creating useState to store requirement states
    const [errMessage, setErrMessage] = useState("");
    const [loading, setLoading] = useState(false);
    const [formIsValid, setFormIsValid] = useState(false);
    const { register, handleSubmit, watch, reset, formState: { errors } } = useForm<FormFields>();
    const watchForEmail = watch("email", "");
    const watchForPassword = watch("password", "");
    const watchForConfirmPassword = watch("confirmPassword", "");
    const router = useRouter()

    useEffect(() => {
        const IsFormValid =
            watchForEmail.length > 5 &&
            watchForEmail.toLowerCase().includes('@') &&
            watchForEmail.toLowerCase().includes('.com') &&
            watchForPassword === watchForConfirmPassword &&
            watchForPassword.length >= 8

        IsFormValid ? setFormIsValid(true) : setFormIsValid(false)

    }, [watchForEmail, watchForPassword, watchForConfirmPassword]);

    //Server logic for form submission
    async function onSubmit(data: FormFields) {
        setLoading(true);
        if (formIsValid) {
            try {
                const res = await createUserWithEmailAndPassword(auth, data.email, data.password)
                console.log(res);
                if (res) {
                    router.push('/profile')
                    setLoading(false);
                }else{
                    setErrMessage('There was an issue logging you in')
                }

            } catch (error: unknown) {
                const errorMsg = (error as Error).message;
                error ? setErrMessage(errorMsg) : setErrMessage('')
                setLoading(false)
            }
        } else {
            setErrMessage('Invalid email or password');
            setLoading(false)
        }

    }

    return (
        <div className="w-full md:w-[60%] text-dark-light flex-col lg:w-[50%] flex">
            <form
                className="flex w-full flex-col gap-8 md:shadow-md px-4 md:px-8 py-10 rounded-lg bg-white md:w-[674px]"
                onSubmit={handleSubmit(onSubmit)}
            >
                <div className="flex flex-col gap-2">
                    <h3 className="text-[24px] text-heading-m text-black font-bold">Create account</h3>
                    <p>Lets get you started sharing your link</p>
                </div>
                <div className="flex flex-col gap-4">
                    <div className="flex flex-col w-full gap-2">
                        <label htmlFor="cuurent-password">Email address</label>
                        <div className="flex items-center gap-2 relative w-full rounded-md border">
                            <span className="text-18px absolute left-4 top-[38%] z-10">
                                <PiEnvelopeSimpleFill className="text-18px" />
                            </span>
                            <input
                                className={`outline-none flex-1 relative border-gray pl-12 px-4 p-4 focus:ring-1 focus:ring-primary rounded-lg ${errors.email && 'border-red focus:ring-0 border'}`}
                                {...register("email", {
                                    required: 'cant be empty',
                                })}
                                placeholder="eg.alex@email.com"
                                type="email"
                            />
                            {errors.email && <p className="text-red text-[12px] absolute right-2 top-[32%]">{errors.email.message}</p>}
                        </div>
                    </div>
                    <div className="flex flex-col w-full gap-4">
                        <label htmlFor="new-password">Password</label>
                        <div className="flex items-center gap-2 relative w-full rounded-md border">
                            <span className="text-18px absolute left-4 top-[38%] z-10">
                                <PiLockKeyFill className="text-18px" />
                            </span>
                            <input
                                className={`outline-none flex-1 relative border-gray pl-12 px-4 p-4 focus:ring-1 focus:ring-primary rounded-lg ${errors.password && 'border-red focus:ring-0 border'}`}
                                type="password"
                                {...register("password", {
                                    required: 'Please check again',
                                    minLength: { value: 8, message: 'Please chech again' }
                                })}
                                placeholder="At least 8 characters"
                            />
                            {errors.password && <p className="text-red text-[12px] absolute right-2 top-[32%]">{errors.password.message}</p>}

                        </div>
                    </div>
                    <div className="flex flex-col w-full gap-2">
                        <label htmlFor="cuurent-password">Confirm password</label>
                        <div className="flex items-center gap-2 relative w-full rounded-md border">
                            <span className="text-18px absolute left-4 top-[38%] z-10">
                                <PiLockKeyFill className="text-18px" />
                            </span>
                            <input
                                className={`outline-none flex-1 relative border-gray pl-12 px-4 p-4 focus:ring-1 focus:ring-primary rounded-lg ${errors.password && 'border-red focus:ring-0 border'}`}
                                {...register("confirmPassword", {
                                    required: 'Please check again',
                                    minLength: { value: 8, message: 'Please chech again' }
                                })}
                                placeholder="At least 8 characters"
                                type="password"
                            />
                            {errors.confirmPassword && <p className="text-red text-[12px] absolute right-2 top-[30%]">{errors.confirmPassword.message}</p>}
                        </div>
                    </div>
                </div>
                {errMessage && <p className="text-red text-[18px] pb-2">{errMessage}</p>}
                <button type="submit" className={`bg-primary p-[11px] rounded-lg text-[18px] text-white`}>
                    {loading ? 'Loading...' : 'Create account'}
                </button>
                <p className="text-center flex flex-col md:flex-row md:justify-center gap-4 items-center md:gap-[.2em]">Already have an account? <span onClick={() => props.setloginFormIsDisplayed(true)} className="text-primary cursor-pointer">Login</span></p>
            </form>
        </div>
    );
}


export default SignupForm