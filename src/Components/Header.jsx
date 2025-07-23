import React from 'react'
import { FaApple } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { FaShoppingBag } from "react-icons/fa";
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';



const Header = () => {

    useGSAP(() => {
        var tl = gsap.timeline();
        tl.to(".navlist li", {
            y: 0,
          
            stagger: 0.2,
            opacity: 1
        })
        tl.to(".one",{
            opacity:1,
            delay:1,

        })

    })
    return (
        <>
            <div data-scroll className="navbar">

                <FaApple className='logo' />


                <ul className='navlist'>
                    <li>Store</li>
                    <li>Mac</li>
                    <li>Ipad</li>
                    <li>Iphone</li>
                    <li>Watch</li>
                    <li>VisionPro</li>
                    <li>Airpods</li>
                    <li>Tv & Home</li>
                    <li>Entertainment</li>
                    <li>Support</li>
                </ul>

                <CiSearch className='srch' />
                <FaShoppingBag className='bag' />



            </div>
            <div className="navdata">
                <h3 className='one'>Get $170–$620 in credit toward iPhone 15 Pro when <br /> you trade in iPhone 11 or higher.* Buy</h3>

            </div>
        </>
    )
}

export default Header
