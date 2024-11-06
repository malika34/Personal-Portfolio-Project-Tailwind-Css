import React from "react";
import DevImg from "./DevImg";
import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import {
  User2,
  MailIcon,
  HomeIcon,
  PhoneCall,
  GraduationCap,
  Calendar,
  Briefcase,
  icons,
  University,
} from "lucide-react";
import { text } from "stream/consumers";
import { title } from "process";

const infoData = [
  {
    icon: <User2 size={20} />,
    text: "Malik Musadiq Ahmed",
  },
  {
    icon: <PhoneCall size={20} />,
    text: "+92-334-0125672",
  },
  {
    icon: <MailIcon size={20} />,
    text: "musadiqa34@gmail.com",
  },
  {
    icon: <Calendar size={20} />,
    text: "Born on 25 Sep, 2005",
  },
  {
    icon: <GraduationCap size={20} />,
    text: "Studying on Software Engineering",
  },
  {
    icon: <HomeIcon size={20} />,
    text: "Clifton Punjab Colony, Karachi, Pakistan",
  },
];
const qualificationData = [
  {
    title: "education",
    data: [
      {
        alma: "Bahria-Model-School",
        qualificaion: "Matric-Computer-Science",
        years: "2019 - 2020",
      },
      {
        alma: "Govt College of Commerce and Economics",
        qualificaion: "Intermediate-Part-II-Commerce",
        years: "2021 - 2023",
      },
      {
        alma: "Virtual University of Pakistan",
        qualificaion: "Bachelors-Software-Engineering",
        years: "2024 - 2028 - First Semester",
      },
    ],
  },
  {
    title: "experience",
    data: [
      {
        company: "Lorem ipsum.",
        role: " Lorem ipsum",
        years: "2019 - 2020",
      },
      {
        company: "Lorem ipsum.",
        role: " Lorem ipsum",
        years: "2021 - 2023",
      },
      {
        company: "Lorem ipsum.",
        role: " Lorem ipsum",
        years: "2024",
      },
    ],
  },
];
const skillData = [
  {
    title: "skills",
    data: [
      {
        name: "HTML5, CSS3",
      },
      {
        name: "Typescript",
      },
      {
        name: "Tailwind Css",
      },
      {
        name: "Next.js",
      },
    ],
  },
  {
    title: "tools",
    data: [
      {
        imgPath: "/about/vscode.svg",
      },
      {
        imgPath: "/about/figma.svg",
      },
      {
        imgPath: "/about/framer-motion.svg",
      },
      {
        imgPath: "/about/canva.svg",
      },
    ],
  },
];

