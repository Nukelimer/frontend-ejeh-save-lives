

import { useState } from "react";
import { Hospital, Syringe, User } from "lucide-react";
import RegisterType from "./RegisterType";
import { RegisterUser } from "../../apicalls/users";
function Register() {
        type UserState = "donor" | "hospital" | "collector";
        const [userLoginingType, setUserLoginingType] = useState<UserState>("donor");
        const [donorData, setDonorData] = useState({
                donorName: "",
                donorEmail: "",
                donorAddress: "",
                donorPhone: "",
                donorAge: "",
                donorPassword: ""
        });
        const [hospitalData, setHospitalData] = useState({
                hospitalName: "",
                hospitalEmail: "",
                hospitalAddress: "",
                hospitalPhone: "",
                hospitalPassword: ""
        });
        const [collectorData, setCollectorData] = useState({
                collectorName: "",
                collectorEmail: "",
                collectorAddress: "",
                collectorPhone: "",
                collectorAge: "",
                collectorPassword: ""
        });

        const registrationData = {
                donorData,
                setDonorData,
                hospitalData,
                setHospitalData,
                collectorData,
                setCollectorData
        };

        const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
                e.preventDefault();
                const formData = new FormData(e.currentTarget);

                // try {
                //     const response  = await RegisterUser()
                // } catch (error) {

                //     console.error(error?.message)

                // }

                //     if (userLoginingType === "donor") {
                //             const newDonorData = {
                //                     donorName: formData.get("donorName") as string,
                //                     donorEmail: formData.get("donorEmail") as string,
                //                     donorAddress: formData.get("donorAddress") as string,
                //                     donorPhone: formData.get("donorPhone") as string,
                //                     donorAge: formData.get("donorAge") as string,
                //                     donorPassword: formData.get("donorPassword") as string
                //             };
                //             setDonorData(newDonorData);
                //             console.log("Submitted Donor Data:", newDonorData);
                //     } else if (userLoginingType === "hospital") {
                //             const newHospitalData = {
                //                     hospitalName: formData.get("hospitalName") as string,
                //                     hospitalEmail: formData.get("hospitalEmail") as string,
                //                     hospitalAddress: formData.get("hospitalAddress") as string,
                //                     hospitalPhone: formData.get("hospitalPhone") as string,
                //                     hospitalPassword: formData.get("hospitalPassword") as string
                //             };
                //             setHospitalData(newHospitalData);
                //             console.log("Submitted Hospital Data:", newHospitalData);
                //     } else if (userLoginingType === "collector") {
                //             const newCollectorData = {
                //                     collectorName: formData.get("collectorName") as string,
                //                     collectorEmail: formData.get("collectorEmail") as string,
                //                     collectorAddress: formData.get("collectorAddress") as string,
                //                     collectorPhone: formData.get("collectorPhone") as string,
                //                     collectorAge: formData.get("collectorAge") as string,
                //                     collectorPassword: formData.get("collectorPassword") as string
                //             };
                //             setCollectorData(newCollectorData);
                //             console.log("Submitted Collector Data:", newCollectorData);
                //     }

                try {
                        if (userLoginingType === "donor") {
                                const newDonorData = {
                                        donorName: formData.get("donorName") as string,
                                        donorEmail: formData.get("donorEmail") as string,
                                        donorAddress: formData.get("donorAddress") as string,
                                        donorPhone: formData.get("donorPhone") as string,
                                        donorAge: formData.get("donorAge") as string,
                                        donorPassword: formData.get("donorPassword") as string,
                                        userType: "donor" // Add userType for backend
                                };
                            const response = await RegisterUser(newDonorData);
                            
                            console.log(response);
                            
                                if (response.success) {
                                        setDonorData(newDonorData);
                                      
                                } else {
                                        throw new Error(response.message);
                                }
                                console.log("Donor Registration Response:", response);
                                // TODO: Handle success (e.g., redirect to login, show success message)
                        } else if (userLoginingType === "hospital") {
                                const newHospitalData = {
                                        hospitalName: formData.get("hospitalName") as string,
                                        hospitalEmail: formData.get("hospitalEmail") as string,
                                        hospitalAddress: formData.get("hospitalAddress") as string,
                                        hospitalPhone: formData.get("hospitalPhone") as string,
                                        hospitalPassword: formData.get(
                                                "hospitalPassword"
                                        ) as string,
                                        userType: "hospital"
                                };
                                const response = await RegisterUser(newHospitalData);
                                 if (response.success) {
                                         setHospitalData(newHospitalData);
                                 } else {
                                         throw new Error(response.message);
                                 }
                                console.log("Hospital Registration Response:", response);
                        } else if (userLoginingType === "collector") {
                                const newCollectorData = {
                                        collectorName: formData.get("collectorName") as string,
                                        collectorEmail: formData.get("collectorEmail") as string,
                                        collectorAddress: formData.get(
                                                "collectorAddress"
                                        ) as string,
                                        collectorPhone: formData.get("collectorPhone") as string,
                                        collectorAge: formData.get("collectorAge") as string,
                                        collectorPassword: formData.get(
                                                "collectorPassword"
                                        ) as string,
                                        userType: "collector"
                                };
                                const response = await RegisterUser(newCollectorData);
                                 if (response.success) {
                                         setCollectorData(newCollectorData);
                                 } else {
                                         throw new Error(response.message);
                                 }
                                console.log("Collector Registration Response:", response);
                        }
                } catch (error) {
                        console.error("Registration Error:", error);
                        // TODO: Show error to user (e.g., "Email already exists")
                }
        };

        return (
                <div className="md:pt-24 pt-8 flex relative md:h-screen flex-col justify-center items-center">
                        <img
                                src="new.jpg"
                                alt=""
                                className="hidden md:block absolute w-full h-full object-cover max-w-full max-h-full"
                        />
                        <form
                                className="bg-white w-full md:py-14 md:z-10 py-6 pt-16 md:w-[80%] max-w-5xl"
                                onSubmit={handleSubmit}
                        >
                                <div className="border rounded mb-6 h-12 mx-spacing flex justify-between box-border">
                                        <span
                                                onClick={() => setUserLoginingType("donor")}
                                                className={`border-t-8 border-white ${
                                                        userLoginingType === "donor" &&
                                                        "!border-secondary font-bold"
                                                } mx-auto w-full relative text-center cursor-pointer flex justify-center items-center pb-[8px]`}
                                        >
                                                Donor <User className="ml-1" size={18} />
                                        </span>
                                        <span
                                                onClick={() => setUserLoginingType("hospital")}
                                                className={`border-t-8 border-white ${
                                                        userLoginingType === "hospital" &&
                                                        "!border-secondary font-bold"
                                                } mx-auto w-full text-center cursor-pointer flex justify-center items-center pb-[8px]`}
                                        >
                                                Hospital <Hospital className="ml-1" size={18} />
                                        </span>
                                        <span
                                                onClick={() => setUserLoginingType("collector")}
                                                className={`border-t-8 border-white ${
                                                        userLoginingType === "collector" &&
                                                        "!border-secondary font-bold"
                                                } mx-auto w-full text-center cursor-pointer flex justify-center items-center pb-[8px]`}
                                        >
                                                Collector <Syringe className="ml-1" size={18} />
                                        </span>
                                </div>
                                <RegisterType
                                        userState={userLoginingType}
                                        registrationData={registrationData}
                                />
                        </form>
                </div>
        );
}

export default Register;
