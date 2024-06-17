"use client";
import * as THREE from 'three'
import { Canvas, Euler } from "@react-three/fiber"
import { OrbitControls, OrthographicCamera } from '@react-three/drei';
import { useState } from 'react';


export const HomeScene = () => {

    return (
        <iframe src="https://nor86.csb.app" style={{
            width: "100%",
            height: "100%",
            "border": "none",
        }} 
        title="home-scene-iframe"
        >
        </iframe>
        // <Canvas>
        //     <OrthographicCamera position={[0,0,0]} rotation={
        //         rotation
        //     }/>
        //     <ambientLight />
        //     <pointLight position={[0, 100, 10]} />
        //     <mesh  position={[0,1,0]}>
        //         <boxGeometry />
        //         <meshStandardMaterial color="orange" />
        //     </mesh>
        //     <OrbitControls />
        // </Canvas>
    )
}