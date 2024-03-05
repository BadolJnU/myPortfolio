import { GanttChartSquare, Blocks, Gem } from 'lucide-react';
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle
} from '@/components/ui/card';

const serviceData = [
    {
        icon: <GanttChartSquare size={72} strokeWidth={0.8}/>,
        title: 'Web Design',
        description: ' I specialize in bespoke, user-centered websites that drive growth. My approach is collaborative and transparent, starting with a detailed consultation to understand your vision and goals. Following a strategic plan, I ensure a seamless workflow with regular updates and revisions, leading to a final product that exceeds expectations.'
    },
    {
        icon: <Blocks size={72} strokeWidth={0.8}/>,
        title: 'Backend Development',
        description: 'I am specializing in powerful, scalable backend solutions. Good knowledge and experience in technologies like Node.js and Python, I can do API development to cloud integration. My process ensures reliability and efficiency, tailored to meet the specific needs. '
    },
    {
        icon: <GanttChartSquare size={72} strokeWidth={0.8}/>,
        title: 'DevOps',
        description: 'Though in the early stages, I have gained practical experience with Docker, understanding containerization concepts and creating basic Docker files for simple applications. Similarly, my exposure to AWS has enabled me to navigate the AWS Management Console, set up EC2 instances, and explore S3 for basic storage solutions. These experiences have laid a solid foundation for my growth in cloud services and containerization technologies.'
    },
]

const Service = () => {
  return (
    <section className='mb-12 xl:mb-36'>
        <div className='container mx-auto'>
            <h2 className='section-title mb-12 xl:mb-24 text-center mx-auto'>What i am doing</h2>
            {/* grid items */}
            <div className='grid xl:grid-cols-3 justify-center gap-y-12 xl:gap-y-24 xl:gap-x-8'>
                {
                    serviceData.map((item, index) => {
                        return (
                            <Card className='w-full max-w-[424px] h-[450px] flex flex-col pt-16 pb-10 justify-center items-center relative'
                            key={index}>
                                <CardHeader className='text-primary absolute -top-[60px]'>
                                    <div className='w-[140px] h-[80px] bg-white dark:bg-background flex'>
                                        {item.icon}
                                    </div>
                                </CardHeader>
                                <CardContent className='text-center'>
                                    <CardTitle className='mb-4'>{item.title}</CardTitle>
                                    <CardDescription className='text-lg'>
                                        {item.description}
                                    </CardDescription>
                                </CardContent>
                            </Card>
                        )
                    })
                }
            </div>
        </div>
    </section>
  )
}

export default Service