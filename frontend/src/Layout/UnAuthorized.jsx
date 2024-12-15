import React, { useState } from 'react';
import { useUser } from '../context';

import Navbar from '../Components/Navbar/Navbar';
import Home from '../Pages/Home/Home';

import Cross from '../assets/cross.svg';
import Facebook from '../assets/facebook.svg';
import Twitter from '../assets/twitter.svg';
import Instagram from '../assets/insta.svg';

const UnAuthorized = () => {

    const facebookLink = 'https://www.facebook.com';
    const twitterLink = 'https://www.twitter.com';
    const instagramLink = 'https://www.instagram.com';

    const { sideMenu, setSideMenu } = useUser();
    const [popupClosing, setPopupClosing] = useState(false);

    return (
        <div className={`w-full h-[100vh] relative ${sideMenu ? 'overflow-hidden' : ''}`}>
            {sideMenu && (
                <div
                    style={{
                        animation: `${popupClosing ? "fadeOut" : "fadeIn"
                            } 0.5s ease-in-out forwards`,
                    }}
                    className='w-full h-full bg-black absolute z-50 bg-opacity-50 backdrop-blur-sm flex justify-end items-center'>
                    <div
                        style={{
                            animation: `${popupClosing ? "closePopup" : "openPopup"
                                } 0.5s ease-in-out forwards`,
                        }}
                        className="side-box w-[30%] h-full bg-black bg-opacity-80 flex flex-col items-center transition-transform duration-300 ease-in-out"
                    >
                        <div className='w-full h-[20vh] flex justify-end items-center p-10'>
                            <button
                                onClick={() => {
                                    setPopupClosing(true);
                                    setTimeout(() => {
                                        setSideMenu(false);
                                        setPopupClosing(false);
                                    }, 500);
                                }}
                                className='bg-customYellow p-2 rounded-full transform transition-transform duration-200 hover:translate-y-[-4px]'
                            >
                                <img src={Cross} alt="cross" className='invert' width={30} />
                            </button>
                        </div>
                        <div className='w-full h-full'>
                            <ul className='flex flex-col justify-center items-start px-10 text-2xl font-bold text-white gap-5'>
                                <li className='hover:text-customYellow hover:cursor-pointer'>VEHICLES</li>
                                <li className='hover:text-customYellow hover:cursor-pointer'>LOCATIONS</li>
                                <li className='hover:text-customYellow hover:cursor-pointer'>SERVICES</li>
                                <li className='hover:text-customYellow hover:cursor-pointer'>RENTAL POLICIES</li>
                                <li className='hover:text-customYellow hover:cursor-pointer'>ABOUT US</li>
                                <li className='hover:text-customYellow hover:cursor-pointer'>FAQ'S</li>
                                <li className='hover:text-customYellow hover:cursor-pointer'>MY ACCOUNT</li>
                            </ul>
                        </div>
                        <div className='w-full h-full my-20'>
                            <ul className='flex justify-start items-center gap-5 px-10'>
                                <li
                                    onClick={() => {
                                        window.open(facebookLink, "_blank");
                                    }}
                                    className='hover:cursor-pointer'
                                >
                                    <img src={Facebook} alt="facebook" width={25} className='invert' />
                                </li>
                                <li
                                    onClick={() => {
                                        window.open(twitterLink, "_blank");
                                    }}
                                    className='hover:cursor-pointer'
                                >
                                    <img src={Twitter} alt="facebook" width={25} className='invert' />
                                </li>
                                <li
                                    onClick={() => {
                                        window.open(instagramLink, "_blank");
                                    }}
                                    className='hover:cursor-pointer'
                                >
                                    <img src={Instagram} alt="facebook" width={25} className='invert' />
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            )}

            {/* Navbar */}
            <div className='w-full h-[15vh] fixed top-0 z-20'>
                <Navbar />
            </div>

            {/* Home */}
            <section className='w-full h-[100vh] bg-white'>
                <Home />
            </section>

            <section className='w-full h-[100vh] bg-black text-white text-4xl font-semibold'>
                <p className='animate-slideUpText'>
                    Ameer Yousuf Ali Bhatti
                </p>
            </section>
        </div>
    );
};

export default UnAuthorized;
