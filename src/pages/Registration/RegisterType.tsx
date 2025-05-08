import Input from "@/c_components/Input";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

type UserState = "donor" | "hospital" | "collector";
type LoginTypeProps = {
        donorErrors: {
                donorEmail: boolean;
                donorName: boolean;
                donorPhone: boolean;
                donorPassword: boolean;
        };
        setDonorErrors: React.Dispatch<
                React.SetStateAction<{
                        donorEmail: boolean;
                        donorName: boolean;
                        donorPhone: boolean;
                        donorPassword: boolean;
                }>
        >;

        hospitalErrors: {
                hospitalEmail: boolean;
                hospitalName: boolean;
                hospitalPhone: boolean;
                hospitalPassword: boolean;
                hospitalAddress: boolean;
                hospitalWebsite: boolean;
        };
        setHospitalErrors: React.Dispatch<
                React.SetStateAction<{
                        hospitalEmail: boolean;
                        hospitalName: boolean;
                        hospitalPhone: boolean;
                        hospitalPassword: boolean;
                        hospitalAddress: boolean;
                        hospitalWebsite: boolean;
                }>
        >;
        userState: UserState;
        registrationData: {
                donorData: {
                        donorName: string;
                        donorEmail: string;
                        donorPhone: string;
                        donorPassword: string;
                };
                setDonorData: React.Dispatch<
                        React.SetStateAction<{
                                donorName: string;
                                donorEmail: string;
                                donorPhone: string;
                                donorPassword: string;
                        }>
                >;
                hospitalData: {
                        hospitalName: string;
                        hospitalEmail: string;
                        hospitalAddress: string;
                        hospitalPhone: string;
                        hospitalPassword: string;
                        hospitalWebsite: string;
                };
                setHospitalData: React.Dispatch<
                        React.SetStateAction<{
                                hospitalName: string;
                                hospitalEmail: string;
                                hospitalAddress: string;
                                hospitalPhone: string;
                                hospitalPassword: string;
                                hospitalWebsite: string;
                        }>
                >;
                collectorData: {
                        collectorName: string;
                        collectorEmail: string;
                        collectorPhone: string;
                        collectorPassword: string;
                        collectorWebsite: string;
                        collectorAddress: string;
                };
                setCollectorData: React.Dispatch<
                        React.SetStateAction<{
                                collectorName: string;
                                collectorEmail: string;
                                collectorPhone: string;
                                collectorPassword: string;
                                collectorWebsite: string;
                                collectorAddress: string;
                        }>
                >;
        };
        setCollectorErrors: React.Dispatch<
                React.SetStateAction<{
                        collectorEmail: boolean;
                        collectorName: boolean;
                        collectorPhone: boolean;
                        collectorPassword: boolean;
                        collectorAddress: boolean;
                        collectorWebsite: boolean;
                }>
        >;
        collectorErrors: {
                collectorEmail: boolean;
                collectorName: boolean;
                collectorPhone: boolean;
                collectorPassword: boolean;
                collectorAddress: boolean;
                collectorWebsite: boolean;
        };
};

