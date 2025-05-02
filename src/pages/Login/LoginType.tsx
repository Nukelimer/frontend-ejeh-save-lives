import Input from "@/c_components/Input";
import { Button } from "@/components/ui/button";

import { Link } from "react-router-dom";

type userState = "donor" | "hospital" | "collector";
type LoginTypeProps = {
        userState: userState;
        loginData: {
                donorData: {
                        donorEmail: string;
                        donorPassword: string;
                };
                setDonorData: React.Dispatch<
                        React.SetStateAction<{
                                donorEmail: string;
                                donorPassword: string;
                        }>
                >;

                hospitalData: {
                        hospitalEmail: string;
                        hospitalPassword: string;
                };
                setHospitalData: React.Dispatch<
                        React.SetStateAction<{
                                hospitalEmail: string;
                                hospitalPassword: string;
                        }>
                >;

                collectorData: {
                        collectorEmail: string;
                        collectorPassword: string;
                };
                setCollectorData: React.Dispatch<
                        React.SetStateAction<{
                                collectorEmail: string;
                                collectorPassword: string;
                        }>
                >;
        };
};

function LoginType({ userState }: LoginTypeProps) {
        if (userState === "donor") {
                return (
                        <div className=" pb-16 ">
                                <h3 className="mx-spacing text-center text-2xl mb-6 p_color uppercase">
                                        Login As Donor
                                </h3>
                                <div className=" md:f lex w-full px-spacing ">
                            <Input
                                name="donorEmail"
                                                inputType="text"
                                                placeholder="Enter Your Email Address"
                                                labelName="Email"
                                                inputStyles="bg-slate-100 text-black placeholder:text-slate-400 py-4 placeholder:px -4 focus:font-mono outline-black  px-2 placeholder border-black"
                                                labelStyles="text-slate-400 "
                                                parentStyles="mt-6 md:mt-0 l"
                                        />

                            <Input
                                name="donorPassword"
                                                inputType="password"
                                                placeholder="Enter Your Password"
                                                labelName="Password"
                                                inputStyles="bg-slate-100 text-black px-2 placeholder:text-slate-400 py-4 placeholder:px -4 focus:font-mono outline-black border-black"
                                                labelStyles="text-slate-400  "
                                                parentStyles="  mt-8"
                                        />
                                </div>

                                <div className="flex items-center justify-center mt-8">
                                        <Button
                                                type="submit"
                                                variant={"secondary"}
                                                className=" w-1/4  py-6 text-white cursor -pointer"
                                        >
                                                {" "}
                                                Login
                                        </Button>
                                </div>

                                <div className="mx-spacing pt-5 text-center ">
                                        <p>
                                                {" "}
                                                No account,
                                                <Link
                                                        to={"/registration"}
                                                        className="text-secondary underline cursor-pointer pl-2"
                                                >
                                                        Register now
                                                </Link>
                                        </p>{" "}
                                </div>
                        </div>
                );
        } else if (userState === "hospital")
                return (
                        <div className=" pb-16">
                                <h3 className="mx-spacing text-2xl text-center mb-6 p_color uppercase">
                                        Login As Hospital
                                </h3>
                                <div className=" md:f lex w-full px-spacing ">
                            <Input
                                name="donorHospital"
                                                inputType="text"
                                                placeholder="Enter Hospital Email Address"
                                                labelName=" Hospital Email"
                                                inputStyles="bg-slate-100 text-black placeholder:text-slate-400 py-4 placeholder:px -4 focus:font-mono outline-black  px-2 placeholder border-black"
                                                labelStyles="text-slate-400 "
                                                parentStyles="mt-6 "
                                        />
                            <Input
                                name="donorPassword"
                                                inputType="password"
                                                placeholder="Enter Password"
                                                labelName="Hospital Password"
                                                inputStyles="bg-slate-100 text-black px-2 placeholder:text-slate-400 py-4 placeholder:px -4 focus:font-mono outline-black border-black"
                                                labelStyles="text-slate-400  "
                                                parentStyles=" mt-6 "
                                        />
                                </div>

                                <div className="flex items-center justify-center mt-8">
                                        <Button
                                                type="submit"
                                                variant={"secondary"}
                                                className=" w-1/4  py-6 text-white cursor-pointer"
                                        >
                                                {" "}
                                                Login
                                        </Button>
                                </div>

                                <div className="mx-spacing pt-5 text-center ">
                                        <p>
                                                {" "}
                                                No account,
                                                <Link
                                                        to={"/registration"}
                                                        className="text-secondary underline cursor-pointer pl-2"
                                                >
                                                        Register now
                                                </Link>
                                        </p>{" "}
                                </div>
                        </div>
                );
        else if (userState === "collector") {
                return (
                        <div className=" ">
                                <h3 className="mx-spacing text-center text-2xl mb-6 p_color uppercase">
                                        Login As Collector
                                </h3>
                                <div className=" md:f lex w-full px-spacing ">
                            <Input
                                name="collectorEmail"
                                                inputType="text"
                                                placeholder="Enter Your Email Address"
                                                labelName="Email"
                                                inputStyles="bg-slate-100 text-black placeholder:text-slate-400 py-4 placeholder:px -4 focus:font-mono outline-black  px-2 placeholder border-black"
                                                labelStyles="text-slate-400 "
                                                parentStyles="mt-6 "
                                        />
                            <Input
                                name="collectorPassword"
                                                inputType="password"
                                                placeholder="Enter Your Password"
                                                labelName="Password"
                                                inputStyles="bg-slate-100 text-black px-2 placeholder:text-slate-400 py-4 placeholder:px -4 focus:font-mono outline-black border-black"
                                                labelStyles="text-slate-400  "
                                                parentStyles="  mt-6"
                                        />
                                </div>

                                <div className="flex items-center justify-center mt-8">
                                        <Button
                                                type="submit"
                                                variant={"secondary"}
                                                className=" w-1/4 py-6 text-white cursor-pointer"
                                        >
                                                {" "}
                                                Login
                                        </Button>
                                </div>

                                <div className="mx-spacing pt-5 text-center ">
                                        <p>
                                                {" "}
                                                No account,
                                                <Link
                                                        to={"/registration"}
                                                        className="text-secondary underline cursor-pointer pl-2"
                                                >
                                                        Register now
                                                </Link>
                                        </p>{" "}
                                </div>
                        </div>
                );
        }
}

export default LoginType;
