import DevImg from "../Hero/DevImg";
import Image from "next/image";
import {
    User2,
    MailIcon,
    HomeIcon,
    PhoneCall,
    GraduationCap,
    Calendar,
    Briefcase
} from 'lucide-react';

import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";

const infoData = [
    {
        icon: <User2 size={20}/>,
        text: 'Md Khirul Islam Badal',
    },
    {
        icon: <PhoneCall size={20}/>,
        text: '873 339 7178',
    },
    {
        icon: <MailIcon size={20}/>,
        text: 'badolcsejnu135@gmail.com',
    },
    {
        icon: <GraduationCap size={20}/>,
        text: 'Master on Computer Science',
    },
    {
        icon: <HomeIcon size={20}/>,
        text: 'Calgary, Alberta',
    },
]

const qualificationData = [
    {
        title: 'Experience',
        data: [
            {
                Company: 'Bishops University',
                Role: 'Graduate Teaching Assistant',
                Year: 'Sept, 2023 - Dec, 2023'
            },
            {
                Company: 'Royal University',
                Role: 'Lecturer',
                Year: 'Jan, 2021 to Apr, 2022'
            },
            {
                Company: 'Barikoi',
                Role: 'Intern as a backend developer',
                Year: 'Jan, 2020 - Sept, 2020'
            },
        ]
    },
    {
        title: 'Education',
        data: [
            {
                University: 'Bishops University',
                Qualification: 'Master in Computer Science',
                Grade: '3.90 out 4.00',
                Passing_year: '2023'
            },
            {
                University: 'Jagannath University',
                Qualification: 'Bachelor in Computer Science & Engineering',
                Grade: '3.57 out 4.00',
                Passing_year: '2019'
            },
            {
                University: 'B A F Shaheen School & College',
                Qualification: 'Higher Secondary Certificate',
                Grade: '5.00 out 5.00',
                Passing_year: '2013'
            },
        ]
    }
]

const skillData = [
    {
        title: 'Skills',
        data: [
            {
                name: 'C, C++, Python, JavaScript'
            },
            {
                name: 'React JS, Node JS, Express JS, Django'
            },
            {
                name: 'MySQL, MongoDB, Postgresql'
            },
            {
                name: 'Docker, AWS'
            },
            {
                name: 'Front-end Development, Back-end Development, Responsive UI Design'
            },
        ]
    },
    {
        title: 'tools',
        data: [
            {
                imgPath: '/about/vscode.svg',
            },
            {
                imgPath: '/about/figma.svg',
            },
            {
                imgPath: '/about/wordpress.svg',
            },
        ]
    }
]

