import NewsForm from "./NewsLetterForm";

const Intro = () => {
  return (
    <section className="text-2xl p-8 flex flex-wrap gap-8">
      <div className="lg:w-1/2">
        <div>
          <div className="leading-9">
            <h2>
              أهلا بك في{" "}
              <span className="text-red-500 font-aref text-3xl">
                مدارج البرمجة
              </span>
            </h2>
            <p className="">
              <span className="text-red-500 font-aref text-2xl mx-2">
                مدارج البرمجة
              </span>{" "}
              هي مدونة تسعي الي رفع كفاءة مطور الويب العربي، عن طريق شرح أهم
              التقنيات، المفاهيم والاستخدامات الواقعية، بالاضافة الي توفير أحدث
              أسئلة المقابلات الشخصية مع شرحها شرحا وافيا.
            </p>
          </div>
          <div className="text-xl mt-4">
            <p>
              كل أسبوع، يتم نشر مقال، اشترك في خدمة البريد ليصلك أهم ما يتم نشره
            </p>
            <NewsForm />
          </div>
        </div>
      </div>
      <div>أفضل المقالات</div>
    </section>
  );
};

export default Intro;
