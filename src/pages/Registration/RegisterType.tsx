import Input from "@/c_components/Input";
import { Button } from "@/components/ui/button";

import { Link } from "react-router-dom";

type userState = "donor" | "hospital" | "collector";
type LoginTypeProps = {
        userState: userState;
        userSetFunction: React.Dispatch<React.SetStateAction<userState>>;
};

function RegisterType({ userState }: LoginTypeProps) {
        if (userState === "donor") {
                return (
                        <div className=" pb-16 ">
                                <h3 className="mx-spacing text-2xl mb-6 p_color uppercase">
                                        Register As Donor
                                </h3>
                                <div className=" md:flex w-full px-spacing ">
                                        <Input
                                                inputType="text"
                                                placeholder="Enter Your Name"
                                                labelName="Name"
                                                inputStyles="bg-slate-100 text-black placeholder:text-slate-400 py-4 placeholder:px -4 focus:font-mono outline-black  px-2 placeholder border-black"
                                                labelStyles="text-slate-400  "
                                                parentStyles=" md:w-1/2"
                                        />

                                        <Input
                                                inputType="text"
                                                placeholder="Enter Your Email Address"
                                                labelName="Email"
                                                inputStyles="bg-slate-100 text-black placeholder:text-slate-400 py-4 placeholder:px -4 focus:font-mono outline-black  px-2 placeholder border-black"
                                                labelStyles="text-slate-400 "
                                                parentStyles="mt-6 md:mt-0 last-of-type:md:ml-6 md:w-1/2"
                                        />
                                </div>

                                <div className=" md:flex w-full px-spacing max-w-5xl  md:mt-10  ">
                                        <Input
                                                inputType="password"
                                                placeholder="Enter Your Password"
                                                labelName="Password"
                                                inputStyles="bg-slate-100 text-black px-2 placeholder:text-slate-400 py-4 placeholder:px -4 focus:font-mono outline-black border-black"
                                                labelStyles="text-slate-400  "
                                                parentStyles=" md:w-1/2 mt-6 md:mt-0"
                                        />

                                        <Input
                                                inputType="number"
                                                placeholder="Enter Your Phone Number"
                                                labelName="Phone"
                                                inputStyles="bg-slate-100  px-2 placeholder text-black placeholder:text-slate-400 py-4  placeholder:px -4 focus:font-mono outline-black border-black"
                                                labelStyles="text-slate-400 "
                                                parentStyles="mt-6 md:mt-0 last-of-type:md:ml-6 md:w-1/2"
                                        />
                                </div>

                                <div className=" md:flex w-full px-spacing max-w-5xl  md:mt-10 ">
                                        <Input
                                                inputStyles="bg-slate-100 text-black px-2 placeholder:text-slate-400 py-4  placeholder:px -4 focus:font-mono outline-black border-black"
                                                labelStyles="text-slate-400  "
                                                parentStyles=" md:w-1/2 mt-6 md:mt-0"
                                                inputType="number"
                                                placeholder="Enter Your Age"
                                                labelName="Age"
                                        />

                                        <Input
                                                inputType="textarea"
                                                placeholder="Enter Your Address"
                                                labelName="Address"
                                                inputStyles="bg-slate-100  px-2 placeholder text-black placeholder:text-slate-400 py-4 placeholder:px -4 focus:font-mono outline-black border-black"
                                                labelStyles="text-slate-400 "
                                                parentStyles="mt-6 md:mt-0 last-of-type:md:ml-6 md:w-1/2"
                                        />
                                </div>

                                <div className="flex items-center justify-center mt-8">
                                        <Button
                                                type="submit"
                                                variant={"secondary"}
                                                className=" w-1/4 py-6 text-white cursor-pointer"
                                        >
                                                {" "}
                                               Register
                                        </Button>
                                </div>

                                <div className="mx-spacing pt-5 text-center ">
                                        <p>
                                                {" "}
                                                Have account,
                                                <Link
                                                        to={"/login"}
                                                        className="text-secondary underline cursor-pointer pl-2"
                                                >
                                                        Login now
                                                </Link>
                                        </p>{" "}
                                </div>
                        </div>
                );
        } else if (userState === "hospital")
                return (
                        <div className=" pb-16">
                                <h3 className="mx-spacing text-2xl mb-6 p_color uppercase">
                                        Register As Hospital
                                </h3>
                                <div className=" md:flex w-full px-spacing ">
                                        <Input
                                                inputType="text"
                                                placeholder="Enter Hospital Name"
                                                labelName="Hospital Name"
                                                inputStyles="bg-slate-100 text-black placeholder:text-slate-400 py-4 placeholder:px -4 focus:font-mono outline-black  px-2 placeholder border-black"
                                                labelStyles="text-slate-400  "
                                                parentStyles=" md:w-1/2"
                                        />

                                        <Input
                                                inputType="text"
                                                placeholder="Enter Hospital Email Address"
                                                labelName=" Hospital Email"
                                                inputStyles="bg-slate-100 text-black placeholder:text-slate-400 py-4 placeholder:px -4 focus:font-mono outline-black  px-2 placeholder border-black"
                                                labelStyles="text-slate-400 "
                                                parentStyles="mt-6 md:mt-0 last-of-type:md:ml-6 md:w-1/2"
                                        />
                                </div>

                                <div className=" md:flex w-full px-spacing max-w-5xl  md:mt-10  ">
                                        <Input
                                                inputType="password"
                                                placeholder="Enter Password"
                                                labelName="Password"
                                                inputStyles="bg-slate-100 text-black px-2 placeholder:text-slate-400 py-4 placeholder:px -4 focus:font-mono outline-black border-black"
                                                labelStyles="text-slate-400  "
                                                parentStyles=" md:w-1/2 mt-6 md:mt-0"
                                        />

                                        <Input
                                                inputType="number"
                                                placeholder="Enter Hospital Phone Number"
                                                labelName="Phone Number"
                                                inputStyles="bg-slate-100  px-2 placeholder text-black placeholder:text-slate-400 py-4  placeholder:px -4 focus:font-mono outline-black border-black"
                                                labelStyles="text-slate-400 "
                                                parentStyles="mt-6 md:mt-0 last-of-type:md:ml-6 md:w-1/2"
                                        />
                                </div>

                                <div className=" md:flex w-full px-spacing max-w-5xl  md:mt-10 ">
                                        {/* <Input
                                                inputStyles="bg-slate-100 text-black px-2 placeholder:text-slate-400 py-4  placeholder:px -4 focus:font-mono outline-black border-black"
                                                labelStyles="text-slate-400  "
                                                parentStyles=" md:w-1/2 mt-6 md:mt-0"
                                                inputType="number"
                                                placeholder="Enter Your Age"
                                                labelName="Age"
                                        /> */}

                                        <Input
                                                inputType="textarea"
                                                placeholder="Enter Hospital Address"
                                                labelName="Hospital Address"
                                                inputStyles="bg-slate-100  px-2 placeholder text-black placeholder:text-slate-400 py-4 placeholder:px -4 focus:font-mono outline-black border-black"
                                                labelStyles="text-slate-400 "
                                                parentStyles="mt-6 md:mt-0 w-full"
                                        />
                                </div>

                                <div className="flex items-center justify-center mt-8">
                                        <Button
                                                type="submit"
                                                variant={"secondary"}
                                                className=" w-1/4 py-6 text-white cursor-pointer"
                                        >
                                                {" "}
                                                Register
                                        </Button>
                                </div>
                                <div className="mx-spacing pt-5 text-center ">
                                        <p>
                                                {" "}
                                                Have account,
                                                <Link
                                                        to={"/login"}
                                                        className="text-secondary underline cursor-pointer pl-2"
                                                >
                                                        Login now
                                                </Link>
                                        </p>{" "}
                                </div>
                        </div>
                );
        else if (userState === "collector") {
                return (
                        <div className="pb-16 ">
                                <h3 className="mx-spacing text-2xl mb-6 p_color  uppercase">
                                        Register As Collector
                                </h3>
                                <div className=" md:flex w-full px-spacing ">
                                        <Input
                                                inputType="text"
                                                placeholder="Enter Your Name"
                                                labelName="Name"
                                                inputStyles="bg-slate-100 text-black placeholder:text-slate-400 py-4 placeholder:px -4 focus:font-mono outline-black  px-2 placeholder border-black"
                                                labelStyles="text-slate-400  "
                                                parentStyles=" md:w-1/2"
                                        />

                                        <Input
                                                inputType="text"
                                                placeholder="Enter Your Email Address"
                                                labelName="Email"
                                                inputStyles="bg-slate-100 text-black placeholder:text-slate-400 py-4 placeholder:px -4 focus:font-mono outline-black  px-2 placeholder border-black"
                                                labelStyles="text-slate-400 "
                                                parentStyles="mt-6 md:mt-0 last-of-type:md:ml-6 md:w-1/2"
                                        />
                                </div>

                                <div className=" md:flex w-full px-spacing max-w-5xl  md:mt-10  ">
                                        <Input
                                                inputType="password"
                                                placeholder="Enter Your Password"
                                                labelName="Password"
                                                inputStyles="bg-slate-100 text-black px-2 placeholder:text-slate-400 py-4 placeholder:px -4 focus:font-mono outline-black border-black"
                                                labelStyles="text-slate-400  "
                                                parentStyles=" md:w-1/2 mt-6 md:mt-0"
                                        />

                                        <Input
                                                inputType="number"
                                                placeholder="Enter Your Phone Number"
                                                labelName="Phone"
                                                inputStyles="bg-slate-100  px-2 placeholder text-black placeholder:text-slate-400 py-4  placeholder:px -4 focus:font-mono outline-black border-black"
                                                labelStyles="text-slate-400 "
                                                parentStyles="mt-6 md:mt-0 last-of-type:md:ml-6 md:w-1/2"
                                        />
                                </div>

                                <div className=" md:flex w-full px-spacing max-w-5xl  md:mt-10 ">
                                        <Input
                                                inputStyles="bg-slate-100 text-black px-2 placeholder:text-slate-400 py-4  placeholder:px -4 focus:font-mono outline-black border-black"
                                                labelStyles="text-slate-400  "
                                                parentStyles=" md:w-1/2 mt-6 md:mt-0"
                                                inputType="number"
                                                placeholder="Enter Your Age"
                                                labelName="Age"
                                        />

                                        <Input
                                                inputType="textarea"
                                                placeholder="Enter Your Address"
                                                labelName="Address"
                                                inputStyles="bg-slate-100  px-2 placeholder text-black placeholder:text-slate-400 py-4 placeholder:px -4 focus:font-mono outline-black border-black"
                                                labelStyles="text-slate-400 "
                                                parentStyles="mt-6 md:mt-0 last-of-type:md:ml-6 md:w-1/2"
                                        />
                                </div>

                                <div className="flex items-center justify-center mt-8">
                                        <Button
                                                type="submit"
                                                variant={"secondary"}
                                                className=" w-1/4 py-6 text-white cursor-pointer"
                                        >
                                                {" "}
                                                Register
                                        </Button>
                                </div>

                                <div className="mx-spacing pt-5 text-center ">
                                        <p>
                                                {" "}
                                                Have account,
                                                <Link
                                                        to={"/login"}
                                                        className="text-secondary underline cursor-pointer pl-2"
                                                >
                                                        Login now
                                                </Link>
                                        </p>{" "}
                                </div>
                        </div>
                );
        }
}

export default RegisterType;
