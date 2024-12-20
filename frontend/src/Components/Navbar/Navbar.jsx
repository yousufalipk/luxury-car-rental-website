import React, { useEffect } from 'react';

import Mobile from '../../assets/mobile.svg';
import Clock from '../../assets/clock.svg';
import Menu from '../../assets/menu.svg';
import Logo from '../../assets/logo.png';
import Whatsapp from '../../assets/whatsapp.svg';

import { useUser } from '../../context';

const Navbar = ({ onNavigate }) => {
    const { setSideMenu, setIsScrolled, isScrolled } = useUser();

    const number = '+966-54-520-6027';
    const timmings = '5:00am - 11:00pm';

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
            <div className={`w-full h-[10vh] lg:h-[5vh] bg-customYellow flex justify-center items-center ${isScrolled && `hidden`}`}>
                <div className='w-full lg:w-[80vw] px-5 lg:px-0 h-full text-white text-sm font-semibold flex flex-col lg:flex-row justify-between items-center'>
                    <div className='w-full lg:w-[40%] h-full flex justify-between items-center'>
                        <div className='w-1/2 h-full flex items-center justify-center lg:justify-start gap-1'>
                            <img src={Clock} alt="clock" width={20} className='invert' />
                            {timmings}
                        </div>
                    </div>
                    <div className='w-full lg:w-[60%] h-full flex justify-center lg:justify-end items-center gap-5'>
                        <div
                            onClick={() => {
                                window.open("https://api.whatsapp.com/send?phone=923021223335", "_blank");
                            }}
                            className='flex items-center justify-center hover:cursor-pointer hover:-translate-y-[3px] hover:scale-125 transition-transform duration-200 ease-out gap-1'>
                            <img src={Whatsapp} alt="whatsapp" className='invert' width={16} />
                            {number}
                        </div>
                    </div>
                </div>
            </div>
            {/* Transparent Navbar */}
            <div className={`w-full h-[15vh] bg-black ${isScrolled ? `bg-opacity-100` : `bg-opacity-40`}`}>
                <div className='w-[80vw] h-full mx-auto flex justify-between items-center text-white'>
                    <div
                        className='w-1/2 h-full flex justify-start items-center text-2xl font-semibold'>
                        {/* Logo Here */}
                        <img
                            onClick={() => {
                                onNavigate("home");
                            }}
                            src={Logo}
                            alt="BURAQ_LUXURY_TRAVEL"
                            width={60}
                            className='hover:cursor-pointer'
                        />
                    </div>
                    <div className='w-1/2 h-full flex justify-end items-center font-semibold text-lg'>
                        <ul className='flex justify-end items-center gap-5'>
                            <li
                                onClick={() => {
                                    onNavigate("cars");
                                }}
                                className='hidden lg:block hover:cursor-pointer'>VEHICLE</li>
                            <li
                                onClick={() => {
                                    onNavigate("whyUs");
                                }}
                                className='hidden lg:block hover:cursor-pointer'>SERVICES</li>
                            <li
                                onClick={() => {
                                    onNavigate("home");
                                }}
                                className='hidden lg:block hover:cursor-pointer'>HOME</li>
                            <li className='hover:cursor-pointer' onClick={() => setSideMenu(true)}><img src={Menu} alt="menu" className='invert' width={40} /></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default Navbar;
