"use client";
import Link from "next/link";
import { Button } from "./ui/button";

// react swiper components
import { Swiper, SwiperSlide } from "swiper/react";

// import swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

// components
import ProjectCard from "./ProjectCard";

const projectData = [
  {
    image: "/work/resume.png",
    category: "HTML5,  CSS3  &  Typescript",
    name: "Interactive Resume Builder",
    description:
      "Build a fully responsive, interactive resume builder that allows users to create and customize professional resumes.",
    link: "https://interactive-resume-builder-malik.vercel.app/",
    github: "https://github.com/malika34/Interactive-resume-builder.git",
  },
  {
    image: "/work/blog.png",
    category: "Next js",
    name: "Blog Website",
    description:
      "Built a static blog site for reading articles, optimized for performance with Next.js and styled with Tailwind CSS for a modern look.",
    link: "https://malik-blog.vercel.app/",
    github:
      "https://github.com/malika34/Next.js-remark-rehype-blog-website.git",
  },
  {
    image: "/work/1.png",
    category: "next js",
    name: "RR Websiet",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi assumenda earum a sequi maxime perspiciatis!",
    link: "/",
    github: "/",
  },
  {
    image: "/work/1.png",
    category: "next js",
    name: "RR Websiet",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi assumenda earum a sequi maxime perspiciatis!",
    link: "/",
    github: "/",
  },
  {
    image: "/work/1.png",
    category: "next js",
    name: "RR Websiet",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi assumenda earum a sequi maxime perspiciatis!",
    link: "/",
    github: "/",
  },
  {
    image: "/work/3.png",
    category: "next js",
    name: "RR Websiet",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi assumenda earum a sequi maxime perspiciatis!",
    link: "/",
    github: "/",
  },
  {
    image: "/work/2.png",
    category: "full stack",
    name: "RR Websiet",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi assumenda earum a sequi maxime perspiciatis!",
    link: "/",
    github: "/",
  },
  {
    image: "/work/2.png",
    category: "full stack",
    name: "RR Websiet",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi assumenda earum a sequi maxime perspiciatis!",
    link: "/",
    github: "/",
  },
  {
    image: "/work/2.png",
    category: "full stack",
    name: "RR Websiet",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi assumenda earum a sequi maxime perspiciatis!",
    link: "/",
    github: "/",
  },
  {
    image: "/work/2.png",
    category: "full stack",
    name: "RR Websiet",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi assumenda earum a sequi maxime perspiciatis!",
    link: "/",
    github: "/",
  },
];
const Work = () => {
  return (
    <section className="relative mb-12 xl:mb-48">
      <div className="container mx-auto">
        {/* text */}
        <div className="max-w-[350px] mx-auto xl:mx-0 text-center xl:text-left mb-12 xl:h-[400px] flex flex-col justify-center items-center xl:items-start">
          <h2 className="section-title mb-4">Latest Projects</h2>
          <p className="subtitle mb-8">
            A showcase of my latest work in web development.
          </p>
          <Link href={"/projects"}>
            <Button>All projects</Button>
          </Link>
        </div>
        {/* slider */}
        <div className="xl:max-w-[900px] xl:absolute right-0 top-0">
          <Swiper
            className="h-[480px]"
            slidesPerView={1}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
            }}
            spaceBetween={30}
            modules={[Pagination]}
            pagination={{ clickable: true }}
          >
            {/* show only the first four projects for the slides */}
            {projectData.slice(0, 2).map((project: any, index: number) => {
              return (
                <SwiperSlide key={index}>
                  <ProjectCard project={project} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Work;
