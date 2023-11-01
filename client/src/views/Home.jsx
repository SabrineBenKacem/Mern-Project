import React from 'react'
import { CarouselWithContent } from '../components/home_page/Carousel'
import { StickyNavbar } from '../components/home_page/Nav'
import Main from '../components/home_page/Main'
import { FooterWithSocialLinks } from '../components/home_page/Footer'
import HowItWorks from '../components/home_page/HowItWorks'
// import { BlogCardContainer } from '../components/home_page/AllPhotos'



// import { CarouselCustomNavigation } from '../Home_page/Carousel'

const Home = () => {
    return (
        <>
            {/* <StickyNavbar/> */}
            {/* <CarouselCustomNavigation/> */}
            <CarouselWithContent />

            <HowItWorks/>
            <Main/>
            <FooterWithSocialLinks/>
        </>
        )
    }

export default Home