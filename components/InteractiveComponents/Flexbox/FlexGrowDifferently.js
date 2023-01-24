import { useState } from "react";

const FlexGrowDifferently = () => {
  const [flexGrow1, setFlexGrow1] = useState(0);
  const [flexGrow2, setFlexGrow2] = useState(0);
  const changeFlex1 = (e) => {
    setFlexGrow1(e.target.value);
  };
  const changeFlex2 = (e) => {
    setFlexGrow2(e.target.value);
  };
  return (
    <div>
      <div className="flex border p-2 border-lightText rounded-md">
        <div
          style={{ flexGrow: flexGrow1 }}
          className="border border-green-400 p-1 duration-300"
        >
          <p>قيمة flex-grow عندي = {flexGrow1}</p>
          <p>
            {+flexGrow1 > 0
              ? `انا واخد ${flexGrow1}/${+flexGrow1 + +flexGrow2} من مساحة الاب`
              : "انا واخد مساحة علي قدي"}
          </p>
          <input
            type="range"
            min={0}
            max={10}
            className="w-full"
            defaultValue={0}
            onChange={changeFlex1}
          />
        </div>
        <div
          style={{ flexGrow: flexGrow2 }}
          className="border border-green-400 p-1 duration-300"
        >
          <p>قيمة flex-grow عندي = {flexGrow2}</p>
          <p>
            {+flexGrow2 > 0
              ? `انا واخد ${flexGrow2}/${+flexGrow1 + +flexGrow2} من مساحة الاب`
              : "انا واخد مساحة علي قدي"}
          </p>
          <input
            type="range"
            min={0}
            className="w-full"
            max={10}
            defaultValue={0}
            onChange={changeFlex2}
          />
        </div>
      </div>
      <div></div>
    </div>
  );
};
export default FlexGrowDifferently;
