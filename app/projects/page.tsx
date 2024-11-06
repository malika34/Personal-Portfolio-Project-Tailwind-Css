"use client";
import React, { useState } from "react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ProjectCard from "@/components/ProjectCard";
import { TabsContent } from "@radix-ui/react-tabs";

const projectData = [
  {
    image: "/work/netflix.png",
    category: "HTML5, CSS3",
    name: "Netflix Clone",
    description:
      "Build a fully responsive, static Netflix clone with a modern UI and intuitive layout using only HTML and CSS.",
    link: "https://netflix-pk-malik.vercel.app/",
    github: "https://github.com/malika34/Netflix-Clone-Html-Css.git",
  },
  {
    image: "/work/pw-skills.png",
    category: "HTML5, CSS3",
    name: "Pw Skills",
    description:
      "Build a fully responsive, static website for showcasing skills and featuring a clean design using only HTML and Tailwind Css.",
    link: "https://pwskills-website-xyz.vercel.app/",
    github: "https://github.com/malika34/pwskills-website.git",
  },
  {
    image: "/work/resume.png",
    category: "HTML5, CSS3 & Typescript",
    name: "Interactive Resume Builder",
    description:
      "Build a fully responsive, interactive resume builder that allows users to create and customize professional resumes.",
    link: "https://interactive-resume-builder-malik.vercel.app/",
    github: "https://github.com/malika34/Interactive-resume-builder.git",
  },
  {
    image: "/work/blog.png",
    category: "next js",
    name: "Blog Website",
    description:
      "Built a static blog site for reading articles, optimized for performance with Next.js and styled with Tailwind CSS for a modern look.",
    link: "https://malik-blog.vercel.app/",
    github:
      "https://github.com/malika34/Next.js-remark-rehype-blog-website.git",
  },
];

// remove category duplicates
const uniqueCategories = [
  "all projects",
  ...new Set(projectData.map((item) => item.category)),
];

const Projects = () => {
  const [categories, setCategories] = useState(uniqueCategories);
  const [category, setCategory] = useState("all projects");
  const filteredProjects = projectData.filter((project) => {
    // if category is all projects returs all projects, else filter by category
    return category === "all projects"
      ? project
      : project.category === category;
  });
  console.log(filteredProjects);
  return (
    <section className="min-h-screen pt-12">
      <div className="container mx-auto">
        <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">
          My projects
        </h2>
        {/* tabs */}
        <Tabs defaultValue={category} className="mb-24 xl:mb-48">
          <TabsList className="w-full grid h-full md:grid-cols-4 lg:max-w[640px] mb-12 mx-auto md:border dark:border-none">
            {categories.map((category, index) => {
              return (
                <TabsTrigger
                  onClick={() => setCategory(category)}
                  value={category}
                  key={index}
                  className="capitalize w-[162px] md:w-auto"
                >
                  {category}
                </TabsTrigger>
              );
            })}
          </TabsList>
          {/* tabs content */}
          <div className="text-lg xl:mt-8 grid grid-cols-1 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project, index) => {
              return (
                <TabsContent value={category} key={index}>
                  <ProjectCard project={project} />
                </TabsContent>
              );
            })}
          </div>
        </Tabs>
      </div>
    </section>
  );
};

export default Projects;
