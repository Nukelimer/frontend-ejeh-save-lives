// import Input from "@/c_components/Input";
// import { Button } from "@/components/ui/button";

// import { Link } from "react-router-dom";

// type userState = "donor" | "hospital" | "collector";
// type LoginTypeProps = {
//         userState: userState;

//         registrationData: {
//                 donorName: string;
//                 setDonorName: React.Dispatch<React.SetStateAction<string>>;
//                 donorEmail: string;
//                 setDonorEmail: React.Dispatch<React.SetStateAction<string>>;
//                 donorAddress: string;
//                 setDonorAddress: React.Dispatch<React.SetStateAction<string>>;
//                 donorPhone: string;
//                 setDonorPhone: React.Dispatch<React.SetStateAction<string>>;
//                 donorAge: string;
//                 setDonorAge: React.Dispatch<React.SetStateAction<string>>;
//                 donorPassword: string;
//                 setDonorPassword: React.Dispatch<React.SetStateAction<string>>;
//                 hospitalName: string;
//                 setHospitalName: React.Dispatch<React.SetStateAction<string>>;
//                 hospitalEmail: string;
//                 setHospitalEmail: React.Dispatch<React.SetStateAction<string>>;
//                 hospitalAddress: string;
//                 setHospitalAddress: React.Dispatch<React.SetStateAction<string>>;
//                 hospitalPhone: string;
//                 setHospitalPhone: React.Dispatch<React.SetStateAction<string>>;
//                 hospitalPassword: string;
//                 setHospitalPassword: React.Dispatch<React.SetStateAction<string>>;
//                 collectorName: string;
//                 setCollectorName: React.Dispatch<React.SetStateAction<string>>;
//                 collectorEmail: string;
//                 setCollectorEmail: React.Dispatch<React.SetStateAction<string>>;
//                 collectorAddress: string;
//                 setCollectorAddress: React.Dispatch<React.SetStateAction<string>>;
//                 collectorPhone: string;
//                 setCollectorPhone: React.Dispatch<React.SetStateAction<string>>;
//                 collectorAge: string;
//                 setCollectorAge: React.Dispatch<React.SetStateAction<string>>;
//                 collectorPassword: string;
//                 setCollectorPassword: React.Dispatch<React.SetStateAction<string>>;
//         };
// };

// function RegisterType({ userState, registrationData }: LoginTypeProps) {
//         console.log(registrationData, userState);

//         if (userState === "donor") {
//                 return (
//                         <div className=" pb-16 ">
//                                 <h3 className="mx-spacing text-2xl mb-6 p_color uppercase">
//                                         Register As Donor
//                                 </h3>
//                                 <div className=" md:flex w-full px-spacing ">
//                                         <Input
//                                                 value={registrationData.donorName}
//                                                 onChange={(e) => registrationData.setDonorName(e.target.value)}
//                                                 inputType="text"
//                                                 placeholder="Enter Your Name"
//                                                 labelName="Name"
//                                                 inputStyles="bg-slate-100 text-black placeholder:text-slate-400 py-4 placeholder:px -4 focus:font-mono outline-black  px-2 placeholder border-black"
//                                                 labelStyles="text-slate-400  "
//                                                 parentStyles=" md:w-1/2"
//                                         />

//                                         <Input
//                                                 value={registrationData.donorEmail}
//                                                 onChange={(e) => registrationData.setDonorEmail(e.target.value)}
//                                                 inputType="email"
//                                                 placeholder="Enter Your Email Address"
//                                                 labelName="Email"
//                                                 inputStyles="bg-slate-100 text-black placeholder:text-slate-400 py-4 placeholder:px-4 focus:font-mono outline-black px-2 placeholder border-black"
//                                                 labelStyles="text-slate-400"
//                                                 parentStyles="mt-6 md:mt-0 last-of-type:md:ml-6 md:w-1/2"
//                                         />
//                                 </div>

