import React from 'react';

import Facebook from '../../assets/facebook.svg';
import Twitter from '../../assets/twitter.svg';
import Instagram from '../../assets/insta.svg';

import Phone from '../../assets/whiteMobile.svg';
import Clock from '../../assets/whiteClock.svg';
import Location from '../../assets/location.svg';

const Footer = () => {

    const facebookLink = 'https://www.facebook.com';
    const twitterLink = 'https://www.twitter.com';
    const instagramLink = 'https://www.instagram.com';

    return (
        <div className='w-full h-full flex justify-center items-center text-white'>
            <div className='w-[80vw] h-full pt-16'>
                <div className='w-full h-[90%] flex justify-between items-center gap-10'>
                    <div className='w-[20%] h-full flex flex-col justify-start items-start gap-2'>
                        <h1 className='text-xl font-bold'>About Us</h1>
                        <p>
                            From exotic sports cars to luxury sedans and SUVs, Instant Luxury Rentals features one of the largest selections of exotic and premium luxury vehicles from manufacturers around the world including Lamborghini, Bugatti, Aston Martin, Jaguar, Alfa Romeo, BMW, Mercedes-Benz, Audi, Koenigsegg, Tesla, Ferrari, Maserati, Porsche, Bentley, Range Rover, Rolls-Royce, Land Rover, Cadillac, Fiat, McLaren, Mini, Lexus, Tata Motors, Peugeot, Pagani and more.
                        </p>
                    </div>
                    <div className='w-[20%] h-full flex flex-col justify-center items-start gap-2'>
                        <div className='w-full h-1/2 flex flex-col justify-start items-start'>
                            <h1 className='text-xl font-bold'>Contact Information</h1>
                            <ul className='flex flex-col justify-start items-start gap-2 pt-5'>
                                <li className='flex gap-1 justify-start items-start'>
                                    <img src={Phone} alt="phone" width={20} className='mt-1' />
                                    1-877-736-8553
                                </li>
                                <li className='flex gap-1 justify-start items-start'>
                                    <img src={Location} alt="location" width={20} className='invert mt-1' />
                                    Instant Luxury Rentals
                                    2630 W Broward Blvd Ste 203-743 <br />
                                    Fort Lauderdale, FL 33312
                                </li>
                                <li className='flex gap-1 justify-start items-start'>
                                    <img src={Clock} alt="clock" width={20} className='mt-1' />
                                    Mon - Sun 8:00am - 8:00pm
                                </li>
                            </ul>
                        </div>
                        <div className='w-full h-1/2 flex justify-start items-start pt-5'>
                            <ul className='flex justify-start items-center gap-3'>
                                <li
                                    onClick={() => {
                                        window.open(facebookLink, "_blank");
                                    }}
                                    className='hover:cursor-pointer bg-blue-700 rounded-full p-2'><img src={Facebook} alt="facebook" width={25} className='invert' /></li>
                                <li
                                    onClick={() => {
                                        window.open(twitterLink, "_blank");
                                    }}
                                    className='hover:cursor-pointer bg-blue-400 rounded-full p-2'><img src={Twitter} alt="facebook" width={25} className='invert' /></li>
                                <li
                                    onClick={() => {
                                        window.open(instagramLink, "_blank");
                                    }}
                                    className='hover:cursor-pointer bg-blue-500 rounded-full p-2'><img src={Instagram} alt="facebook" width={25} className='invert' /></li>
                            </ul>
                        </div>
                    </div>
                    <div className='w-[20%] h-full flex flex-col justify-start items-start gap-2'>

                    </div>
                    <div className='w-[40%] h-full flex flex-col justify-center items-start gap-2'>
                        {/* Free col */}
                    </div>
                </div>
                <div className='w-full h-[10%]'>
                    <hr />
                    <div className='flex justify-between items-center'>
                        <div className='w-1/2 flex justify-start items-center py-2'>
                            <h1>
                                ©2019-2024 Copyright Instant Luxury Rentals | All Rights Reserved.
                            </h1>
                        </div>
                        <div className='w-1/2 flex justify-end items-center'>
                            <ul className='flex justify-end items-center gap-3'>
                                <li>Terms of Use</li>
                                <li>Privacy Policy</li>
                                <li>Cookie Policy</li>
                                <li>Rental Policies</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;
