import React from 'react';

import CarsBgVideo from '../../assets/carsVideo.mp4';

const GetQuote = () => {
    return (
        <div className='relative w-full h-full flex justify-center items-center text-white overflow-hidden'>
            <div className="w-full h-full absolute z-0">
                <video
                    autoPlay
                    loop
                    muted
                    className="background-video"
                >
                    <source src={CarsBgVideo} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
            {/* Black Tint Overlay */}
            <div className='absolute top-0 left-0 w-full h-full bg-black opacity-60 z-5'></div>

            <div className='absolute z-10 w-[60vw] h-full flex flex-col justify-center items-center text-center gap-10'>
                <div className='flex flex-col items-center justify-center'>
                    <h1 className='text-4xl font-bold'>
                        Our Fleet, Your Fleet
                    </h1>
                    <p className='pt-5 text-lg font-semibold text-gray-300'>
                        We know the difference is in the details and that’s why our exotic and luxury car rental services, in the tourism
                        and business industry, stand out for their quality and good taste, to offer you a unique experience
                    </p>
                </div>
                <h2>
                    Call Now (877) 736-8553
                </h2>
                <button
                    className='w-[40vw] md:[25vw] lg:w-[12vw] h-12 rounded-lg bg-customYellow text-white hover:bg-[#11492c]'
                >
                    Request a Quote
                </button>
            </div>
        </div>
    )
}

export default GetQuote;
