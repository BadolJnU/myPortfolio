'use client';
import Link from "next/link";
import {Button} from './../ui/button';

import { Swiper, SwiperSlide } from 'swiper/react';

//import swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination } from 'swiper/modules';

import ProjectCard from "../ProjectCard/ProjectCard";

const projectData = [
    {
        image: '/work/1.png',
        category: 'react js',
        name: 'Travel Website',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
        link: '/',
        github: '/'
    },
    {
        image: '/work/2.png',
        category: 'next js',
        name: 'Travel Website',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
        link: '/',
        github: '/'
    },
    {
        image: '/work/3.png',
        category: 'pure javascript',
        name: 'Travel Website',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
        link: '/',
        github: '/'
    },
    {
        image: '/work/1.png',
        category: 'Django',
        name: 'Travel Website',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
        link: '/',
        github: '/'
    },
];

const ProjectWorks = () => {
  return (
    <section className="relative mb-12 xl:mb-48">
        <div className="container mx-auto">
            <div className="max-w-[400px] mx-auto xl:mx-0 text-center xl:text-left mb-12 xl:h-[400px] flex flex-col justify-center items-center xl:items-start">
                <h2 className="section-title mb-4">Latest Projects</h2>
                <p className="subtitle mb-8">Lorem ipsum dolor sit amet consector</p>
                <Link href='/projects'>
                    <Button>All Projects</Button>
                </Link>
            </div>
            <div className="xl:max-w-[1000px] xl:absolute right-0 top-0 shadow-lg">
                <Swiper 
                className="h-[530px]"
                slidesPerView={1}
                breakpoints={{
                    640: {
                        slidesPerView: 2,
                    },
                }}
                spaceBetween={30}
                modules={[Pagination]}
                pagination={{clickable:true}}>
                    {
                        projectData.slice(0,4).map((project, index) => {
                            return (
                                <SwiperSlide key={index}>
                                    <ProjectCard project={project}/>
                                </SwiperSlide>
                            )
                        })
                    }
                </Swiper>
            </div>
        </div>
    </section>
  )
}

export default ProjectWorks