import Socials from "./Socials";

const Footer = () => {
  return (
    <footer>
      <div className="bg-secondary py-12">
        <div className="container mx-auto">
          <div className="flex flex-col items-center justify-between">
            {/* socials */}
            <Socials
              containerStyles="flex gap-x-6 mx-auto xl:mx-0 mb-4"
              iconStyles="text-primary dark:text-white/70 text-[20px] hover:text-white dark:hover:text-primary transition-all"
            />
          </div>
          <div className="text-muted-foreground text-center">
            Copyright &copy; Malik Musadiq Ahmed. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
