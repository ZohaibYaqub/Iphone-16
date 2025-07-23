import { useTexture } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

const Her04Scene = ({ textureIndex }) => {
    // Load all textures
    const textures = useTexture([
        "/Images/1.jpg", // Cream image
        "/Images/2.jpg", // Silver image   
        "/Images/3.jpg", // Full cream image
        "/Images/4.jpg", // Gray image
        "/Images/5.jpg", // All colors image
        

    ]);

    const rot = useRef(null);

    useFrame((state, delta) => {
        if (rot.current) {
            rot.current.rotation.y += delta; // Add delta for continuous rotation
        }
    });

    // Debugging: Log the current textureIndex to confirm it's updating
    useEffect(() => {
        // console.log("Current Texture Index in Her04Scene:", textureIndex);
    }, [textureIndex]);

    return (
        <group rotation={[0, 1.4, 0.5]}>
            <mesh ref={rot}>
                <boxGeometry args={[1, 2, 1]} />
                <meshStandardMaterial map={textures[textureIndex]} side={THREE.DoubleSide} />
            </mesh>
        </group>
    );
};

export default Her04Scene;
