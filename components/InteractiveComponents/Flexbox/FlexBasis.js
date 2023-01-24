import { useState } from "react";

const FlexBasis = () => {
  const [basis, setBasis] = useState(100);
  const [direction, setDirection] = useState("flex-row");
  const changeBasis = (e) => {
    setBasis(e.target.value);
  };
  const changeDirection = (e) => {
    setDirection(e.target.value);
  };
  return (
    <div className="border-lightText rounded-md border p-2">
      <div
        className={`flex ${direction} border-lightText rounded-md [&>*]:bg-orange-600 gap-2 [&>*]:p-4 h-[400px] border p-2`}
      >
        <div className="!bg-slate-400" style={{ flexBasis: `${basis}px` }}>
          1
        </div>
        <div>2</div>
        <div>3</div>
      </div>
      <div className="p-4 flex justify-between">
        <div className="grow">
          <input
            type={"range"}
            min={50}
            max={200}
            step={10}
            className="w-2/3"
            defaultValue={100}
            onChange={changeBasis}
          />
        </div>
        <div className="flex gap-4">
          <div>
            <input
              type="radio"
              name="flexBasisDir"
              id="flexBasisRow"
              onClick={changeDirection}
              value={"flex-row"}
            />
            <label htmlFor="flexBasisRow">row</label>
          </div>

          <div>
            <input
              type="radio"
              name="flexBasisDir"
              value={"flex-col"}
              id="flexBasisColumn"
              onClick={changeDirection}
            />
            <label htmlFor="flexBasisColumn">column</label>
          </div>
        </div>
      </div>
    </div>
  );
};
export default FlexBasis;
