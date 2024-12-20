import React from 'react';

import Support from '../../assets/support.svg';
import SportsCar from '../../assets/sportsCar.svg';
import HandShake from '../../assets/handshake.svg';

const WhyUs = () => {
    return (
        <div className='w-full h-full flex justify-center items-center text-white text-center py-16 lg:py-24'>
            <div className='w-[80vw] h-full flex flex-col justify-center items-center'>
                <div className='px-2 lg:px-0 w-full h-[10%] flex flex-col justify-center items-center gap-1'>
                    <h1 className='text-2xl lg:text-4xl font-bold'>Why Choose Us</h1>
                    <p className='text-lg lg:text-xl'>Experience The Exotic & Luxury Car Collection By Buraq Luxury Travel</p>
                </div>
                <div className='w-full h-[90%] flex flex-col lg:flex-row justify-between items-center pt-5 gap-5'>
                    <div className='w-full lg:w-[33%] h-[33%] lg:h-full flex flex-col justify-center items-center'>
                        <div className='w-full h-[70vh] flex justify-center items-center'>
                            <img src={SportsCar} alt="sports_car" width={160} className='-mt-4 invert' />
                        </div>
                        <div className='w-full h-full'>
                            <h1 className='text-xl font-bold'>
                                Pick-up and Drop-off
                            </h1>
                            <p>
                                Pick-up, Drop-off, Airport Transfers, Event Transport, Business Travel, VIP Transfers, Luxury Road Trips, Personalized Journeys, Premium Service, Comfort, Elegance, Convenience, and more.
                            </p>
                        </div>
                    </div>
                    <div className='w-full lg:w-[33%] h-[33%] lg:h-full flex flex-col justify-center items-center'>
                        <div className='w-full h-[70vh] flex justify-center items-center'>
                            <img src={HandShake} alt="handshake" width={120} className='invert' />
                        </div>
                        <div className='w-full h-full'>
                            <h1 className='text-xl font-bold'>
                                Best Rate Guarantee
                            </h1>
                            <p>
                                We guarantee you always get the lowest price when you reserve an exotic & luxury car through an official Exotic & Luxury Car Rental company booking channel, or we’ll match the lower price.
                            </p>
                        </div>
                    </div>
                    <div className='w-full lg:w-[33%] h-[33%] lg:h-full flex flex-col justify-center items-center'>
                        <div className='w-full h-[70vh] flex justify-center items-center'>
                            <img src={Support} alt="support" width={100} className='invert' />
                        </div>
                        <div className='w-full h-full'>
                            <h1 className='text-xl font-bold'>
                                Awesome Customer Support
                            </h1>
                            <p>
                                Customer service always plays the biggest role in our company’s vision of being a sustainable business. Our goal is to provide you with bar none superior service at any cost.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default WhyUs;
