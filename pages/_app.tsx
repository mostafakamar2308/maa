import "../styles/globals.css";
import type { AppProps } from "next/app";
import Header from "../components/General Layout/Header";
import Footer from "../components/General Layout/Footer";
import Head from "next/head";
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div
      dir="rtl"
      className="bg-gray-900 text-white text-xl font-naskh overflow-hidden"
    >
      <Head>
        <title>مدارج البرمجة</title>
      </Head>
      <div className="flex flex-col min-h-screen">
        <Header />
        <Component {...pageProps} />
        {/* <Footer /> */}
      </div>
    </div>
  );
}

export default MyApp;
