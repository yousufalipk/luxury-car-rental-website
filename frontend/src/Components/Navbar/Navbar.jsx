import React, { useEffect, useState } from 'react';

import Mobile from '../../assets/mobile.svg';
import Clock from '../../assets/clock.svg';
import Facebook from '../../assets/facebook.svg';
import Instagram from '../../assets/insta.svg';
import Twitter from '../../assets/twitter.svg';
import Menu from '../../assets/menu.svg';
import Cart from '../../assets/cart.svg';

import { useUser } from '../../context';

const Navbar = () => {
    const { setSideMenu, setIsScrolled, isScrolled } = useUser();

    const mobileNumber = '1.877.736.8553';
    const timmings = '8:00am - 8:00pm';
    const facebookLink = 'https://www.facebook.com';
    const twitterLink = 'https://www.twitter.com';
    const instagramLink = 'https://www.instagram.com';

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className='w-full h-[15vh] relative'>
            {/* Top Black Bar */}
            <div className={`w-full h-[10vh] lg:h-[5vh] bg-black flex justify-center items-center ${isScrolled && `hidden`}`}>
                <div className='w-full lg:w-[80vw] px-5 lg:px-0 h-full text-white text-sm font-semibold flex flex-col lg:flex-row justify-between items-center'>
                    <div className='w-full lg:w-[40%] h-full flex justify-between items-center'>
                        <div className='w-1/2 h-full flex items-center justify-center lg:justify-start gap-1'>
                            <img src={Mobile} alt="mobile" width={20} />
                            {mobileNumber}
                        </div>
                        <div className='w-1/2 h-full flex items-center justify-center lg:justify-start gap-1'>
                            <img src={Clock} alt="clock" width={20} />
                            {timmings}
                        </div>
                    </div>
                    <div className='w-full lg:w-[60%] h-full flex justify-center lg:justify-end items-center gap-5'>
                        <div
                            onClick={() => {
                                window.open(facebookLink, "_blank");
                            }}
                            className='flex items-center justify-center hover:cursor-pointer'>
                            <img src={Facebook} alt="facebook" className='invert' width={16} />
                        </div>
                        <div
                            onClick={() => {
                                window.open(twitterLink, "_blank");
                            }}
                            className='flex items-center justify-center hover:cursor-pointer'>
                            <img src={Twitter} alt="twitter" className='invert' width={16} />
                        </div>
                        <div
                            onClick={() => {
                                window.open(instagramLink, "_blank");
                            }}
                            className='flex items-center justify-center hover:cursor-pointer'>
                            <img src={Instagram} alt="instagram" className='invert' width={16} />
                        </div>
                    </div>
                </div>
            </div>
            {/* Transparent Navbar */}
            <div className={`w-full h-[10vh] bg-black ${isScrolled ? `bg-opacity-100` : `bg-opacity-40`}`}>
                <div className='w-[80vw] h-full mx-auto flex justify-between items-center text-white'>
                    <div className='w-1/2 h-full flex justify-start items-center text-2xl font-semibold'>
                        Logo Here
                    </div>
                    <div className='w-1/2 h-full flex justify-end items-center font-semibold'>
                        <ul className='flex justify-end items-center gap-5'>
                            <li className='hidden lg:block'>VEHICLE</li>
                            <li className='hidden lg:block'>SERVICES</li>
                            <li className='hidden lg:block'>COMPANY</li>
                            <li className='hidden lg:block'>HOME</li>
                            <li className='hover:cursor-pointer' onClick={() => setSideMenu(true)}><img src={Menu} alt="menu" className='invert' width={20} /></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
