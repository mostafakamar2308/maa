import RecentArticle from "./Recent Article";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Link from "next/link";

const RecentSection = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 4000, min: 768 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 768, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <section className="p-8">
      <h2 className="text-2xl font-bold">أحدث المقالات</h2>
      <div className="py-8">
        <Carousel
          responsive={responsive}
          showDots={true}
          rtl={true}
          itemClass="rounded-lg overflow-hidden md:mx-5 md:min-w-[450px] md:h-[250px] p-2 md:p-0 w-screen h-full"
        >
          <RecentArticle />
          <RecentArticle />
        </Carousel>
      </div>
      <div className="flex justify-center gap-x-8">
        <Link
          href={"/articles"}
          className="md:py-4 md:px-2 bg-darkSelectionBackground text-black border-darkBackground border p-2 text-white rounded-lg md:text-xl text-lg text-center"
        >
          تصفح المقالات
        </Link>
        <a
          href="https://www.youtube.com/@Madareg_El_Programming"
          target={"_blank"}
          rel="noreferrer"
          className="md:py-4 md:px-2 bg-darkSelectionBackground text-black border-darkBackground border p-2 text-white rounded-lg md:text-xl text-lg text-center"
        >
          قناة اليوتيوب
        </a>
      </div>
    </section>
  );
};

export default RecentSection;
