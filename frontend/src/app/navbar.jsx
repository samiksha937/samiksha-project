'use client';
import React, { useRef } from 'react';
import Image from "next/image";
import Link from 'next/link';
import '../app/navbar.module.css';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { IconArrowRight } from '@tabler/icons-react';

const Navbar = ({ scrollToSection, aboutRef, worksRef, servicesRef, blogsRef, contactRef }) => {

    const navImgRef = useRef();

    useGSAP(() => {
        gsap.from(navImgRef.current, {
            y: -100,
            opacity: 0,
            delay: 0.7,
            duration: 1,
            ease: 'power4.out',
        })
        gsap.from(".nav-li", {
            y: -100,
            opacity: 0,
            delay: 1,
            duration: 1,
            stagger: 0.2,
            ease: 'power4.out',
        })
        gsap.from(".btn", {
            y: -100,
            opacity: 0,
            delay: 0.7,
            duration: 1,
            ease: 'power4.out',
        })
    })

    return (
        <div className='navbar flex items-center justify-between px-[2vw] py-[2vw] bg-black overflow-hidden'>
            <div ref={navImgRef}>
                <Link className='select-none' href='/'>
                    <Image src='/Low Res-011111.png' alt='' width={150} height={50} />
                </Link>
            </div>

            <nav className='hidden lg:block'>
                <ul className='flex relative items-center gap-[1.5vw] select-none'>
                    <li className='nav-li cursor-pointer' onClick={() => scrollToSection(aboutRef)}>
                        <Link className='links' href="#">About</Link>
                    </li>
                    <li className='nav-li cursor-pointer' onClick={() => scrollToSection(servicesRef)}>
                        <Link className='links' href="#">Services</Link>
                    </li>
                    <li className='nav-li cursor-pointer' onClick={() => scrollToSection(worksRef)}>
                        <Link className='links' href="#">Works</Link>
                    </li>
                    <li className='nav-li cursor-pointer' onClick={() => scrollToSection(blogsRef)}>
                        <Link className='links' href="#">Blogs</Link>
                    </li>
                    <li className='nav-li cursor-pointer' onClick={() => scrollToSection(contactRef)}>
                        <Link className='links' href="#">Contact</Link>
                    </li>
                </ul>
            </nav>

            <div>
                <button className='btn select-none bg-[#C40026] py-3 px-4 rounded-full'>
                    <Link href='/' className='flex connectbtn relative font-[mont] font-medium text-lg items-center'>
                        Connect Now <span className='pl-1'><IconArrowRight stroke={2} /></span>
                    </Link>
                </button>
            </div>

        </div>
    )
}

export default Navbar;