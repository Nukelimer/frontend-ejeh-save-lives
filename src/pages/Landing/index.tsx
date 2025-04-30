import React, { FC, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import BreathingBackground from "./Breathing";
import Blood from "./Blood";

const Landing: FC = () => {
        const heroRef = useRef<HTMLDivElement>(null);
        // const ctaRef = useRef<HTMLButtonElement>(null);
        const featureRefs = useRef<HTMLDivElement[]>([]);
        const bloodRef = useRef<HTMLImageElement>(null);
        const bloodRefSM = useRef<HTMLImageElement>(null);
        // GSAP animations
        useEffect(() => {
                // Hero section animation
                gsap.fromTo(
                        heroRef.current,
                        { opacity: 0, xPercent: -40 },
                        { opacity: 1, xPercent: 0, duration: 1, ease: "power3.out" }
                );

                if (bloodRef.current) {
                        gsap.fromTo(
                                bloodRef.current,
                                { opacity: 1 },
                                {
                                        opacity: 0,
                                        scale: 1.2,
                                        rotateX: 20,
                                        repeat: -1,
                                        yoyo: true,
                                        duration: 3.5,
                                        ease: "sine.inOut"
                                }
                        );
                }

                gsap.fromTo(
                        bloodRefSM.current,
                        {
                                scale: 1,
                                opacity: 0,
                                y: -80 // Start above the final position
                        },
                        {
                                scale: 1,
                                opacity: 1,
                                y: 0, // Final position
                                duration: 1.3,
                                ease: "power1.inOut"
                        }
                );

                // Feature cards animation (staggered)
                gsap.fromTo(
                        featureRefs.current,
                        { opacity: 0, y: 20 },
                        {
                                opacity: 1,
                                y: 0,
                                duration: 0.8,
                                ease: "power2.out",
                                stagger: 0.2,
                                delay: 1
                        }
                );
        }, []);

        // Helper to collect feature refs
        const setFeatureRef = (el: HTMLDivElement | null) => {
                if (el && !featureRefs.current.includes(el)) {
                        featureRefs.current.push(el);
                }
        };

        return (
                <div className="min-h-[60vh] bg-white text-dark-red">
                        {/* Hero Section */}

                        <section className="flex flex-col-reverse lg:flex-row w-full justify-evenly">
                                <div
                                        ref={heroRef}
                                        className="flex flex-col items-center justify-center text-center py-16 px-4 bg-light-red"
                                >
                                        <h1 className="text-4xl md:text-5xl font-bold mb-4">
                                                Be a Hero, Donate Blood Today!
                                        </h1>
                                        <p className="text-lg md:text-xl mb-8 max-w-2xl">
                                                Join Ejeh Save Lives to save lives through blood
                                                donation.
                                        </p>

                                        <Blood override={"!left-0"} />
                                </div>

                                <div className="lg:hidden">
                                        <img
                                                src="pexels-rsapmech-13009643.jpg"
                                                alt="blood bag"
                                                className="w-full"
                                                ref={bloodRefSM}
                                        />
                                </div>

                                <div className=" hidden lg:block md:w-[40vw] ">
                                        <BreathingBackground>
                                                <img
                                                        src="b.png"
                                                        alt="blood bag"
                                                        ref={bloodRef}
                                                ></img>
                                        </BreathingBackground>
                                </div>
                        </section>

                        {/* Mission Statement */}
                        <section className="py-12 px-4 text-center bg-white">
                                <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
                                <p className="text-base max-w-3xl mx-auto">
                                        Ejeh Save Lives connects donors, hospitals, and blood banks
                                        to ensure no life is lost due to blood shortages.
                                </p>
                        </section>

                        {/* Features Section */}
                        <section className="py-12 px-4 bg-[#F8F4E1]/20 text-center">
                                <h2 className="text-3xl font-bold mb-8">
                                        Why Choose Ejeh Save Lives?
                                </h2>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
                                        <div
                                                ref={setFeatureRef}
                                                className="bg-white p-6 rounded-lg shadow-md"
                                        >
                                                <h3 className="text-xl font-semibold mb-2">
                                                        For Donors
                                                </h3>
                                                <p className="text-base">
                                                        Find donation centers, schedule
                                                        appointments, and track your impact.
                                                </p>
                                        </div>
                                        <div
                                                ref={setFeatureRef}
                                                className="bg-white p-6 rounded-lg shadow-md"
                                        >
                                                <h3 className="text-xl font-semibold mb-2">
                                                        For Hospitals
                                                </h3>
                                                <p className="text-base">
                                                        Request blood types and monitor inventory in
                                                        real-time.
                                                </p>
                                        </div>
                                        <div
                                                ref={setFeatureRef}
                                                className="bg-white p-6 rounded-lg shadow-md"
                                        >
                                                <h3 className="text-xl font-semibold mb-2">
                                                        For Blood Banks
                                                </h3>
                                                <p className="text-base">
                                                        Manage blood stock and connect with donors
                                                        efficiently.
                                                </p>
                                        </div>
                                </div>
                        </section>

                        {/* CTA Section */}
                        <section className="py-12 px-4 text-center bg-blood-red text-white">
                                <h2 className="text-3xl font-bold mb-6">
                                        Ready to Make a Difference?
                                </h2>
                                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                        <Link
                                                to="/registration"
                                                className="px-6 py-3 bg-white text-blood-red rounded-md text-lg font-semibold hover:bg-light-red focus:outline-none focus:ring-2 focus:ring-white"
                                        >
                                                Register
                                        </Link>
                                        <Link
                                                to="/login"
                                                className="px-6 py-3 bg-white text-blood-red rounded-md text-lg font-semibold hover:bg-light-red focus:outline-none focus:ring-2 focus:ring-white"
                                        >
                                                Login
                                        </Link>
                                </div>
                        </section>

                        {/* Footer */}
                        <footer className="py-6 px-4 text-center bg-dark-red text-white">
                                <p>© 2025 Ejeh Save Lives. All rights reserved.</p>
                                <div className="mt-2">
                                        <Link
                                                to="/about"
                                                className="text-white hover:underline mx-2"
                                        >
                                                About
                                        </Link>
                                        |
                                        <Link
                                                to="/contact"
                                                className="text-white hover:underline mx-2"
                                        >
                                                Contact
                                        </Link>
                                </div>
                        </footer>
                </div>
        );
};

export default Landing;
