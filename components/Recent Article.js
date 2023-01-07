import Image from "next/image";
import Link from "next/link";
import arrow from "../assets/arrow.svg";
import demo from "../assets/demo.jpg";
const RecentArticle = () => {
  return (
    <div className="relative  flex items-center justify-around md:min-w-[450px] md:min-h-[250px] h-[150px] rounded-lg overflow-hidden">
      <Image
        src={demo}
        alt="demo pic"
        className="absolute object-cover md:w-[450px] md:h-[250px] z-0 w-screen h-full top-0"
      />
      <div className="z-10 flex flex-col justify-between w-[80%] md:h-[50%] rounded-2xl text-black h-[80%]  p-2 bg-[rgba(255,255,255,.8)]">
        <h3 className="text-2xl font-bold text-right m-4">عنوان مقال جامد</h3>
        <p className="text-left">15اكتوبر 2022</p>
      </div>
      <div
        className={`rounded-full border p-2 bg-white w-[50px] h-[50px] md:h-[80px] md:w-[80px]  z-100 rotate-[-145deg] `}
      >
        <Link href={"/"}>
          <Image src={arrow} alt="Link to Article" />
        </Link>
      </div>
    </div>
  );
};

export default RecentArticle;
