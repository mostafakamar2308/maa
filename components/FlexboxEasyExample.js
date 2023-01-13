import { useState } from "react";

const FlexBoxEasy = () => {
  const [width, setWidth] = useState(700);
  const ChangeWidth = (e) => {
    setWidth((prev) => e.target.value);
  };

  return (
    <div className="bg-darkButtonUnimportantColor p-4 mb-4">
      <div className="w-10/12 mx-auto flex gap-4 items-center">
        <input
          className="w-full cursor-grab"
          type="range"
          defaultValue={700}
          onChange={ChangeWidth}
          max={700}
          min={250}
        />
        <p>{width}</p>
      </div>
      <div
        className={`flex mx-auto rounded-xl gap-4 flex-wrap border p-2 border-white items-center justify-start`}
        style={{ width: `${(width / 700) * 100}%` }}
      >
        <input
          className="flex-grow  p-1 basis-[20%] min-w-0 rounded-md "
          placeholder="Mostafa"
        ></input>
        <input
          className="flex-grow-[2] p-1 basis[30%] min-w-0 rounded-md"
          placeholder="mostafa@gmail.com"
        ></input>
        <button className="flex-grow basis-[20%] min-w-0 border-white text-white border rounded-2xl p-2">
          Submit
        </button>
      </div>
    </div>
  );
};
export default FlexBoxEasy;
