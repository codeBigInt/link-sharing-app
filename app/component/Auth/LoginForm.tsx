import { useForm } from "react-hook-form";
import { PiEnvelopeSimpleFill } from "react-icons/pi";
import { PiLockKeyFill } from "react-icons/pi";

type FormFields = {
    email: string;
    password: string;
};
type FormChange = {
    setloginFormIsDisplayed: (value: boolean) => void;
}

const Login = (props: FormChange) => {
    //creating useState to store requirement states
    const { register, handleSubmit, watch, reset } = useForm<FormFields>();

    const watchForEmail = watch("email", "");
    const watchForPassword = watch("password", "");

    //Server logic for form submission
    async function onSubmit(data: FormFields) {

        console.log(data);
    }

    return (
        <div className="w-full md:w-[70%] text-dark-light lg:w-[50%] flex">
            <form
                className="flex w-full flex-col gap-8 md:shadow-md px-4 md:px-8 py-10 rounded-lg bg-white md:w-[674px]"
                onSubmit={handleSubmit(onSubmit)}
            >
                <div className="flex flex-col gap-2">
                    <h3 className="text-[24px] text-heading-m text-black font-bold">Login</h3>
                    <p>Add your details below to get back into the app</p>
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
                                    required: true,
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
                                    required: true,
                                })}
                                placeholder="Enter your password"
                            />
                        </div>
                    </div>
                </div>
                <button type="submit" className="bg-primary p-[11px] rounded-lg text-[18px] text-white">
                    Login
                </button>
                <p
                    className="text-center flex flex-col md:flex-row md:justify-center gap-4 items-center md:gap-[.2em]">
                    Dont have an account?
                    <span onClick={() => props.setloginFormIsDisplayed(false)}
                        className="text-primary cursor-pointer">
                        Create account
                    </span>
                </p>
            </form>
        </div>
    );
}


export default Login;