import { GanttChartSquare, Blocks, Gem } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const servicesData = [
  {
    icon: <GanttChartSquare size={72} strokeWidth={0.8} />,
    title: "Web Design",
    description:
      "Designing creative websites that are clear, eye-catching, and easy to navigate. I focus on layouts and visuals that ensure a seamless, engaging look on every device, providing a strong first impression.",
  },
  {
    icon: <Blocks size={72} strokeWidth={0.8} />,
    title: "Web Development",
    description:
      "Developing responsive, functional websites using the latest technology. I prioritize smooth performance and accessibility, customizing each site to meet unique client needs and enhance user satisfaction.",
  },
  // {
  //   icon: <Gem size={72} strokeWidth={0.8} />,
  //   title: "App Development",
  //   description:
  //     "Building reliable, high-performing web and mobile apps with a strong focus on user experience. I turn ideas into intuitive, fast, and user-friendly applications that offer seamless cross-platform functionality.",
  // },
];

const Services = () => {
  return (
    <section className="mb-12 xl:mb-36">
      <div className="container mx-auto">
        <h2 className="section-title mb-12 xl:mb-24 text-center mx-auto">
          My services
        </h2>
        {/* grid items */}
        <div className="grid xl:grid-cols-2 justify-center gap-y-12 xl:gap-y-24 xl:gap-x-8">
          {servicesData.map((item, index) => {
            return (
              <Card
                className="w-full max-w[424px] h-[300px] flex flex-col pt-28 pb-10 justify-center items-center relative"
                key={index}
              >
                <CardHeader className="text-primary absolute -top-[60px]">
                  <div className="h-[80px] w-[140px] bg-white dark:bg-background flex justify-center items-center">
                    {item.icon}
                  </div>
                </CardHeader>
                <CardContent className="text-center">
                  <CardTitle className="mb-4">{item.title}</CardTitle>
                  <CardDescription className="text-lg">
                    {item.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
