// import Input from "@/c_components/Input";
// import { Button } from "@/components/ui/button";
// import React from "react";
// import { Link } from "react-router-dom";

// function Registration() {
//         return (
//                 <form className="md:pt-24 flex relative md:h-screen flex-col justify-center items-center bg-[#74512D] overflow-hidden">
//                         <img
//                                 src="new.jpg"
//                                 alt=""
//                                 className="hidden md:block absolute w-full h-full object-cover max-w-full max-h-full"
//                         />

//                         <div className=" bg-white w-full md:py-20  z-10 py-6 pt-32  md:w-[80%] overflow-clip  max-w-5xl ">
//                                 <div className=" md:flex w-full px-spacing ">
//                                         <Input
//                                                 inputType="text"
//                                                 placeholder="Enter Your Name"
//                                                 labelName="Name"
//                                                 inputStyles="bg-slate-100 text-black placeholder:text-slate-400 py-4 placeholder:px -4 focus:font-mono outline-black  px-2 placeholder border-black"
//                                                 labelStyles="text-slate-400  "
//                                                 parentStyles=" md:w-1/2"
//                                         />

//                                         <Input
//                                                 inputType="text"
//                                                 placeholder="Enter Your Email Address"
//                                                 labelName="Email"
//                                                 inputStyles="bg-slate-100 text-black placeholder:text-slate-400 py-4 placeholder:px -4 focus:font-mono outline-black  px-2 placeholder border-black"
//                                                 labelStyles="text-slate-400 "
//                                                 parentStyles="mt-6 md:mt-0 last-of-type:md:ml-6 md:w-1/2"
//                                         />
//                                 </div>

//                                 <div className=" md:flex w-full px-spacing max-w-5xl  md:mt-10  ">
//                                         <Input
//                                                 inputType="password"
//                                                 placeholder="Enter Your Password"
//                                                 labelName="Password"
//                                                 inputStyles="bg-slate-100 text-black px-2 placeholder:text-slate-400 py-4 placeholder:px -4 focus:font-mono outline-black border-black"
//                                                 labelStyles="text-slate-400  "
//                                                 parentStyles=" md:w-1/2 mt-6 md:mt-0"
//                                         />

//                                         <Input
//                                                 inputType="number"
//                                                 placeholder="Enter Your Phone Number"
//                                                 labelName="Phone"
//                                                 inputStyles="bg-slate-100  px-2 placeholder text-black placeholder:text-slate-400 py-4  placeholder:px -4 focus:font-mono outline-black border-black"
//                                                 labelStyles="text-slate-400 "
//                                                 parentStyles="mt-6 md:mt-0 last-of-type:md:ml-6 md:w-1/2"
//                                         />
//                                 </div>

//                                 <div className=" md:flex w-full px-spacing max-w-5xl  md:mt-10 ">
//                                         <Input
//                                                 inputStyles="bg-slate-100 text-black px-2 placeholder:text-slate-400 py-4  placeholder:px -4 focus:font-mono outline-black border-black"
//                                                 labelStyles="text-slate-400  "
//                                                 parentStyles=" md:w-1/2 mt-6 md:mt-0"
//                                                 inputType="number"
//                                                 placeholder="Enter Your Age"
//                                                 labelName="Age"
//                                         />

//                                         <Input
//                                                 inputType="text"
//                                                 placeholder="Enter Your Address"
//                                                 labelName="Address"
//                                                 inputStyles="bg-slate-100  px-2 placeholder text-black placeholder:text-slate-400 py-4 placeholder:px -4 focus:font-mono outline-black border-black"
//                                                 labelStyles="text-slate-400 "
//                                                 parentStyles="mt-6 md:mt-0 last-of-type:md:ml-6 md:w-1/2"
//                                         />
//                                 </div>

//                                 <div className="flex items-center justify-center mt-8">
//                                         <Button type="submit" className=" w-1/4 ">
//                                                 {" "}
//                                                 Submit
//                                         </Button>
//                                 </div>

//                                 <div className="mx-spacing pt-5 text-center ">
//                                         <p>
//                                                 {" "}
//                                                 Have an account,
//                                                 <Link
//                                                         to={"/login"}
//                                                         className="text-secondaryunderline cursor-pointer pl-2"
//                                                 >
//                                                         Login now
//                                                 </Link>
//                                         </p>{" "}
//                                 </div>
//                         </div>
//                 </form>
//         );
// }

// export default Registration;

import { useState } from "react";

import { Hospital, Syringe, User } from "lucide-react";
import RegisterType from "./RegisterType";

function Register() {
        type UserState = "donor" | "hospital" | "collector";
        const [userLoginingType, setUserLoginingType] = useState<UserState>("donor");

        return (
                <div className="md:pt-24 pt-8  flex relative md:h-screen flex-col justify-center items-center overflow-hidd en ">
                        <img
                                src="new.jpg"
                                alt=""
                                className="hidden md:block absolute w-full h-full object-cover max-w-full max-h-full"
                        />
                        <form className="bg-white w-full md:py-14 md:z-10 py-6 pt-16  md:w-[80%]  max-w-5xl ">
                                {
                                        <div className=" border  rounded mb-6 h-12 mx-spacing flex justify-between box-border">
                                                <span
                                                        onClick={() => {
                                                                setUserLoginingType("donor");
                                                        }}
                                                        className={`border-t-8 border-white  ${
                                                                userLoginingType === "donor" &&
                                                                "!border-secondary font-bold "
                                                        } mx-auto w-full relative text-center cursor-pointer flex justify-center items-center pb-[8px]`}
                                                >
                                                        Donor <User className="ml-1" size={18} />
                                                </span>
                                                <span
                                                        onClick={() => {
                                                                setUserLoginingType("hospital");
                                                        }}
                                                        className={`border-t-8 border-white  ${
                                                                userLoginingType === "hospital" &&
                                                                " !border-secondary font-bold "
                                                        } mx-auto w-full text-center cursor-pointer flex justify-center items-center pb-[8px]`}
                                                >
                                                        Hospital{" "}
                                                        <Hospital className="ml-1" size={18} />
                                                </span>
                                                <span
                                                        onClick={() => {
                                                                setUserLoginingType("collector");
                                                        }}
                                                        className={`border-t-8 border-white ${
                                                                userLoginingType === "collector" &&
                                                                "  !border-secondary font-bold "
                                                        } mx-auto w-full text-center cursor-pointer flex justify-center items-center pb-[8px]`}
                                                >
                                                        Collector{" "}
                                                        <Syringe className="ml-1" size={18} />
                                                </span>
                                        </div>
                                }
                                <RegisterType
                                        userState={userLoginingType}
                                        userSetFunction={setUserLoginingType}
                                />{" "}
                        </form>
                </div>
        );
}

export default Register;
