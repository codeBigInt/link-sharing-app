import { useForm } from "react-hook-form";
import { PiEnvelopeSimpleFill } from "react-icons/pi";
import { PiLockKeyFill } from "react-icons/pi";
import {useCreateUserWithEmailAndPassword} from 'react-firebase-hooks/auth'
import { auth } from "@/app/firebase/config";
// import { createUserWithEmailAndPassword } from "firebase/auth";

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
    const { register, handleSubmit, watch, reset, setError } = useForm<FormFields>();
    const [ createUserWithEmailAndPassword ] = useCreateUserWithEmailAndPassword(auth);
    const watchForEmail = watch("email", "");
    const watchForPassword = watch("password", "");

    //Server logic for form submission
    async function onSubmit(data: FormFields){
        if(data.password!== data.confirmPassword && data.password.length >= 8 && data.email.includes('@') && data.email.includes('.')){
            try {
                const res = await createUserWithEmailAndPassword(data.email, data.password);
                console.log(res);
                
            } catch (error) {
                console.log(error);
                
            }
        }

    return (
        <div className="w-full md:w-[70%] text-dark-light lg:w-[50%] flex">
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
                        <div className="flex items-center gap-2 w-full rounded-md border border-gray px-4">
                            <span>
                                <PiEnvelopeSimpleFill className="text-18px" />
                            </span>
                            <input
                                className="outline-none flex-1 p-4"
                                {...register("email", {
                                })}
                                placeholder="eg.alex@email.com"
                                type="email"
                            />

                        </div>
                    </div>
                    <div className="flex flex-col w-full gap-4">
                        <label htmlFor="new-password">Password</label>
                        <div className="flex items-center gap-2 w-full rounded-md border border-gray px-4">
                            <span>
                                <PiLockKeyFill className="text-18px" />
                            </span>
                            <input
                                className="outline-none flex-1 p-4"
                                type="password"
                                {...register("password", {
                                })}
                                placeholder="At least 8 characters"
                            />
                        </div>
                    </div>
                    <div className="flex flex-col w-full gap-2">
                        <label htmlFor="cuurent-password">Confirm password</label>
                        <div className="flex items-center gap-2 w-full rounded-md border border-gray px-4">
                            <span>
                                <PiLockKeyFill className="text-18px" />
                            </span>
                            <input
                                className="outline-none flex-1 p-4"
                                {...register("confirmPassword", {
                                })}
                                placeholder="At least 8 characters"
                                type="password"
                            />

                        </div>
                    </div>
                </div>

                <button type="submit" className="bg-primary p-[11px] rounded-lg text-[18px] text-white">
                    Create new account
                </button>
                <p className="text-center flex flex-col md:flex-row gap-4 items-center md:gap-[.2em]">Already have an account? <span onClick={() => props.setloginFormIsDisplayed(true)} className="text-primary cursor-pointer">Login</span></p>
            </form>
        </div>
    );
}


export default SignupForm;