import React from 'react';
import CustomLink from '../CustomLink/CustomLink';
import Header from '../Header/Header';

const Homepage = () => {
    return (
        <div>
            <div className='md:px-16 py-8'>
                <div className='flex flex-col justify-center h-[80vh] items-center'>
                    <h1 className=' font-san text-xl md:text-5xl '>
                        Welcome to CRYPTO CAFE<span className='text-6xl'>☕</span>
                    </h1>
                    <div className='mt-5'>
                        <CustomLink to='/coins' className='py-2 px-6 text-white mt-6 rounded hover:bg-red-800 bg-black'>Explore Coins</CustomLink>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default Homepage;