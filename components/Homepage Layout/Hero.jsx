import VideoPlayer from "../General Layout/VideoPlayer";

function Hero() {
  return (
    <section className="flex flex-col pb-4 items-center">
      <div className="w-3/4 md:pt-28 mx-auto justify-center text-center flex flex-col gap-2 items-center">
        <h1 className="font-rakkas text-5xl md:text-9xl text-center md:m-4">
          مدارج البرمجة
        </h1>
        <h4 className="text-base md:text-2xl mt-3">
          بنعمل ثورة في تعليم RaectJS بالعربي
        </h4>
        <p className="md:w-10/12 text-base md:text-lg">
          أهلا بيك في مدارج البرمجة، هنا احنا بنحاول اننا نسد الفجوة بين المعرفة
          النظرية والتطبيق العملي. فريق مدارج البرمجة موجود بالكامل عشان يساعدك
          تفهم ReactJs، وتطور مهاراتك بها من خلال مشاريع حقيقية. سواء انت لسه
          بادئ رحلتك مع ريأكت، أو بتحاول تطبق علي مشاريع عملية، فاحنا متأكدين
          اننا هنقدر نساعدك
        </p>
      </div>
      <div>
        <button className="text-2xl border p-2 rounded-xl mt-2 bg-yellow-600 hover:bg-yellow-800 duration-300">
          سجل معنا مجانا
        </button>
      </div>
      <div className="mt-4 w-2/3" dir={"ltr"}>
        <VideoPlayer src={"/lol.mkv"} />
      </div>
    </section>
  );
}

export default Hero;
