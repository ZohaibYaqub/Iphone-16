import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React from 'react'


const Hero1 = () => {
    useGSAP(()=>{
        var tl = gsap.timeline();
        tl.to(".hero h1",{
            opacity:1,
            delay: 2.4,
            ease: "power2.inOut",

        })
        tl.to(".herobtn",{
            y:-10,
            delay:1,
            opacity:1
        })
        tl.to(".herobuy h2",{
            y:-10,
            delay:0.6,
            opacity:1
        })
    })
    return (
        <>
            <div className="hero">
                <h1>iPhone 15 Pro</h1>
                <video className='video' autoPlay muted src="../Videos/1.mp4"></video>
                {/* <img src="https://www.apple.com/v/iphone-15-pro/c/images/overview/welcome/hero_endframe__ov6ewwmbhiqq_large.jpg" alt="" /> */}
                <div className="herobuy">
                <button className='herobtn'>Buy</button>
                <h2>From $999 or $41.62/mo. for 24 mo.1</h2>
                </div>
               
            </div>
        </>
    )
}

export default Hero1
