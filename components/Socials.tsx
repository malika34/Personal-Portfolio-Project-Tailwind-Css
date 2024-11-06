"use client";
import {
  RiYoutubeFill,
  RiLinkedinFill,
  RiGithubFill,
  RiFacebookFill,
  RiInstagramFill,
} from "react-icons/ri";
import Link from "next/link";

interface SocialIcon {
  path: string;
  name: JSX.Element;
  target?: string; // Optional target property
}

const icons: SocialIcon[] = [
  {
    path: "https://www.linkedin.com/in/malik-musadiq-ahmed-93b3bb2b4/",
    name: <RiLinkedinFill />,
    target: "_blank", // Opens the link in a new tab
  },
  {
    path: "https://github.com/malika34",
    name: <RiGithubFill />,
    target: "_blank",
  },
  {
    path: "https://www.facebook.com/musadiq.ahmed.7583/",
    name: <RiFacebookFill />,
    target: "_blank",
  },
  {
    path: "https://www.instagram.com/musadiqa34/",
    name: <RiInstagramFill />,
    target: "_blank",
  },
];

interface SocialsProps {
  containerStyles?: string;
  iconStyles?: string;
}

const Socials: React.FC<SocialsProps> = ({ containerStyles, iconStyles }) => {
  return (
    <div className={`${containerStyles}`}>
      {icons.map((icon, index) => {
        return (
          <Link href={icon.path} key={index} target={icon.target}>
            <div className={iconStyles}>{icon.name}</div>
          </Link>
        );
      })}
    </div>
  );
};

export default Socials;
