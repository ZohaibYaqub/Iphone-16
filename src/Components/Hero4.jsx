import { OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import React, { useState } from 'react';
import Her04Scene from "./Her04Scene";

const Hero4 = () => {
    // State to manage the current texture index
    const [textureIndex, setTextureIndex] = useState(0);

    const showCreamTexture = () => setTextureIndex(0);  // Blue image
    const showSilverTexture = () => setTextureIndex(1); // White image
    const showfullCreamTexture = () => setTextureIndex(2); // Black image
    const showgrayTexture = () => setTextureIndex(3);   // Red image
    const showAllTexture = () => setTextureIndex(4);

    const changeTexture = () => {
        // Update texture index by cycling through the available textures
        setTextureIndex((prevIndex) => {
            const newIndex = (prevIndex + 1) % 6; // 6 is the number of textures
            // console.log("Texture index changed to:", newIndex);
            
            return newIndex;

            
            
        });
    };

    return (
        <div className="root">
            <Canvas camera={{ fov: 35 }}>
                <OrbitControls />
                <ambientLight />
                <Her04Scene textureIndex={textureIndex} />
            </Canvas>
            <div className="boxhead">

           
            <div className="box">
                <button className='cream' onClick={showCreamTexture} ></button>
                <button className='silver' onClick={showSilverTexture} ></button>
                <button className='fullcream' onClick={showfullCreamTexture} ></button>
                <button className='gray' onClick={showgrayTexture} ></button>
                <img className='allcolour' onClick={showAllTexture} src="https://www.apple.com/v/iphone-15-pro/c/images/overview/closer-look/swatch_all_colors__c9qrpw0te4q6_large.jpg" alt="" />

            </div>
            </div>
        </div>
    );
};

export default Hero4;
