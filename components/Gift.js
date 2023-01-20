import Image from "next/image";
import NewsForm from "./NewsLetterForm";
import demo from "../assets/demo.jpg";

const GiftSection = () => {
  return (
    <section className="p-8 md:flex flex-wrap justify-between items-center">
      <div className="md:w-1/2 text-lg">
        <h2 className="text-3xl font-bold">عايز هدية؟</h2>
        <div className="flex flex-col pt-8 h-full gap-4">
          <p>
            مجهزلك ملخص مبسط بأمثلة عملية، عشان يفهمك Flexbox بشكل عملي، مع بعض
            التركات الي هتميزك جدا عن غيرك ❤️❤️
          </p>
          <p>سجل الان، وهيوصلك علي بريدك الالكتروني ❤️</p>
          <NewsForm />
        </div>
      </div>
      <div className="md:w-2/5 md:translate-x-8 p-4 mx-auto">
        <Image
          src={demo}
          alt="PDF Screen"
          className={
            "object-cover lg:blur-sm hover:blur-none mx-auto transition-all rounded-lg"
          }
        ></Image>
      </div>
    </section>
  );
};
export default GiftSection;
