import { ReactNode, useEffect, useState } from "react";
import { toast } from "sonner";
import { GetLoggedUserInformation } from "../apicalls/users";

function ProtectedProutes({ children }: { children: ReactNode }) {
    const [currentUser, setCurrentUser] = useState(null);
    
    console.log(currentUser?.collectorName);
    
// console.log(localStorage.getItem("token"));

        useEffect(() => {
                const getLoggedInUserInfo = async () => {
                        try {
                                const response = await GetLoggedUserInformation();

                     console.log(response);
                     

                                if (response.success) {
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
                                    

                                    setCurrentUser(response?.data)
                                } else {
                                        throw new Error(response?.message || "Login failed");
                                }
                        } catch (error: unknown) {
                                let errorMessage = "Something went wrong";

                                if (error && typeof error === "object" && "message" in error) {
                                        errorMessage = String(
                                                (error as { message: string }).message
                                        );
                                }

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

                getLoggedInUserInfo();
        }, []);

    return (
            <div>
                    <div className="pt-36">
                            {<h2> Welcome {currentUser?.name}</h2>}
                    </div>

                    {children}
            </div>
    );
}

export default ProtectedProutes;
