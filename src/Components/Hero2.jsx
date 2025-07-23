import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Hero2 = () => {
  useEffect(() => {
    gsap.fromTo('.text',
      {
        opacity: 0,
        y: 25,
        delay:3,
        ease:"power3.in" // Start position, slightly below the original
      },
      {
        opacity: 1,
        y: 0, // End position, at the original place
        ease: 'power4.out',
        delay:5, // Smooth easing function for a more natural animation
        scrollTrigger: {
          trigger: '.text',
          start: 'top 80%', // Start animation as you scroll down
          end: 'bottom 40%', // End the animation a bit before reaching the middle of the screen
          scrub: true, // Sync the animation with the scroll
          // markers: true, // Remove markers in production
        },
      }

      
    );
    gsap.fromTo('.text1',
      {
        opacity: 0,
        y: 25,
        delay:3,
        ease:"power4.in" // Start position, slightly below the original
      },
      {
        opacity: 1,
        y: 0, // End position, at the original place
        ease: 'power2.inOut',
        delay:5, // Smooth easing function for a more natural animation
        scrollTrigger: {
          trigger: '.text1',
          start: 'top 80%', // Start animation as you scroll down
          end: 'bottom 40%', // End the animation a bit before reaching the middle of the screen
          scrub: true, // Sync the animation with the scroll
          // markers: true, // Remove markers in production
        },
      }
    );
 
    
  }, []);

  
  
  return (
    <>
      <div className="highlight">
        <h1 className='text'>Get the HighLights.</h1>
        <div className="light">
          <h2 className='text1'>Watch the Film</h2>
          <h2 className='text1'>Watch the Events</h2>
        </div>
      </div>
    </>
  )
}

export default Hero2
