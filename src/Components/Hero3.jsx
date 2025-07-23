import React, { useEffect, useState } from 'react';
import gsap from 'gsap';
import { FaPlay } from "react-icons/fa";
import { FaPause } from "react-icons/fa6";
import { useGSAP } from '@gsap/react';
import { MdOutlineReplay } from "react-icons/md";
gsap.registerPlugin(ScrollTrigger);
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const Hero3 = () => {
    


    // useEffect(() => {
    //     document.addEventListener('DOMContentLoaded', () => {
    //         const videoElement = document.querySelector('.videoplay');

    //         if (videoElement) {
    //             videoElement.pause(); // Pause the video
    //         }
    //     });

    //     let t1 = gsap.timeline({
    //         scrollTrigger: {
    //             trigger: '.videoplay',
    //             start: '6% 80%',
    //             end: '30% 40%',
    //             scrub: true,
    //             // markers: true, // Uncomment for debugging
    //             onEnter: () => {
    //                 videoElement.play(); // Play video when scrolled into view
    //             },
    //             onLeave: () => {
    //                 videoElement.pause(); // Pause video when leaving view
    //                 videoElement.currentTime = 0; // Optional: Reset video to the start
    //             },
    //             onEnterBack: () => {
    //                 videoElement.play(); // Play video when scrolling back
    //             },
    //             onLeaveBack: () => {
    //                 videoElement.pause(); // Pause video when scrolling back past the start
    //                 videoElement.currentTime = 0; // Optional: Reset video to the start
    //             },
    //         }
    //     });

    //     t1.pause(); // Initially pause the timeline

    // }, []);






    const [currentText, setCurrentText] = useState(0); // To track which text is currently active

    useEffect(() => {
        // GSAP Animation for text


        // Video Sequencing
        const videos = document.querySelectorAll('.videoplay');
        let currentVideo = 0;

        const playNextVideo = () => {
            if (currentVideo < videos.length - 1) {
                videos[currentVideo].style.display = 'none';
                currentVideo++;
                videos[currentVideo].style.display = 'block';
                videos[currentVideo].play();
                setCurrentText(currentVideo); // Update the text with the video change
            }
        };

        videos.forEach((video, index) => {
            if (index !== 0) {
                video.style.display = 'none'; // Hide all videos except the first one
            }
            video.addEventListener('ended', playNextVideo);
        });

        videos[currentVideo].play(); // Start the first video
    }, []);

    useEffect(() => {
        // Animate text when it changes
        gsap.to(`.text${currentText + 1}`, {
            ease: 'power2.in',
            bottom: 30,
            duration: 1.5
        });
    }, [currentText]);

    return (
        <div className="mainhero">
            <div className="center">
                <div className="videotext">
                    <h2 className="text1" style={{ display: currentText === 0 ? 'block' : 'none' }}>
                        Enter A17 Pro <br /> Game Changing Chip GroundBreaking Performance.
                    </h2>
                    <h2 className="text2" style={{ display: currentText === 1 ? 'block' : 'none' }}>
                        Titanium.  So Strong So Light So Pro
                    </h2>
                    <h2 className="text3" style={{ display: currentText === 2 ? 'block' : 'none' }}>
                        iPhone 15 Pro Max has the longest optical zoom in <br /> iPhone ever. Far out.
                    </h2>
                    <h2 className="text4" style={{ display: currentText === 3 ? 'block' : 'none' }}>
                        All-new Action button.<br />What will yours do?
                    </h2>
                </div>
                <div className="videocontainer">
                    <video className='videoplay' autoPlay muted src="../Videos/video1.mp4"></video>
                </div>
                <div className="videocontainer">
                    <video className='videoplay' autoPlay muted src="../Videos/video2.mp4"></video>
                </div>
                <div className="videocontainer">
                    <video className='videoplay' autoPlay muted src="../Videos/video3.mp4"></video>
                </div>
                <div className="videocontainer">
                    <video className='videoplay' autoPlay muted src="../Videos/video4.mp4"></video>
                </div>
                <div className="tophead">


                    <div className="top">


                        <div className="videobutton">
                            <div className="allbtn">
                                <div className="line">

                                </div>
                                <ul className='lineul'>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                </ul>
                            </div>

                        </div>
                        <div className="buttonplay">
                            <button className="playbtn"><FaPlay /></button>
                            {/* <button className="playbtn"><FaPause /></button>
                        <button className="playbtn"><MdOutlineReplay/></button> */}

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero3;
