import { useState } from "react";
import ArrowHorizontal from "../arrow-horizontal";
import ArrowVertical from "../arrow-vertical";

const FlexBoxEasy = ({ widthChanging, AxisExplain }) => {
  const [width, setWidth] = useState(700);
  const ChangeWidth = (e) => {
    setWidth((prev) => e.target.value);
  };

  const [checked, setChecked] = useState({ mainAxis: false, crossAxis: false });

  const changeChecked = (e) => {
    if (e.target.checked === true) {
      setChecked((prev) => {
        return { ...prev, [e.target.name]: true };
      });
    } else {
      setChecked((prev) => {
        return { ...prev, [e.target.name]: false };
      });
    }
  };

  return (
    <div className={`bg-darkButtonUnimportantColor p-4 mb-4 text-white `}>
      {widthChanging === true && (
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
      )}
      {AxisExplain === true && (
        <div className="flex gap-10 my-2">
          <div className="flex items-center">
            <input
              type="checkbox"
              onChange={changeChecked}
              id="mainAxis-check"
              name="mainAxis"
            />
            <label className="mx-2" htmlFor="mainAxis-check">
              اعرض ال main Axis
            </label>
          </div>
          <div className="flex items-center">
            <input
              type="checkbox"
              onChange={changeChecked}
              id="crossAxis-check"
              name="crossAxis"
            />
            <label className="mx-2" htmlFor="crossAxis-check">
              اعرض ال cross Axis
            </label>
          </div>
        </div>
      )}
      <div
        className={`flex mx-auto rounded-xl relative gap-4 flex-wrap border p-2 border-white items-center justify-start ${
          AxisExplain === true && "h-[300px]"
        }`}
        style={{ width: `${(width / 700) * 100}%` }}
      >
        {checked.mainAxis === true && <ArrowHorizontal text={"Main Axis"} />}
        {checked.crossAxis === true && <ArrowVertical text={"Cross Axis"} />}
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
