'use client';
import Link from "next/link";
import {Button} from './../ui/button';

import {
    Card,
    CardDescription,
    CardTitle,
    CardHeader
} from '@/components/ui/card';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination } from 'swiper/modules';

const researchData = [
    {
        title: 'Performance Analysis and Mitigating the Challenges of Constraint-based Local Search',
        author: 'A. R. Anik, K. Islam and M. M. A. Polash',
        published: '2019 Joint 8th International Conference on Informatics, Electronics & Vision (ICIEV) and 2019 3rd International Conference on Imaging, Vision & Pattern Recognition (icIVPR), Spokane, WA, USA, 2019, pp. 249-254.'
    },
    {
        title: 'Performance Analysis of Deep Neural Network Models for Weather Forecasting in Bangladesh',
        author: 'Badal, M.K.I., Saha, S.',
        published: 'Kaiser, M.S., Ray, K., Bandyopadhyay, A., Jacob, K., Long, K.S. (eds) Proceedings of the Third International Conference on Trends in Computational and Cognitive Engineering. Lecture Notes in Networks and Systems, vol 348. Springer, Singapore. https://doi.org/10.1007/978-981-16-7597-3_7'
    },
]

const ResearchWork = () => {
  return (
    <section className='mb-12'>
        <div className="container mx-auto">
            <h2 className='section-title mb-12 text-center mx-auto'>
                Research Work
            </h2>
            {/* slider */}
            <Swiper 
                slidesPerView={1}
                modules={[Pagination]}
                pagination={{
                    clickable: true,
                }}
                className='h-[510px] xl:h-[370px]'>
                {
                    researchData.map((work, index) => {
                        return (
                            <SwiperSlide key={index}>
                                <Card className='bg-tertiary dark:bg-secondary/40 p-8 min-h-[420px] xl:min-h-[300px]'>
                                    <CardHeader>
                                        <h3 className='text-lg xl:text-3xl font-bold text-center xl:text-left'>
                                            {work.title}
                                        </h3>
                                        <CardTitle className='text-sm xl:text-base font-semibold text-center xl:text-left'>
                                            {work.author}
                                        </CardTitle>
                                    </CardHeader>
                                    <CardDescription className='text-lg xl:text-xl text-center xl:text-left xl:ml-5'>
                                        {work.published}
                                    </CardDescription>
                                    <div  className="text-center xl:text-left">
                                        <Link href='/'>
                                            <Button className='ml-5 mt-5 text-center'>Download Paper</Button>
                                        </Link>
                                    </div>
                                </Card>
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
        </div>
    </section>
  )
}

export default ResearchWork