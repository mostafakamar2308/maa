const StyledInput = () => {
  return (
    <div dir="ltr" className="flex gap-2 text-xl flex-col items-center">
      <div className="flex w-[500px] border rounded-lg overflow-hidden">
        <label
          htmlFor="http"
          className="bg-darkButtonUnimportantColor p-1 px-2 rounded-l-lg"
        >
          https://
        </label>
        <input id="http" placeholder="URL" className="grow indent-2" />
      </div>
      <div className="flex w-[500px] border rounded-lg overflow-hidden">
        <input id="email-flex" type={"email"} className="grow" />
        <label htmlFor="email-flex" className="rounded-r-lg p-1 px-2">
          @gmail.com
        </label>
      </div>
    </div>
  );
};

export default StyledInput;
