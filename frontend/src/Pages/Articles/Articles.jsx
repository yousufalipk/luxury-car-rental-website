import React from 'react';
import { useNavigate } from 'react-router-dom';

import Car1 from '../../assets/cars/1.jpg';
import Car2 from '../../assets/cars/2.jpg';
import Car3 from '../../assets/cars/3.jpg';

const Articles = () => {
    const navigate = useNavigate();

    const articles = [
        { img: Car1, date: 'September 6, 2021', title: 'Someone Rented Lamborghini Huracan STO – Already Crashed it', description: 'The Huracan STO is the ultimate version of the V10 Lamborghini and one of the most...', link: '/' },
        { img: Car2, date: 'August 28, 2019', title: 'Exotic Rental Booking Tips and Recommendations', description: '"When it comes to booking an exotic vehicle rental there are some things to keep...', link: '/' },
        { img: Car3, date: 'April 10, 2017', title: '10 of most-loved fast food chains in America', description: 'Instant Luxury Rentals, believes these are the top ten most-loved fast foods in America. 10....', link: '/' },
    ];

    return (
        <div className='w-full h-full flex justify-center items-center py-5'>
            <div className='w-[80vw] h-full flex flex-col justify-between items-center'>
                <div className='w-full h-[20%] flex flex-col justify-center items-center gap-2'>
                    <h1 className='text-5xl font-bold text-black'>
                        Articles & Tips
                    </h1>
                    <p className='text-xl text-gray-500 font-semibold text-center'>
                        Choose from our selection of high-end, late model, exotic sports cars, sedans and SUVs from some of the world's top luxury car manufacturers.
                    </p>
                </div>
                <div className='w-full h-full flex justify-between items-center gap-10'>
                    {articles.map((article, index) => {
                        return (
                            <div
                                key={index}
                                className='w-[33%] h-[80%] flex flex-col justify-center items-center rounded-2xl overflow-hidden hover:shadow-[0_0_50px_0px_rgba(0,0,0,0.4)] shadow-black hover:cursor-pointer hover:translate-y-[-6px] transition ease-in-out duration-300 border'
                            >
                                <div className='w-full h-1/2'>
                                    <img src={article.img} alt={`article_${index + 1}`} className='w-full h-full object-cover' />
                                </div>
                                <div className='w-full h-1/2 flex flex-col justify-center items-start p-5'>
                                    <p className='font-thin'>{article.date}</p>
                                    <h1 className='text-xl font-bold'>{article.title}</h1>
                                    <p className='mt-5 text-md text-gray-600'>{article.description}</p>
                                    <p
                                        onClick={() => {
                                            navigate('/');
                                        }}
                                        className='text-gray-400 hover:underline hover:cursor-pointer mt-5'
                                    >Read More</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Articles;
