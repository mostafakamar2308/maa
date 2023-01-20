import BestArticle from "./Best Article";
import NewsForm from "./NewsLetterForm";

const Intro = ({ bestPost }) => {
  return (
    <section className="lg:text-3xl text-xl md:p-8 flex flex-wrap mx-auto justify-center lg:flex-nowrap gap-8 w-fit">
      <div className=" w-screen md:p-4 p-2">
        <div>
          <div className="lg:leading-9">
            <h2>
              أهلا بك في{" "}
              <span className="text-red-500 font-aref lg:text-3xl text-2xl">
                مدارج البرمجة
              </span>
            </h2>
            <p className="">
              <span className="text-red-500 font-aref lg:text-3xl text-2xl mx-2">
                مدارج البرمجة
              </span>{" "}
              هي مدونة تسعي الي رفع كفاءة المطور العربي، عن طريق شرح المفاهيم
              والتقنيات وكيفية استخدامها علي أرض الواقع بطريقة تفاعلية باللغة
              العربية{" "}
            </p>
          </div>
          <div className="text-base mt-4">
            <p>
              كل أسبوع، يتم نشر مقال عن التقنية، اشترك في خدمة البريد ليصلك أهم
              ما يتم نشره
            </p>
            <NewsForm />
          </div>
        </div>
      </div>
      <div className="m-2 w-fit mx-auto lg:block flex flex-col items-center">
        <h2 className="font-bold text-2xl mb-2 self-start">أفضل المقالات</h2>
        <BestArticle post={bestPost} />
      </div>
    </section>
  );
};

export default Intro;
