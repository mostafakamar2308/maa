import Image from "next/image";
import email from "../assets/email.svg";
import facebook from "../assets/facebook.svg";
import telegram from "../assets/telegram.svg";
const Contact = () => {
  return (
    <div className="text-xl p-2" id="contact">
      <div>
        <h2 className="text-3xl p-4 text-center font-bold">تواصل معنا</h2>
        <p className="mx-4">
          مدارج البرمجة هي مدونة للمبرمج العربي، أكيد هحب أعرف رأيك في الشرح،
          ولو عندك أي اقتراح لموضوع نشرحه متترددش انك تتواصل معانا.
        </p>
      </div>
      <div className="p-2 flex flex-col items-center gap-4">
        <div className="bg-darkButtonUnimportantColor xl:w-3/4 w-full rounded-md text-white p-2">
          <h3 className="text-2xl">
            للاقتراحات والشكاوي، تقدر تتواصل معانا من خلال البريد:
          </h3>
          <div className="flex  flex-row-reverse items-center gap-2">
            <Image src={email} alt="email Image" width={40} height={40} />
            <a
              className="hover:text-white duration-300 text-base md:text-xl"
              href="mailto:mostafakamar.dev@gmail.com"
            >
              mostafakamar.dev@gmail.com
            </a>
          </div>
        </div>
        <div className="bg-darkButtonUnimportantColor xl:w-3/4 w-full rounded-md text-white p-2">
          <h3 className="text-2xl">
            لمتابعة أجدد الاخبار وللاستشارات البرمجية تقدر تتواصل معانا من خلال
            صفحة الFacebook:
          </h3>
          <div className="flex flex-row-reverse items-center gap-2">
            <Image src={facebook} alt="email Image" width={40} height={40} />
            <a
              target={"_blank"}
              rel="noreferrer"
              href="https://www.facebook.com/madaregprogramming"
            >
              مدارج البرمجة
            </a>
          </div>
        </div>
        <div className="bg-darkButtonUnimportantColor xl:w-3/4 w-full rounded-md text-white p-2">
          <h3 className="text-2xl">
            للنقاشات بخصوص أي أعمال تجارية من خلال حساب الTelegram:
          </h3>
          <div className="flex flex-row-reverse items-center gap-2">
            <Image src={telegram} alt="email Image" width={40} height={40} />
            <a
              target={"_blank"}
              className="text-base md:text-xl"
              rel={"noreferrer"}
              href="https://t.me/madareg_programming"
            >
              Madareg_Programming
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Contact;
