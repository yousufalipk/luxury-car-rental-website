import React, { useState } from 'react';
import classNames from 'classnames';

import Car1 from '../../assets/cars/1.jpg';
import Car2 from '../../assets/cars/2.jpg';
import Car3 from '../../assets/cars/3.jpg';
import Car4 from '../../assets/cars/4.jpg';
import Car5 from '../../assets/cars/5.jpg';
import Car6 from '../../assets/cars/6.jpg';

import TransimmsionLogo from '../../assets/transmission.svg';
import SuitCaseLogo from '../../assets/suitcase.svg';
import PersonLogo from '../../assets/person.svg';

const Cars = () => {
    const carsData = [
        {
            images: [Car1, Car2, Car3],
            name: 'DRIVE YOUR DREAMS',
            passengers: 2,
            trunk: 1,
            transmission: 'auto',
            price: 1000
        },
        {
            images: [Car4, Car5, Car6],
            name: 'FEEL THE LUXURY',
            passengers: 4,
            trunk: 2,
            transmission: 'manual',
            price: 4000
        }
    ];

    return (
        <div className="w-[80vw] h-full">
            <div className="px-2 lg:px-0 w-full h-[15vh] flex flex-col justify-center items-center gap-5">
                <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold text-black text-center">
                    READY TO GET STARTED?
                </h1>
                <p className="text-md: md:text-md lg:text-xl text-gray-500 font-semibold text-center">
                    Choose from our selection of high-end, late model, exotic sports cars, sedans, and SUVs from some of the world's top luxury car manufacturers.
                </p>
            </div>
            <div className="pt-16 w-full h-full grid grid-cols-1 md:grid-cols-2 py-10 gap-10">
                {carsData.map((car, index) => (
                    <CarCard key={index} car={car} />
                ))}
            </div>
        </div>
    );
};

const CarCard = ({ car }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const nextImage = () => {
        setCurrentImageIndex((prev) => (prev + 1) % car.images.length);
    };

    const prevImage = () => {
        setCurrentImageIndex((prev) => (prev - 1 + car.images.length) % car.images.length);
    };

    return (
        <div
            className="w-full h-full flex flex-col justify-end items-end rounded-xl relative overflow-hidden"
            style={{
                backgroundImage: `url(${car.images[currentImageIndex]})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                transition: 'background-image 0.8s ease-in-out',
            }}
        >
            <div className="absolute w-full h-full bg-black opacity-30 z-0"></div>

            <div className="absolute bottom-0 z-20 w-full h-[20vh] text-white text-xl p-4">
                <div className="w-full h-[7vh] flex justify-between items-center">
                    <h1 className="w-[60%] h-full justify-start font-bold">{car.name}</h1>
                    <div className="w-[30%] h-full flex flex-col justify-end items-end">
                        <p className="font-bold">${car.price}</p>
                        <p className="font-thin">PerDay</p>
                    </div>
                </div>
                <div className="w-full h-[7vh] flex justify-between items-center">
                    <ul className="w-full h-full flex justify-start items-center gap-2 text-sm">
                        <li className="w-7 flex flex-col items-center justify-between">
                            <img src={PersonLogo} alt="passengers" width={20} className="invert" />
                            <h1>{car.passengers}</h1>
                        </li>
                        <li className="w-7 flex flex-col items-center justify-between">
                            <img src={SuitCaseLogo} alt="trunks" width={20} className="invert" />
                            <h1>{car.trunk}</h1>
                        </li>
                        <li className="w-7 flex flex-col items-center justify-between">
                            <img src={TransimmsionLogo} alt="transmission" width={20} className="invert" />
                            <h1 className="capitalize">{car.transmission}</h1>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Carousel Controls */}
            <div className="absolute top-1/2 left-5 z-30">
                <button onClick={prevImage} className="text-white bg-black bg-opacity-50 p-2 rounded-full">
                    ‹
                </button>
            </div>
            <div className="absolute top-1/2 right-5 z-30">
                <button onClick={nextImage} className="text-white bg-black bg-opacity-50 p-2 rounded-full">
                    ›
                </button>
            </div>
        </div>
    );
};

export default Cars;
