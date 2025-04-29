
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
function App() {



const headingRef = useRef<HTMLHeadingElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    // GSAP animation: Fade in and slide heading from left
    gsap.fromTo(
      headingRef.current,
      { opacity: 0, xPercent: -10 },
      { opacity: 1, xPercent: 0, duration: 1.3, ease: 'back' } // Final state
    );

    // GSAP animation: Fade in and scale button
    gsap.fromTo(
      buttonRef.current,
      { opacity: 0, scale: 0.8 },
      { opacity: 1, scale: 1, duration: 0.8, ease: 'elastic.out(1, 0.3)', delay: 0.5 }
    );
  }, []);

  return (
   <div className="hero-section">
      <h1 ref={headingRef} className='text-center'>Donate Blood, Save Lives</h1>
      <button ref={buttonRef}>Join Now</button>
    </div>
  )
}

export default App
