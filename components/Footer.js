import Link from "next/link";
const Footer = () => {
  return (
    <footer className="p-4 py-2 flex items-center justify-between border-t ">
      <div className="font-aref md:text-2xl text-xl">
        <Link href={"/"}>مدارج البرمجة</Link>
      </div>
      <div className="font-noto md:text-xl text-md">
        كل الحقوق محفوظة &copy;2023
      </div>
    </footer>
  );
};

export default Footer;
