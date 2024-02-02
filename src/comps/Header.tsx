"use client";

import { SocialModal } from "@/modals/SocialModal";
import Image from "next/image"
import { useEffect, useState } from "react";

export const Header = () => {
    const [scrolled, setScrolled] = useState(false);
    const [socials_open, setSocialsOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 100; // Adjust the threshold as needed
            setScrolled(isScrolled);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        if (socials_open) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
    }, [socials_open])


    return (
        <div className="header" id={scrolled ? "header-scrolled" : ""}>
            <SocialModal open={socials_open} onClose={() => setSocialsOpen(!socials_open)} />
            <Image className="logo" src="/img/void_white_side.png" alt="logo" width={300} height={63} onClick={() => window.location.href = '/'} />
            <div className="header-actions">
                <a href="#connect" onClick={() => setSocialsOpen(!socials_open)}>connect</a>
                <a href="/the_void">the_void</a>
            </div>
        </div>
    );
}