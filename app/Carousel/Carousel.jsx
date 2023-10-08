'use client'
import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import img1 from '@/public/sky.png'
import img2 from '@/public/tiger.png'
import img3 from '@/public/tree.jpg'
import Image from 'next/image';
const CarouselComponents = () => {

    return (
        <div className='pb-10 md:pt-10'>
        <Carousel className='md:w-[700px] w-full px-4' showStatus={false} swipeable useKeyboardArrows transitionTime={800} autoPlay showThumbs={false} infiniteLoop>
            <div>
                <Image src={img1} alt='Photo'/>
            </div>
            <div>
                <Image src={img2} alt='Photo' />
            </div>
            <div>
                <Image src={img3} alt='Photo' />
            </div>
        </Carousel>
        </div>
    )
}

export default CarouselComponents