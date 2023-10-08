'use clinet'
import React from 'react'
import Container from '../Container'
import Image from 'next/image'
import img from '@/public/img.jpeg'



const Card = ({ item }) => {
    return (<>
        <div  className='w-[300px] overflow-hidden h-[450px] bg-sky-100 rounded-md shadow-lg'>
            <div className='p-2'>
                <Image src={item.img_url} width={10} height={20} className='rounded-md'
                    layout='responsive' quality={100} objectFit='cover' objectPosition='center'
                    placeholder='blur' alt='professor'
                />
                <div className='text-2xl font-bold text-center mt-4'>{item.name}</div>
            </div>
        </div>
        </>
    )
}
const ProfessorDetail = () => {
    const detail = [
        {
            name: "Professor Name",
            img_url: img
        },
        {
            name: "Professor Name",
            img_url: img
        },
        {
            name: "Professor Name",
            img_url: img
        },
        {
            name: "Professor Name",
            img_url: img
        },
        {
            name: "Professor Name",
            img_url: img
        },
        {
            name: "Professor Name",
            img_url: img
        },
        {
            name: "Professor Name",
            img_url: img
        },
        {
            name: "Professor Name",
            img_url: img
        },
    ]
    return (
        <div className=' h-full w-full bg-slate-100 justify-center flex'>
            <Container>
                <div className='pt-8 pb-4'>
                    <div className=' text-2xl md:text-3xl font-bold text-center'>Research And Development</div>
                    <div className='text-xl  md:text-2xl font-bold text-center'>Professors</div>
                </div>
                <div className=' px-6 pb-10 justify-center  items-center grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4 mt-4 md:grid-cols-3 md:gap-4'>
                    {
                        detail.map((item, index) => (
                            <Card key={index} item={item} />
                        ))
                    }
                </div>
            </Container>
        </div>
    )
}

export default ProfessorDetail