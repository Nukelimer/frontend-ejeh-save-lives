import { useState } from "react";

import { Hospital, Syringe, User } from "lucide-react";
import RegisterType from "./LoginType";

function Login() {
        type UserState = "donor" | "hospital" | "collector";
        const [userLoginingType, setUserLoginingType] = useState<UserState>("donor");

        return (
                <div className="md:pt- 24 pt-8  flex relative md:h-screen flex-col justify-center items-center  ">
                        <img
                                src="new.jpg"
                                alt=""
                                className="hidden md:block absolute w-full h-full object-cover max-w-full max-h-full"
                        />
                        <form className="bg-white w-full md:py-14 md:z-10 py-6 pt-16  md:w-[80%]  max-w-2xl ">
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

export default Login;
