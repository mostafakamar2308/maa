import { useRef } from "react";
import TimeLineComponent from "../General Layout/TimeLineComponent";
import { useScroll, motion, useTransform } from "framer-motion";

const courseContent = [
  {
    title: "Basics of React",
    moduleDescription: `في المستوي الاول، هنفهم أساسيات ReactJS. هنفهم هي ايه؟ واتعملت ليه وايه المميزات الي تخليني أختارها؟
    بعد كدا هنبدأ نشتغل بشكل عملي ونجهز الحاجات الي بنحتاجها عشان React تشتغل. وبعدها مباشرة هنعمل أول موقع باستخدام ReactJS
    ونتكلم علي مكونات المشروع، ونفهم يعني ايه Components ويعني ايه JSX. وفي الاخر خالص هنتكلم عن ازاي ندخل CSS علي المشروع.
    بنهاية المستوي، هتكون أولا فاهم React وكمان تعمل مواقع بسيطة وشكلها جميل جدا`,
    moduleNumber: 1,
    moduleTitle: "المستوي الاول",
    bg: "bg-yellow-800",
  },
  {
    title: "Dynamic React",
    moduleDescription: `في المستوي الاول، هنفهم أساسيات ReactJS. هنفهم هي ايه؟ واتعملت ليه وايه المميزات الي تخليني أختارها؟
    بعد كدا هنبدأ نشتغل بشكل عملي ونجهز الحاجات الي بنحتاجها عشان React تشتغل. وبعدها مباشرة هنعمل أول موقع باستخدام ReactJS
    ونتكلم علي مكونات المشروع، ونفهم يعني ايه Components ويعني ايه JSX. وفي الاخر خالص هنتكلم عن ازاي ندخل CSS علي المشروع.
    بنهاية المستوي، هتكون أولا فاهم React وكمان تعمل مواقع بسيطة وشكلها جميل جدا`,
    moduleNumber: 2,
    moduleTitle: "المستوي الثاني",
    bg: "bg-red-800",
  },
  {
    title: "React Hooks",
    moduleDescription: `في المستوي الاول، هنفهم أساسيات ReactJS. هنفهم هي ايه؟ واتعملت ليه وايه المميزات الي تخليني أختارها؟
    بعد كدا هنبدأ نشتغل بشكل عملي ونجهز الحاجات الي بنحتاجها عشان React تشتغل. وبعدها مباشرة هنعمل أول موقع باستخدام ReactJS
    ونتكلم علي مكونات المشروع، ونفهم يعني ايه Components ويعني ايه JSX. وفي الاخر خالص هنتكلم عن ازاي ندخل CSS علي المشروع.
    بنهاية المستوي، هتكون أولا فاهم React وكمان تعمل مواقع بسيطة وشكلها جميل جدا`,
    moduleNumber: 3,
    moduleTitle: "المستوي الثالث",
    bg: "bg-blue-800",
  },
  {
    title: "Routing and State Management",
    moduleDescription: `في المستوي الاول، هنفهم أساسيات ReactJS. هنفهم هي ايه؟ واتعملت ليه وايه المميزات الي تخليني أختارها؟
    بعد كدا هنبدأ نشتغل بشكل عملي ونجهز الحاجات الي بنحتاجها عشان React تشتغل. وبعدها مباشرة هنعمل أول موقع باستخدام ReactJS
    ونتكلم علي مكونات المشروع، ونفهم يعني ايه Components ويعني ايه JSX. وفي الاخر خالص هنتكلم عن ازاي ندخل CSS علي المشروع.
    بنهاية المستوي، هتكون أولا فاهم React وكمان تعمل مواقع بسيطة وشكلها جميل جدا`,
    moduleNumber: 4,
    moduleTitle: "المستوي الرابع",
    bg: "bg-green-800",
  },
  {
    title: "Advanced React",
    moduleDescription: `في المستوي الاول، هنفهم أساسيات ReactJS. هنفهم هي ايه؟ واتعملت ليه وايه المميزات الي تخليني أختارها؟
    بعد كدا هنبدأ نشتغل بشكل عملي ونجهز الحاجات الي بنحتاجها عشان React تشتغل. وبعدها مباشرة هنعمل أول موقع باستخدام ReactJS
    ونتكلم علي مكونات المشروع، ونفهم يعني ايه Components ويعني ايه JSX. وفي الاخر خالص هنتكلم عن ازاي ندخل CSS علي المشروع.
    بنهاية المستوي، هتكون أولا فاهم React وكمان تعمل مواقع بسيطة وشكلها جميل جدا`,
    moduleNumber: 5,
    moduleTitle: "المستوي الخامس",
    bg: "bg-gray-800",
  },
];

export default function CourseContent() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: [".3 end", "1.2 end"],
  });
  const top = useTransform(
    scrollYProgress,
    (pos) => pos > 0.2 && Math.round(pos * 100) - 20 + "%"
  );
  const firstOpacity = useTransform(scrollYProgress, [0, 0.2], [0, 100]);
  const secondOpacity = useTransform(scrollYProgress, [0.2, 0.4], [0, 100]);
  const thirdOpacity = useTransform(scrollYProgress, [0.4, 0.6], [0, 100]);
  const forthOpacity = useTransform(scrollYProgress, [0.6, 0.8], [0, 100]);
  const fifthOpacity = useTransform(scrollYProgress, [0.8, 1], [0, 100]);
  const height = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  return (
    <section className="bg-[#394150] p-8">
      <h1 className="text-center text-3xl">هتتعلم ايه في الكورس؟</h1>
      <div className="flex relative">
        <ul
          ref={containerRef}
          className="flex relative flex-col gap-4 mx-auto mt-8  border-r border-gray-200 "
        >
          <motion.span
            className="absolute w-[2px] z-10 h-2 right-0 bg-[#a961fb]"
            style={{ height: height }}
          ></motion.span>
          {courseContent.map((module) => (
            <TimeLineComponent {...module} />
          ))}
        </ul>
        <motion.div className="absolute " style={{ top, left: 30 }}>
          <div className="relative w-96 h-96">
            <motion.div
              className="absolute w-8 h-8 left-[54%] top-8  rounded-[50%] bg-[#61DBFB]"
              style={{ opacity: firstOpacity }}
            ></motion.div>
            <motion.div
              style={{ opacity: secondOpacity }}
              className="w-[20rem] absolute rotate-[60deg] h-[6.25rem] rounded-[50%] border-[.625rem] border-[#61DBFB]"
            ></motion.div>
            <motion.div
              style={{ opacity: thirdOpacity }}
              className="w-[20rem] absolute h-[6.25rem] -rotate-[60deg] rounded-[50%] border-[.625rem] border-[#61DBFB]"
            ></motion.div>
            <motion.div
              style={{ opacity: forthOpacity }}
              className="w-[20rem] absolute h-[6.25rem] rounded-[50%] border-[.625rem] border-[#61DBFB]"
            ></motion.div>
            <motion.div
              className="text-2xl absolute top-[55%] left-[40%]"
              style={{ opacity: fifthOpacity }}
            >
              إتقان ReactJS
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
