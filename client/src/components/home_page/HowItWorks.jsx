import React from 'react';
import { BlogCard } from './CardWorks';
import { BlogCardII } from './CardWorksll';
import { BlogCardIII } from './CardWorkslll';


const HowItWorks = () => {
    return (
        <>
            <div className='   grid  m-auto mb-20 items-center grid-cols-5 xl:grid-cols-1 sm:grid-cols-2 justify-items-center gap-10 lg:gap-10 mt-28 w-[1000px]'>
                <p className='font-bold text-6xl font-mono  text-gray-800'>
                    How It Works
                    </p>
            </div>
            <div className=' grid  m-auto mb-20 items-start grid-cols-3 xl:grid-cols-3 sm:grid-cols-2 justify-items-center gap-10 lg:gap-10 mt-20 w-[1050px] h-[5000]'>
                <BlogCard/>
                <BlogCardII/>
                <BlogCardIII/>
            </div>
        </>
    );
}

export default HowItWorks;