//                                 <div className=" md:flex w-full px-spacing max-w-5xl  md:mt-10  ">
//                                         <Input
//                                                 value={registrationData.donorPassword}
//                                                 onChange={(e) =>
//                                                         registrationData.setDonorPassword(e.target.value)
//                                                 }
//                                                 inputType="password"
//                                                 placeholder="Enter Your Password"
//                                                 labelName="Password"
//                                                 inputStyles="bg-slate-100 text-black px-2 placeholder:text-slate-400 py-4 placeholder:px -4 focus:font-mono outline-black border-black"
//                                                 labelStyles="text-slate-400  "
//                                                 parentStyles=" md:w-1/2 mt-6 md:mt-0"
//                                         />

//                                         <Input
//                                                 value={registrationData.donorPhone}
//                                                 onChange={(e) => registrationData.setDonorPhone(e.target.value)}
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
//                                                 value={registrationData.donorAge}
//                                                 onChange={(e) => registrationData.setDonorAge(e.target.value)}
//                                                 inputStyles="bg-slate-100 text-black px-2 placeholder:text-slate-400 py-4  placeholder:px -4 focus:font-mono outline-black border-black"
//                                                 labelStyles="text-slate-400  "
//                                                 parentStyles=" md:w-1/2 mt-6 md:mt-0"
//                                                 inputType="number"
//                                                 placeholder="Enter Your Age"
//                                                 labelName="Age"
//                                         />

//                                         <Input
//                                                 value={registrationData.donorAddress}
//                                                 onChange={(e) =>
//                                                         registrationData.setDonorAddress(e.target.value)
//                                                 }
//                                                 inputType="textarea"
//                                                 placeholder="Enter Your Address"
//                                                 labelName="Address"
//                                                 inputStyles="bg-slate-100  px-2 placeholder text-black placeholder:text-slate-400 py-4 placeholder:px -4 focus:font-mono outline-black border-black"
//                                                 labelStyles="text-slate-400 "
//                                                 parentStyles="mt-6 md:mt-0 last-of-type:md:ml-6 md:w-1/2"
//                                         />
//                                 </div>

//                                 <div className="flex items-center justify-center mt-8">
//                                         <Button
//                                                 type="submit"
//                                                 variant={"secondary"}
//                                                 className=" w-1/4 py-6 text-white cursor-pointer"
//                                         >
//                                                 {" "}
//                                                 Register
//                                         </Button>
//                                 </div>

//                                 <div className="mx-spacing pt-5 text-center ">
//                                         <p>
//                                                 {" "}
//                                                 Have account,
//                                                 <Link
//                                                         to={"/login"}
//                                                         className="text-secondary underline cursor-pointer pl-2"
//                                                 >
//                                                         Login now
//                                                 </Link>
//                                         </p>{" "}
//                                 </div>
//                         </div>
//                 );
//         } else if (userState === "hospital")
//                 return (
//                         <div className=" pb-16">
//                                 <h3 className="mx-spacing text-2xl mb-6 p_color uppercase">
//                                         Register As Hospital
//                                 </h3>
//                                 <div className=" md:flex w-full px-spacing ">
//                                         <Input
//                                                 value={registrationData.hospitalName}
//                                                 onChange={(e) =>
//                                                         registrationData.setHospitalName(
//                                                                 e.target.value
//                                                         )
//                                                 }
//                                                 inputType="text"
//                                                 placeholder="Enter Hospital Name"
//                                                 labelName="Hospital Name"
//                                                 inputStyles="bg-slate-100 text-black placeholder:text-slate-400 py-4 placeholder:px -4 focus:font-mono outline-black  px-2 placeholder border-black"
//                                                 labelStyles="text-slate-400  "
//                                                 parentStyles=" md:w-1/2"
//                                         />

//                                         <Input
//                                                 value={registrationData.hospitalEmail}
//                                                 onChange={(e) =>
//                                                         registrationData.setHospitalEmail(
//                                                                 e.target.value
//                                                         )
//                                                 }
//                                                 inputType="text"
//                                                 placeholder="Enter Hospital Email Address"
//                                                 labelName=" Hospital Email"
//                                                 inputStyles="bg-slate-100 text-black placeholder:text-slate-400 py-4 placeholder:px -4 focus:font-mono outline-black  px-2 placeholder border-black"
//                                                 labelStyles="text-slate-400 "
//                                                 parentStyles="mt-6 md:mt-0 last-of-type:md:ml-6 md:w-1/2"
//                                         />
//                                 </div>

