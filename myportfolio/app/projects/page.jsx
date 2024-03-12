'use client';
import React, { useState } from 'react'
import { Tabs, TabsList, TabsContent, TabsTrigger } from '@/components/ui/tabs';
import ProjectCard from '@/components/ProjectCard/ProjectCard';

const projectData = [
  {
      image: '/work/work_1.png',
      category: 'web development',
      name: 'Travel Website',
      description: 'It is a full stack travel website with user authentication and authorization. React JS, Express JS, Node JS, MongoDB are used as technology.',
      link: 'https://papaya-fairy-41e72b.netlify.app/',
      github: 'https://github.com/BadolJnU/Travel_Website'
  },
  {
      image: '/work/work_2.png',
      category: 'web development',
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
      category: 'web development',
      name: 'Info Tech',
      description: 'It is simple one page online learning platform where a user can enroll different type of online courses. I make this simple website using Bootstrap, CSS and javascript.',
      link: 'https://badoljnu.github.io/Tech-Website/',
      github: 'https://github.com/BadolJnU/Tech-Website'
  },
  {
      image: '/work/work_5.png',
      category: 'web development',
      name: 'Implicit Learning Platform',
      description: 'It is a learning web application using Bootstrap, CSS, Django. In this project, students can see their course materials, notice and routine.',
      link: 'https://github.com/BadolJnU/ILC',
      github: 'https://github.com/BadolJnU/ILC'
  },
  {
      image: '/work/work_6.png',
      category: 'data mining',
      name: 'Credit Card Fraud Detection',
      description: 'Data mining project exploring supervised techniques for detecting fraudulent credit card transactions. We trained three models - logistic regression, naive Bayes, SVM, and decision tree models.',
      link: 'https://github.com/BadolJnU/Fraud_detection',
      github: 'https://github.com/BadolJnU/Fraud_detection'
  },
  {
      image: '/work/work_7.png',
      category: 'data mining',
      name: 'Data Preprocessing using Data Mining Techniques',
      description: 'Data preprocessing is a data mining technique that involves transforming raw data into an understandable format. Here we used diabetics dataset',
      link: 'https://github.com/BadolJnU/Data-Preprocessing',
      github: 'https://github.com/BadolJnU/Data-Preprocessing'
  },
  {
      image: '/work/work_8.png',
      category: 'data mining',
      name: 'Weather Forecast using Machine Learning',
      description: 'The Project is done in 3 parts. The Complexity & performance of the model increases from starting to the end. We used different types of machine learning algorithm to predict the weather.',
      link: 'https://github.com/BadolJnU/Data-Preprocessing',
      github: 'https://github.com/BadolJnU/Data-Preprocessing'
  },
];

const uniqueCategories = [
  'all projects',
  ...new Set(projectData.map((item) => item.category)),
];

const Projects = () => {
  const [categories, setCategories] = useState(uniqueCategories);
  const [category, setCategory] = useState('all projects');
  const filteredProjects = projectData.filter((project) => {
    return category === 'all projects' ? project : project.category === category;
  })
  return (
    <section className='min-h-screen pt-12'>
      <div className="container mx-auto">
        <h2 className='section-title mb-8 xl:mb-16 text-center mx-auto'>My Projects</h2>
        {/* tabs */}
        <Tabs defaultValue={category} className='mb-24 xl:mb-48'>
          <TabsList className='w-full grid h-full md:grid-cols-4 lg:max-w-[640px] mb-12 mx-auto md:border dark:border-none'>
            {
              categories.map((category, index) => {
                return (
                  <TabsTrigger value={category} key={index} className='capitalize w-[162px] md:w-auto' onClick={() => setCategory(category)}>
                    {category}
                  </TabsTrigger>
                )
              })
            }
          </TabsList>
          <div className='text-lg xl:mt-8 grid grid-cols-1 lg:grid-cols-3 gap-4'>
            {
              filteredProjects.map((project, index) => {
                return (
                  <TabsContent value={category} key={index}>
                    <ProjectCard project={project}/>
                  </TabsContent>
                )
              })
            }
          </div>
        </Tabs>
      </div>
    </section>
  )
}

export default Projects