"use client";
import Link from "next/link";
import { Button } from "./ui/button";
import { Download, Send } from "lucide-react";
import {
  RiBriefcase4Fill,
  RiTeamFill,
  RiTodoFill,
  RiArrowDownSLine,
} from "react-icons/ri";
// Components
import DevImg from "./DevImg";
import Socials from "./Socials";
import Badge from "./Badge";

const Hero = () => {
  return (
    <section className="py-12 xl:py-24 h-[100vh] xl:pt-20 bg-hero bg-no-repeat bg-bottom dark:bg-none bg-cover">
      <div className="container mx-auto">
        <div className="flex justify-between gap-x-8">
          {/* text */}
          <div className="flex flex-col max-w-[600px] justify-center mx-auto xl:mx-0 text-center xl:text-left">
            <div className="text-primary text-sm uppercase font-semibold mb-4 tracking-[4px]">
              Web Developer
            </div>
            <h1 className="h1 mb-4">Hello, my name is Malik Musadiq Ahmed</h1>
            <p className="subtitle mx-w[490px] mx-auto xl:mx-0">
              A brief description of who I am, my career path, and my
              professional activities
            </p>
            {/* button */}
            <div className="flex flex-col gap-y-3 md:flex-row gap-x-3 mx-auto xl:mx-0 mb-7">
              <Link href={"/contact"}>
                <Button className="gap-x-2">
                  Contact me <Send size={18} />
                </Button>
              </Link>
              <Button
                variant="secondary"
                className="gap-x-2"
                onClick={() => window.open("/Cv.pdf", "_blank")}
              >
                Download CV <Download size={18} />
              </Button>
            </div>
            <Socials
              containerStyles="flex gap-x-6 mx-auto xl:mx-0"
              iconStyles="text-foreground text-[22px] hover:text-primary transition-all"
            />
          </div>
          {/* image */}
          <div className="hidden xl:flex relative ">
            {/* Badge 1*/}
            <Badge
              containerStyles="absolute top-[24%] -left-[5rem]"
              icon={<RiBriefcase4Fill />}
              endCountNum={1}
              badgeText={"Year Of Experience"}
            />
            <Badge
              containerStyles="absolute top-[75%] -left-[5rem]"
              icon={<RiTodoFill />}
              endCountNum={3}
              endCountText="+"
              badgeText={"Finished Projects"}
            />
            <Badge
              containerStyles="absolute top-[67%] left-[19rem]"
              icon={<RiTeamFill />}
              endCountNum={3}
              endCountText="+"
              badgeText={"Happy Clients"}
            />
            <div className="bg-hero_Shape2_light dark:bg-hero_shape2_dark w-[500px] h-[500px] bg-no-repeat absolute -top-12 -right-2"></div>
            <DevImg
              containerStyles="bg-hero_Shape w-[510px] h-[462px] bg-no-repeat relative bg-bottom -top-10 "
              imgsrc="/hero/developer.png"
            />
          </div>
        </div>
        {/* icons */}
        <div className="hidden xl:flex absolute left-2/4 bottom-44 xl:-bottom-8 animate-bounce">
          <RiArrowDownSLine className="text-3xl text-primary" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
