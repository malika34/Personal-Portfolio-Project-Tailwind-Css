import Image from "next/image";

interface DevImgProps {
  containerStyles: string;
  imgsrc: string;
}

const DevImg: React.FC<DevImgProps> = ({ containerStyles, imgsrc }) => {
  return (
    <div className={`${containerStyles}`}>
      <Image src={imgsrc} fill priority alt="" />
    </div>
  );
};

export default DevImg;