//                                 <div className=" md:flex w-full px-spacing max-w-5xl  md:mt-10  ">
//                                         <Input
//                                                 value={registrationData.hospitalPassword}
//                                                 onChange={(e) =>
//                                                         registrationData.setHospitalPassword(
//                                                                 e.target.value
//                                                         )
//                                                 }
//                                                 inputType="password"
//                                                 placeholder="Enter Password"
//                                                 labelName="Password"
//                                                 inputStyles="bg-slate-100 text-black px-2 placeholder:text-slate-400 py-4 placeholder:px -4 focus:font-mono outline-black border-black"
//                                                 labelStyles="text-slate-400  "
//                                                 parentStyles=" md:w-1/2 mt-6 md:mt-0"
//                                         />

//                                         <Input
//                                                 value={registrationData.hospitalPhone}
//                                                 onChange={(e) =>
//                                                         registrationData.setHospitalPhone(
//                                                                 e.target.value
//                                                         )
//                                                 }
//                                                 inputType="number"
//                                                 placeholder="Enter Hospital Phone Number"
//                                                 labelName="Phone Number"
//                                                 inputStyles="bg-slate-100  px-2 placeholder text-black placeholder:text-slate-400 py-4  placeholder:px -4 focus:font-mono outline-black border-black"
//                                                 labelStyles="text-slate-400 "
//                                                 parentStyles="mt-6 md:mt-0 last-of-type:md:ml-6 md:w-1/2"
//                                         />
//                                 </div>

//                                 <div className=" md:flex w-full px-spacing max-w-5xl  md:mt-10 ">
//                                         {/* <Input
//                                                 inputStyles="bg-slate-100 text-black px-2 placeholder:text-slate-400 py-4  placeholder:px -4 focus:font-mono outline-black border-black"
//                                                 labelStyles="text-slate-400  "
//                                                 parentStyles=" md:w-1/2 mt-6 md:mt-0"
//                                                 inputType="number"
//                                                 placeholder="Enter Your Age"
//                                                 labelName="Age"
//                                         /> */}

//                                         <Input
//                                                 value={registrationData.hospitalAddress}
//                                                 onChange={(e) =>
//                                                         registrationData.setHospitalAddress(
//                                                                 e.target.value
//                                                         )
//                                                 }
//                                                 inputType="textarea"
//                                                 placeholder="Enter Hospital Address"
//                                                 labelName="Hospital Address"
//                                                 inputStyles="bg-slate-100  px-2 placeholder text-black placeholder:text-slate-400 py-4 placeholder:px -4 focus:font-mono outline-black border-black"
//                                                 labelStyles="text-slate-400 "
//                                                 parentStyles="mt-6 md:mt-0 w-full"
//                                         />
//                                 </div>

//                                 <div className="flex items-center justify-center mt-8">
//                                         <Button
//                                                 type="submit"
//                                                 variant={"secondary"}
//                                                 className=" w-1/4 py-6 text-white cursor-pointer"
//                                         >
//                                                 {" "}
//                                                 Register
//                                         </Button>
//                                 </div>
//                                 <div className="mx-spacing pt-5 text-center ">
//                                         <p>
//                                                 {" "}
//                                                 Have account,
//                                                 <Link
//                                                         to={"/login"}
//                                                         className="text-secondary underline cursor-pointer pl-2"
//                                                 >
//                                                         Login now
//                                                 </Link>
//                                         </p>{" "}
//                                 </div>
//                         </div>
//                 );
//         else if (userState === "collector") {
//                 return (
//                         <div className="pb-16 ">
//                                 <h3 className="mx-spacing text-2xl mb-6 p_color  uppercase">
//                                         Register As Collector
//                                 </h3>
//                                 <div className=" md:flex w-full px-spacing ">
//                                         <Input
//                                                 value={registrationData.collectorName}
//                                                 onChange={(e) =>
//                                                         registrationData.setCollectorName(
//                                                                 e.target.value
//                                                         )
//                                                 }
//                                                 inputType="text"
//                                                 placeholder="Enter Your Name"
//                                                 labelName="Name"
//                                                 inputStyles="bg-slate-100 text-black placeholder:text-slate-400 py-4 placeholder:px -4 focus:font-mono outline-black  px-2 placeholder border-black"
//                                                 labelStyles="text-slate-400  "
//                                                 parentStyles=" md:w-1/2"
//                                         />

