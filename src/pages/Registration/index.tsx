import { useState } from "react";
import { Hospital, Syringe, User } from "lucide-react";
import RegisterType from "./RegisterType";
import { RegisterUser, DonorData, HospitalData, CollectorData } from "../../apicalls/users";
import { AxiosError } from "axios";
import { toast } from "sonner";

function Register() {
        type UserState = "donor" | "hospital" | "collector";
        const [userRegisteringType, setUserRegisteringType] = useState<UserState>("donor");

        const [donorErrors, setDonorErrors] = useState({
                donorEmail: false,
                donorName: false,
                donorPhone: false,
                donorPassword: false
        });

        const [hospitalErrors, setHospitalErrors] = useState({
                hospitalEmail: false,
                hospitalName: false,
                hospitalPhone: false,
                hospitalPassword: false,
                hospitalAddress: false,
                hospitalWebsite: false
        });

        const [collectorErrors, setCollectorErrors] = useState({
                collectorEmail: false,
                collectorName: false,
                collectorPhone: false,
                collectorPassword: false,
                collectorAddress: false,
                collectorWebsite: false
        });

        const [donorData, setDonorData] = useState({
                donorName: "",
                donorEmail: "",
                donorPhone: "",
                donorPassword: ""
        });

        const [hospitalData, setHospitalData] = useState({
                hospitalName: "",
                hospitalEmail: "",
                hospitalAddress: "",
                hospitalPhone: "",
                hospitalPassword: "",
                hospitalWebsite: "https://"
        });

        const [collectorData, setCollectorData] = useState({
                collectorName: "",
                collectorEmail: "",
                collectorPhone: "",
                collectorPassword: "",
                collectorWebsite: "https://",
                collectorAddress: ""
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

                try {
                        let response;

                        if (userRegisteringType === "donor") {
                                const payload: DonorData = {
                                        name: donorData.donorName,
                                        email: donorData.donorEmail,
                                        phone: donorData.donorPhone,
                                        password: donorData.donorPassword,
                                        userType: "donor"
                                };

                                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                                const errors = {
                                        donorName: !payload.name.trim(),
                                        donorEmail:
                                                !payload.email.trim() ||
                                                !emailRegex.test(payload.email),
                                        donorPassword:
                                                payload.password.length < 6 ||
                                                !/[^A-Za-z0-9]/.test(payload.password),
                                        donorPhone: !payload.phone.match(/^\d{10,11}$/)
                                };

                                setDonorErrors(errors);

                                if (Object.values(errors).some((error) => error)) {
                                        toast.error("Please correct the errors in the form.", {
                                                duration: 3000,
                                                position: "top-center",
                                                dismissible: true,
                                                style: {
                                                        background: "#ef4444",
                                                        color: "#fff",
                                                        border: "1px solid #dc2626"
                                                }
                                        });
                                        return;
                                }

                                response = await RegisterUser(payload);

                                if (response?.success) {
                                        toast.success("You have been registered as a donor!", {
                                                duration: 3000,
                                                position: "top-center",
                                                icon: "🎉",
                                                dismissible: true,
                                                style: {
                                                        background: "#22c55e",
                                                        color: "#fff",
                                                        border: "1px solid #16a34a"
                                                }
                                        });

                                        setDonorData({
                                                donorName: "",
                                                donorEmail: "",
                                                donorPhone: "",
                                                donorPassword: ""
                                        });
                                        setDonorErrors({
                                                donorName: false,
                                                donorEmail: false,
                                                donorPhone: false,
                                                donorPassword: false
                                        });
                                } else {
                                        throw new Error(response?.message || "Registration failed");
                                }
                        } else if (userRegisteringType === "hospital") {
                                const payload: HospitalData = {
                                        hospitalName: hospitalData.hospitalName,
                                        email: hospitalData.hospitalEmail,
                                        address: hospitalData.hospitalAddress,
                                        phone: hospitalData.hospitalPhone,
                                        password: hospitalData.hospitalPassword,
                                        website: hospitalData.hospitalWebsite,
                                        userType: "hospital"
                                };

                                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                                const websiteRegex = /^https?:\/\/.+/;
                                const errors = {
                                        hospitalName: !payload.hospitalName.trim(),
                                        hospitalEmail:
                                                !payload.email.trim() ||
                                                !emailRegex.test(payload.email),
                                        hospitalPassword:
                                                payload.password.length < 6 ||
                                                !/[^A-Za-z0-9]/.test(payload.password),
                                        hospitalPhone: !payload.phone.match(/^\d{10,11}$/),
                                        hospitalAddress:
                                                !payload.address.trim() ||
                                                payload.address.length < 10,
                                        hospitalWebsite:
                                                !payload.website.trim() ||
                                                !websiteRegex.test(payload.website)
                                };

                                setHospitalErrors(errors);

                                if (Object.values(errors).some((error) => error)) {
                                        toast.error("Please correct the errors in the form.", {
                                                duration: 3000,
                                                position: "top-center",
                                                dismissible: true,
                                                style: {
                                                        background: "#ef4444",
                                                        color: "#fff",
                                                        border: "1px solid #dc2626"
                                                }
                                        });
                                        return;
                                }

                                response = await RegisterUser(payload);

                                if (response?.success) {
                                        toast.success("You have been registered as a hospital!", {
                                                duration: 3000,
                                                position: "top-center",
                                                icon: "🎉",
                                                dismissible: true,
                                                style: {
                                                        background: "#22c55e",
                                                        color: "#fff",
                                                        border: "1px solid #16a34a"
                                                }
                                        });

                                        setHospitalData({
                                                hospitalName: "",
                                                hospitalEmail: "",
                                                hospitalAddress: "",
                                                hospitalPhone: "",
                                                hospitalPassword: "",
                                                hospitalWebsite: ""
                                        });
                                        setHospitalErrors({
                                                hospitalEmail: false,
                                                hospitalName: false,
                                                hospitalPhone: false,
                                                hospitalPassword: false,
                                                hospitalAddress: false,
                                                hospitalWebsite: false
                                        });
                                } else {
                                        throw new Error(response?.message || "Registration failed");
                                }
                        } else if (userRegisteringType === "collector") {
                                const payload: CollectorData = {
                                        collectorName: collectorData.collectorName,
                                        email: collectorData.collectorEmail,
                                        phone: collectorData.collectorPhone,
                                        password: collectorData.collectorPassword,
                                        website: collectorData.collectorWebsite,
                                        address: collectorData.collectorAddress,
                                        userType: "collector"
                                };

                                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                                const websiteRegex = /^https?:\/\/.+/;
                                const errors = {
                                        collectorName: !payload.collectorName.trim(),
                                        collectorEmail:
                                                !payload.email.trim() ||
                                                !emailRegex.test(payload.email),
                                        collectorPassword:
                                                payload.password.length < 6 ||
                                                !/[^A-Za-z0-9]/.test(payload.password),
                                        collectorPhone: !payload.phone.match(/^\d{10,11}$/),
                                        collectorWebsite:
                                                !payload.website.trim() ||
                                                !websiteRegex.test(payload.website),
                                    collectorAddress: !payload.address.trim() ||
                                                payload.address.length < 10,
                                };

                                setCollectorErrors(errors);

                                if (Object.values(errors).some((error) => error)) {
                                        toast.error("Please correct the errors in the form.", {
                                                duration: 3000,
                                                position: "top-center",
                                                dismissible: true,
                                                style: {
                                                        background: "#ef4444",
                                                        color: "#fff",
                                                        border: "1px solid #dc2626"
                                                }
                                        });
                                        return;
                                }

                                response = await RegisterUser(payload);

                                if (response?.success) {
                                        toast.success("You have been registered as a collector!", {
                                                duration: 3000,
                                                position: "top-center",
                                                icon: "🎉",
                                                dismissible: true,
                                                style: {
                                                        background: "#22c55e",
                                                        color: "#fff",
                                                        border: "1px solid #16a34a"
                                                }
                                        });

                                        setCollectorData({
                                                collectorName: "",
                                                collectorEmail: "",
                                                collectorPhone: "",
                                                collectorPassword: "",
                                                collectorWebsite: "",
                                                collectorAddress: ""
                                        });
                                        setCollectorErrors({
                                                collectorEmail: false,
                                                collectorName: false,
                                                collectorPhone: false,
                                                collectorPassword: false,
                                                collectorAddress: false,
                                                collectorWebsite: false
                                        });
                                } else {
                                        throw new Error(response?.message || "Registration failed");
                                }
                        }
                } catch (error: unknown) {
                        console.error("Registration Error:", {
                                message: (error as Error).message,
                                response: error instanceof AxiosError ? error.response : undefined,
                                data:
                                        error instanceof AxiosError
                                                ? error.response?.data
                                                : undefined,
                                status:
                                        error instanceof AxiosError
                                                ? error.response?.status
                                                : undefined,
                                code: error instanceof AxiosError ? error.code : undefined
                        });

                        const errorMessage =
                                error instanceof AxiosError && error.response?.data?.message
                                        ? error.response.data.message
                                        : error instanceof AxiosError &&
                                          error.code === "ERR_NETWORK"
                                        ? "Cannot connect to server. Please ensure the server is running on port 5000."
                                        : (error as Error).message ||
                                          "An error occurred. Please try again.";

                        toast.error(errorMessage, {
                                duration: 3000,
                                position: "top-center",
                                dismissible: true,
                                style: {
                                        background: "#ef4444",
                                        color: "#fff",
                                        border: "1px solid #dc2626"
                                }
                        });
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
                                                onClick={() => setUserRegisteringType("donor")}
                                                className={`border-t-8 border-white ${
                                                        userRegisteringType === "donor" &&
                                                        "!border-secondary font-bold"
                                                } mx-auto w-full relative text-center cursor-pointer flex justify-center items-center pb-[8px]`}
                                        >
                                                Donor <User className="ml-1" size={18} />
                                        </span>
                                        <span
                                                onClick={() => setUserRegisteringType("hospital")}
                                                className={`border-t-8 border-white ${
                                                        userRegisteringType === "hospital" &&
                                                        "!border-secondary font-bold"
                                                } mx-auto w-full text-center cursor-pointer flex justify-center items-center pb-[8px]`}
                                        >
                                                Hospital <Hospital className="ml-1" size={18} />
                                        </span>
                                        <span
                                                onClick={() => setUserRegisteringType("collector")}
                                                className={`border-t-8 border-white ${
                                                        userRegisteringType === "collector" &&
                                                        "!border-secondary font-bold"
                                                } mx-auto w-full text-center cursor-pointer flex justify-center items-center pb-[8px]`}
                                        >
                                                Collector <Syringe className="ml-1" size={18} />
                                        </span>
                                </div>
                                <RegisterType
                                        userState={userRegisteringType}
                                        registrationData={registrationData}
                                        donorErrors={donorErrors}
                                        setDonorErrors={setDonorErrors}
                                        hospitalErrors={hospitalErrors}
                                        setHospitalErrors={setHospitalErrors}
                                        setCollectorErrors={setCollectorErrors}
                                        collectorErrors={collectorErrors}
                                />
                        </form>
                </div>
        );
}

export default Register;
