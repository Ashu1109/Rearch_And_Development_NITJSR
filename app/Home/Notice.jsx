'use client'
import React from 'react'
import Container from '../Container'
import '@/app/globals.css'
const Notice = () => {
    const notice = [
        {
            title: "SIH1",
            description: "SIH is a student information hub. It is a platform for students to share their knowledge and resources with the world. It is a place where students can find information, resources, and support about their studies, career, and personal life."
        },
        {
            title: "SIH2",
            description: "SIH is a student information hub. It is a platform for students to share their knowledge and resources with the world. It is a place where students can find information, resources, and support about their studies, career, and personal life."
        },
        {
            title: "SIH3",
            description: "SIH is a student information hub. It is a platform for students to share their knowledge and resources with the world. It is a place where students can find information, resources, and support about their studies, career, and personal life."
        },
        {
            title: "SIH4",
            description: "SIH is a student information hub. It is a platform for students to share their knowledge and resources with the world. It is a place where students can find information, resources, and support about their studies, career, and personal life."
        },
        {
            title: "SIH5",
            description: "SIH is a student information hub. It is a platform for students to share their knowledge and resources with the world. It is a place where students can find information, resources, and support about their studies, career, and personal life."
        },
        {
            title: "SIH6",
            description: "SIH is a student information hub. It is a platform for students to share their knowledge and resources with the world. It is a place where students can find information, resources, and support about their studies, career, and personal life."
        },
        {
            title: "SIH7",
            description: "SIH is a student information hub. It is a platform for students to share their knowledge and resources with the world. It is a place where students can find information, resources, and support about their studies, career, and personal life."
        },
        {
            title: "SIH8",
            description: "SIH is a student information hub. It is a platform for students to share their knowledge and resources with the world. It is a place where students can find information, resources, and support about their studies, career, and personal life."
        },
        {
            title: "SIH9",
            description: "SIH is a student information hub. It is a platform for students to share their knowledge and resources with the world. It is a place where students can find information, resources, and support about their studies, career, and personal life."
        },
        {
            title: "SIH10",
            description: "SIH is a student information hub. It is a platform for students to share their knowledge and resources with the world. It is a place where students can find information, resources, and support about their studies, career, and personal life."
        },
    ]
    return (
        <div className='pb-10 w-full'>
            <Container>
                <div className='w-full h-[56vh] border p-5 overflow-scroll no-scrollbar'>
                    {
                        notice.map((item, index) => (
                            <div key={index} className='border-b-2 border-gray-200 animate py-4 flex flex-col gap-2 '>
                                <div className='text-2xl font-bold'>{item.title}</div>
                                <div>{item.description}</div>
                            </div>))
                    }
                </div>
            </Container>
        </div>
    )
}

export default Notice