//                                         <Input
//                                                 value={registrationData.collectorEmail}
//                                                 onChange={(e) =>
//                                                         registrationData.setCollectorEmail(
//                                                                 e.target.value
//                                                         )
//                                                 }
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
//                                                 value={registrationData.collectorPassword}
//                                                 onChange={(e) =>
//                                                         registrationData.setCollectorPassword(
//                                                                 e.target.value
//                                                         )
//                                                 }
//                                                 inputType="password"
//                                                 placeholder="Enter Your Password"
//                                                 labelName="Password"
//                                                 inputStyles="bg-slate-100 text-black px-2 placeholder:text-slate-400 py-4 placeholder:px -4 focus:font-mono outline-black border-black"
//                                                 labelStyles="text-slate-400  "
//                                                 parentStyles=" md:w-1/2 mt-6 md:mt-0"
//                                         />

//                                         <Input
//                                                 value={registrationData.collectorPhone}
//                                                 onChange={(e) =>
//                                                         registrationData.setCollectorPhone(
//                                                                 e.target.value
//                                                         )
//                                                 }
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
//                                                 value={registrationData.collectorAge}
//                                                 onChange={(e) =>
//                                                         registrationData.setCollectorAge(
//                                                                 e.target.value
//                                                         )
//                                                 }
//                                                 inputStyles="bg-slate-100 text-black px-2 placeholder:text-slate-400 py-4  placeholder:px -4 focus:font-mono outline-black border-black"
//                                                 labelStyles="text-slate-400  "
//                                                 parentStyles=" md:w-1/2 mt-6 md:mt-0"
//                                                 inputType="number"
//                                                 placeholder="Enter Your Age"
//                                                 labelName="Age"
//                                         />

//                             <Input
//                                 value={registrationData.collectorName}
//                                                 onChange={(e) =>
//                                                         registrationData.setCollectorName(
//                                                                 e.target.value
//                                                         )
//                                                 }
//                                                 inputType="textarea"
//                                                 placeholder="Enter Your Address"
//                                                 labelName="Address"
//                                                 inputStyles="bg-slate-100  px-2 placeholder text-black placeholder:text-slate-400 py-4 placeholder:px -4 focus:font-mono outline-black border-black"
//                                                 labelStyles="text-slate-400 "
//                                                 parentStyles="mt-6 md:mt-0 last-of-type:md:ml-6 md:w-1/2"
//                                         />
//                                 </div>

//                                 <div className="flex items-center justify-center mt-8">
//                                         <Button
//                                                 type="submit"
//                                                 variant={"secondary"}
//                                                 className=" w-1/4 py-6 text-white cursor-pointer"
//                                         >
//                                                 {" "}
//                                                 Register
//                                         </Button>
//                                 </div>

//                                 <div className="mx-spacing pt-5 text-center ">
//                                         <p>
//                                                 {" "}
//                                                 Have account,
//                                                 <Link
//                                                         to={"/login"}
//                                                         className="text-secondary underline cursor-pointer pl-2"
//                                                 >
//                                                         Login now
//                                                 </Link>
//                                         </p>{" "}
//                                 </div>
//                         </div>
//                 );
//         }
// }

// export default RegisterType;


import Input from "@/c_components/Input";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

