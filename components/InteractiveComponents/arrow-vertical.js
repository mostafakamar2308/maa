const ArrowVertical = ({ text }) => {
  return (
    <div className="absolute w-full max-w-full top-1/2">
      <div className="flex w-full justify-center relative z-10 h-1 translate-y-5 -rotate-90 ">
        <span className="absolute left-1/3">{text}</span>
        <span className="w-1/2 bg-white"></span>
        <span className="border-r-4 border-b-4 p-4 rotate-[130deg] -translate-y-[1.1rem] translate-x-10"></span>
      </div>
    </div>
  );
};
export default ArrowVertical;
