import React, { FC, useEffect, useRef } from "react";
import { gsap } from "gsap";

interface BreathingBackgroundProps {
        children?: React.ReactNode; // Allow content inside the component
}

const BreathingBackground: FC<BreathingBackgroundProps> = ({ children }) => {
        const bgRef = useRef<HTMLDivElement>(null);

        useEffect(() => {
                // Ensure bgRef.current exists before animating
                if (bgRef.current) {
                        // Breathing animation: Oscillate RGBA opacity
                        const opacityTween = gsap.to(bgRef.current, {
                                backgroundColor: "rgba(220, 53, 69, 0.3)", // Adjusted for smoother transition
                                duration: 7,
                                ease: "sine.inOut",
                                repeat: -1,
                                yoyo: true,
                                opacity: 0.3, // Adjusted to avoid full transparency
                                onStart: () => {
                                        gsap.set(bgRef.current, {
                                                backgroundColor: "rgba(220, 53, 69, 0.6)"
                                        });
                                }
                        });

                        // Pulse scale for a heartbeat-like effect
                        const scaleTween = gsap.to(bgRef.current, {
                                scale: 1.02,
                                duration: 3.5,
                                ease: "sine.inOut",
                                repeat: -1,
                                yoyo: true
                        });

                        // Clean up animations on unmount
                        return () => {
                                opacityTween.kill();
                                scaleTween.kill();
                        };
                }
        }, []);

        return (
                <div
                        ref={bgRef}
                        className="relative min-h-[400px] flex items-center justify-center bg-blood-red rounded-full"
                >
                        {children && <div className="z-10 text-center text-white">{children}</div>}
                </div>
        );
};

export default BreathingBackground;