type UserState = "donor" | "hospital" | "collector";
type LoginTypeProps = {
        userState: UserState;
        registrationData: {
                donorData: {
                        donorName: string;
                        donorEmail: string;
                        donorAddress: string;
                        donorPhone: string;
                        donorAge: string;
                        donorPassword: string;
                };
                setDonorData: React.Dispatch<
                        React.SetStateAction<{
                                donorName: string;
                                donorEmail: string;
                                donorAddress: string;
                                donorPhone: string;
                                donorAge: string;
                                donorPassword: string;
                        }>
                >;
                hospitalData: {
                        hospitalName: string;
                        hospitalEmail: string;
                        hospitalAddress: string;
                        hospitalPhone: string;
                        hospitalPassword: string;
                };
                setHospitalData: React.Dispatch<
                        React.SetStateAction<{
                                hospitalName: string;
                                hospitalEmail: string;
                                hospitalAddress: string;
                                hospitalPhone: string;
                                hospitalPassword: string;
                        }>
                >;
                collectorData: {
                        collectorName: string;
                        collectorEmail: string;
                        collectorAddress: string;
                        collectorPhone: string;
                        collectorAge: string;
                        collectorPassword: string;
                };
                setCollectorData: React.Dispatch<
                        React.SetStateAction<{
                                collectorName: string;
                                collectorEmail: string;
                                collectorAddress: string;
                                collectorPhone: string;
                                collectorAge: string;
                                collectorPassword: string;
                        }>
                >;
        };
};