const About: React.FC = () => {
  const getData = (arr: any[], title: string): any => {
    return arr.find((item: any) => item.title === title);
  };
  return (
    <section className="xl:h-[860px] mt-20 pb-12 xl:py-24">
      <div className="container mx-auto">
        <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">
          About
        </h2>
        <div className="flex flex-col xl:flex-row">
          {/* image */}
          <div className="hidden xl:flex flex-1 relative">
            <DevImg
              containerStyles="bg-about_shape_light dark:bg-about_shape_dark w-[510px] h-[462px] bg-no-repeat relative"
              imgsrc="/hero/developer.png"
            />
          </div>
          {/* tabs */}
          <div className="flex-1 ">
            <Tabs defaultValue="personal">
              <TabsList className="w-full grid xl:grid-cols-3 xl:max-w-[520px] xl:border dark:border-none">
                <TabsTrigger value="personal">Personal Info</TabsTrigger>
                <TabsTrigger value="qualifications">Qualifications</TabsTrigger>
                <TabsTrigger value="skills">Skills</TabsTrigger>
              </TabsList>
              {/* tabs content */}
              <div className="text-lg mt-12 xl:mt-8">
                {/* personal */}
                <TabsContent value="personal">
                  <div className="text-center xl:text-left">
                    <h3 className="h3 mb-4">
                      Unmatched services excellence for a year
                    </h3>
                    <p className="subtitle max-w-xl mx-auto xl:mx-0">
                      My area of expertise is creating intuitive websites using
                      state-of-the-art technology that provide a dynamic and
                      captivating user experience.
                    </p>
                    {/* icons */}
                    <div className="grid xl:grid-cols-2 gap-4 mb-12">
                      {infoData.map((item, index) => {
                        return (
                          <div
                            className="flex items-center gap-x-4 mx-auto xl:mx-0"
                            key={index}
                          >
                            <div className="text-primary">{item.icon}</div>
                            <div>{item.text}</div>
                          </div>
                        );
                      })}
                    </div>
                    {/* languages */}
                    <div className="flex flex-col gap-y-2">
                      <div className="text-primary">Language Skills</div>
                      <div className="border-b border-border"></div>
                      <div>English, Urdu</div>
                    </div>
                  </div>
                </TabsContent>
                {/* qualifications */}
                <TabsContent value="qualifications">
                  <div>
                    <h3 className="h3 mb-8 text-center xl:text-left">
                      My Amazing Journey
                    </h3>
                    {/* experience and education wrapper */}
                    <div className="grid md:grid-cols-2 gap-y-8">
                      {/* experience */}
                      <div className="flex flex-col gap-y-6">
                        <div className="flex items-center gap-x-4 text-[22px] text-primary">
                          <Briefcase size={28} />
                          <h4 className="capitalize font-medium">
                            {getData(qualificationData, "experience").title}
                          </h4>
                        </div>
                        {/* list */}
                        <div className="flex flex-col gap-y-8">
                          {getData(qualificationData, "experience").data.map(
                            (
                              item: {
                                company: string;
                                role: string;
                                years: number;
                              },
                              index: number
                            ) => {
                              const { company, role, years } = item;
                              return (
                                <div className="flex gap-x-8 group" key={index}>
                                  <div className="h-[84px] w-[1px] bg-border relative ml-2">
                                    <div className="w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500"></div>
                                  </div>
                                  <div>
                                    <div className="font-semibold text-xl leading-none mb-2">
                                      {company}
                                    </div>
                                    <div className="text-lg leading-none text-muted-foreground mb-4">
                                      {role}
                                    </div>
                                    <div className="text-base font-medium">
                                      {years}
                                    </div>
                                  </div>
                                </div>
                              );
                            }
                          )}
                        </div>
                      </div>
                      {/* education */}
                      <div className="flex flex-col gap-y-8">
                        <div className="flex items-center gap-x-4 text-[22px] text-primary">
                          <GraduationCap size={28} />
                          <h4 className="capitalize font-medium">
                            {getData(qualificationData, "education").title}
                          </h4>
                        </div>
                        {/* list */}
                        <div className="flex flex-col gap-y-8">
                          {getData(qualificationData, "education").data.map(
                            (
                              item: {
                                alma: string;
                                qualificaion: string;
                                years: number;
                              },
                              index: number
                            ) => {
                              const { alma, qualificaion, years } = item;
                              return (
                                <div className="flex gap-x-8 group" key={index}>
                                  <div className="h-[84px] w-[1px] bg-border relative ml-2">
                                    <div className="w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500"></div>
                                  </div>
                                  <div>
                                    <div className="font-semibold text-xl leading-none mb-2">
                                      {alma}
                                    </div>
                                    <div className="text-lg leading-none text-muted-foreground mb-2">
                                      {qualificaion}
                                    </div>
                                    <div className="text-base font-medium">
                                      {years}
                                    </div>
                                  </div>
                                </div>
                              );
                            }
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>
                {/* skills */}
                <TabsContent value="skills">
                  <div className="text-center xl:text-left">
                    <h3 className="h3 mb-8">What I Use Everyday</h3>
                    {/* skills */}
                    <div className="mb-16">
                      <h4 className="text-xl font-semibold mb-2">Skills</h4>
                      <div className="border-b border-border mb-4"></div>
                      {/* skill list */}
                      <div>
                        {getData(skillData, "skills").data.map(
                          (item: { name: string }, index: number) => {
                            const { name } = item;
                            return (
                              <div
                                className="w-2/4 text-center xl:text-left mx-auto xl:mx-0 py-1"
                                key={index}
                              >
                                <div className="font-medium">{name}</div>
                              </div>
                            );
                          }
                        )}
                      </div>
                    </div>
                    {/* tools */}
                    <div>
                      <h4 className="text-xl font-semibold mb-2 xl:text-left">
                        Tools
                      </h4>
                      <div className="border-b border-border mb-4"></div>
                      {/* tools list */}
                      <div className="flex gap-x-8 justify-center xl:justify-start">
                        {getData(skillData, "tools").data.map(
                          (item: { imgPath: string }, index: number) => {
                            const { imgPath } = item;
                            return (
                              <div key={index}>
                                <Image
                                  src={imgPath}
                                  width={48}
                                  height={48}
                                  alt=""
                                  priority
                                />
                              </div>
                            );
                          }
                        )}
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
  );
};

export default About;
