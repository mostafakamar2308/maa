import RecentArticle from "./Recent Article";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

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
    <section className="p-4">
      <h2 className="text-2xl font-bold">أحدث المقالات</h2>
      <Carousel
        responsive={responsive}
        showDots={true}
        rtl={true}
        itemClass="rounded-lg overflow-hidden md:mx-5 md:min-w-[450px] md:h-[250px] p-2 md:p-0 w-screen h-full"
      >
        <RecentArticle />
        <RecentArticle />
      </Carousel>
    </section>
  );
};

export default RecentSection;
