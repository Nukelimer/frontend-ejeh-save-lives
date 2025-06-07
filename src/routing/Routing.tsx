import Landing from "@/pages/Landing";
import Blood from "@/pages/Landing/Blood";
import Login from "@/pages/Login";

import { FC, useState, useRef, useEffect } from "react";
import { Link, Route, Routes, useLocation } from "react-router-dom";
import { AlignJustify, X } from "lucide-react";
import gsap from "gsap";
import Registration from "@/pages/Registration";
import Welcome from "@/pages/Welcome";
import ProtectedProutes from "@/c_components/ProtectedProutes";

const Routing: FC = () => {
        const [showNav, setShowNav] = useState<boolean>(!false);
        const location = useLocation();
        const menuRef = useRef<HTMLDivElement>(null);

        // Reset showNav to false when the route changes
        useEffect(() => {
                setShowNav(false);
        }, [location.pathname]);

        // Handle menu animation based on showNav
        useEffect(() => {
                if (showNav) {
                        if (menuRef.current) {
                                gsap.to(menuRef.current, {
                                        x: "0%",
                                        opacity: 1,
                                        duration: 0.5,
                                        ease: "power2.out"
                                });
                        }
                } else {
                        if (menuRef.current) {
                                gsap.to(menuRef.current, {
                                        x: "100%",
                                        opacity: 0,
                                        duration: 0.5,
                                        ease: "back.out"
                                });
                        }
                }
        }, [showNav]);

        if (location.pathname === "/") {
                return (
                        <header>
                                <nav className="fixed z-10 bg-white w-full flex items-center justify-evenly md:justify-between px-6">
                                        <img src="logo.png" alt="logo" className="w-72" />
                                        <Link to="/registration">
                                                <Blood override="!h-[40px]" />
                                        </Link>
                                </nav>
                                <Routes>
                                        <Route path="/" element={<Landing />} />
                                </Routes>
                        </header>
                );
        } else {
                return (
                        <>
                                <nav className="fixed z-10 bg-white w-full md:flex items-center justify-evenly md:justify-between px-6 hidden">
                                        <img src="logo.png" alt="logo" className="w-72" />
                                        <Link to="/">Go Back Home</Link>
                                        <Link to="/registration">Register</Link>
                                        <Link to="/login">Login</Link>
                                </nav>

                                <nav className="fixed z-10 bg-white w-full flex items-center justify-around md:justify-between md:px-6 md:hidden">
                                        <img src="logo.png" alt="logo" className="w-72" />
                                        <div
                                                className=""
                                                onClick={() => {
                                                        setShowNav(!showNav);
                                                }}
                                        >
                                                {showNav ? null : <AlignJustify />}
                                        </div>
                                        <div
                                                className="fixed top-0 bg-gray-100 w-full h-full flex justify-end gap-16 flex-col-reverse"
                                                ref={menuRef}
                                                style={{
                                                        transform: "translateX(100%)",
                                                        opacity: 0
                                                }} // Initial state for animation
                                        >
                                                <div className=" flex flex-col gap-20 px-8 active:underline ">
                                                        <Link to="/">Go Back Home</Link>
                                                        <Link to="/registration">Register</Link>
                                                        <Link to="/login">Login</Link>
                                                </div>

                                                <div
                                                        className="ml-auto mt-6 mr-6"
                                                        onClick={() => setShowNav(!showNav)}
                                                >
                                                        <X />
                                                </div>
                                        </div>
                                </nav>

                                <Routes>
                                        <Route path="/registration" element={<Registration />} />
                                        <Route path="/login" element={<Login />} />
                                        <Route
                                                path="/welcome"
                                                element={
                                                        <ProtectedProutes>
                                                                <Welcome />
                                                        </ProtectedProutes>
                                                }
                                        />
                                </Routes>
                        </>
                );
        }
};

export default Routing;
