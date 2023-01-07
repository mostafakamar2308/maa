import BestArticle from "./Best Article";
import NewsForm from "./NewsLetterForm";

const Intro = () => {
  return (
    <section className="lg:text-3xl text-xl md:p-8 flex flex-wrap md:flex-nowrap gap-8 w-screen">
      <div className="lg:w-1/2 w-screen md:p-4 p-2">
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
              هي مدونة تسعي الي رفع كفاءة مطور الويب العربي، عن طريق شرح أهم
              التقنيات، المفاهيم والاستخدامات الواقعية، بالاضافة الي توفير أحدث
              أسئلة المقابلات الشخصية مع شرحها شرحا وافيا.
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
      <div className="m-2">
        <h2 className="indent-10 mb-2">أفضل المقالات</h2>
        <BestArticle />
      </div>
    </section>
  );
};

export default Intro;
