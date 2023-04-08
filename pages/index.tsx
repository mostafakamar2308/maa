import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Hero from "../components/Homepage Layout/Hero";
import CourseContent from "../components/Homepage Layout/CourseContent";

const Home: NextPage = () => {
  return (
    <div className="grow">
      <Head>
        <title>مدارج البرمجة | الرئيسية</title>
      </Head>

      <main className="h-full">
        <Hero />
        <div className="wave-container"></div>

        <CourseContent />
        <div className="h-[100vh]"></div>
      </main>
    </div>
  );
};

export default Home;