const About = () => {
    const getData = (arr, title) => {
        return arr.find((item) => item.title === title);
    }
    //console.log(getData(qualificationData, 'Experience').data[1])
  return (
    <section className="xl:h-[860px] pb-12 xl:py-24">
        <div className="container mx-auto">
            <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">About me</h2>
            <div className="flex flex-col xl:flex-row">
                {/* Image */}
                <div className="hidden xl:flex flex-1 relative">
                    <DevImg containerStyles='bg-about_shape_light dark:bg-about_shape_dark w-[505px] h-[505px] bg-no-repeat relative'
                    imgSrc='/about/developer.png'/>
                </div>
                {/* tabs */}
                <div className="flex-1">
                    <Tabs defaultValue="personal">
                    <TabsList className='w-full grid xl:grid-cols-3 xl:max-w-[520px] xl:border dark:border-none'>
                            <TabsTrigger className='w-[162px] xl:w-auto' value='personal'>Personal Info</TabsTrigger>
                            <TabsTrigger value='qualifications' className='w-[162px] xl:w-auto'>Qualifications</TabsTrigger>
                            <TabsTrigger value='skills' className='w-[162px] xl:w-auto'>Skills</TabsTrigger>
                        </TabsList>
                        <div className="text-lg mt-12 xl:mt-8">
                            {/* personal information */}
                            <TabsContent value='personal'>
                                <div className="text-center xl:text-left">
                                    <h3 className="h3 mb-4">Fresher with sound knowledge of Coding and full Stack Development</h3>
                                    <p className="subtitle max-w-xl mx-auto xl:mx-0">
                                        I specialize in crafting intuitive websites with cutting-edge technology, delivering dynamic and engaging user experience.
                                    </p>
                                    <div className="grid xl:grid-cols-2 gap-4 mb-12">
                                        {
                                            infoData.map((item, index) => {
                                                return (
                                                    <div className="flex items-center gap-x-4 mx-auto xl:mx-0" key={index}>
                                                        <div className="text-primary">{item.icon}</div>
                                                        <div>{item.text}</div>
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>
                                    {/* language */}
                                    <div className="flex flex-col gap-y-2">
                                        <div className="text-primary">Languages</div>
                                        <div className="border-b border-border"></div>
                                        <div>English, Bangla, French(Beginner)</div>
                                    </div>
                                </div>
                            </TabsContent>
                            {/* Qualification */}
                            <TabsContent value='qualifications'>
                                <div>
                                    <h3 className="h3 mb-8 text-center xl:text-left">
                                        My Awesome Journey
                                    </h3>
                                    {/* experience & education wrapper */}
                                    <div className="grid md:grid-cols-2 gap-y-8">
                                        {/* experience */}
                                        <div className="flex flex-col gap-y-6">
                                            <div className="flex gap-x-4 items-center text-[22px] text-primary mb-2">
                                                <Briefcase size={28}/>
                                                <h4 className="capitalize font-medium">
                                                    {getData(qualificationData, 'Experience').title}
                                                </h4>
                                            </div>
                                            {/* list */}
                                            <div className="flex flex-col gap-y-8">
                                                {getData(qualificationData, 'Experience').data.map((item, index) => {
                                                    const { Company, Role, Year } = item;
                                                    return (
                                                        <div className="flex gap-x-8 group" key={index}>
                                                            <div className="h-[84px] w-[1px] bg-border relative ml-2">
                                                                <div className="w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500"></div>
                                                            </div>
                                                            <div>
                                                                <div className="font-semibold text-xl leading-none mb-2">
                                                                    {Company}
                                                                </div>
                                                                <div className="text-lg leading-none text-muted-foreground mb-4">
                                                                    {Role}
                                                                </div>
                                                                <div className="text-base font-medium">
                                                                    {Year}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    )
                                                })}
                                            </div>
                                        </div>
                                        {/* education */}
                                        <div className="flex flex-col gap-y-6">
                                            <div className="flex gap-x-4 items-center text-[22px] text-primary mb-2">
                                                <GraduationCap size={28}/>
                                                <h4 className="capitalize font-medium">
                                                    {getData(qualificationData, 'Education').title}
                                                </h4>
                                            </div>
                                            {/* list */}
                                            <div className="flex flex-col gap-y-8">
                                                {getData(qualificationData, 'Education').data.map((item, index) => {
                                                    const { University, Qualification, Grade, Passing_year } = item;
                                                    return (
                                                        <div className="flex gap-x-8 group" key={index}>
                                                            <div className="h-[84px] w-[1px] bg-border relative ml-2">
                                                                <div className="w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500"></div>
                                                            </div>
                                                            <div>
                                                                <div className="font-semibold text-xl leading-none mb-2">
                                                                    {University}
                                                                </div>
                                                                <div className="text-lg leading-none text-muted-foreground mb-4">
                                                                    {Qualification}
                                                                </div>
                                                                <div className="text-lg leading-none text-muted-foreground mb-4">
                                                                    {Grade}
                                                                </div>
                                                                <div className="text-base font-medium">
                                                                    {Passing_year}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    )
                                                })}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </TabsContent>
                            {/* skills */}
                            <TabsContent value='skills'>
                                <div className="text-center xl:text-left">
                                    <h3 className="h3 mb-8">Tools I use everyday</h3>
                                    <div className="mb-8">
                                        <h4 className="text-xl font-semibold mb-2">Skills</h4>
                                        <div className="border-b border-border mb-4"></div>
                                        {/* skill list */}
                                        <div>
                                            {
                                                getData(skillData, 'Skills').data.map((item,index) => {
                                                    const { name } = item;
                                                    return (
                                                        <div key={index} className="w-2/4 text-center xl:text-left mx-auto xl:mx-0">
                                                            <div className="font-medium">{name}</div>
                                                        </div>
                                                    )
                                                })
                                            }
                                        </div>
                                    </div>
                                    {/* tools */}
                                    <div>
                                        <h4 className="text-xl font-semibold mb-2 xl:text-left">Tools</h4>
                                        <div className="border-b border-border mb-4"></div>
                                        {/* tool list */}
                                        <div className="flex gap-x-8 justify-center xl:justify-start">
                                            {
                                                getData(skillData, 'tools').data.map((item, index) => {
                                                    const { imgPath } = item;
                                                    return (
                                                        <div>
                                                            <Image src={imgPath} width={48} height={48} alt="tools icon" priority/>
                                                        </div>
                                                    )
                                                })
                                            }
                                        </div>
                                    </div>
                                </div>
                            </TabsContent>
                        </div>
                    </Tabs>
                </div>
            </div>
        </div>
    </section>
  )
}

export default About