function RegisterType({
        userState,
        registrationData,
        donorErrors,
        setDonorErrors,
        hospitalErrors,
        setHospitalErrors,
        collectorErrors,
        setCollectorErrors
}: LoginTypeProps) {
        const {
                donorData,
                setDonorData,
                hospitalData,
                setHospitalData,
                collectorData,
                setCollectorData
        } = registrationData;

        if (userState === "donor") {
                return (
                        <div className="pb-16">
                                <h3 className="mx-spacing text-2xl mb-6 p_color uppercase">
                                        Register As Donor
                                </h3>
                                <div className="md:flex w-full px-spacing">
                                        <Input
                                                formError={donorErrors}
                                                name="donorName"
                                                inputType="text"
                                                placeholder="Enter Your Name"
                                                labelName="Name"
                                                value={donorData.donorName}
                                                onChange={(e) => {
                                                        const value = e.target.value;

                                                        setDonorData((prev) => ({
                                                                ...prev,
                                                                donorName: value
                                                        }));

                                                        if (value.length < 10) {
                                                                setDonorErrors((prev) => ({
                                                                        ...prev,
                                                                        donorName: true
                                                                }));
                                                        } else {
                                                                setDonorErrors((prev) => ({
                                                                        ...prev,
                                                                        donorName: false
                                                                }));
                                                        }
                                                }}
                                                inputStyles="bg-slate-100 text-black placeholder:text-slate-400 py-4 placeholder:px-4 focus:font-mono outline-black px-2 placeholder border-black"
                                                labelStyles="text-slate-400"
                                                parentStyles="md:w-1/2"
                                        />
                                        <Input
                                                formError={donorErrors}
                                                name="donorEmail"
                                                inputType="email"
                                                placeholder="Enter Your Email Address"
                                                labelName="Email"
                                                value={donorData.donorEmail}
                                                onChange={(e) => {
                                                        const value = e.target.value;

                                                        setDonorData((prev) => ({
                                                                ...prev,
                                                                donorEmail: value
                                                        }));

                                                        if (value.trim() && value.includes("@")) {
                                                                setDonorErrors((prev) => ({
                                                                        ...prev,
                                                                        donorEmail: false
                                                                }));
                                                        } else {
                                                                setDonorErrors((prev) => ({
                                                                        ...prev,
                                                                        donorEmail: true
                                                                }));
                                                        }
                                                }}
                                                inputStyles="bg-slate-100 text-black placeholder:text-slate-400 py-4 placeholder:px-4 focus:font-mono outline-black px-2 placeholder border-black"
                                                labelStyles="text-slate-400"
                                                parentStyles="mt-6 md:mt-0 last-of-type:md:ml-6 md:w-1/2"
                                        />
                                </div>
                                <div className="md:flex w-full px-spacing max-w-5xl md:mt-10">
                                        <Input
                                                formError={donorErrors}
                                                name="donorPassword"
                                                inputType="password"
                                                placeholder="Enter Your Password"
                                                labelName="Password"
                                                value={donorData.donorPassword}
                                                onChange={(e) => {
                                                        const value = e.target.value;
                                                        setDonorData((prev) => ({
                                                                ...prev,
                                                                donorPassword: value
                                                        }));

                                                        if (
                                                                value.length < 6 === !false ||
                                                                !/[^A-Za-z0-9]/.test(value)
                                                        ) {
                                                                console.log("leee");

                                                                setDonorErrors((prev) => ({
                                                                        ...prev,
                                                                        donorPassword: true
                                                                }));
                                                        } else {
                                                                setDonorErrors((prev) => ({
                                                                        ...prev,
                                                                        donorPassword: false
                                                                }));
                                                        }
                                                }}
                                                inputStyles="bg-slate-100 text-black px-2 placeholder:text-slate-400 py-4 placeholder:px-4 focus:font-mono outline-black border-black"
                                                labelStyles="text-slate-400"
                                                parentStyles="md:w-1/2 mt-6 md:mt-0"
                                        />
                                        <Input
                                                formError={donorErrors}
                                                name="donorPhone"
                                                inputType="tel"
                                                placeholder="Enter Your Phone Number"
                                                labelName="Phone"
                                                value={donorData.donorPhone}
                                                onChange={(e) => {
                                                        const value = e.target.value;
                                                        setDonorData((prev) => ({
                                                                ...prev,
                                                                donorPhone: value
                                                        }));

                                                        if (!value.match(/^\d{10,11}$/)) {
                                                                setDonorErrors((prev) => ({
                                                                        ...prev,
                                                                        donorPhone: true
                                                                }));
                                                        } else {
                                                                setDonorErrors((prev) => ({
                                                                        ...prev,
                                                                        donorPhone: false
                                                                }));
                                                        }
                                                }}
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
                                                Have account,{" "}
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
                                        Register As Hospital
                                </h3>
                                <div className="md:flex w-full px-spacing">
                                        <Input
                                                name="hospitalName"
                                                inputType="text"
                                                placeholder="Enter Hospital Name"
                                                labelName="Hospital Name"
                                                value={hospitalData.hospitalName}
                                                formError={hospitalErrors}
                                                onChange={(e) => {
                                                        const value = e.target.value;

                                                        setHospitalData((prev) => ({
                                                                ...prev,
                                                                hospitalName: value
                                                        }));

                                                        if (value.length < 10) {
                                                                setHospitalErrors((prev) => ({
                                                                        ...prev,
                                                                        hospitalName: true
                                                                }));
                                                        } else {
                                                                setHospitalErrors((prev) => ({
                                                                        ...prev,
                                                                        hospitalName: false
                                                                }));
                                                        }
                                                }}
                                                inputStyles="bg-slate-100 text-black placeholder:text-slate-400 py-4 placeholder:px-4 focus:font-mono outline-black px-2 placeholder border-black"
                                                labelStyles="text-slate-400"
                                                parentStyles="md:w-1/2"
                                        />
                                        <Input
                                                name="hospitalEmail"
                                                inputType="email"
                                                placeholder="Enter Hospital Email Address"
                                                labelName="Hospital Email"
                                                value={hospitalData.hospitalEmail}
                                                formError={hospitalErrors}
                                                onChange={(e) => {
                                                        const value = e.target.value;

                                                        setHospitalData((prev) => ({
                                                                ...prev,
                                                                hospitalEmail: value
                                                        }));

                                                        if (value.trim() && value.includes("@")) {
                                                                setHospitalErrors((prev) => ({
                                                                        ...prev,
                                                                        hospitalEmail: false
                                                                }));
                                                        } else {
                                                                setHospitalErrors((prev) => ({
                                                                        ...prev,
                                                                        hospitalEmail: true
                                                                }));
                                                        }
                                                }}
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
                                                value={hospitalData.hospitalPassword}
                                                formError={hospitalErrors}
                                                onChange={(e) => {
                                                        const value = e.target.value;

                                                        setHospitalData((prev) => ({
                                                                ...prev,
                                                                hospitalPassword: value
                                                        }));

                                                        if (
                                                                value.length < 6 === !false ||
                                                                !/[^A-Za-z0-9]/.test(value)
                                                        ) {
                                                                setHospitalErrors((prev) => ({
                                                                        ...prev,
                                                                        hospitalPassword: true
                                                                }));
                                                        } else {
                                                                setHospitalErrors((prev) => ({
                                                                        ...prev,
                                                                        hospitalPassword: false
                                                                }));
                                                        }
                                                }}
                                                inputStyles="bg-slate-100 text-black px-2 placeholder:text-slate-400 py-4 placeholder:px-4 focus:font-mono outline-black border-black"
                                                labelStyles="text-slate-400"
                                                parentStyles="md:w-1/2 mt-6 md:mt-0"
                                        />
                                        <Input
                                                name="hospitalPhone"
                                                inputType="tel"
                                                placeholder="Enter Hospital Phone Number"
                                                labelName="Phone Number"
                                                value={hospitalData.hospitalPhone}
                                                formError={hospitalErrors}
                                                onChange={(e) => {
                                                        const value = e.target.value;

                                                        setHospitalData((prev) => ({
                                                                ...prev,
                                                                hospitalPhone: value
                                                        }));

                                                        if (!value.match(/^\d{10,11}$/)) {
                                                                setHospitalErrors((prev) => ({
                                                                        ...prev,
                                                                        hospitalPhone: true
                                                                }));
                                                        } else {
                                                                setHospitalErrors((prev) => ({
                                                                        ...prev,
                                                                        hospitalPhone: false
                                                                }));
                                                        }
                                                }}
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
                                                value={hospitalData.hospitalAddress}
                                                formError={hospitalErrors}
                                                onChange={(e) => {
                                                        const value = e.target.value;

                                                        setHospitalData((prev) => ({
                                                                ...prev,
                                                                hospitalAddress: value
                                                        }));

                                                        if (value.trim() && value.length < 10) {
                                                                setHospitalErrors((prev) => ({
                                                                        ...prev,
                                                                        hospitalAddress: true
                                                                }));
                                                        } else {
                                                                setHospitalErrors((prev) => ({
                                                                        ...prev,
                                                                        hospitalAddress: false
                                                                }));
                                                        }
                                                }}
                                                inputStyles="bg-slate-100 px-2 placeholder text-black placeholder:text-slate-400 py-4 placeholder:px-4 focus:font-mono outline-black border-black"
                                                labelStyles="text-slate-400"
                                                parentStyles="md:w-1/2 mt-6 md:mt-0"
                                        />
                                        <Input
                                                name="hospitalWebsite"
                                                inputType="text"
                                                placeholder="Enter Hospital Website (e.g., https://example.com)"
                                                labelName="Website"
                                                value={hospitalData.hospitalWebsite}
                                                formError={hospitalErrors}
                                                onChange={(e) => {
                                                        const value = e.target.value;

                                                        setHospitalData((prev) => ({
                                                                ...prev,
                                                                hospitalWebsite: value
                                                        }));

                                                        if (value.trim() && value.includes(".")) {
                                                                setHospitalErrors((prev) => ({
                                                                        ...prev,
                                                                        hospitalWebsite: false
                                                                }));
                                                        } else {
                                                                setHospitalErrors((prev) => ({
                                                                        ...prev,
                                                                        hospitalWebsite: true
                                                                }));
                                                        }
                                                }}
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
                                                Have account,{" "}
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
                                                value={collectorData.collectorName}
                                                formError={collectorErrors}
                                                onChange={(e) => {
                                                        const value = e.target.value;

                                                        setCollectorData((prev) => ({
                                                                ...prev,
                                                                collectorName: value
                                                        }));

                                                        if (value.trim() && value.length < 10) {
                                                                setCollectorErrors((prev) => ({
                                                                        ...prev,
                                                                        collectorName: true
                                                                }));
                                                        } else {
                                                                setCollectorErrors((prev) => ({
                                                                        ...prev,
                                                                        collectorName: false
                                                                }));
                                                        }
                                                }}
                                                inputStyles="bg-slate-100 text-black placeholder:text-slate-400 py-4 placeholder:px-4 focus:font-mono outline-black px-2 placeholder border-black"
                                                labelStyles="text-slate-400"
                                                parentStyles="md:w-1/2"
                                        />
                                        <Input
                                                name="collectorEmail"
                                                inputType="email"
                                                placeholder="Enter Your Email Address"
                                                labelName="Email"
                                                value={collectorData.collectorEmail}
                                                formError={collectorErrors}
                                                onChange={(e) => {
                                                        const value = e.target.value;

                                                        setCollectorData((prev) => ({
                                                                ...prev,
                                                                collectorEmail: value
                                                        }));

                                                        if (value.trim() && value.includes("@")) {
                                                                setCollectorErrors((prev) => ({
                                                                        ...prev,
                                                                        collectorEmail: false
                                                                }));
                                                        } else {
                                                                setCollectorErrors((prev) => ({
                                                                        ...prev,
                                                                        collectorEmail: true
                                                                }));
                                                        }
                                                }}
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
                                                value={collectorData.collectorPassword}
                                                formError={collectorErrors}
                                                onChange={(e) => {
                                                        const value = e.target.value;

                                                        setCollectorData((prev) => ({
                                                                ...prev,
                                                                collectorPassword: value
                                                        }));

                                                        if (
                                                                value.length < 6 === !false ||
                                                                !/[^A-Za-z0-9]/.test(value)
                                                        ) {
                                                                setCollectorErrors((prev) => ({
                                                                        ...prev,
                                                                        collectorPassword: true
                                                                }));
                                                        } else {
                                                                setCollectorErrors((prev) => ({
                                                                        ...prev,
                                                                        collectorPassword: false
                                                                }));
                                                        }
                                                }}
                                                inputStyles="bg-slate-100 text-black px-2 placeholder:text-slate-400 py-4 placeholder:px-4 focus:font-mono outline-black border-black"
                                                labelStyles="text-slate-400"
                                                parentStyles="md:w-1/2 mt-6 md:mt-0"
                                        />
                                        <Input
                                                name="collectorPhone"
                                                inputType="tel"
                                                placeholder="Enter Your Phone Number"
                                                labelName="Phone"
                                                value={collectorData.collectorPhone}
                                                formError={collectorErrors}
                                                onChange={(e) => {
                                                        const value = e.target.value;

                                                        setCollectorData((prev) => ({
                                                                ...prev,
                                                                collectorPhone: value
                                                        }));

                                                        if (!value.match(/^\d{10,11}$/)) {
                                                                setCollectorErrors((prev) => ({
                                                                        ...prev,
                                                                        collectorPhone: true
                                                                }));
                                                        } else {
                                                                setCollectorErrors((prev) => ({
                                                                        ...prev,
                                                                        collectorPhone: false
                                                                }));
                                                        }
                                                }}
                                                inputStyles="bg-slate-100 px-2 placeholder text-black placeholder:text-slate-400 py-4 placeholder:px-4 focus:font-mono outline-black border-black"
                                                labelStyles="text-slate-400"
                                                parentStyles="mt-6 md:mt-0 last-of-type:md:ml-6 md:w-1/2"
                                        />
                                </div>
                            

                                <div className="md:flex w-full px-spacing max-w-5xl md:mt-10">
                                        <Input
                                                name="collectorAddress"
                                                inputType="textarea"
                                                placeholder="Enter Collector Address"
                                                labelName="Collector Address"
                                                value={collectorData.collectorAddress}
                                                formError={collectorErrors}
                                                onChange={(e) => {
                                                        const value = e.target.value;

                                                        setCollectorData((prev) => ({
                                                                ...prev,
                                                                collectorAddress: value
                                                        }));

                                                        if (value.trim() && value.length < 10) {
                                                                setCollectorErrors((prev) => ({
                                                                        ...prev,
                                                                        collectorAddress: true
                                                                }));
                                                        } else {
                                                                setCollectorErrors((prev) => ({
                                                                        ...prev,
                                                                        collectorAddress: false
                                                                }));
                                                        }
                                                }}
                                                inputStyles="bg-slate-100 px-2 placeholder text-black placeholder:text-slate-400 py-4 placeholder:px-4 focus:font-mono outline-black border-black"
                                                labelStyles="text-slate-400"
                                                parentStyles="md:w-1/2 mt-6 md:mt-0"
                                        />
                                        <Input
                                                name="collectorWebsite"
                                                inputType="text"
                                                placeholder="Enter Collector Website (e.g., https://example.com)"
                                                labelName="Website"
                                                value={collectorData.collectorWebsite}
                                                formError={collectorErrors}
                                                onChange={(e) => {
                                                        const value = e.target.value;


                                                    setCollectorData((prev) => ({
                                                            
                                                                ...prev,
                                                                collectorWebsite: value
                                                        }));

                                                    if (value.trim() && value.includes(".")) {
                                                         
                                                                setCollectorErrors((prev) => ({
                                                                        ...prev,
                                                                        collectorWebsite: false
                                                                }));
                                                    } else {
                                                        console.log("Boom");
                                                                setCollectorErrors((prev) => ({
                                                                        ...prev,
                                                                        collectorWebsite: true
                                                                }));
                                                        }
                                                }}
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
                                                Have account,{" "}
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
