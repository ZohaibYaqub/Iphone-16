import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React, { useEffect } from 'react'
import { ScrollTrigger } from 'gsap/ScrollTrigger';


gsap.registerPlugin(ScrollTrigger);

const Hero5 = () => {
    useEffect(() => {
        gsap.fromTo('.left,.right',
            {
                filter: "blur(10px)",
                
                delay: 4,
                ease: "power3.in" // Start position, slightly below the original
            },
            {
                filter:"blur(0px)",
            
                ease: 'power4.out',
                duration:4, // Smooth easing function for a more natural animation
                scrollTrigger: {
                    trigger: '.left',
                    start: '40% 80%', // Start animation as you scroll down
                    end: 'bottom 50%', // End the animation a bit before reaching the middle of the screen
                    scrub: true, // Sync the animation with the scroll
                    // markers: true, // Remove markers in production
                },
            }


        );
        gsap.fromTo('.lefttext,.righttext',
            {
              opacity: 0,
              y: 35,
              delay:3,
              ease:"power4.in" // Start position, slightly below the original
            },
            {
              opacity: 1,
              y: 0, // End position, at the original place
              ease: 'power2.inOut',
              delay:5, // Smooth easing function for a more natural animation
              scrollTrigger: {
                trigger: '.lefttext',
                start: 'top 80%', // Start animation as you scroll down
                end: 'bottom 50%', // End the animation a bit before reaching the middle of the screen
                scrub: true, // Sync the animation with the scroll
                // markers: true, // Remove markers in production
              },
            }
          );

    }, []);
    
    return (
        <>
            <div className="fulltext">
                <div className="text">
                    <h1 className='title'>Explore the full story.</h1>
                </div>
                <div className="text1">
                    <h1 className='textabout'>iPhone.<br />
                        Forged in titanium.</h1>
                </div>
                <div className="iphonevideo">
                    <video autoPlay muted className='videofile' src="/Videos/large.mp4"></video>
                </div>
                <div className="twovideo">
                    <img className='left' src="/Images/left.jpg" alt="" />
                    <div className="rightimg">

                        <img className='right' src="/Images/right.jpg" alt="" />
                    </div>
                </div>
                <div className="twotext">
                    <h3 className='lefttext'>iPhone 15 Pro is <span className='colourtext'>the first iPhone to <br /> feature an aerospace‑grade <br /> titanium design,</span> using the same <br /> alloy that spacecraft use for<br /> missions to Mars.</h3>
                    <h3 className='righttext'>Titanium has one of the best <br />strength‑to‑weight ratios of any <br /> metal, making these our <span className='colourtext'>lightest <br />Pro models ever.</span> You’ll notice the difference <br /> the moment you pick one up.</h3>
                </div>
                <div className="textplay">
                    <div className="texthero5">
                        <h4>More On Design & Display</h4>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Hero5
