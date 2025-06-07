import { useState } from "react";

import { Hospital, Syringe, User } from "lucide-react";
import LoginType from "./LoginType";
import { toast } from "sonner";
import { LoginData, LoginUser } from "@/apicalls/users";
import { useNavigate } from "react-router-dom";

function Login() {
        type UserState = "donor" | "hospital" | "collector";
        const [userLoginingType, setUserLoginingType] = useState<UserState>("donor");
        const navigate = useNavigate();
        const [donorData, setDonorData] = useState({
                donorEmail: "",

                donorPassword: ""
        });
        const [hospitalData, setHospitalData] = useState({
                hospitalEmail: "",
                hospitalPassword: ""
        });
        const [collectorData, setCollectorData] = useState({
                collectorEmail: "",
                collectorPassword: ""
        });

        const loginData = {
                donorData,
                setDonorData,
                hospitalData,
                setHospitalData,
                collectorData,
                setCollectorData
        };

        const [, setDonorErrors] = useState({
                donorEmail: false,
                donorPassword: false
        });

        const [, setHospitalErrors] = useState({
                hospitalEmail: false,
                hospitalPassword: false
        });

        const [, setCollectorErrors] = useState({
                collectorEmail: false,
                collectorPassword: false
        });

        // console.log(collectorErrors);

        const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
                e.preventDefault();
                // const formData = new FormData(e.currentTarget);

                try {
                        let response;

                        if (userLoginingType === "donor") {
                                const payload: LoginData = {
                                        email: donorData.donorEmail,
                                        password: donorData.donorPassword
                                };
                                // console.log("Hello");

                                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

                                const errors = {
                                        donorEmail:
                                                !payload.email.trim() ||
                                                !emailRegex.test(payload.email),
                                        donorPassword:
                                                payload.password.length < 6 ||
                                                !/[^A-Za-z0-9]/.test(payload.password)
                                };

                                setDonorErrors(errors);

                                // console.log(donorErrors);

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

                                // console.log(payload);

                                response = await LoginUser(payload);

                                if (response?.success) {
                                        localStorage.setItem("token", response.data);
                                        navigate("/welcome");
                                        toast.success("Logging in as a donor successful!", {
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
                                                donorEmail: "",
                                                donorPassword: ""
                                        });

                                        setDonorErrors({
                                                donorEmail: false,
                                                donorPassword: false
                                        });
                                } else {
                                        // console.log("before Error", response?.data.message);

                                        throw new Error(response?.message || "Login failed");
                                }
                        }

                        if (userLoginingType === "hospital") {
                                const payload: LoginData = {
                                        email: hospitalData.hospitalEmail,
                                        password: hospitalData.hospitalPassword
                                };

                                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

                                const errors = {
                                        hospitalEmail:
                                                !payload.email.trim() ||
                                                !emailRegex.test(payload.email),
                                        hospitalPassword:
                                                payload.password.length < 6 ||
                                                !/[^A-Za-z0-9]/.test(payload.password)
                                };

                                setHospitalErrors(errors);

                                // console.log(hospitalErrors);

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

                                // console.log(payload);

                                response = await LoginUser(payload);

                                if (response?.success) {
                                        toast.success("Logging in as a hospital successful!", {
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
                                                hospitalEmail: "",
                                                hospitalPassword: ""
                                        });

                                        setHospitalErrors({
                                                hospitalEmail: false,
                                                hospitalPassword: false
                                        });
                                } else {
                                        // console.log("before Error", response?.data.message);

                                        throw new Error(response?.message || "Registration failed");
                                }
                        }

                        if (userLoginingType === "collector") {
                                const payload: LoginData = {
                                        email: collectorData.collectorEmail,
                                        password: collectorData.collectorPassword
                                };

                                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

                                const errors = {
                                        collectorEmail:
                                                !payload.email.trim() ||
                                                !emailRegex.test(payload.email),
                                        collectorPassword:
                                                payload.password.length < 6 ||
                                                !/[^A-Za-z0-9]/.test(payload.password)
                                };

                                setCollectorErrors(errors);

                                // console.log(collectorErrors);

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

                                console.log(payload);

                                response = await LoginUser(payload);

                                if (response?.success) {
                                        toast.success("Logging in as a collector successful!", {
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
                                                collectorEmail: "",
                                                collectorPassword: ""
                                        });

                                        setCollectorErrors({
                                                collectorEmail: false,
                                                collectorPassword: false
                                        });
                                } else {
                                        console.log("before Error", response?.data.message);

                                        throw new Error(response?.message || "Login failed");
                                }
                        }
                } catch (error) {
                        console.log(error);

                        toast.error("Login failed, maybe due to incorrect email or password.", {
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
                <div className="md:pt- 24 pt-8  flex relative md:h-screen flex-col justify-center items-center">
                        <img
                                src="new.jpg"
                                alt=""
                                className="hidden md:block absolute w-full h-full object-cover max-w-full max-h-full"
                        />
                        <form
                                className="bg-white w-full md:py-14 md:z-10 py-6 pt-16  md:w-[80%]  max-w-2xl "
                                onSubmit={handleSubmit}
                        >
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
                                <LoginType userState={userLoginingType} loginData={loginData} />{" "}
                        </form>
                </div>
        );
}

export default Login;