function RegisterType({ userState, registrationData }: LoginTypeProps) {
        if (userState === "donor") {
                return (
                        <div className="pb-16">
                                <h3 className="mx-spacing text-2xl mb-6 p_color uppercase">
                                        Register As Donor
                                </h3>
                                <div className="md:flex w-full px-spacing">
                                        <Input
                                                name="donorName"
                                                inputType="text"
                                                placeholder="Enter Your Name"
                                                labelName="Name"
                                                inputStyles="bg-slate-100 text-black placeholder:text-slate-400 py-4 placeholder:px-4 focus:font-mono outline-black px-2 placeholder border-black"
                                                labelStyles="text-slate-400"
                                                parentStyles="md:w-1/2"
                                        />
                                        <Input
                                                name="donorEmail"
                                                inputType="email"
                                                placeholder="Enter Your Email Address"
                                                labelName="Email"
                                                inputStyles="bg-slate-100 text-black placeholder:text-slate-400 py-4 placeholder:px-4 focus:font-mono outline-black px-2 placeholder border-black"
                                                labelStyles="text-slate-400"
                                                parentStyles="mt-6 md:mt-0 last-of-type:md:ml-6 md:w-1/2"
                                        />
                                </div>
                                <div className="md:flex w-full px-spacing max-w-5xl md:mt-10">
                                        <Input
                                                name="donorPassword"
                                                inputType="password"
                                                placeholder="Enter Your Password"
                                                labelName="Password"
                                                inputStyles="bg-slate-100 text-black px-2 placeholder:text-slate-400 py-4 placeholder:px-4 focus:font-mono outline-black border-black"
                                                labelStyles="text-slate-400"
                                                parentStyles="md:w-1/2 mt-6 md:mt-0"
                                        />
                                        <Input
                                                name="donorPhone"
                                                inputType="number"
                                                placeholder="Enter Your Phone Number"
                                                labelName="Phone"
                                                inputStyles="bg-slate-100 px-2 placeholder text-black placeholder:text-slate-400 py-4 placeholder:px-4 focus:font-mono outline-black border-black"
                                                labelStyles="text-slate-400"
                                                parentStyles="mt-6 md:mt-0 last-of-type:md:ml-6 md:w-1/2"
                                        />
                                </div>
                                <div className="md:flex w-full px-spacing max-w-5xl md:mt-10">
                                        <Input
                                                name="donorAge"
                                                inputType="number"
                                                placeholder="Enter Your Age"
                                                labelName="Age"
                                                inputStyles="bg-slate-100 text-black px-2 placeholder:text-slate-400 py-4 placeholder:px-4 focus:font-mono outline-black border-black"
                                                labelStyles="text-slate-400"
                                                parentStyles="md:w-1/2 mt-6 md:mt-0"
                                        />
                                        <Input
                                                name="donorAddress"
                                                inputType="textarea"
                                                placeholder="Enter Your Address"
                                                labelName="Address"
                                                inputStyles="bg-slate-100 px-2 placeholder text-black placeholder:text-slate-400 py-4 placeholder:px-4 focus:font-mono outline-black border-black"
                                                labelStyles="text-slate-400"
                                                parentStyles="mt-6 md:mt-0 last-of-type:md:ml-6 md:w-1/2"
                                        />
                                </div>
                                <div className="flex items-center justify-center mt-8">
                                        <Button
                                                type="submit"
                                                variant={"secondary"}
                                                className="w-1/4 py-6 text-white cursor-pointer"
                                        >
                                                Register
                                        </Button>
                                </div>
                                <div className="mx-spacing pt-5 text-center">
                                        <p>
                                                Have account,
                                                <Link
                                                        to={"/login"}
                                                        className="text-secondary underline cursor-pointer pl-2"
                                                >
                                                        Login now
                                                </Link>
                                        </p>
                                </div>
                        </div>
                );
        } else if (userState === "hospital") {
                return (
                        <div className="pb-16">
                                <h3 className="mx-spacing text-2xl mb-6 p_color uppercase">
                                        Tenure As Hospital
                                </h3>
                                <div className="md:flex w-full px-spacing">
                                        <Input
                                                name="hospitalName"
                                                inputType="text"
                                                placeholder="Enter Hospital Name"
                                                labelName="Hospital Name"
                                                inputStyles="bg-slate-100 text-black placeholder:text-slate-400 py-4 placeholder:px-4 focus:font-mono outline-black px-2 placeholder border-black"
                                                labelStyles="text-slate-400"
                                                parentStyles="md:w-1/2"
                                        />
                                        <Input
                                                name="hospitalEmail"
                                                inputType="email"
                                                placeholder="Enter Hospital Email Address"
                                                labelName="Hospital Email"
                                                inputStyles="bg-slate-100 text-black placeholder:text-slate-400 py-4 placeholder:px-4 focus:font-mono outline-black px-2 placeholder border-black"
                                                labelStyles="text-slate-400"
                                                parentStyles="mt-6 md:mt-0 last-of-type:md:ml-6 md:w-1/2"
                                        />
                                </div>
                                <div className="md:flex w-full px-spacing max-w-5xl md:mt-10">
                                        <Input
                                                name="hospitalPassword"
                                                inputType="password"
                                                placeholder="Enter Password"
                                                labelName="Password"
                                                inputStyles="bg-slate-100 text-black px-2 placeholder:text-slate-400 py-4 placeholder:px-4 focus:font-mono outline-black border-black"
                                                labelStyles="text-slate-400"
                                                parentStyles="md:w-1/2 mt-6 md:mt-0"
                                        />
                                        <Input
                                                name="hospitalPhone"
                                                inputType="number"
                                                placeholder="Enter Hospital Phone Number"
                                                labelName="Phone Number"
                                                inputStyles="bg-slate-100 px-2 placeholder text-black placeholder:text-slate-400 py-4 placeholder:px-4 focus:font-mono outline-black border-black"
                                                labelStyles="text-slate-400"
                                                parentStyles="mt-6 md:mt-0 last-of-type:md:ml-6 md:w-1/2"
                                        />
                                </div>
                                <div className="md:flex w-full px-spacing max-w-5xl md:mt-10">
                                        <Input
                                                name="hospitalAddress"
                                                inputType="textarea"
                                                placeholder="Enter Hospital Address"
                                                labelName="Hospital Address"
                                                inputStyles="bg-slate-100 px-2 placeholder text-black placeholder:text-slate-400 py-4 placeholder:px-4 focus:font-mono outline-black border-black"
                                                labelStyles="text-slate-400"
                                                parentStyles="mt-6 md:mt-0 w-full"
                                        />
                                </div>
                                <div className="flex items-center justify-center mt-8">
                                        <Button
                                                type="submit"
                                                variant={"secondary"}
                                                className="w-1/4 py-6 text-white cursor-pointer"
                                        >
                                                Register
                                        </Button>
                                </div>
                                <div className="mx-spacing pt-5 text-center">
                                        <p>
                                                Have account,
                                                <Link
                                                        to={"/login"}
                                                        className="text-secondary underline cursor-pointer pl-2"
                                                >
                                                        Login now
                                                </Link>
                                        </p>
                                </div>
                        </div>
                );
        } else if (userState === "collector") {
                return (
                        <div className="pb-16">
                                <h3 className="mx-spacing text-2xl mb-6 p_color uppercase">
                                        Register As Collector
                                </h3>
                                <div className="md:flex w-full px-spacing">
                                        <Input
                                                name="collectorName"
                                                inputType="text"
                                                placeholder="Enter Your Name"
                                                labelName="Name"
                                                inputStyles="bg-slate-100 text-black placeholder:text-slate-400 py-4 placeholder:px-4 focus:font-mono outline-black px-2 placeholder border-black"
                                                labelStyles="text-slate-400"
                                                parentStyles="md:w-1/2"
                                        />
                                        <Input
                                                name="collectorEmail"
                                                inputType="email"
                                                placeholder="Enter Your Email Address"
                                                labelName="Email"
                                                inputStyles="bg-slate-100 text-black placeholder:text-slate-400 py-4 placeholder:px-4 focus:font-mono outline-black px-2 placeholder border-black"
                                                labelStyles="text-slate-400"
                                                parentStyles="mt-6 md:mt-0 last-of-type:md:ml-6 md:w-1/2"
                                        />
                                </div>
                                <div className="md:flex w-full px-spacing max-w-5xl md:mt-10">
                                        <Input
                                                name="collectorPassword"
                                                inputType="password"
                                                placeholder="Enter Your Password"
                                                labelName="Password"
                                                inputStyles="bg-slate-100 text-black px-2 placeholder:text-slate-400 py-4 placeholder:px-4 focus:font-mono outline-black border-black"
                                                labelStyles="text-slate-400"
                                                parentStyles="md:w-1/2 mt-6 md:mt-0"
                                        />
                                        <Input
                                                name="collectorPhone"
                                                inputType="number"
                                                placeholder="Enter Your Phone Number"
                                                labelName="Phone"
                                                inputStyles="bg-slate-100 px-2 placeholder text-black placeholder:text-slate-400 py-4 placeholder:px-4 focus:font-mono outline-black border-black"
                                                labelStyles="text-slate-400"
                                                parentStyles="mt-6 md:mt-0 last-of-type:md:ml-6 md:w-1/2"
                                        />
                                </div>
                                <div className="md:flex w-full px-spacing max-w-5xl md:mt-10">
                                        <Input
                                                name="collectorAge"
                                                inputType="number"
                                                placeholder="Enter Your Age"
                                                labelName="Age"
                                                inputStyles="bg-slate-100 text-black px-2 placeholder:text-slate-400 py-4 placeholder:px-4 focus:font-mono outline-black border-black"
                                                labelStyles="text-slate-400"
                                                parentStyles="md:w-1/2 mt-6 md:mt-0"
                                        />
                                        <Input
                                                name="collectorAddress"
                                                inputType="textarea"
                                                placeholder="Enter Your Address"
                                                labelName="Address"
                                                inputStyles="bg-slate-100 px-2 placeholder text-black placeholder:text-slate-400 py-4 placeholder:px-4 focus:font-mono outline-black border-black"
                                                labelStyles="text-slate-400"
                                                parentStyles="mt-6 md:mt-0 last-of-type:md:ml-6 md:w-1/2"
                                        />
                                </div>
                                <div className="flex items-center justify-center mt-8">
                                        <Button
                                                type="submit"
                                                variant={"secondary"}
                                                className="w-1/4 py-6 text-white cursor-pointer"
                                        >
                                                Register
                                        </Button>
                                </div>
                                <div className="mx-spacing pt-5 text-center">
                                        <p>
                                                Have account,
                                                <Link
                                                        to={"/login"}
                                                        className="text-secondary underline cursor-pointer pl-2"
                                                >
                                                        Login now
                                                </Link>
                                        </p>
                                </div>
                        </div>
                );
        }
        return null;
}

export default RegisterType;