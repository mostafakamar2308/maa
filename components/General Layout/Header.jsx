import Image from "next/image";
import Link from "next/link";
import stairs from "../../Assets/stairs up.png";
import login from "../../Assets/login.png";

function Header() {
  return (
    <header dir="rtl" className="p-6 flex justify-between items-center">
      <div className="flex items-center gap-2">
        <Image src={stairs} alt="لوجو مدارج البرمجة" width={40} />
        <span className="text-2xl font-rakkas">مدارج البرمجة</span>
      </div>
      <nav className="flex gap-8">
        <Link href={"/react-course"}>كورس الريأكت</Link>
        <Link href={"/react-projects"}>التطبيق العملى</Link>
        <Link href={"/articles"}>مقالات</Link>
      </nav>
      <Link href={"/login"}>
        <Image src={login} alt="تسجيل الدخول" width={50} />
      </Link>
    </header>
  );
}

export default Header;
