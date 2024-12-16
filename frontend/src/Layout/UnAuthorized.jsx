import React, { useEffect, useState } from 'react';
import { useUser } from '../context';

import Navbar from '../Components/Navbar/Navbar';
import Home from '../Pages/Home/Home';
import Cars from '../Pages/Cars/Cars';
import GetQuote from '../Pages/GetQuote/GetQuote';
import WhyUs from '../Pages/WhyUs/WhyUs';
import Articles from '../Pages/Articles/Articles';
import Footer from '../Components/Footer/Footer';

import Cross from '../assets/cross.svg';
import Facebook from '../assets/facebook.svg';
import Twitter from '../assets/twitter.svg';
import Instagram from '../assets/insta.svg';
import Angle from '../assets/angle.svg';

const UnAuthorized = () => {

    const facebookLink = 'https://www.facebook.com';
    const twitterLink = 'https://www.twitter.com';
    const instagramLink = 'https://www.instagram.com';

    const { sideMenu, setSideMenu, isScrolled } = useUser();
    const [popupClosing, setPopupClosing] = useState(false);

    useEffect(() => {
        console.log('Is Scorlled', isScrolled);
    }, [isScrolled])

    return (
        <div className="w-full h-[100vh] relative">
            {isScrolled && (
                <div
                    onClick={() => {
                        window.scrollTo({
                            top: 0,
                            behavior: 'smooth',
                        });
                    }}
                    className='fixed rounded-full bottom-5 right-5 z-30 bg-customYellow p-2 flex justify-center items-center transform transition-transform duration-200 hover:translate-y-[-4px]'>
                    <img src={Angle} alt="angle" width={25} className='invert' />
                </div>
            )}

            {sideMenu && (
                <div
                    style={{
                        animation: `${popupClosing ? "fadeOut" : "fadeIn"
                            } 0.5s ease-in-out forwards`,
                    }}
                    className='fixed z-50 w-full h-full bg-black bg-opacity-50 backdrop-blur-sm flex justify-end items-center'>
                    <div
                        style={{
                            animation: `${popupClosing ? "closePopup" : "openPopup"
                                } 0.5s ease-in-out forwards`,
                        }}
                        className="side-box w-[100%] lg:w-[30%] h-full bg-black bg-opacity-80 flex flex-col items-center transition-transform duration-300 ease-in-out"
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

            {/* Cars */}
            <section className='w-full h-[400vh] lg:h-[200vh] py-20 flex justify-center items-center'>
                <Cars />
            </section>

            {/* Get Quote */}
            <section className='w-full h-[100vh] lg-[80vh] pt-10'>
                <GetQuote />
            </section>

            {/* Why Choose Us */}
            <section className='w-full h-[150vh] lg:h-[90vh] bg-customYellow'>
                <WhyUs />
            </section>

            {/* Articles */}
            <section className='w-full h-[300vh] lg:h-[120vh] pt-10'>
                <Articles />
            </section>

            {/* Footer */}
            <div className='w-full h-[160vh] lg:h-[90vh] bg-black py-12 lg:py-12'>
                <Footer />
            </div>
        </div>
    );
};

export default UnAuthorized;
