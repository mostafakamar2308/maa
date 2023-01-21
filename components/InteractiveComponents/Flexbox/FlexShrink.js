import { useState } from "react";

const FlexShrink = () => {
  const [flexShrink1, setFlexShrink1] = useState(0);
  const [flexShrink2, setFlexShrink2] = useState(0);
  const [width, setWidth] = useState(100);
  const changeFlex1 = (e) => {
    setFlexShrink1(e.target.value);
  };
  const changeFlex2 = (e) => {
    setFlexShrink2(e.target.value);
  };
  const changeWidth = (e) => {
    setWidth(e.target.value);
  };
  return (
    <div className="border p-2">
      <div className="flex border p-2" style={{ width: `${width}%` }}>
        <div
          style={{ flexShrink: flexShrink1 }}
          className="border border-green-400 p-1 grow"
        >
          <p>قيمة flex-shrink عندي = {flexShrink1}</p>

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
          style={{ flexShrink: flexShrink2 }}
          className="border border-green-400 p-1 grow"
        >
          <p>قيمة flex-shrink عندي = {flexShrink2}</p>

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
      <div className="flex gap-2 ">
        <p>غير الWidth</p>
        <input
          onChange={changeWidth}
          type="range"
          className="w-[60%]"
          min={40}
          max={100}
          defaultValue={100}
        />
      </div>
    </div>
  );
};
export default FlexShrink;
