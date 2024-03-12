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
        image: '/work/work_1.png',
        category: 'react js',
        name: 'Travel Website',
        description: 'It is a full stack travel website with user authentication and authorization. React JS, Express JS, Node JS, MongoDB are used as technology.',
        link: 'https://papaya-fairy-41e72b.netlify.app/',
        github: 'https://github.com/BadolJnU/Travel_Website'
    },
    {
        image: '/work/work_2.png',
        category: 'react js',
        name: 'AutoRadar - A Resale Car Website',
        description: 'It is a full stack resale car website with user authentication and authorization. React JS, Node JS, Firebase, TailwindCSS are used as technology.',
        link: 'https://resale-car-9c750.web.app/',
        github: 'https://github.com/BadolJnU/Resale-Car-Frontend-Side/tree/main'
    },
    {
        image: '/work/work_3.png',
        category: 'DevOps',
        name: 'CRUD-API-with-Docker',
        description: 'In this project, A CRUD backend server is created with Nodejs and a PostgreSQL database, and we dockerize our application in Docker containers.',
        link: 'https://github.com/BadolJnU/CRUD-API-with-Docker-Node.JS-Express.JS-PostgreSQL',
        github: 'https://github.com/BadolJnU/CRUD-API-with-Docker-Node.JS-Express.JS-PostgreSQL'
    },
    {
        image: '/work/work_4.png',
        category: 'Pure JavaScript',
        name: 'Info Tech',
        description: 'It is simple one page online learning platform where a user can enroll different type of online courses. I make this simple website using Bootstrap, CSS and javascript.',
        link: 'https://badoljnu.github.io/Tech-Website/',
        github: 'https://github.com/BadolJnU/Tech-Website'
    },
    {
        image: '/work/work_5.png',
        category: 'Django',
        name: 'Implicit Learning Platform',
        description: 'It is a learning web application using Bootstrap, CSS, Django. In this project, students can see their course materials, notice and routine.',
        link: 'https://github.com/BadolJnU/ILC',
        github: 'https://github.com/BadolJnU/ILC'
    },
];

const ProjectWorks = () => {
  return (
    <section className="relative mb-12 xl:mb-48">
        <div className="container mx-auto">
            <div className="max-w-[400px] mx-auto xl:mx-0 text-center xl:text-left mb-12 xl:h-[500px] flex flex-col justify-center items-center xl:items-start">
                <h2 className="section-title mb-4">Latest Projects</h2>
                <p className="subtitle mb-8">Certainly! My key passions encompass Full Stack development, Web Design, Backend development, Data Mining and DevOps. During my leisure time, I enjoy dedicating myself to personal endeavors, exploring emerging technologies, and staying abreast of current developments in the technology industry. Many of my publicly available projects are hosted on my <a href="https://github.com/BadolJnU" className="text-primary">GitHub profile</a>.</p>
                <Link href='/projects'>
                    <Button>All Projects</Button>
                </Link>
            </div>
            <div className="xl:max-w-[900px] xl:absolute right-0 top-0 shadow-lg">
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