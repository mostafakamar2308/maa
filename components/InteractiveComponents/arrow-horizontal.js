const ArrowHorizontal = ({ text }) => {
  return (
    <div className="absolute top-1/2 w-full">
      <div className="flex  w-full justify-center relative z-10 h-1">
        <span className="absolute -top-8">{text}</span>
        <span className="w-5/6 bg-white"></span>
        <span className="border-r-4 border-b-4 p-4 rotate-[130deg] -translate-y-[1.1rem] translate-x-10"></span>
      </div>
    </div>
  );
};
export default ArrowHorizontal;
